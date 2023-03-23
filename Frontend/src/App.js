import Home from "./Component/home/Home";
import Navbar from "./Component/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Component/auth/Login";
import Patient from "./Component/patientRecords/Patient";
import Doctor from "./Component/doctorRecords/Doctor";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
AOS.init();

function App() {
  const [patient, setLogin] = useState({});

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/patient"
          element={
            patient && patient._id ? (
              <Patient />
            ) : (
              <Login title="patient" setLogin={setLogin} />
            )
          }
        />
        <Route path="/doctor" element={<Doctor />} />
      </Routes>
    </div>
  );
}

export default App;
