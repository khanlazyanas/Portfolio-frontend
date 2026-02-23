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

// ✅ Added specific brand hover colors for Ultra-Premium feel
const skillsData = [
  {
    category: "Languages",
    description: "Core programming languages I use.",
    items: [
      { name: "JavaScript", icon: <FaJs />, hover: "hover:text-[#F7DF1E] hover:bg-[#F7DF1E]/10 hover:border-[#F7DF1E]/30" },
      { name: "TypeScript", icon: <SiTypescript />, hover: "hover:text-[#3178C6] hover:bg-[#3178C6]/10 hover:border-[#3178C6]/30" },
      { name: "HTML5", icon: <FaHtml5 />, hover: "hover:text-[#E34F26] hover:bg-[#E34F26]/10 hover:border-[#E34F26]/30" },
      { name: "CSS3", icon: <FaCss3Alt />, hover: "hover:text-[#1572B6] hover:bg-[#1572B6]/10 hover:border-[#1572B6]/30" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    description: "My go-to tools for building UIs & APIs.",
    items: [
      { name: "React.js", icon: <FaReact />, hover: "hover:text-[#61DAFB] hover:bg-[#61DAFB]/10 hover:border-[#61DAFB]/30" },
      { name: "Next.js", icon: <SiNextdotjs />, hover: "hover:text-white hover:bg-white/10 hover:border-white/30" },
      { name: "Tailwind", icon: <SiTailwindcss />, hover: "hover:text-[#06B6D4] hover:bg-[#06B6D4]/10 hover:border-[#06B6D4]/30" },
      { name: "Node.js", icon: <FaNodeJs />, hover: "hover:text-[#339933] hover:bg-[#339933]/10 hover:border-[#339933]/30" },
      { name: "Express.js", icon: <SiExpress />, hover: "hover:text-gray-300 hover:bg-gray-300/10 hover:border-gray-300/30" },
    ],
  },
  {
    category: "Databases",
    description: "Where data lives securely and scales.",
    items: [
      { name: "MongoDB", icon: <SiMongodb />, hover: "hover:text-[#47A248] hover:bg-[#47A248]/10 hover:border-[#47A248]/30" },
      { name: "MySQL", icon: <SiMysql />, hover: "hover:text-[#4479A1] hover:bg-[#4479A1]/10 hover:border-[#4479A1]/30" },
    ],
  },
  {
    category: "Tools & Others",
    description: "Daily drivers that keep me productive.",
    items: [
      { name: "Git", icon: <FaGitAlt />, hover: "hover:text-[#F05032] hover:bg-[#F05032]/10 hover:border-[#F05032]/30" },
      { name: "VS Code", icon: <VscCode />, hover: "hover:text-[#007ACC] hover:bg-[#007ACC]/10 hover:border-[#007ACC]/30" },
      { name: "Postman", icon: <SiPostman />, hover: "hover:text-[#FF6C37] hover:bg-[#FF6C37]/10 hover:border-[#FF6C37]/30" },
      { name: "Figma", icon: <FaFigma />, hover: "hover:text-[#F24E1E] hover:bg-[#F24E1E]/10 hover:border-[#F24E1E]/30" },
      { name: "Redux", icon: <SiRedux />, hover: "hover:text-[#764ABC] hover:bg-[#764ABC]/10 hover:border-[#764ABC]/30" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="relative bg-[#050505] text-white px-6 sm:px-10 md:px-20 lg:px-28 pt-32 pb-44 overflow-hidden selection:bg-teal-500/30">
      
      {/* 🌟 Premium Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Subtle Texture Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.1] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================= HEADER ================= */}
        <header className="mb-20 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs uppercase tracking-widest text-gray-300 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Technical Arsenal
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-6">
            Technologies I use <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              to build products.
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            A focused set of languages, frameworks, databases, and tools that I use to design, build, and ship scalable full-stack applications.
          </p>
        </header>

        {/* ================= BENTO GRID ================= */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillsData.map((group, idx) => (
            <div 
              key={idx} 
              className="bg-[#111827]/40 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-[2rem] hover:bg-[#111827]/60 hover:border-white/20 transition-all duration-500 group"
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white tracking-wide mb-2 flex items-center gap-3">
                  {group.category}
                </h3>
                <p className="text-sm text-gray-500">{group.description}</p>
              </div>

              {/* Skills Tiles */}
              <div className="flex flex-wrap gap-4">
                {group.items.map((skill, i) => (
                  <div
                    key={i}
                    className={`
                      flex items-center gap-2.5 px-4 py-3 rounded-xl
                      bg-white/[0.03] border border-white/5 text-gray-400
                      transition-all duration-300 cursor-default
                      hover:-translate-y-1 hover:shadow-lg
                      ${skill.hover}
                    `}
                  >
                    <span className="text-2xl transition-transform duration-300 group-hover/item:scale-110">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium tracking-wide">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;