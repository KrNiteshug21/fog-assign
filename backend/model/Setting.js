import mongoose from "mongoose";
const Schema = mongoose.Schema;

const settingSchema = new Schema({
  region: {
    type: String,
    required: true,
  },
  punkbaster: {
    type: Boolean,
    required: true,
  },
  fairfight: {
    type: Boolean,
    required: true,
  },
  password: {
    type: Boolean,
    required: true,
  },
  preset: {
    type: String,
    enum: ["Beginner", "Casual", "Normal", "Hardcore", "Insane"],
    required: true,
  },
});

const Setting = mongoose.model("Setting", settingSchema);
export default Setting;
