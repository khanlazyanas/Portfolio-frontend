import React from "react";
import profileImage from "../assets/anas3.jpg";

const About = () => {
  return (
    <section className="pt-28 px-6 md:px-20 pb-20 bg-[#fdf6e3] text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About</h2>
        <div className="h-1 w-24 bg-red-500 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Image Section */}
        <div className="flex justify-center md:justify-start">
          <img
            src={profileImage}
            alt="Anas Khan"
            className="w-40 h-40 rounded-full object-cover border-4 border-red-300 shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="md:col-span-2 bg-white shadow-lg p-8 rounded-xl border">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Who Am I?</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Hello! I'm <span className="text-red-600 font-semibold">ANAS KHAN</span>, a front-end developer who builds responsive and interactive websites using modern technologies.
          </p>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            I specialize in <strong>React</strong> and <strong>Tailwind CSS</strong>. My aim is to turn clean designs into elegant and high-performance web interfaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
