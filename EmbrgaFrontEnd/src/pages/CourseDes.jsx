import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer.jsx";

const CourseDes = () => {
  const { courseName } = useParams();
  return (
    <div className="min-h-[100vh] scrollbar bg-[#fff] w-full">
      <Nav />
      {/* <h2>Product Details for ID: {courseName}</h2> */}
      <div className="bg-gray-100 sm:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
            MERN Stack Development Course
          </h1>

          <p className="text-lg text-gray-700 mb-6 text-center">
            Unlock the potential of full-stack web development by mastering the{" "}
            <span className="font-semibold">MERN stack</span> – MongoDB,
            Express.js, React, and Node.js.
          </p>

          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Course Overview
            </h2>
            <p className="text-gray-700">
              In this hands-on course, you'll learn to design and develop
              end-to-end applications with the MERN stack. From building RESTful
              APIs to creating dynamic user interfaces, you’ll gain practical
              skills that are essential for real-world web development.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What You'll Learn
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">MongoDB</span>: Understand NoSQL
                databases and how to model, store, and retrieve data
                efficiently.
              </li>
              <li>
                <span className="font-semibold">Express.js</span>: Build
                powerful, efficient server-side applications with Express.js.
              </li>
              <li>
                <span className="font-semibold">React.js</span>: Create modern,
                responsive, and interactive UIs with React.
              </li>
              <li>
                <span className="font-semibold">Node.js</span>: Explore
                server-side JavaScript with Node.js, focusing on scalable
                applications.
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Course Modules
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Introduction to Full-Stack Development</li>
              <li>Setting Up a Development Environment</li>
              <li>MongoDB and Mongoose ORM</li>
              <li>Building RESTful APIs with Express.js</li>
              <li>Frontend Development with React</li>
              <li>Integrating Backend with Frontend</li>
              <li>Authentication and Authorization</li>
              <li>Deploying MERN Applications</li>
              <li>Project: Building a Full-Stack Application</li>
            </ol>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Key Skills Acquired
            </h2>
            <p className="text-gray-700">
              - Building and deploying full-stack applications
              <br />
              - Working with APIs and third-party libraries
              <br />
              - Understanding MVC architecture and component-based design
              <br />- Applying security best practices
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Who Should Enroll?
            </h2>
            <p className="text-gray-700">
              This course is ideal for beginner to intermediate developers who
              have a basic understanding of JavaScript, HTML, and CSS and are
              looking to advance their skills in full-stack development using
              the MERN stack.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Final Project
            </h2>
            <p className="text-gray-700">
              By the end of this course, you’ll complete a capstone project
              where you build a fully functional web application, from designing
              the database to deploying the application.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Course Outcome
            </h2>
            <p className="text-gray-700">
              After completing this course, you’ll be ready to build scalable,
              production-ready applications using the MERN stack and possess a
              comprehensive understanding of full-stack development.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDes;
