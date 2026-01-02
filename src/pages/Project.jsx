import React from "react";

const projects = [
  {
    title: "UrbanGreens",
    subtitle: "Full-Stack Grocery Commerce Platform",
    description:
      "A production-ready grocery commerce platform engineered with the MERN stack and Tailwind CSS. Designed for scale and reliability, featuring secure authentication, product and order management, cart workflows, and Razorpay payment integration with a refined, high-performance user experience.",
    link: "https://urbangreens-frontend-n2hv3.vercel.app",
    image: "/src/assets/urbangreens.png",
    tech: ["MERN Stack", "Tailwind CSS", "Razorpay", "JWT Auth"],
  },
  {
    title: "Bajaj Auto Sales",
    subtitle: "Enterprise Automobile Sales & Service System",
    description:
      "An enterprise-grade automobile sales and service management system built using the MERN stack. Enables vehicle discovery, pricing transparency, customer enquiries, booking, and service workflows within a scalable, business-ready interface.",
    link: "#",
    image: "/src/assets/bajajautosales.png",
    tech: ["MERN Stack", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "Weather Forecast",
    subtitle: "Real-Time Weather Intelligence App",
    description:
      "A modern React-based weather application delivering real-time forecasts, location search, and API-driven insights using OpenWeather, wrapped in a calm, responsive, and user-centric interface.",
    link: "https://anaskhanweathersearch.netlify.app/",
    image: "/src/assets/weather.png",
    tech: ["React", "API Integration", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <section className="relative bg-black text-white px-6 sm:px-10 md:px-20 lg:px-28 pt-40 pb-44">
      <div className="max-w-7xl mx-auto">

        {/* Ultra Editorial Header */}
        <header className="mb-40 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gray-500">
            Selected Work
          </p>

          <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Designing & engineering
            <br />
            premium digital products.
          </h2>

          <p className="mt-8 text-gray-400 text-sm sm:text-base leading-relaxed">
            A curated collection of production-grade applications built with a
            focus on clarity, scalability, performance, and timeless user
            experience. Every project reflects real-world problem solving and
            thoughtful system design.
          </p>
        </header>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className="group grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-[2.5rem]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[420px] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="max-w-xl">
                <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
                  {project.subtitle}
                </p>

                <h3 className="mt-4 text-3xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-6 text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-4 py-1.5 rounded-full border border-gray-700 text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-12">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 text-sm font-medium text-white group-hover:gap-6 transition-all duration-300"
                  >
                    View Project
                    <span className="text-xl">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
