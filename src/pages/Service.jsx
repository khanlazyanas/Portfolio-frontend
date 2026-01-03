import React from "react";

const Services = () => {
  return (
    <section className="relative bg-black text-white px-6 sm:px-10 md:px-20 lg:px-28 pt-40 pb-44">
      <div className="max-w-7xl mx-auto">

        {/* Editorial Header */}
        <header className="mb-36 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gray-500">
            Services
          </p>

          <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Solutions designed
            <br />
            for real-world scale.
          </h2>

          <p className="mt-8 text-gray-400 text-sm sm:text-base leading-relaxed">
            I help individuals and teams design, build, and refine web
            applications that are fast, scalable, and maintainable — not just
            visually appealing.
          </p>
        </header>

        {/* Core Services */}
        <section className="space-y-24">

          {/* Service Item */}
          <div className="max-w-4xl">
            <h3 className="text-2xl font-semibold text-white">
              Full-Stack Web Development
            </h3>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              End-to-end development of production-ready web applications —
              from frontend interfaces to backend logic, APIs, and databases.
              Built with long-term scalability in mind.
            </p>
          </div>

          <div className="max-w-4xl">
            <h3 className="text-2xl font-semibold text-white">
              Frontend Engineering & UX
            </h3>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Crafting clean, responsive, and accessible user interfaces
              that feel fast, intuitive, and consistent across devices.
            </p>
          </div>

          <div className="max-w-4xl">
            <h3 className="text-2xl font-semibold text-white">
              Backend & API Architecture
            </h3>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Designing secure and scalable backend systems, REST APIs,
              authentication flows, and data models that support growth.
            </p>
          </div>

          <div className="max-w-4xl">
            <h3 className="text-2xl font-semibold text-white">
              Performance Optimization
            </h3>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Improving load times, reducing bottlenecks, and optimizing
              frontend and backend performance for better user experience.
            </p>
          </div>

          <div className="max-w-4xl">
            <h3 className="text-2xl font-semibold text-white">
              Deployment & Scalability
            </h3>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Preparing applications for real-world use — deployment,
              environment setup, and scalability planning.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="mt-40 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gray-500">
            How I Work
          </p>

          <ul className="mt-10 space-y-5 text-sm text-gray-400">
            <li>• Understand the problem before writing code</li>
            <li>• Design systems, not just features</li>
            <li>• Build with clarity and maintainability</li>
            <li>• Optimize for performance and scale</li>
            <li>• Deliver clean, documented solutions</li>
          </ul>
        </section>

        {/* Philosophy */}
        <section className="mt-32 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gray-500">
            Philosophy
          </p>

          <blockquote className="mt-8 pl-4 border-l border-gray-700 text-sm text-gray-500 italic">
            “Good software is not defined by features — but by how well it
            holds up over time.”
          </blockquote>
        </section>

        {/* CTA */}
        <section className="mt-32">
          <a
            href="/projects"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            View Projects →
          </a>
        </section>

      </div>
    </section>
  );
};

export default Services;
