import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiPostman,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "VS Code", icon: <VscCode /> },
      { name: "Figma", icon: <FaFigma /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="relative bg-black text-white px-6 sm:px-10 md:px-20 lg:px-28 pt-40 pb-44">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <header className="mb-32 max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gray-500">
            Skills
          </p>
          <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Technologies I use
            <br />
            to build products.
          </h2>
          <p className="mt-8 text-gray-400 text-sm sm:text-base leading-relaxed">
            A focused set of languages, frameworks, databases, and tools that I
            use to design, build, and ship scalable full-stack applications.
          </p>
        </header>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((group, idx) => (
            <div key={idx} className="relative">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500 mb-6">
                {group.category}
              </p>

              <ul className="relative w-full h-48 flex justify-center items-center">
                {group.items.map((skill, i) => {
                  const angle = (360 / group.items.length) * i;
                  return (
                    <li
                      key={i}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
                      style={{
                        transform: `rotate(${angle}deg) translate(90px) rotate(-${angle}deg)`,
                        animation: `orbit ${15 + i * 2}s linear infinite`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    >
                      <span className="text-3xl text-teal-400 hover:scale-125 transition-transform">
                        {skill.icon}
                      </span>
                      <span className="text-xs text-gray-300">{skill.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Circular Orbit Animation */}
      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg) translate(90px) rotate(0deg); }
          100% { transform: rotate(360deg) translate(90px) rotate(-360deg); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
