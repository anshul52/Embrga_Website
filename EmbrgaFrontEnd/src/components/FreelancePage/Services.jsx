import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaTachometerAlt,
  FaUserTie,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom web applications using React.js, Next.js, and Node.js",
      icon: <FaCode />, // Represents coding and development
    },
    {
      title: "Frontend Development",
      description: "Interactive & high-performance UI/UX solutions",
      icon: <FaLaptopCode />,
    },
    {
      title: "Full-Stack Development",
      description: "Scalable solutions with MongoDB/MySQL",
      icon: <FaServer />,
    },
    {
      title: "Performance Optimization",
      description: "Speed & SEO-friendly websites",
      icon: <FaTachometerAlt />,
    },
    {
      title: "Freelance Consultation",
      description: "Helping startups & businesses with development strategies",
      icon: <FaUserTie />,
    },
  ];

  return (
    <section className="py-12 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Our Services
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 text-start shadow-lg rounded-2xl bg-gradient-to-r from-[#00121C] via-[#01121A] via-[#01121A] via-[#02121a] via-[#02202B] to-[#11202e]"
            >
              <div className="flex items-center justify-start mb-4 gap-4">
                <div className="text-customGolden text-4xl">
                  {service?.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-800 dark:text-gray-400 mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* ---------------gradient effect---------------- */}
      <div className="bg-[#31587F] h-[50vh] w-[50vh] blur-[150px] rounded-[50%] absolute top-[100%] left-[-10%] z-[10000]"></div>
    </section>
  );
};

export default Services;
