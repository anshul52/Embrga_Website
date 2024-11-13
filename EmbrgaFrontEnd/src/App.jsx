import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EnrollForm from "./pages/EnrollForm";
import Courses from "./pages/Courses";
import CourseDes from "./pages/CourseDes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enroll" element={<EnrollForm />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseName" element={<CourseDes />} />
      </Routes>
    </Router>
  );
};

export default App;
