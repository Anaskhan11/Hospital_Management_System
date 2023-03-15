import express from "express";
import {
  createAppointment,
  checkAppointments,
  checkAppointmentById,
  updateAppointment,
  deleteAppointment,
} from "../Controller/appointmentController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/createAppointment", auth, createAppointment);
router.get("/getAllApointment", auth, checkAppointments);
router.get("/getAppointment/:id", auth, checkAppointmentById);
router.put("/updateAppointment/:id", auth, updateAppointment);
router.delete("/deleteAppointment/:id", auth, deleteAppointment);

export default router;
