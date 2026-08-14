import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { 
  Code2, 
  MonitorSmartphone, 
  Server, 
  Zap, 
  Cloud, 
  CheckCircle2, 
  ArrowRight,
  Quote,
  Layers
} from "lucide-react"; 

// ================= DATA ARRAYS ================= //
const servicesData = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end development of production-ready web applications — from frontend interfaces to backend logic, APIs, and databases. Built with long-term scalability in mind.",
    icon: <Code2 size={28} strokeWidth={1.5} />,
    color: "group-hover:text-teal-400 group-hover:drop-shadow-[0_0_20px_rgba(45,212,191,0.8)]",
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    title: "Frontend Engineering & UX",
    description: "Crafting clean, responsive, and accessible user interfaces that feel fast, intuitive, and consistent across all devices and screen sizes.",
    icon: <MonitorSmartphone size={28} strokeWidth={1.5} />,
    color: "group-hover:text-blue-400 group-hover:drop-shadow-[0_0_20px_rgba(96,165,250,0.8)]",
    colSpan: "col-span-1"
  },
  {
    title: "Backend & API Architecture",
    description: "Designing secure and scalable backend systems, RESTful APIs, authentication flows, and data models that perfectly support business growth.",
    icon: <Server size={28} strokeWidth={1.5} />,
    color: "group-hover:text-purple-400 group-hover:drop-shadow-[0_0_20px_rgba(192,132,252,0.8)]",
    colSpan: "col-span-1"
  },
  {
    title: "Performance Optimization",
    description: "Improving load times, reducing bottlenecks, and optimizing both frontend and backend performance for a seamless user experience.",
    icon: <Zap size={28} strokeWidth={1.5} />,
    color: "group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]",
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    title: "Deployment & Scalability",
    description: "Preparing applications for real-world traffic — cloud deployment, environment setup, CI/CD pipelines, and robust scalability planning.",
    icon: <Cloud size={28} strokeWidth={1.5} />,
    color: "group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_20px_rgba(52,211,153,0.8)]",
    colSpan: "md:col-span-3 lg:col-span-3"
  }
];

const processSteps = [
  {
    phase: "01 // Discovery & Architecture",
    title: "Understand Deeply",
    desc: "I dissect the problem before writing a single line of code. Clarity is the first step to scalable software."
  },
  {
    phase: "02 // Systems Design",
    title: "Design Architecture",
    desc: "Structuring databases, APIs, and component trees to ensure the system is maintainable and ready for scale."
  },
  {
    phase: "03 // Engineering",
    title: "Build & Iterate",
    desc: "Writing clean, modular, and testable code using modern frameworks while continuously refining based on feedback."
  },
  {
    phase: "04 // Optimization",
    title: "Optimize & Ship",
    desc: "Aggressively optimizing load times, backend queries, and UI responsiveness before hitting the deploy button."
  },
  {
    phase: "05 // Deployment",
    title: "Scale & Maintain",
    desc: "Setting up CI/CD pipelines, configuring environment variables, and pushing to production environments like Vercel or AWS."
  }
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
const MagneticButton = ({ children, className, href, onClick, target }) => {
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
    setPosition({ x: middleX * 0.4, y: middleY * 0.4 });
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
    if (href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('http')) {
      return <a href={href} target={target} rel={target === '_blank' ? "noopener noreferrer" : undefined} className="inline-block w-full sm:w-auto">{content}</a>;
    }
    return <Link to={href} className="inline-block w-full sm:w-auto">{content}</Link>;
  }
  return <div className="inline-block w-full sm:w-auto cursor-pointer">{content}</div>;
};

// 3. Custom Animated Cursor
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

const Services = () => {
  const containerRef = useRef(null);
  
  // Track scroll without hydrating a target ref to prevent crashes
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Corrected Framer Motion Animation Variants to match exact states
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 25, mass: 1 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 60, damping: 20, mass: 1 } },
  };

  return (
    <main ref={containerRef} className="relative bg-[#000000] text-white selection:bg-teal-500/30 overflow-hidden font-sans antialiased cursor-auto md:cursor-none min-h-screen">
      
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

      <div className="max-w-[1920px] mx-auto px-4 sm:px-10 md:px-20 lg:px-28 relative z-10 pt-28 sm:pt-36 pb-32 sm:pb-48">

        {/* ================= HEADER ================= */}
        <motion.header 
          initial="hidden" animate="show" variants={containerVariants}
          className="mb-16 sm:mb-24 flex flex-col items-center text-center max-w-6xl mx-auto"
        >
          <motion.div variants={revealVariants} className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-3 sm:py-5 rounded-full bg-white/[0.02] border border-white/[0.1] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-300 mb-6 sm:mb-10 backdrop-blur-3xl shadow-2xl cursor-hover-target">
            <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
            Core Capabilities
          </motion.div>
          
          <div className="overflow-hidden w-full pb-2">
            <motion.h1 variants={revealVariants} className="text-[12vw] sm:text-[9rem] lg:text-[11rem] font-bold tracking-tighter leading-none relative whitespace-nowrap">
              <span className="text-transparent outline-text drop-shadow-2xl mix-blend-plus-lighter">DIGITAL</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden w-full pb-6">
            <motion.h1 variants={revealVariants} className="text-[12vw] sm:text-[9rem] lg:text-[11rem] font-bold tracking-tighter leading-none relative whitespace-nowrap">
              <span className="text-white drop-shadow-[0_20px_40px_rgba(255,255,255,0.15)] md:drop-shadow-[0_40px_80px_rgba(255,255,255,0.15)]">SOLUTIONS.</span>
            </motion.h1>
          </div>

          <motion.p variants={revealVariants} className="text-gray-400 text-base sm:text-2xl font-light tracking-wide leading-relaxed max-w-4xl mix-blend-plus-lighter mt-4">
            I don't just write code. I help visionary teams design, build, and refine entire digital ecosystems that are incredibly fast, scalable, and secure.
          </motion.p>
        </motion.header>

        {/* ================= SERVICES BENTO GRID ================= */}
        <motion.div 
          variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 mb-32 sm:mb-56"
        >
          {servicesData.map((service, idx) => (
            <motion.div key={idx} variants={fadeUp} className={service.colSpan}>
              <SpotlightCard glowColor="rgba(255,255,255,0.15)" className="p-8 sm:p-14 lg:p-16 h-full cursor-hover-target rounded-[2rem] sm:rounded-[4rem]">
                <div className={`w-16 h-16 sm:w-28 sm:h-28 rounded-xl sm:rounded-[2.5rem] bg-[#0a0a0a] flex items-center justify-center mb-8 sm:mb-14 text-gray-500 transition-all duration-700 border border-white/[0.08] shadow-inner ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-8 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-700 leading-tight">{service.title}</h3>
                <p className="text-gray-400 text-sm sm:text-xl lg:text-2xl leading-[1.6] sm:leading-[1.8] font-light">{service.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= METHODOLOGY & PHILOSOPHY ================= */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-start mt-10 sm:mt-20">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-5 lg:sticky lg:top-40">
            <h3 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tighter mb-6 sm:mb-12 text-white leading-[0.9]">Engineering <br/><span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-700">Methodology.</span></h3>
            <p className="text-lg sm:text-2xl lg:text-3xl text-gray-400 font-light leading-relaxed mb-10 sm:mb-20 mix-blend-plus-lighter">A systematic, uncompromising approach to transforming complex business requirements into elegant, high-performance software architecture.</p>
            
            <SpotlightCard glowColor="rgba(59, 130, 246, 0.2)" className="p-10 sm:p-20 cursor-hover-target rounded-[2rem] sm:rounded-[4rem] hidden sm:block">
              <Quote className="text-white/10 w-20 h-20 sm:w-40 sm:h-40 mb-8 sm:mb-14 group-hover:scale-110 transition-transform duration-1000" />
              <blockquote className="text-2xl sm:text-5xl font-medium text-gray-300 leading-[1.3] tracking-tight">
                “Good software is not defined by features — but by how well it holds up over time under <span className="text-white font-bold drop-shadow-2xl">real-world pressure.</span>”
              </blockquote>
            </SpotlightCard>
          </motion.div>

          <div className="lg:col-span-7 relative pt-8 sm:pt-12 pl-4 sm:pl-0">
            {/* Timeline Scroll Progress Line */}
            <div className="absolute top-0 bottom-0 left-[24px] sm:left-[45px] w-[2px] bg-white/10">
               <motion.div 
                 className="absolute top-0 w-full bg-gradient-to-b from-teal-500 via-blue-500 to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                 style={{ height: useTransform(scrollYProgress, [0.3, 0.7], ["0%", "100%"]) }}
               />
            </div>
            
            <div className="flex flex-col gap-16 sm:gap-32">
              {processSteps.map((step, idx) => (
                <motion.div 
                  key={idx} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                  className="relative pl-16 sm:pl-36 group cursor-hover-target"
                >
                  <div className="absolute left-[13px] sm:left-[33px] top-1 sm:top-4 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-[4px] sm:border-[5px] border-[#000] bg-gray-600 group-hover:bg-white transition-colors duration-500 shadow-[0_0_0_5px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_30px_rgba(255,255,255,1)] z-10" />
                  
                  <p className="text-[10px] sm:text-base uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold text-teal-500 mb-4 sm:mb-8 flex items-center gap-3 sm:gap-5">
                    <span className="w-8 sm:w-16 h-[2px] bg-teal-500/50 block"></span>
                    {step.phase}
                  </p>
                  <h4 className="text-2xl sm:text-5xl font-bold text-white mb-4 sm:mb-8 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-500">{step.title}</h4>
                  <p className="text-gray-400 text-base sm:text-2xl leading-[1.6] sm:leading-[1.8] font-light mix-blend-plus-lighter">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mt-32 sm:mt-56 pt-16 sm:pt-24 border-t border-white/5 flex flex-col items-center text-center px-4"
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

export default Services;