import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/anas2.jpg";

const Home = () => {
  return (
    <section className="relative bg-black text-white px-6 sm:px-10 md:px-20 lg:px-28 pt-40 pb-44 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">

        {/* Parallax Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.12] translate-y-[-20px]" />

        {/* Floating Particles */}
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse" />

        {/* Glow */}
        <div className="absolute -top-40 -left-40 w-[540px] h-[540px] bg-teal-400/20 blur-[200px] rounded-full" />

        {/* HEADER */}
        <header className="mb-40 max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-teal-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Available for Work
          </div>

          <p className="text-[11px] uppercase tracking-[0.35em] text-gray-500">
            Introduction
          </p>

          <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Anas Khan
            </span>
            <br />
            Full-Stack MERN Engineer
          </h1>

          <div className="mt-8 text-gray-400 text-sm sm:text-base font-mono h-6">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "MongoDB • Express • React • Node",
                "Engineering Scalable Web Systems",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>

          <p className="mt-8 text-gray-400 text-sm sm:text-base leading-relaxed">
            I build systems, not just features — focusing on architecture,
            performance, and long-term scalability.
          </p>

          <blockquote className="mt-8 pl-4 border-l border-gray-700 text-sm text-gray-500 italic">
            “Great software feels invisible to the user.”
          </blockquote>

          <div className="flex flex-wrap gap-4 mt-10 text-[11px] uppercase tracking-widest text-gray-500">
            <span>Clean Architecture</span>
            <span>Performance-Driven</span>
            <span>Scalable Systems</span>
          </div>

          <div className="mt-14 flex flex-wrap gap-10">
            <Link
    to="/projects"
    className="relative inline-flex items-center gap-3 text-sm font-medium text-white group"
  >
    <span className="absolute inset-0 rounded-full bg-white/5 blur-lg opacity-0 group-hover:opacity-100 transition" />
    View Projects
    <span className="text-xl group-hover:translate-x-1 transition-transform">
      →
    </span>
  </Link>

  <Link
    to="/resume"
    className="text-sm text-gray-400 hover:text-white transition"
  >
    Download Resume
  </Link>
          </div>
        </header>

        {/* HERO */}
        <article className="grid lg:grid-cols-2 gap-24 items-center relative z-10">

          {/* Image (REFINED SIZE) */}
          <div className="relative max-w-[520px] mx-auto rounded-[3rem] overflow-hidden border border-white/10 backdrop-blur-xl group">
            <img
              src={profileImage}
              alt="Anas Khan"
              className="w-full h-[380px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition" />
          </div>

          {/* Content */}
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
              Engineering Focus
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white">
              Designing systems built to last.
            </h2>

            <p className="mt-6 text-gray-400 text-sm leading-relaxed">
              From API architecture to frontend performance optimization,
              I prioritize clarity, scalability, and maintainability in
              every project.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind",
                "Node.js",
                "Express",
                "MongoDB",
                "AI Tools",
              ].map((tech, i) => (
                <span
                  key={i}
                  className="text-[11px] px-4 py-1.5 rounded-full border border-gray-700 text-gray-300 hover:border-gray-500 transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-12 mt-16 text-center">
              <div>
                <p className="text-2xl font-semibold">10+</p>
                <p className="text-[11px] uppercase tracking-widest text-gray-500">
                  Projects
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold">1+</p>
                <p className="text-[11px] uppercase tracking-widest text-gray-500">
                  Years Learning
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold">MERN</p>
                <p className="text-[11px] uppercase tracking-widest text-gray-500">
                  Core Stack
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-xs tracking-widest animate-bounce">
        Scroll
      </div>
    </section>
  );
};

export default Home;
