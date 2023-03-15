import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: [30, "Name can Not Exceed 30 Character"],
    minLength: [4, "Name Should Have grater than 4 character"],
    trim: true,
  },
  age: { type: String, require: true },
  address: { type: String, require: true },
  gender: { type: String, require: true },
  specialist: { type: String, require: true },
});

const doctor = mongoose.model("doctor", doctorSchema);
export default doctor;
