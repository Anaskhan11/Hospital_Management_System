import express from "express";
import auth from "../middleware/auth.js";
import {
  AddPatient,
  getAllPatient,
  findPatientById,
  updatePatient,
  deletePatient,
 
} from "../Controller/patientController.js";

const router = express.Router();



router.post("/patient", AddPatient);
// router.route("/patient").post(AddPatient);
// router.get("/getPatients", AthenticatePatient, getAllPatient);

router.route("/getPatients").get(auth, getAllPatient);

router.get("/getPatientById/:id", findPatientById);
router.put("/updatePatient/:id", updatePatient);
router.delete("/deletePatient/:id", deletePatient);

export default router;
