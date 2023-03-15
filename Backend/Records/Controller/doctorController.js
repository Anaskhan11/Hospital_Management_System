import Doctor from "../Model/doctorModel.js";
import Auth from "../Model/authModel.js";

export const postDoctor = async (req, res) => {
  const doctor = req.body;
  const auth = new Auth({
    email: req.body.email,
    password: req.body.password,
    userType: "doctor",
  });
  const newDoctor = new Doctor(doctor);
  try {
    await newDoctor.save();
    auth.userId = newDoctor._id;

    await auth.save();
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(409).json({ msg: error.msg });
  }
};

export const getDoctor = async (req, res) => {
  try {
    const doc = await Doctor.find({});
    res.status(200).json(doc);
  } catch (error) {
    res.status(404).json({ msg: error.msg });
  }
};

export const getDoctorById = async (req, res) => {
  try {
    const doc = await Doctor.findById(req.params.id);
    res.status(200).json(doc);
  } catch (error) {
    res.status(404).json({ msg: error.msg });
  }
};

export const updateDoctor = async (req, res) => {
  let doctor = req.body;
  const doc = new Doctor(doctor);
  try {
    await Doctor.updateOne({ _id: req.params.id }, doc);
    res.status(201).json(doc);
  } catch (error) {
    res.status(404).json({ msg: error.msg });
  }
};

export const deleleDoctor = async (req, res) => {
  try {
    await Doctor.deleteOne({ _id: req.params.id });
    res.status(200).json({ msg: "Doctor Deleted Sucessfully" });
  } catch (error) {
    res.status(409).json({ msg: error.msg });
  }
};
