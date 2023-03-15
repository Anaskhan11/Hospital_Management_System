import mongoose from "mongoose";

const AppointmentSchema = mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor",
  },
  appointmentReason: String,
  appointmentNo: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const appointment = mongoose.model("Appointment", AppointmentSchema);
export default appointment;
