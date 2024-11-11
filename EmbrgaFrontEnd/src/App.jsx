import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EnrollForm from "./pages/EnrollForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enroll" element={<EnrollForm />} />
      </Routes>
    </Router>
  );
};

export default App;
