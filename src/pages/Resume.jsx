import React from "react";

const Resume = () => {
  return (
    <section className="pt-28 px-6 md:px-20 pb-20 bg-[#fdf6e3] text-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto text-center bg-white p-8 rounded-xl shadow-lg border">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Resume
        </h2>
        <div className="h-1 w-24 bg-red-500 mx-auto mb-6 rounded-full"></div>

        <p className="text-lg mb-8 text-gray-700 leading-relaxed">
          Download or view my latest resume that showcases my technical skills, work experience, education, and achievements.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="/Anas_Khan_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-red-600 transition font-semibold"
          >
            View Resume
          </a>

          <a
            href="/Anas_Khan_CV.pdf"
            download
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition font-semibold"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
