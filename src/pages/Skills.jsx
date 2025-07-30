import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // ✔️ Icon import

const skills = {
  Languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
  Frameworks: ["React", "Next.js", "Tailwind CSS", "Node.js"],
  Tools: ["Git", "VS Code", "Figma", "Postman"],
};

const Skills = () => {
  return (
    <section className="pt-28 px-6 md:px-20 pb-16 bg-[#fdf6e3] text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-b-4 border-indigo-500 inline-block">
          My Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">{category}</h3>
              <ul className="space-y-2 text-gray-700">
                {items.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
