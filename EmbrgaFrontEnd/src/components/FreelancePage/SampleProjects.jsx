import React from "react";

const SampleProjects = () => {
  const projects = [
    {
      title: "Coinspe",
      description:
        "Developed with Next.js, Redux, and Tailwind CSS, featuring real-time market data, user authentication, trading interface, wallet management, and security measures.",
      techStack: "Next.js, Node.js, MongoDB",
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
      techStack: "React.js, Node.js, Postgres",
      liveDemo: "https://www.sheryians.com",
    },
    {
      title: "Bold Thread",
      description:
        "Bold-Thread is a web platform that offers personalized style recommendations and curated fashion selections to help users enhance their wardrobes.",
      techStack: "Next.js, Tailwind CSS, Framer Motion ,Node.js, MongoDB",
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
    // {
    //   title: "Subhx Technology",
    //   description:
    //     "A technology services platform Delivering advanced solutions in technology, healthcare, and finance to drive excellence.",
    //   techStack: "Next.js, Tailwind CSS, Framer Motion",
    //   liveDemo: "https://www.subhx.in",
    // },
    {
      title: "Leapstrat Interactive",
      description:
        "A Online Digital Marketing services Provider Delivering advanced solutions in Digital Marketing.",
      techStack: "Next.js, Tailwind CSS, Framer Motion",
      liveDemo: "https://leapstrat.in",
    },
  ];

  return (
    <section className="py-12 relative">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-6xl font-bold py-7 bg-gray-700 text-transparent bg-clip-text bg-gradient-to-r from-customSkyBlue to-white text-center mb-6">
          Projects{" "}
          <span className="text-white font-normal">, we are proud of</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const screenshotURL = project?.liveDemo
              ? `https://image.thum.io/get/width/600/crop/800/${project?.liveDemo}`
              : "https://via.placeholder.com/400";

            return (
              <div
                key={index}
                className="p-6  bg-gradient-to-r from-[#00121C] via-[#01121A] via-[#01121A] via-[#02121a] via-[#02202B] to-[#11202e] shadow-lg rounded-2xl transition-transform transform hover:scale-105"
              >
                <img
                  src={screenshotURL}
                  alt={project?.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mt-4">
                  {project?.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {project?.description}
                </p>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 block">
                  Tech Stack: {project?.techStack}
                </span>
                {project?.liveDemo && (
                  <a
                    href={project?.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-customSkyBlue hover:underline"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-[#31587F] sm:h-[50vh] sm:w-[50vh] h-[20vh] w-[20vh] sm:blur-[100px] blur-[50px] rounded-[50%] absolute sm:top-[35%] top-[25%] right-[-17%] z-20"></div>
    </section>
  );
};

export default SampleProjects;
