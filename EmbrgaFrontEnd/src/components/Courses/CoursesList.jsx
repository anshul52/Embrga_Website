import React from "react";
import CourseCard from "./CourseCard";

const CoursesList = () => {
  return (
    <div className="min-h-[100vh] scrollbar  w-full p-10  grid sm:grid-cols-4 grid-row-4 gap-4">
      <CourseCard
        title={"MERN stack "}
        desc={
          "The MERN stack is a collection of technologies that includes MongoDB, Express, React, and Node.js. It's used to build full-stack JavaScript applications that are responsive, modern, and efficient."
        }
        imgUrl={"/courses/mern.jpg"}
        button={"Read More"}
        redirectLink={"mern"}
      />
      <CourseCard
        title={"Flutter App Development"}
        desc={
          "Master Flutter app development from scratch: build high-performance, cross-platform mobile applications for iOS and Android with a single codebase."
        }
        imgUrl={"/courses/flutter.jpg"}
        button={"Coming Soon"}
      />
    </div>
  );
};

export default CoursesList;
