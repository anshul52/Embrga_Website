import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer.jsx";
import CoursesList from "../components/Courses/CoursesList.jsx";

const Courses = () => {
  return (
    <div className="min-h-[100vh] scrollbar bg-customBlack w-full">
      <Nav />
      <CoursesList />
      <Footer />
    </div>
  );
};

export default Courses;
