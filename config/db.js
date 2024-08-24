import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const Connection = async () => {
  try{
     await mongoose.connect(process.env.CONNECTION_STRING)
     console.log("MongoDB connected");

  }catch(err){
     console.log("MongoDB connection failed", err);
  }
};

export default Connection;
