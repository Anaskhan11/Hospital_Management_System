import Appointment from "../Model/appointmentModel.js";

export const createAppointment = async (req, res) => {
  const appo = req.body;
  const newAppointment = new Appointment(appo);
  try {
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(409).json({ msg: error.msg });
  }
};

export const checkAppointments = async (req, res) => {
  try {
    const checkAppo = await Appointment.find({});
    res.status(200).json(checkAppo);
  } catch (error) {
    res.status(404).json({ msg: error.msg });
  }
};

export const checkAppointmentById = async (req, res) => {
  try {
    const appo = await Appointment.findById(req.params.id);
    res.status(200).json(appo);
  } catch (error) {
    res.status(404).json({ msg: error.msg });
  }
};

export const updateAppointment = async (req, res) => {
  let appo = req.body;
  const newAppo = new Appointment(appo);
  try {
    await Appointment.updateOne({ _id: req.params.id }, newAppo);
    res.status(201).json(newAppo);
  } catch (error) {
    res.status(409).json({ msg: error.msg });
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    await Appointment.deleteOne({ _id: req.params.id });
    res.status(200).json({ msg: "Appointment Deleted Sucessfully" });
  } catch (error) {
    res.status(409).json({ msg: error.msg });
  }
};
