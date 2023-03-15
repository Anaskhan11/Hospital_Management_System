import Patient from "../Model/patientModel.js";

import Auth from "../Model/authModel.js";

// Login Patient

// Add Patient
export const AddPatient = async (req, res) => {
  const patient = req.body;
  const auth = new Auth({
    email: req.body.email,
    password: req.body.password,
    userType: "patient",
  });

  const newPatient = new Patient(patient);
  console.log(newPatient);
  try {
    await newPatient.save();
    auth.userId = newPatient._id;

    console.log(auth);
    await auth.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Get Patient From Mango

export const getAllPatient = async (req, res) => {
  try {
    const patients = await Patient.find({});
    res.status(201).json(patients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Find Patient By Id

export const findPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    res.status(200).json(patient);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update Patient
export const updatePatient = async (req, res) => {
  let patient = req.body;
  const editPateint = new Patient(patient);
  try {
    await Patient.updateOne({ _id: req.params.id }, editPateint);
    res.status(201).json(editPateint);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// delete Patient
export const deletePatient = async (req, res) => {
  try {
    await Patient.deleteOne({ _id: req.params.id });
    res.status(200).json({ msg: "Pateint Deleted Sucessfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
