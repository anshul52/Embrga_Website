import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer.jsx";
import CourseModules from "../components/Courses/CourseModules .jsx";

const CourseDes = () => {
  const { courseName } = useParams();
  return (
    <div className="min-h-[100vh] scrollbar bg-[#fff] w-full">
      <Nav />
      {/* <h2>Product Details for ID: {courseName}</h2> */}
      <div className="bg-gray-100 sm:py-10 w-full">
        <div className="w-full mx-auto px-4 sm:px-[200px] ">
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
              Our Web Development Mastery Course is a comprehensive program
              designed to equip you with in-demand skills in both frontend and
              backend development. From mastering the basics of HTML, CSS, and
              JavaScript to exploring advanced concepts like 2D/3D animations,
              React, Node.js, and microservices, this course ensures you're
              ready to build dynamic, modern web applications. With hands-on
              projects, live classes, one-on-one mentoring, and career-focused
              opportunities like mock interviews and job referrals, this course
              is your gateway to a successful web development career.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 mb-8 ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What You'll Learn
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <h1 className="text-[20px]">Frontend Development</h1>
              <li>
                <span className="font-semibold">HTML & CSS</span>: Build
                beautiful, responsive, and structured web pages.
              </li>
              <li>
                <span className="font-semibold">JavaScript & TypeScript</span>:
                Add interactivity and dynamic functionality.
              </li>
              <li>
                <span className="font-semibold">2D & 3D Animations</span>:
                Create visually stunning effects for engaging user experiences.
              </li>
              <li>
                <span className="font-semibold">React & Redux</span>: Master
                advanced frontend development for scalable applications.
              </li>
              <li>
                <span className="font-semibold">
                  Tailwind CSS & Material-UI
                </span>
                : Design modern, elegant, and consistent UI components.
              </li>
              <h1 className="text-[20px]">Backend Development</h1>
              <li>
                <span className="font-semibold">Node.js & Express.js</span>:
                Develop powerful and efficient backend systems.
              </li>
              <li>
                <span className="font-semibold">MongoDB</span>: Store and manage
                data for high-performance applications.
              </li>
              <li>
                <span className="font-semibold">WebSocket</span>: Enable
                real-time communication for seamless interactions.
              </li>
              <li>
                <span className="font-semibold">Microservices</span>: Build
                distributed, scalable, and maintainable backend architectures.
              </li>
              <h1 className="text-[20px]">Additional Highlights</h1>
              <li>
                <span className="font-semibold">Hands-on Projects</span>: Work
                on 7-8 real-world animated websites to build a standout
                portfolio.
              </li>
              <li>
                <span className="font-semibold">Career Preparation</span>: Gain
                job and internship referrals, plus mock interview experience.
              </li>
              <li>
                <span className="font-semibold">Exclusive Challenge</span>: Win
                exciting rewards in a post-course competition!
              </li>
              <li>
                <span className="font-semibold">One-on-One Doubt Solving</span>:
                Get personalized guidance with one-to-one mentoring sessions.
              </li>
              <li>
                <span className="font-semibold">Backup Classes</span>: Access
                recorded sessions for easy review and learning at your own pace.
              </li>
            </ul>
          </div>

          {/* course module */}
          <CourseModules />
          {/* ------------------- */}

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
              <span className="mr-2 text-blue-500 group-hover:text-blue-700">
                ●
              </span>
              Aspiring Developers: If you're starting your journey in web
              development and want a comprehensive learning experience. <br />
              <span className="mr-2 text-blue-500 group-hover:text-blue-700">
                ●
              </span>
              Students and Fresh Graduates: Looking to build industry-ready
              skills and a strong portfolio for job opportunities. <br />
              <span className="mr-2 text-blue-500 group-hover:text-blue-700">
                ●
              </span>
              Professionals: Eager to upskill and explore modern tools like
              React, Redux, and Microservices. <br />
              <span className="mr-2 text-blue-500 group-hover:text-blue-700">
                ●
              </span>
              Freelancers: Wanting to create stunning animated websites and
              scalable applications for clients. <br />
              <span className="mr-2 text-blue-500 group-hover:text-blue-700">
                ●
              </span>
              Career Changers: Transitioning into tech and aiming for job-ready
              expertise in web development. <br />
              <span className="mr-2 text-blue-500 group-hover:text-blue-700">
                ●
              </span>
              Enthusiasts: Passionate about 2D/3D animations and eager to create
              visually engaging websites. <br />
              <span className="mr-2 text-blue-500 group-hover:text-blue-700">
                ●
              </span>
              If you’re driven to excel in web development, build a career in
              tech, and stand out with cutting-edge skills, this course is for
              you!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDes;
