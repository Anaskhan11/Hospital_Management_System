import express from "express";
import cookieParser from "cookie-parser";
const App = express();

App.use(cookieParser());
App.use(express.json());

import Patient from "./Records/Routes/patientRoutes.js";
import Doctor from "./Records/Routes/doctorRoutes.js";
import Appointment from "./Records/Routes/appointmentRoutes.js";
import authentication from "./Records/Routes/authRoutes.js";

App.use("/api/v1", Patient);
App.use("/api/v1", Doctor);
App.use("/api/v1", Appointment);
App.use("/api/v1", authentication);
export default App;
