const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom web applications using React.js, Next.js, and Node.js",
    },
    {
      title: "Frontend Development",
      description: "Interactive & high-performance UI/UX solutions",
    },
    {
      title: "Full-Stack Development",
      description: "Scalable solutions with MongoDB/MySQL",
    },
    {
      title: "Performance Optimization",
      description: "Speed & SEO-friendly websites",
    },
    {
      title: "Freelance Consultation",
      description: "Helping startups & businesses with development strategies",
    },
  ];

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          My Services
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
