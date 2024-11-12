import React from "react";
import Nav from "../components/Nav";
import Homepart1 from "../components/Home/Homepart1";
import Footer from "../components/Footer.jsx";

const EnrollForm = () => {
  return (
    <div className="min-h-[100vh] scrollbar bg-[#fff] w-full">
      <Nav />
      <Homepart1 />
      <Footer />
    </div>
  );
};

export default EnrollForm;
