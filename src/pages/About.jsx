import React from "react";
import profileImage from "../assets/anas2.jpg";

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
            emphasis on performance, architecture, and user experience.
          </p>
        </header>

        {/* Main Content */}
        <article className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Image (Refined Size) */}
          <div className="relative max-w-[460px] rounded-[2.5rem] overflow-hidden">
            <img
              src={profileImage}
              alt="Anas Khan"
              className="w-full h-[420px] object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* Text Content */}
          <div className="max-w-xl">

            {/* Who I Am */}
            <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
              Who I Am
            </p>

            <h3 className="mt-4 text-3xl font-semibold text-white">
              Full-stack developer with a product mindset.
            </h3>

            <p className="mt-6 text-gray-400 text-sm leading-relaxed">
              Hello! I’m{" "}
              <span className="text-white font-medium">Anas Khan</span>, a
              self-driven full-stack developer who enjoys transforming complex
              problems into elegant, maintainable, and high-performance systems.
            </p>

            <p className="mt-6 text-gray-400 text-sm leading-relaxed">
              I specialize in building modern user interfaces using{" "}
              <span className="text-white">React</span> and{" "}
              <span className="text-white">Tailwind CSS</span>, combined with
              scalable backend systems powered by the{" "}
              <span className="text-white">MERN stack</span>.
            </p>

            <p className="mt-6 text-gray-500 text-sm leading-relaxed italic">
              Beyond writing code, I focus on system design, clean architecture,
              and long-term project sustainability.
            </p>
          </div>
        </article>

        {/* Timeline */}
        <section className="mt-40 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gray-500">
            Journey
          </p>

          <ul className="mt-10 space-y-8 text-sm text-gray-400">
            <li>
              <span className="text-white font-medium">2022</span> — Started with
              HTML, CSS, and JavaScript fundamentals.
            </li>
            <li>
              <span className="text-white font-medium">2023</span> — Learned
              React, backend development, and REST APIs.
            </li>
            <li>
              <span className="text-white font-medium">2024</span> — Built
              full-stack MERN projects focusing on scalability and performance.
            </li>
            <li>
              <span className="text-white font-medium">Now</span> — Deepening
              system design knowledge and building production-ready solutions.
            </li>
          </ul>
        </section>

        {/* Philosophy */}
        <section className="mt-32 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gray-500">
            Philosophy
          </p>

          <blockquote className="mt-8 pl-6 border-l border-gray-700 text-gray-400 text-sm leading-relaxed italic">
            I believe great software is quiet, reliable, and easy to evolve.
            Clean architecture, performance, and clarity always come before
            unnecessary complexity.
          </blockquote>
        </section>

        {/* Process */}
        <section className="mt-32 max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gray-500">
            How I Work
          </p>

          <ol className="mt-10 grid sm:grid-cols-2 gap-10 text-sm text-gray-400">
            <li>
              <span className="text-white font-medium">01.</span> Understand the
              problem deeply before writing code.
            </li>
            <li>
              <span className="text-white font-medium">02.</span> Design scalable
              and maintainable architecture.
            </li>
            <li>
              <span className="text-white font-medium">03.</span> Build clean,
              reusable, and testable components.
            </li>
            <li>
              <span className="text-white font-medium">04.</span> Optimize
              performance and iterate with feedback.
            </li>
          </ol>
        </section>

        {/* Values */}
        <section className="mt-32 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gray-500">
            Values
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-[11px] uppercase tracking-widest text-gray-400">
            <span>Clarity over cleverness</span>
            <span>Performance is a feature</span>
            <span>Ownership mindset</span>
            <span>Continuous learning</span>
            <span>Respect for users</span>
          </div>
        </section>

      </div>
    </section>
  );
};

export default About;
