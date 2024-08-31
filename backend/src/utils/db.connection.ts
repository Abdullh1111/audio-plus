import mongoose from "mongoose";
import config from "../config";

 async function dbMain() {
  try {
    await mongoose.connect(`${config.db}`, {
      dbName: "Audio-plus",
    });
  } catch (err) {
    console.log(err);
  }
}
export default dbMain