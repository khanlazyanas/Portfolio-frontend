import React from "react";

const projects = [
  {
    title: "Grocery Store",
    description: "An online grocery store built with React & Tailwind CSS. Working... (Under Development).",
    link: "https://your-grocery-store-link.com",
  },
  {
    title: "Weather App",
    description: "Real-time weather data app using OpenWeather API and React.",
    link: "https://anaskhanweathersearch.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="px-6 md:px-20 pt-28 pb-20 bg-[#fdf6e3] text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-b-4 border-indigo-500 inline-block">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-indigo-600">{project.title}</h3>
              <p className="mt-3 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-indigo-600 font-medium hover:underline"
              >
                Visit Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
