import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
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
import { ArrowRight, Layers, Terminal } from "lucide-react";

// ================= DATA ARRAYS ================= //
const skillsData = [
  {
    category: "Languages",
    description: "Core programming languages I use to write logic.",
    items: [
      { name: "JavaScript", icon: <FaJs />, hover: "hover:text-[#F7DF1E] hover:bg-[#F7DF1E]/10 hover:border-[#F7DF1E]/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(247,223,30,0.8)]" },
      { name: "TypeScript", icon: <SiTypescript />, hover: "hover:text-[#3178C6] hover:bg-[#3178C6]/10 hover:border-[#3178C6]/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(49,120,198,0.8)]" },
      { name: "HTML5", icon: <FaHtml5 />, hover: "hover:text-[#E34F26] hover:bg-[#E34F26]/10 hover:border-[#E34F26]/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(227,79,38,0.8)]" },
      { name: "CSS3", icon: <FaCss3Alt />, hover: "hover:text-[#1572B6] hover:bg-[#1572B6]/10 hover:border-[#1572B6]/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(21,114,182,0.8)]" },
    ],
  },
  {
    category: "Frameworks & UI",
    description: "My go-to tools for building dynamic interfaces & APIs.",
    items: [
      { name: "React.js", icon: <FaReact />, hover: "hover:text-[#61DAFB] hover:bg-[#61DAFB]/10 hover:border-[#61DAFB]/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(97,218,251,0.8)]" },
      { name: "Next.js", icon: <SiNextdotjs />, hover: "hover:text-white hover:bg-white/10 hover:border-white/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" },
      { name: "Tailwind", icon: <SiTailwindcss />, hover: "hover:text-[#06B6D4] hover:bg-[#06B6D4]/10 hover:border-[#06B6D4]/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" },
      { name: "Node.js", icon: <FaNodeJs />, hover: "hover:text-[#339933] hover:bg-[#339933]/10 hover:border-[#339933]/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(51,153,51,0.8)]" },
      { name: "Express.js", icon: <SiExpress />, hover: "hover:text-gray-300 hover:bg-gray-300/10 hover:border-gray-300/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(209,213,219,0.8)]" },
      { name: "Framer Motion", icon: <SiFramer />, hover: "hover:text-[#0055FF] hover:bg-[#0055FF]/10 hover:border-[#0055FF]/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(0,85,255,0.8)]" },
    ],
  },
  {
    category: "Databases & Data",
    description: "Where data lives securely, scales, and is visualized.",
    items: [
      { name: "MongoDB", icon: <SiMongodb />, hover: "hover:text-[#47A248] hover:bg-[#47A248]/10 hover:border-[#47A248]/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(71,162,72,0.8)]" },
      { name: "MySQL", icon: <SiMysql />, hover: "hover:text-[#4479A1] hover:bg-[#4479A1]/10 hover:border-[#4479A1]/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(68,121,161,0.8)]" },
      { name: "Redux", icon: <SiRedux />, hover: "hover:text-[#764ABC] hover:bg-[#764ABC]/10 hover:border-[#764ABC]/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(118,74,188,0.8)]" },
      { name: "Recharts", icon: <FaChartLine />, hover: "hover:text-[#22B5BF] hover:bg-[#22B5BF]/10 hover:border-[#22B5BF]/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(34,181,191,0.8)]" },
    ],
  },
  {
    category: "Integrations & Tools",
    description: "Authentication, payments, and daily productivity drivers.",
    items: [
      { name: "JWT Auth", icon: <SiJsonwebtokens />, hover: "hover:text-[#FB015B] hover:bg-[#FB015B]/10 hover:border-[#FB015B]/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(251,1,91,0.8)]" },
      { name: "Next-Auth", icon: <FaShieldAlt />, hover: "hover:text-green-400 hover:bg-green-400/10 hover:border-green-400/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(74,222,128,0.8)]" },
      { name: "Google OAuth", icon: <FaGoogle />, hover: "hover:text-[#4285F4] hover:bg-[#4285F4]/10 hover:border-[#4285F4]/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(66,133,244,0.8)]" },
      { name: "Razorpay", icon: <SiRazorpay />, hover: "hover:text-[#3395FF] hover:bg-[#3395FF]/10 hover:border-[#3395FF]/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(51,149,255,0.8)]" },
      { name: "Git", icon: <FaGitAlt />, hover: "hover:text-[#F05032] hover:bg-[#F05032]/10 hover:border-[#F05032]/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(240,80,50,0.8)]" },
      { name: "Postman", icon: <SiPostman />, hover: "hover:text-[#FF6C37] hover:bg-[#FF6C37]/10 hover:border-[#FF6C37]/30 group-hover/skill:drop-shadow-[0_0_15px_rgba(255,108,55,0.8)]" },
    ],
  },
];

// ================= ULTRA PREMIUM SUB-COMPONENTS ================= //

// 1. Mouse Spotlight Card
const SpotlightCard = ({ children, className, glowColor = "rgba(255, 255, 255, 0.15)" }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => { setIsFocused(true); setOpacity(1); };
  const handleBlur = () => { setIsFocused(false); setOpacity(0); };
  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] border border-white/[0.05] bg-[#050505]/60 backdrop-blur-3xl shadow-2xl transition-all duration-500 group ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-500 z-0"
        style={{
          opacity,
          background: `radial-gradient(1000px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

// 2. Heavy Magnetic Button Wrapper
const MagneticButton = ({ children, className, href, onClick }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouse = (e) => {
    if (isTouchDevice) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.5, y: middleY * 0.5 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 100, damping: 10, mass: 0.3 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    if (href.startsWith('#')) return <a href={href} className="inline-block w-full sm:w-auto">{content}</a>;
    return <Link to={href} className="inline-block w-full sm:w-auto">{content}</Link>;
  }
  return <div className="inline-block w-full sm:w-auto cursor-pointer">{content}</div>;
};

// 3. Custom Animated Cursor with Spring Trailer
const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      setIsHovering(
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.classList.contains('cursor-hover-target')
      );
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 border border-white/30 rounded-full pointer-events-none z-[9998] mix-blend-difference items-center justify-center backdrop-blur-[2px] hidden md:flex"
        style={{ x: cursorXSpring, y: cursorYSpring, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
          border: isHovering ? "none" : "1px solid rgba(255,255,255,0.3)"
        }}
        transition={{ duration: 0.15 }}
      >
        {isHovering && <span className="text-[5px] font-extrabold text-black uppercase tracking-[0.3em]">View</span>}
      </motion.div>
    </>
  );
};


// ================= MAIN COMPONENT ================= //

const Skills = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const revealVariants = {
    hidden: { opacity: 0, y: 100, rotate: 2 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 50, damping: 25, mass: 1 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 60, damping: 20, mass: 1 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  return (
    <main ref={containerRef} className="relative bg-[#000000] text-white selection:bg-teal-500/30 overflow-hidden font-sans antialiased cursor-auto md:cursor-none">
      
      <CustomCursor />

      {/* 🌟 Ultra Premium Liquid Mesh Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[120vw] sm:w-[60vw] h-[120vw] sm:h-[60vw] rounded-full bg-teal-900/15 sm:bg-teal-900/20 blur-[150px] sm:blur-[250px] mix-blend-screen animate-[pulse_15s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[130vw] sm:w-[70vw] h-[130vw] sm:h-[70vw] rounded-full bg-blue-900/15 sm:bg-blue-900/20 blur-[150px] sm:blur-[250px] mix-blend-screen animate-[pulse_20s_ease-in-out_infinite_reverse]" />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:70px_70px] sm:bg-[size:150px_150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80 md:opacity-95" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06] mix-blend-overlay pointer-events-none" />
      </div>

      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] md:h-[4px] bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 z-[999] origin-left shadow-[0_0_20px_rgba(20,184,166,0.8)]"
        style={{ scaleX }}
      />

      <div className="max-w-[1920px] mx-auto px-4 sm:px-10 md:px-20 lg:px-28 relative z-10 pt-28 sm:pt-40 pb-32 sm:pb-48">

        {/* ================= HEADER ================= */}
        <motion.header 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="mb-20 sm:mb-40 flex flex-col items-center text-center max-w-6xl mx-auto"
        >
          <motion.div variants={revealVariants} className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-3 sm:py-5 rounded-full bg-white/[0.02] border border-white/[0.1] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-300 mb-8 sm:mb-14 backdrop-blur-3xl shadow-2xl cursor-hover-target">
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
            Technical Arsenal
          </motion.div>
          
          <div className="overflow-hidden pb-4 w-full">
            <motion.h1 variants={revealVariants} className="text-[16vw] sm:text-[11rem] lg:text-[13rem] font-bold tracking-tighter leading-[0.8] relative whitespace-nowrap">
              <span className="text-transparent outline-text drop-shadow-2xl mix-blend-plus-lighter">THE</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-10 w-full">
            <motion.h1 variants={revealVariants} className="text-[16vw] sm:text-[11rem] lg:text-[13rem] font-bold tracking-tighter leading-[0.8] relative whitespace-nowrap">
              <span className="text-white pb-2 sm:pb-4 inline-block drop-shadow-[0_20px_40px_rgba(255,255,255,0.15)] md:drop-shadow-[0_40px_80px_rgba(255,255,255,0.15)]">STACK.</span>
            </motion.h1>
          </div>

          <motion.p variants={revealVariants} className="text-gray-400 text-lg sm:text-3xl font-light tracking-wide leading-[1.6] sm:leading-[1.8] max-w-5xl px-4 mix-blend-plus-lighter">
            A focused set of languages, frameworks, integrations, and tools that I use to design, build, and ship scalable enterprise-grade applications.
          </motion.p>
        </motion.header>

        {/* ================= SKILLS BENTO GRID ================= */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mb-32 sm:mb-56 relative perspective-1000">
          {skillsData.map((group, idx) => {
             // Assign alternating heights or spans to create an asymmetric Bento look
             const isWide = idx === 0 || idx === 3;
             
             return (
              <motion.div 
                key={idx} 
                variants={fadeUp} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }} 
                className={`${isWide ? "md:col-span-2 lg:col-span-1" : "col-span-1"}`}
              >
                <SpotlightCard glowColor="rgba(45, 212, 191, 0.15)" className="p-8 sm:p-12 lg:p-16 h-full cursor-hover-target rounded-[2rem] sm:rounded-[4rem] group/card">
                  <div className="mb-10 sm:mb-14">
                    <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4 sm:mb-6 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-white group-hover/card:to-gray-500 transition-all duration-700">
                      {group.category}
                    </h3>
                    <p className="text-gray-400 text-base sm:text-xl font-light leading-[1.6] sm:leading-[1.8] mix-blend-plus-lighter">{group.description}</p>
                  </div>

                  {/* Skills Tiles Container */}
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    {group.items.map((skill, i) => (
                      <div
                        key={i}
                        className={`
                          group/skill flex items-center gap-3 sm:gap-4 px-5 sm:px-8 py-3 sm:py-5 rounded-2xl sm:rounded-3xl
                          bg-[#0a0a0a]/80 border border-white/5 text-gray-400 backdrop-blur-md
                          transition-all duration-500 cursor-default
                          hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]
                          ${skill.hover}
                        `}
                      >
                        <span className="text-2xl sm:text-4xl transition-transform duration-500 group-hover/skill:scale-110">
                          {skill.icon}
                        </span>
                        <span className="text-sm sm:text-lg font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
             );
          })}
        </div>

        {/* ================= CTA ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}
          className="pt-16 sm:pt-24 border-t border-white/5 flex flex-col items-center text-center px-4"
        >
          <h3 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-10 sm:mb-16 tracking-tight">Ready to see these <br className="sm:hidden"/> skills in action?</h3>
          <MagneticButton href="/projects" className="group relative inline-flex items-center justify-center gap-4 sm:gap-6 px-10 sm:px-16 py-6 sm:py-8 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white rounded-full overflow-hidden transition-all shadow-[0_10px_40px_-10px_rgba(45,212,191,0.6)] w-full sm:w-auto">
            <span className="relative z-10 text-xs sm:text-base font-extrabold tracking-[0.2em] sm:tracking-[0.3em] uppercase">Explore Masterpieces</span>
            <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </MagneticButton>
        </motion.div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .outline-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.7);
          color: transparent;
        }
        @media (min-width: 768px) {
          .outline-text {
            -webkit-text-stroke: 3px rgba(255, 255, 255, 0.8);
          }
        }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 4px; border: 1px solid #111; }
        ::-webkit-scrollbar-thumb:hover { background: #444; }
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
      `}} />
    </main>
  );
};

export default Skills;