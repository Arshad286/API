import mongoose from "mongoose";

const { Schema } = mongoose;

const schoolSchema = new Schema({
  name: { type: String, require: true },
  address: { type: String, require: true },
  latitude: { type: Number, require: true },
  longitude: { type: Number, require: true }

}, {timestamps: true} );

export default mongoose.model("schools", schoolSchema);