import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EnrollForm from "./pages/EnrollForm";
import Courses from "./pages/Courses";
import CourseDes from "./pages/CourseDes";
import FreelancePage from "./pages/FreelancePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enroll" element={<EnrollForm />} />
        <Route path="/agency-services" element={<FreelancePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseName" element={<CourseDes />} />
      </Routes>
    </Router>
  );
};

export default App;
