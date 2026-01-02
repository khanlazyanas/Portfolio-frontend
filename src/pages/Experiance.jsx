import React from "react";

const experiences = [
  {
    title: "Learning & Projects",
    period: "Ongoing",
    description: `
      I am continuously building real-world projects to strengthen my skills in 
      frontend, backend, and full-stack development using the MERN stack 
      (MongoDB, Express, React, Node.js).`,
  },
  {
    title: "Open Source & Community",
    period: "Ongoing",
    description: `
      Actively contributing to open-source projects, exploring modern web technologies,
      and refining my understanding of scalable system design.`,
  },
];

const Experience = () => {
  return (
    <section className="relative bg-black text-white px-6 sm:px-10 md:px-20 lg:px-28 pt-40 pb-44 min-h-screen">

      {/* Header */}
      <header className="text-center mb-32 max-w-3xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.35em] text-gray-500">Experience</p>
        <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 animate-fade-in">
          My Journey
        </h2>
        <p className="mt-8 text-gray-400 text-sm sm:text-base leading-relaxed">
          Even without formal employment, my dedication to real-world projects, open-source, 
          and continuous learning shapes my growing experience in full-stack development.
        </p>
      </header>

      {/* Experience Cards */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-700/40 rounded-3xl shadow-2xl p-8 flex flex-col gap-4 hover:scale-105 transition-transform duration-500 animate-slide-up"
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400">
              {exp.title}
            </h3>
            <span className="text-gray-500 text-sm">{exp.period}</span>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Floating Blobs */}
      <div className="absolute -top-44 -left-36 w-80 h-80 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 opacity-20 blur-4xl animate-blob-slow"></div>
      <div className="absolute -bottom-44 -right-36 w-96 h-96 rounded-full bg-gradient-to-tr from-teal-400 via-indigo-500 to-purple-400 opacity-15 blur-4xl animate-blob-slower"></div>
      <div className="absolute top-1/3 left-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-pink-400 to-teal-400 opacity-10 blur-3xl animate-blob-fast -translate-x-1/2"></div>

      {/* Animations */}
      <style>
        {`
          .animate-fade-in { animation: fadeIn 1.2s ease forwards; opacity:0; }
          .animate-slide-up { animation: slideUp 1s ease forwards; opacity:0; }
          .animate-blob-slow { animation: blob 8s infinite; }
          .animate-blob-slower { animation: blob 12s infinite; }
          .animate-blob-fast { animation: blob 6s infinite; }
          @keyframes fadeIn { to { opacity:1; } }
          @keyframes slideUp { from { transform: translateY(20px); opacity:0; } to { transform: translateY(0); opacity:1; } }
          @keyframes blob { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(20px,-10px) scale(1.05); } 66% { transform: translate(-20px,10px) scale(0.95); } }
        `}
      </style>
    </section>
  );
};

export default Experience;
