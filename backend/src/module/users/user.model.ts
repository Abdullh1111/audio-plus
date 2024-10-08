import { model, Schema } from "mongoose";
import { TUser, TUserMethod, TUserModel } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";
import jwt from "jsonwebtoken";

const userSchema = new Schema<TUser, TUserModel, TUserMethod>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default:'user' },
    phoneNumber: { type: String, minlength: 11 },
    profilePhoto: {type: String },
  },
  {
    timestamps: true,
  }
);

// pre-save function
userSchema.pre("save", async function () {
  const pass: string = await bcrypt.hash(this.password, Number(config.salt));

  this.password = pass;
});

// methods
userSchema.method("token", function token() {
  return jwt.sign(
    { id: this._id, email: this.email, role: this.role },
    config.jwt_secret as string,
    { expiresIn: "30d" }
  );
});

export const user = model<TUser, TUserModel>("user", userSchema);
