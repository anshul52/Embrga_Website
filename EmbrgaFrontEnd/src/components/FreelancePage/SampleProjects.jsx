import React from "react";

const SampleProjects = () => {
  const projects = [
    {
      title: "Coinspe",
      description:
        "Developed with Next.js, Redux, and Tailwind CSS, featuring real-time market data, user authentication, trading interface, wallet management, and security measures.",
      techStack: "React.js, Next.js, Node.js, MongoDB",
      liveDemo: "https://coinspe.com/",
    },
    {
      title: "Givingli",
      description:
        "A digital gifting platform offering personalized cards and gift experiences with secure payment integration.",
      techStack: "React.js, Redux, Socket.io, MySQL",
      liveDemo: "https://givingli.com",
    },
    {
      title: " Sheryians Coding School",
      description:
        "Sheryians Coding School is an educational platform offering courses in web development, coding, and design. ",
      techStack: "React.js, Next.js, Node.js, MongoDB",
      liveDemo: "https://www.sheryians.com",
    },
    {
      title: "Bold Thread",
      description:
        "Bold-Thread is a web platform that offers personalized style recommendations and curated fashion selections to help users enhance their wardrobes.",
      techStack: "Next.js, Tailwind CSS, Framer Motion",
      liveDemo: "https://bold-thread.com",
    },
    {
      title: "Unation",
      description:
        "UNATION is a platform to discover local events, create, and sell tickets. It allows event organizers to manage and promote activities, making it easier for people to find things to do nearby.",
      techStack: "React.js, Redux, Socket.io, MySQL",
      liveDemo: "https://unation.com",
    },
    {
      title: "2Me Digita",
      description:
        "A digital platform providing marketing and branding solutions for businesses.",
      techStack: "Next.js, Tailwind CSS, Framer Motion",
      liveDemo: "https://2me.digital",
    },
    {
      title: "LawBot Africa",
      description:
        "An AI-powered legal assistance tool for automated legal document generation and advice.",
      techStack: "React.js, Redux, Socket.io, MySQL",
      liveDemo: "https://lawbot.africa",
    },
    {
      title: "Elara Technology",
      description:
        "A technology services platform offering AI and cloud solutions for businesses.",
      techStack: "Next.js, Tailwind CSS, Framer Motion",
      liveDemo: "https://elara.technology",
    },
  ];

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
          Sample Work
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const screenshotURL = project.liveDemo
              ? `https://image.thum.io/get/width/600/crop/800/${project.liveDemo}`
              : "https://via.placeholder.com/400";

            return (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl transition-transform transform hover:scale-105"
              >
                <img
                  src={screenshotURL}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mt-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {project.description}
                </p>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 block">
                  Tech Stack: {project.techStack}
                </span>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SampleProjects;
