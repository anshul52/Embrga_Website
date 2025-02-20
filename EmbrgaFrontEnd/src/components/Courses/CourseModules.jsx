import React from "react";

const CourseModules = () => {
  const modules = [
    {
      title: "Foundations of Web Development",
      topics: [
        "Introduction to Web Development",
        "HTML: Structure and semantics of web pages",
        "CSS: Styling for responsive and modern designs",
        "JavaScript: Fundamentals of interactivity & 2D animations",
      ],
    },
    {
      title: "Advanced Frontend Development",
      topics: [
        "TypeScript: Static typing for JavaScript",
        "React: Component-based architecture and state management",
        "Redux: Efficient state management for scalable apps",
        "Tailwind CSS: Utility-first styling framework",
        "Material-UI: Building professional UI components",
        "3D Animations: Animations using CSS, GSAP, and Three.js",
      ],
    },
    {
      title: "Backend Development",
      topics: [
        "Node.js: Setting up and managing servers",
        "Express.js: Framework for building APIs",
        "MongoDB: Database operations for web applications",
        "WebSocket: Real-time communication for chat and live updates",
        "Microservices: Understanding distributed systems",
      ],
    },
    {
      title: "Real-World Projects",
      topics: [
        "Building 7-8 animated websites",
        "Integration of frontend and backend for dynamic web applications",
      ],
    },
    {
      title: "Career Readiness",
      topics: [
        "Mock interviews with real-world scenarios",
        "Resume and portfolio building",
        "Job and internship referrals",
      ],
    },
    {
      title: "Final Challenge",
      topics: [
        "Participate in an exclusive challenge to showcase your skills.",
        "Exciting prizes for the top performer!",
      ],
    },
  ];

  return (
    <div className="min-h-screen  p-8">
      <h1 className="text-2xl font-extrabold text-center mb-12 text-white">
        Course Modules
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-r from-[#00121C] via-[#01121A] via-[#01121A] via-[#02121a] via-[#02202B] to-[#11202e] rounded-xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 group"
          >
            <div className="absolute inset-x-0 -top-2 h-1 bg-gradient-to-r from-customSkyBlue to-customSkyBlue group-hover:h-2 transition-all duration-300"></div>
            <h2 className="text-2xl font-bold mb-4 text-customSkyBlue group-hover:text-customSkyBlue">
              {module.title}
            </h2>
            <ul className="space-y-2 text-white">
              {module.topics.map((topic, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-customSkyBlue">●</span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseModules;
