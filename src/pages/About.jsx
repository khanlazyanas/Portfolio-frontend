import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { 
  Terminal, 
  Code2, 
  Layers, 
  Rocket, 
  Quote, 
  Target, 
  Cpu, 
  Zap, 
  CheckCircle2,
  User,
  ArrowRight
} from "lucide-react"; 
import profileImage from "../assets/anas2.jpg";

// ================= DATA ARRAYS ================= //
const journeyData = [
  {
    year: "2022",
    title: "The Foundation",
    description: "Started with HTML, CSS, and JavaScript fundamentals. Built the core understanding of how the web works.",
    icon: <Terminal size={20} strokeWidth={1.5} />,
    color: "text-gray-400",
    glow: "rgba(156, 163, 175, 0.5)"
  },
  {
    year: "2023",
    title: "Entering the Frontend",
    description: "Learned React, state management, backend development basics, and how to consume REST APIs effectively.",
    icon: <Code2 size={20} strokeWidth={1.5} />,
    color: "text-blue-400",
    glow: "rgba(96, 165, 250, 0.5)"
  },
  {
    year: "2024",
    title: "Full-Stack Mastery",
    description: "Built end-to-end MERN stack projects focusing on scalability, database architecture, and performance optimization.",
    icon: <Layers size={20} strokeWidth={1.5} />,
    color: "text-purple-400",
    glow: "rgba(192, 132, 252, 0.5)"
  },
  {
    year: "Now",
    title: "System Design & Beyond",
    description: "Deepening system design knowledge, exploring AI integrations, and building production-ready, enterprise-grade solutions.",
    icon: <Rocket size={20} strokeWidth={1.5} />,
    color: "text-teal-400",
    glow: "rgba(45, 212, 191, 0.5)"
  }
];

const processData = [
  {
    num: "01",
    title: "Understand Deeply",
    desc: "I dissect the problem before writing a single line of code. Clarity is the first step to scalable software.",
    icon: <Target size={32} strokeWidth={1.5} className="text-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]" />
  },
  {
    num: "02",
    title: "Design Architecture",
    desc: "Structuring databases, APIs, and component trees to ensure the system is maintainable and ready for scale.",
    icon: <Layers size={32} strokeWidth={1.5} className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
  },
  {
    num: "03",
    title: "Build & Iterate",
    desc: "Writing clean, modular, and testable code using modern frameworks while continuously refining based on feedback.",
    icon: <Cpu size={32} strokeWidth={1.5} className="text-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]" />
  },
  {
    num: "04",
    title: "Optimize & Ship",
    desc: "Aggressively optimizing load times, backend queries, and UI responsiveness before hitting the deploy button.",
    icon: <Zap size={32} strokeWidth={1.5} className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
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

// 3. 3D Magnetic Tilt Component 
const TiltWrapper = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const mouseXSpring = useSpring(x, { stiffness: 80, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 80, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current || isTouchDevice) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  if(isTouchDevice) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }} className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

// 4. Custom Animated Cursor
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

const About = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const yHeroText = useTransform(scrollYProgress, [0, 0.2], [0, isMobile ? 80 : 150]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scaleHeroImage = useTransform(scrollYProgress, [0, 0.2], [1, isMobile ? 1.02 : 1.05]);
  const yHeroImage = useTransform(scrollYProgress, [0, 0.2], [0, isMobile ? 50 : 100]);

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
      <div className="fixed inset-0 z-0 pointer-events-none bg-black">
        <div className="absolute top-[-10%] right-[-10%] w-[120vw] sm:w-[60vw] h-[120vw] sm:h-[60vw] rounded-full bg-teal-900/15 sm:bg-teal-900/20 blur-[150px] sm:blur-[250px] mix-blend-screen animate-[pulse_15s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[130vw] sm:w-[70vw] h-[130vw] sm:h-[70vw] rounded-full bg-blue-900/15 sm:bg-blue-900/20 blur-[150px] sm:blur-[250px] mix-blend-screen animate-[pulse_20s_ease-in-out_infinite_reverse]" />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:100px_100px] sm:bg-[size:150px_150px]" />
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
          style={{ y: yHeroText, opacity: opacityHero }}
          initial="hidden" animate="visible" variants={staggerContainer}
          className="mb-20 sm:mb-40 flex flex-col items-center text-center max-w-6xl mx-auto"
        >
          <motion.div variants={revealVariants} className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-3 sm:py-5 rounded-full bg-white/[0.02] border border-white/[0.1] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-300 mb-8 sm:mb-14 backdrop-blur-3xl shadow-2xl cursor-hover-target">
            <User className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
            About Me
          </motion.div>

          <div className="overflow-hidden pb-4 w-full">
            <motion.h1 variants={revealVariants} className="text-[16vw] sm:text-[11rem] lg:text-[13rem] font-bold tracking-tighter leading-[0.8] relative whitespace-nowrap">
              <span className="text-transparent outline-text drop-shadow-2xl mix-blend-plus-lighter">MY</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-10 w-full">
            <motion.h1 variants={revealVariants} className="text-[16vw] sm:text-[11rem] lg:text-[13rem] font-bold tracking-tighter leading-[0.8] relative whitespace-nowrap">
              <span className="text-white pb-2 sm:pb-4 inline-block drop-shadow-[0_20px_40px_rgba(255,255,255,0.15)] md:drop-shadow-[0_40px_80px_rgba(255,255,255,0.15)]">STORY.</span>
            </motion.h1>
          </div>

          <motion.p variants={revealVariants} className="text-gray-400 text-lg sm:text-3xl font-light tracking-wide leading-[1.6] sm:leading-[1.8] max-w-4xl px-4 mix-blend-plus-lighter">
            I’m Anas Khan — a full-stack developer focused on crafting clean, scalable, and production-ready web applications with a strong emphasis on performance, architecture, and user experience.
          </motion.p>
        </motion.header>

        {/* ================= HERO INTRO ================= */}
        <article className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-40 sm:mb-56">

          {/* 📸 Cinematic Image Section */}
          <motion.div 
            initial={{ opacity: 0, filter: "blur(40px)", scale: 0.8 }} 
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }} 
            transition={{ type: "spring", stiffness: 40, damping: 25, delay: 0.4 }}
            className="lg:col-span-5 relative group w-full max-w-[350px] sm:max-w-[500px] mx-auto perspective-1000 order-2 lg:order-1"
          >
            <TiltWrapper className="w-full">
              <motion.div style={{ scale: scaleHeroImage, y: yHeroImage }} className="rounded-[2rem] sm:rounded-[4rem] overflow-hidden border border-white/[0.1] relative h-[400px] sm:h-[600px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] sm:shadow-[0_30px_80px_rgba(0,0,0,0.95)] bg-[#050505]">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-90 pointer-events-none" />
                <img
                  src={profileImage}
                  alt="Anas Khan"
                  loading="eager"
                  className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                />
              </motion.div>
            </TiltWrapper>
          </motion.div>

          {/* 📝 Bio Section */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <SpotlightCard glowColor="rgba(45, 212, 191, 0.15)" className="p-8 sm:p-16 rounded-[2rem] sm:rounded-[4rem]">
              <div className="inline-flex items-center gap-3 sm:gap-4 text-[10px] sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-teal-400 font-bold mb-6 sm:mb-8">
                <span className="w-8 sm:w-12 h-[2px] bg-teal-400"></span> Who I Am
              </div>

              <h3 className="text-3xl sm:text-6xl font-bold text-white mb-8 sm:mb-12 leading-[1.1] sm:leading-[0.9] tracking-tighter">
                Full-stack developer with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700">product mindset.</span>
              </h3>

              <div className="space-y-6 sm:space-y-8 text-gray-400 text-base sm:text-2xl leading-[1.6] sm:leading-[1.8] font-light mix-blend-plus-lighter">
                <p>
                  Hello! I’m <span className="text-white font-medium">Anas Khan</span>, a self-driven full-stack developer who enjoys transforming complex problems into elegant, maintainable, and high-performance systems.
                </p>
                <p>
                  I specialize in building modern user interfaces using <span className="text-teal-400 font-medium drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]">React</span> and <span className="text-teal-400 font-medium drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]">Tailwind CSS</span>, combined with scalable backend systems powered by the <span className="text-blue-400 font-medium drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">MERN stack</span>.
                </p>
                <div className="relative pl-6 sm:pl-8 py-2 mt-6 sm:mt-8">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-teal-400 to-blue-500 rounded-full" />
                  <p className="italic text-gray-300 font-medium text-lg sm:text-3xl leading-[1.4] sm:leading-snug tracking-tight">
                    "Beyond writing code, I focus on system design, clean architecture, and long-term project sustainability."
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </article>

        {/* ================= TIMELINE & PHILOSOPHY ================= */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-start mt-20">

          {/* 🛣️ Interactive Journey Timeline (Col 7) */}
          <div className="lg:col-span-7 relative pt-8 sm:pt-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="inline-flex items-center gap-3 sm:gap-4 text-[10px] sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-teal-400 font-bold mb-12 sm:mb-24 pl-2 sm:pl-0">
              <span className="w-8 sm:w-16 h-[2px] bg-teal-400"></span> The Journey
            </motion.div>

            {/* Timeline Line */}
            <div className="absolute top-24 sm:top-32 bottom-0 left-[26px] sm:left-[35px] md:left-1/2 md:-translate-x-[1px] w-[2px] bg-white/10">
               <motion.div 
                 className="absolute top-0 w-full bg-gradient-to-b from-teal-500 via-blue-500 to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                 style={{ height: useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]) }}
               />
            </div>

            <div className="flex flex-col gap-12 sm:gap-24 relative">
              {journeyData.map((item, idx) => (
                <motion.div 
                  key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                  className="relative flex flex-col md:flex-row items-start md:items-center justify-between md:odd:flex-row-reverse group pl-16 sm:pl-28 md:pl-0"
                >
                  {/* Timeline Dot (Interactive) */}
                  <div className={`absolute left-[8px] sm:left-[16px] top-4 sm:top-8 md:static md:w-16 md:h-16 flex items-center justify-center w-10 h-10 rounded-full border-[3px] border-[#000] bg-[#111] ${item.color} transition-all duration-500 z-10 group-hover:bg-white group-hover:border-white shadow-[0_0_0_4px_rgba(255,255,255,0.05)] md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`} style={{ boxShadow: `0 0 20px ${item.glow}` }}>
                    <div className="scale-75 sm:scale-100 group-hover:scale-125 transition-transform duration-500">
                      {item.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <SpotlightCard glowColor={item.glow} className="w-full md:w-[calc(50%-4rem)] p-6 sm:p-12 cursor-default rounded-[1.5rem] sm:rounded-[3rem]">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-4 sm:mb-6">
                      <span className={`text-xl sm:text-4xl font-black ${item.color} tracking-tighter drop-shadow-lg`}>{item.year}</span>
                      <span className="hidden sm:block w-2 h-2 rounded-full bg-white/20"></span>
                      <h4 className="text-lg sm:text-2xl font-bold text-white tracking-tight">{item.title}</h4>
                    </div>
                    <p className="text-sm sm:text-xl text-gray-400 leading-[1.6] sm:leading-[1.8] font-light mix-blend-plus-lighter">{item.description}</p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 💡 Process & Philosophy Bento Grid (Col 5) */}
          <div className="lg:col-span-5 space-y-16 sm:space-y-24 lg:sticky lg:top-40 mt-16 lg:mt-0">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="inline-flex items-center gap-3 sm:gap-4 text-[10px] sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-blue-400 font-bold mb-8 sm:mb-16">
                <span className="w-8 sm:w-16 h-[2px] bg-blue-400"></span> How I Work
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {processData.map((step, idx) => (
                  <SpotlightCard key={idx} glowColor="rgba(59, 130, 246, 0.15)" className="p-8 sm:p-10 cursor-default rounded-[2rem] sm:rounded-[3rem]">
                    <div className="flex justify-between items-start mb-6 sm:mb-10">
                      <span className="text-3xl sm:text-5xl font-black text-white/10 group-hover:text-white/20 transition-colors tracking-tighter">{step.num}</span>
                      <div className="p-3 sm:p-4 rounded-[1rem] bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                        {step.icon}
                      </div>
                    </div>
                    <h4 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4 tracking-tight">{step.title}</h4>
                    <p className="text-xs sm:text-base text-gray-400 leading-[1.6] sm:leading-[1.8] font-light">{step.desc}</p>
                  </SpotlightCard>
                ))}
              </div>
            </motion.div>

            {/* Philosophy Card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <SpotlightCard glowColor="rgba(20, 184, 166, 0.2)" className="p-8 sm:p-16 rounded-[2rem] sm:rounded-[3rem]">
                <Quote className="absolute top-6 right-6 sm:top-8 sm:right-8 text-white/5 w-16 h-16 sm:w-32 sm:h-32 group-hover:scale-110 transition-transform duration-1000" />
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-teal-400 font-bold mb-6 sm:mb-8 relative z-10 flex items-center gap-3 sm:gap-4">
                  <span className="w-6 sm:w-8 h-[2px] bg-teal-400/50 block"></span>
                  Philosophy
                </p>
                <blockquote className="relative z-10 text-xl sm:text-4xl font-medium text-gray-300 leading-[1.4] tracking-tight">
                  “I believe great software is quiet, reliable, and easy to evolve. <span className="text-white font-bold drop-shadow-xl">Clean architecture and clarity</span> always come before unnecessary complexity.”
                </blockquote>
              </SpotlightCard>
            </motion.div>

          </div>
        </div>

        {/* ================= CORE VALUES (MASSIVE BANNER) ================= */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mt-32 sm:mt-56 pt-16 sm:pt-32 border-t border-white/5 text-center relative overflow-hidden">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] sm:w-[80vw] h-[200px] sm:h-[300px] bg-teal-500/10 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none" />
          
          <p className="text-[10px] sm:text-sm uppercase tracking-[0.4em] sm:tracking-[0.5em] text-gray-500 font-bold mb-10 sm:mb-20 relative z-10">
            Core Values
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 max-w-6xl mx-auto relative z-10 px-4 sm:px-0">
            {[
              "Clarity over cleverness",
              "Performance is a feature",
              "Ownership mindset",
              "Continuous learning",
              "Respect for users"
            ].map((value, idx) => (
              <SpotlightCard 
                key={idx} 
                glowColor="rgba(45, 212, 191, 0.2)"
                className="px-6 sm:px-12 py-3 sm:py-6 rounded-full !bg-white/[0.02] cursor-default flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start"
              >
                <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-teal-500 drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]" strokeWidth={2} />
                <span className="text-xs sm:text-xl font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-gray-300 group-hover:text-white transition-colors duration-500">
                  {value}
                </span>
              </SpotlightCard>
            ))}
          </div>
        </motion.div>

        {/* ================= CTA ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-32 sm:mt-48 pt-16 sm:pt-24 border-t border-white/5 flex flex-col items-center text-center px-4"
        >
          <h3 className="text-4xl sm:text-6xl font-extrabold mb-10 sm:mb-16 tracking-tight">Ready to see these <br className="sm:hidden"/> skills in action?</h3>
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
        .perspective-1000 { perspective: 1000px; }
      `}} />
    </main>
  );
};

export default About;