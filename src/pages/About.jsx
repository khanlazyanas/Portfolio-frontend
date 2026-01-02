import React from "react";
import profileImage from "../assets/anas3.jpg";

const About = () => {
  return (
    <section className="relative bg-black text-white px-6 sm:px-10 md:px-20 lg:px-28 pt-40 pb-44">
      <div className="max-w-7xl mx-auto">

        {/* Editorial Header */}
        <header className="mb-40 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gray-500">
            About
          </p>

          <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Building thoughtful,
            <br />
            scalable digital experiences.
          </h2>

          <p className="mt-8 text-gray-400 text-sm sm:text-base leading-relaxed">
            I’m Anas Khan — a full-stack developer focused on crafting clean,
            scalable, and production-ready web applications with a strong
            emphasis on performance and user experience.
          </p>
        </header>

        {/* Content */}
        <article className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative overflow-hidden rounded-[2.5rem]">
            <img
              src={profileImage}
              alt="Anas Khan"
              className="w-full h-[460px] object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* Text */}
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
              Who I Am
            </p>

            <h3 className="mt-4 text-3xl font-semibold text-white">
              Full-stack developer with a product mindset.
            </h3>

            <p className="mt-6 text-gray-400 text-sm leading-relaxed">
              Hello! I’m{" "}
              <span className="text-white font-medium">Anas Khan</span>, a
              passionate full-stack developer who enjoys transforming complex
              ideas into elegant, high-performance web applications.
            </p>

            <p className="mt-6 text-gray-400 text-sm leading-relaxed">
              I specialize in building modern interfaces using{" "}
              <span className="text-white">React</span>,{" "}
              <span className="text-white">Tailwind CSS</span>, and robust backend
              systems with the{" "}
              <span className="text-white">MERN stack</span>. My work focuses on
              clarity, scalability, and long-term maintainability.
            </p>

            <p className="mt-6 text-gray-500 text-sm leading-relaxed italic">
              Beyond coding, I explore AI tools, system design, and modern web
              technologies to continuously refine my craft.
            </p>
          </div>

        </article>

      </div>
    </section>
  );
};

export default About;
