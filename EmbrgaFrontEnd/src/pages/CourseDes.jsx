import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CourseModules from "../components/Courses/CourseModules.jsx";
import {
  learnSections,
  keySkills,
  whoShouldEnroll,
} from "../data/coursesDetsData";
const CourseDes = () => {
  return (
    <div className="min-h-screen bg-customBlack w-full">
      <Nav />
      <div className="bg-customBlack sm:py-10 w-full">
        <div className="w-full mx-auto px-4 sm:px-[200px]">
          <h1 className="text-4xl font-bold text-center text-customSkyBlue mb-8">
            MERN Stack Development Course
          </h1>
          <p className="text-lg text-white mb-6 text-center">
            Unlock the potential of full-stack web development by mastering the{" "}
            <span className="font-semibold">MERN stack</span> – MongoDB,
            Express.js, React, and Node.js.
          </p>

          {/* Course Overview */}
          <Section title="Course Overview">
            Our Web Development Mastery Course is a comprehensive program
            designed to equip you with in-demand skills in both frontend and
            backend development. From mastering the basics of HTML, CSS, and
            JavaScript to exploring advanced concepts like 2D/3D animations,
            React, Node.js, and microservices, this course ensures you're ready
            to build dynamic, modern web applications. With hands-on projects,
            live classes, one-on-one mentoring, and career-focused opportunities
            like mock interviews and job referrals, this course is your gateway
            to a successful web development career.
          </Section>

          {/* What You'll Learn */}
          <Section title="What You'll Learn">
            {learnSections.map((section, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-xl font-semibold text-customSkyBlue">
                  {section.title}
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-white">
                  {section.topics.map((topic, i) => (
                    <li key={i}>
                      <span className="font-semibold">{topic.label}:</span>{" "}
                      {topic.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          {/* Course Modules */}
          <CourseModules />

          {/* Key Skills Acquired */}
          <Section title="Key Skills Acquired">
            <ul className="list-disc pl-6 space-y-2 text-white">
              {keySkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </Section>

          {/* Who Should Enroll? */}
          <Section title="Who Should Enroll?">
            {whoShouldEnroll.map((point, index) => (
              <p key={index} className="text-white">
                <span className="mr-2 text-customSkyBlue">●</span> {point}
              </p>
            ))}
          </Section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, children }) => (
  <div className="bg-gradient-to-r from-[#00121C] to-[#11202e] shadow-lg rounded-lg p-6 mb-8">
    <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
    <div className="text-white">{children}</div>
  </div>
);

export default CourseDes;
