import mongoose, { Schema } from "mongoose";

const ServicesSchema = new Schema({
  title: { type: String, unique: true },
  description: String,
  icon: String,
});

export const ServicesModel = mongoose.model("services", ServicesSchema);
