import mongoose from "mongoose";
import env from "../config/env.js"
import asyncHandler from "../utils/AsyncHandler.js";

const connectDb = asyncHandler(async(req , res)=>{
    try {
        console.log(`db url ${env.DbUrl}`);
        const res = await mongoose.connect(env.DbUrl);
        console.log(`mongodb connected successfully ${res.connection.host}`);
        return res;
    } catch (error) {
        console.error(`db connection failed ${error}`);
        process.exit(1); 
    }
})

export default connectDb;



