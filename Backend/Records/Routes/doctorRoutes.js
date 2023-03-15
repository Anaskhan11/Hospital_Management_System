import express from "express";
import {
  postDoctor,
  getDoctor,
  getDoctorById,
  updateDoctor,
  deleleDoctor,
} from "../Controller/doctorController.js";

const router = express.Router();

router.post("/postDoctor", postDoctor);
router.get("/getDoctor", getDoctor);
router.get("/getDoc/:id", getDoctorById);
router.put("/updateDoctor/:id", updateDoctor);
router.delete("/deleteDoctor/:id", deleleDoctor);
export default router;
