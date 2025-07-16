import React from "react";

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
            <div key={category} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">{category}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {items.map((skill, i) => (
                  <li key={i}>{skill}</li>
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
