import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: [30, "Name can Not Exceed 30 Character"],
    minLength: [4, "Name Should Have grater than 4 character"],
    trim: true,
  },
  age: { type: String, require: true },
  gender: {type:String,require:true},
  address: { type: String, require: true },
  disease: { type: String, require: true },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor",
  },
  date: { type: Date, default: Date.now },
});

const patient = mongoose.model("patient", patientSchema);

export default patient;
