import React from "react";

const Resume = () => {
  return (
    <section className="relative bg-black text-white px-6 sm:px-10 md:px-20 lg:px-28 pt-40 pb-44 min-h-screen overflow-x-hidden">

      {/* Header */}
      <header className="text-center mb-32 max-w-3xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.35em] text-gray-500">
          Resume
        </p>

        <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 animate-fade-in">
          My Resume
        </h2>

        <p className="mt-8 text-gray-400 text-sm sm:text-base leading-relaxed">
          Download or view my latest resume showcasing my technical skills,
          projects, and achievements.
        </p>
      </header>

      {/* Resume Card */}
      <div className="max-w-4xl mx-auto relative z-10 bg-gray-900/50 backdrop-blur-xl border border-gray-700/40 rounded-3xl shadow-2xl p-12 flex flex-col md:flex-row gap-6 justify-center items-center animate-slide-up">

        {/* VIEW RESUME (PDF) */}
        <a
          href="/Anas_Khan_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-400 text-gray-900 px-8 py-3 rounded-xl shadow-lg hover:bg-teal-300 transition font-semibold"
        >
          View Resume
        </a>

        {/* DOWNLOAD RESUME (DOCX) */}
        <a
          href="/Anas_Khan_CV_2026.docx"
          download
          className="bg-gray-700 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-gray-600 transition font-semibold"
        >
          Download Resume
        </a>
      </div>

      {/* Floating Blobs */}
      <div className="absolute -top-44 -left-36 w-80 h-80 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 opacity-20 blur-4xl animate-blob-slow" />
      <div className="absolute -bottom-44 -right-36 w-96 h-96 rounded-full bg-gradient-to-tr from-teal-400 via-indigo-500 to-purple-400 opacity-15 blur-4xl animate-blob-slower" />
      <div className="absolute top-1/3 left-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-pink-400 to-teal-400 opacity-10 blur-3xl animate-blob-fast -translate-x-1/2" />

      {/* Animations */}
      <style>
        {`
          .animate-fade-in { animation: fadeIn 1.2s ease forwards; opacity:0; }
          .animate-slide-up { animation: slideUp 1s ease forwards; opacity:0; }
          .animate-blob-slow { animation: blob 8s infinite; }
          .animate-blob-slower { animation: blob 12s infinite; }
          .animate-blob-fast { animation: blob 6s infinite; }

          @keyframes fadeIn { to { opacity:1; } }

          @keyframes slideUp {
            from { transform: translateY(20px); opacity:0; }
            to { transform: translateY(0); opacity:1; }
          }

          @keyframes blob {
            0%,100% { transform: translate(0,0) scale(1); }
            33% { transform: translate(20px,-10px) scale(1.05); }
            66% { transform: translate(-20px,10px) scale(0.95); }
          }
        `}
      </style>
    </section>
  );
};

export default Resume;
