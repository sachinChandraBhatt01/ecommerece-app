import mongoose from "mongoose";
import env from "../config/env.js"
import asyncHandler from "../utils/AsyncHandler.js";



const connectDb = async () => {
    try {
        console.log(`Connecting to database: ${env.DbUrl}`);
        const connection = await mongoose.connect(env.DbUrl);
        console.log(`MongoDB connected successfully to ${connection.connection.host}`);
        return connection;
    } catch (error) {
        console.error(`Database connection failed: ${error.message}`);
        process.exit(1);
    }
};

export default connectDb;