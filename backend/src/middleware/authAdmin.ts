import { NextFunction, Request, Response } from "express";
import appError from "../ErrorHandler/appError";
import  jwt  from 'jsonwebtoken';
import config from "../config";
type TAdmin = {
    id: string;
    email: string;
    role: string
}
const authAdmin = (req:Request,res: Response, next: NextFunction) =>{
    const {token} = req.cookies
    if(!token){
        throw new appError("User is unauthorize",401)
    }
    const decode = jwt.verify(token,(config.jwt_secret as string)) as TAdmin
    if(!decode){
        throw new appError("User is unauthorize",401)
    }
    if(decode.role==='Admin'){
        // console.log(decode);
        
        next()
    }
    else{
        throw new appError("User is not Admin",401)
    }
    
}

export default authAdmin