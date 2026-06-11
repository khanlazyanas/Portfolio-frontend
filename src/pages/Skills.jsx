import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaShieldAlt,
  FaChartLine,
  FaGoogle,
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
  SiFramer,
  SiJsonwebtokens,
  SiRazorpay,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

// ✅ Added Bizflow & Nexpos Tech Stack with Specific Brand Hover Colors
const skillsData = [
  {
    category: "Languages",
    description: "Core programming languages I use to write logic.",
    items: [
      { name: "JavaScript", icon: <FaJs />, hover: "hover:text-[#F7DF1E] hover:bg-[#F7DF1E]/10 hover:border-[#F7DF1E]/30" },
      { name: "TypeScript", icon: <SiTypescript />, hover: "hover:text-[#3178C6] hover:bg-[#3178C6]/10 hover:border-[#3178C6]/30" },
      { name: "HTML5", icon: <FaHtml5 />, hover: "hover:text-[#E34F26] hover:bg-[#E34F26]/10 hover:border-[#E34F26]/30" },
      { name: "CSS3", icon: <FaCss3Alt />, hover: "hover:text-[#1572B6] hover:bg-[#1572B6]/10 hover:border-[#1572B6]/30" },
    ],
  },
  {
    category: "Frameworks & UI",
    description: "My go-to tools for building dynamic interfaces & APIs.",
    items: [
      { name: "React.js", icon: <FaReact />, hover: "hover:text-[#61DAFB] hover:bg-[#61DAFB]/10 hover:border-[#61DAFB]/30" },
      { name: "Next.js", icon: <SiNextdotjs />, hover: "hover:text-white hover:bg-white/10 hover:border-white/30" },
      { name: "Tailwind", icon: <SiTailwindcss />, hover: "hover:text-[#06B6D4] hover:bg-[#06B6D4]/10 hover:border-[#06B6D4]/30" },
      { name: "Node.js", icon: <FaNodeJs />, hover: "hover:text-[#339933] hover:bg-[#339933]/10 hover:border-[#339933]/30" },
      { name: "Express.js", icon: <SiExpress />, hover: "hover:text-gray-300 hover:bg-gray-300/10 hover:border-gray-300/30" },
      { name: "Framer Motion", icon: <SiFramer />, hover: "hover:text-[#0055FF] hover:bg-[#0055FF]/10 hover:border-[#0055FF]/30" },
    ],
  },
  {
    category: "Databases & Data",
    description: "Where data lives securely, scales, and is visualized.",
    items: [
      { name: "MongoDB", icon: <SiMongodb />, hover: "hover:text-[#47A248] hover:bg-[#47A248]/10 hover:border-[#47A248]/30" },
      { name: "MySQL", icon: <SiMysql />, hover: "hover:text-[#4479A1] hover:bg-[#4479A1]/10 hover:border-[#4479A1]/30" },
      { name: "Redux", icon: <SiRedux />, hover: "hover:text-[#764ABC] hover:bg-[#764ABC]/10 hover:border-[#764ABC]/30" },
      { name: "Recharts", icon: <FaChartLine />, hover: "hover:text-[#22B5BF] hover:bg-[#22B5BF]/10 hover:border-[#22B5BF]/30" },
    ],
  },
  {
    category: "Integrations & Tools",
    description: "Authentication, payments, and daily productivity drivers.",
    items: [
      { name: "JWT Auth", icon: <SiJsonwebtokens />, hover: "hover:text-[#FB015B] hover:bg-[#FB015B]/10 hover:border-[#FB015B]/30" },
      { name: "Next-Auth", icon: <FaShieldAlt />, hover: "hover:text-green-400 hover:bg-green-400/10 hover:border-green-400/30" },
      { name: "Google OAuth", icon: <FaGoogle />, hover: "hover:text-[#4285F4] hover:bg-[#4285F4]/10 hover:border-[#4285F4]/30" },
      { name: "Razorpay", icon: <SiRazorpay />, hover: "hover:text-[#3395FF] hover:bg-[#3395FF]/10 hover:border-[#3395FF]/30" },
      { name: "Git", icon: <FaGitAlt />, hover: "hover:text-[#F05032] hover:bg-[#F05032]/10 hover:border-[#F05032]/30" },
      { name: "Postman", icon: <SiPostman />, hover: "hover:text-[#FF6C37] hover:bg-[#FF6C37]/10 hover:border-[#FF6C37]/30" },
    ],
  },
];

const Skills = () => {
  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-[#050505] text-white px-6 sm:px-10 md:px-20 lg:px-28 pt-32 pb-44 overflow-hidden selection:bg-teal-500/30">
      
      {/* 🌟 Premium Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Subtle Texture Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.1] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================= HEADER ================= */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs uppercase tracking-widest text-gray-300 mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(45,212,191,0.05)]">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Technical Arsenal
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-6">
            Technologies I use <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              to build products.
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            A focused set of languages, frameworks, integrations, and tools that I use to design, build, and ship scalable enterprise-grade applications.
          </p>
        </motion.header>

        {/* ================= BENTO GRID ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {skillsData.map((group, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-[#111827]/40 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-[2rem] hover:bg-[#111827]/60 hover:border-white/20 transition-all duration-500 group shadow-lg hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white tracking-wide mb-2 flex items-center gap-3">
                  {group.category}
                </h3>
                <p className="text-sm text-gray-500 font-medium">{group.description}</p>
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
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;