import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { 
  ArrowRight, ExternalLink, X, Maximize2, Code2
} from "lucide-react";

// Project Images
import urbanGreensImg from "../assets/urbangreens.png";
import bajajAutoImg from "../assets/bajajnewimage.png";
import weatherImg from "../assets/weather.png";
import aiMockInterviewImg from "../assets/Ai-mock-interview.png";
import weightlossimg from "../assets/drabubakar.png";
import bizflowimg from "../assets/bizzflow.png";
import nexposimg from "../assets/nexpos.png";
import taskmindimg from "../assets/taskmind.png";

const projects = [
  {
    title: "BIZFLOW",
    subtitle: "Enterprise B2B SaaS & Workspace Management Platform",
    description: "A full-stack, multi-tenant SaaS application engineered on the MERN stack. Designed with an ultra-premium 'Deep Space' dark mode aesthetic, it features advanced security protocols including Google OAuth 2.0, Passwordless Magic Link (OTP) authentication, and strict cross-domain HTTP-only cookies. The robust backend architecture is equipped with automated cron jobs for data lifecycle management (Soft Delete/Recycle Bin), rate-limiting for API protection, and seamless invoice generation.",
    link: "https://bizflow-saas-web.vercel.app", 
    image: bizflowimg, 
    tech: ["React.js", "Node.js & Express", "MongoDB", "Google OAuth 2.0", "JWT Auth", "Tailwind CSS", "Framer Motion"],
    glowColor: "rgba(79, 70, 229, 0.35)", 
  },
  {
    title: "NEXPOS",
    subtitle: "Enterprise-Grade Point of Sale & Retail Management System",
    description: "A next-generation, full-stack retail SaaS platform built on Next.js and MongoDB. Designed with an ultra-premium 'Silicon Valley' glassmorphic aesthetic, it features real-time inventory tracking, a dedicated CRM for 'Khata' (customer credit) management, and secure role-based access control (RBAC) via Next-Auth. The system boasts seamless Razorpay payment gateway integration, dynamic Recharts analytics dashboards, and an automated, print-ready thermal receipt generator.",
    link: "https://nexpos-azure.vercel.app", 
    image: nexposimg, 
    tech: ["Next.js (App Router)", "React.js", "MongoDB & Mongoose", "Next-Auth", "Tailwind CSS", "Razorpay", "Recharts"],
    glowColor: "rgba(16, 185, 129, 0.35)", 
  },
  {
    title: "WEIGHTLOSS-DOC",
    subtitle: "Elite Bio-Medical & Metabolic Optimization Platform",
    description: "A high-end clinical web application designed for a specialized metabolic clinic. The platform features an ultra-premium 'Silicon Valley' aesthetic, built with a focus on data-driven health optimization. It includes interactive biometric diagnostic tools (BMI), automated intake systems, and an evidence-based case study gallery.",
    link: "https://weight-loss-doc.vercel.app",
    image: weightlossimg,
    tech: ["React.js", "Tailwind CSS v4", "Lucide Icons", "Framer Motion"],
    glowColor: "rgba(16, 185, 189, 0.35)",
  },
  {
    title: "TASKMIND AI",
    subtitle: "AI-Powered SaaS Task Manager & Automated Workspace",
    description: "A highly intelligent, automated task management platform built with Next.js and the MERN architecture. It features a context-aware AI assistant utilizing the Google Gemini API with custom function calling for real-time database operations via natural language. The backend is robustly engineered with background Vercel Cron Jobs for automated daily reminders, native OS-level Push Notifications via the Web Push API, and an interactive drag-and-drop Kanban board for seamless workflow execution.",
    link: "https://taskmind-ai-three.vercel.app/", 
    image: taskmindimg, 
    tech: ["Next.js", "MongoDB", "Google Gemini API", "Vercel Cron", "Web Push API", "Tailwind CSS", "dnd-kit", "Shadcn UI"],
    glowColor: "rgba(16, 185, 129, 0.35)", 
  },
  {
    title: "AI-MOCK-INTERVIEW",
    subtitle: "AI-Powered Interview Practice Platform",
    description: "An AI-driven mock interview platform currently under active development using the MERN stack and Tailwind CSS. The system is being built to simulate real interview experiences with AI-generated questions, resume-based assessments, performance feedback, and skill analysis.",
    link: "https://ai-mock-interview-lac-two.vercel.app",
    image: aiMockInterviewImg,
    tech: ["MERN Stack", "Tailwind CSS", "AI Integration", "JWT Auth"],
    glowColor: "rgba(20, 184, 166, 0.35)",
  },
  {
    title: "UrbanGreens",
    subtitle: "Full-Stack Grocery Commerce Platform",
    description: "A production-ready grocery commerce platform engineered with the MERN stack and Tailwind CSS. Designed for scale and reliability, featuring secure authentication, product and order management, cart workflows, and Razorpay payment integration with a refined, high-performance user experience.",
    link: "https://urbangreens-frontend-n2hv3.vercel.app",
    image: urbanGreensImg,
    tech: ["MERN Stack", "Tailwind CSS", "Razorpay", "JWT Auth"],
    glowColor: "rgba(16, 185, 129, 0.35)",
  },
  {
    title: "Bajaj Auto Sales",
    subtitle: "Enterprise Automobile Sales & Service System",
    description: "An enterprise-grade automobile sales and service management system built using the MERN stack. Enables vehicle discovery, pricing transparency, customer enquiries, booking, and service workflows within a scalable, business-ready interface.",
    link: "https://nationalautosales.vercel.app",
    image: bajajAutoImg,
    tech: ["MERN Stack", "Tailwind CSS", "REST APIs"],
    glowColor: "rgba(59, 130, 246, 0.35)",
  },
  {
    title: "Weather Forecast",
    subtitle: "Real-Time Weather Intelligence App",
    description: "A modern React-based weather application delivering real-time forecasts, location search, and API-driven insights using OpenWeather, wrapped in a calm, responsive, and user-centric interface.",
    link: "https://anaskhanweathersearch.netlify.app/",
    image: weatherImg,
    tech: ["React", "API Integration", "Tailwind CSS"],
    glowColor: "rgba(168, 85, 247, 0.35)",
  },
];

// ================= ULTRA PREMIUM SUB-COMPONENTS ================= //

// 1. Heavy Magnetic Button Wrapper
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
    if (href.startsWith('#') || href.startsWith('http')) return <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">{content}</a>;
    return <Link to={href} className="inline-block w-full sm:w-auto">{content}</Link>;
  }
  return <div className="inline-block w-full sm:w-auto cursor-pointer">{content}</div>;
};

// 2. Custom Animated Cursor with Spring Trailer
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

// 3. True Parallax Project Card with Dynamic Mesh Glare
const ProjectCard = ({ project, idx, setSelectedImg, stickyTop }) => {
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.1), transparent 60%)`;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <motion.article 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="lg:sticky flex flex-col overflow-hidden rounded-[2rem] sm:rounded-[4rem] border border-white/[0.04] bg-[#020202] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] mb-8 lg:mb-48 last:mb-0 transform-gpu group/card"
      style={{ top: stickyTop }}
    >
      <motion.div className="absolute inset-0 z-50 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 hidden lg:block" style={{ background }} />

      <div className="grid lg:grid-cols-12 h-full lg:min-h-[850px] relative overflow-hidden flex-col-reverse lg:flex-row">
        
        <div className="absolute top-[0%] left-[-10%] w-[1200px] h-[1200px] blur-[300px] rounded-full pointer-events-none z-0 opacity-40 transition-colors duration-1000 hidden lg:block" style={{ backgroundColor: project.glowColor.replace('0.35', '0.6') }} />

        {/* Content Area */}
        <div className="lg:col-span-5 p-8 sm:p-12 lg:p-24 flex flex-col justify-between lg:border-r border-white/[0.05] relative z-20 bg-black/40 backdrop-blur-[50px] order-2 lg:order-1">
          <div>
            <div className="flex items-center gap-4 sm:gap-8 mb-8 sm:mb-14">
              <span className="text-xl sm:text-2xl font-mono text-white/50 font-bold block">0{idx + 1}</span>
              <div className={`h-[2px] w-12 sm:w-24 bg-gradient-to-r from-white to-transparent`} />
              <span className="text-[10px] sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/60 font-bold line-clamp-1">{project.subtitle}</span>
            </div>
            
            <h3 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 sm:mb-12 tracking-tighter uppercase leading-[0.9] drop-shadow-2xl">
              {project.title}
            </h3>
            
            <p className="text-gray-400 text-base sm:text-xl lg:text-2xl leading-[1.6] sm:leading-[1.8] font-light mb-10 sm:mb-16 mix-blend-plus-lighter">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-10 sm:mb-16">
              {project.tech.map((item, i) => (
                <span key={i} className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/10 text-gray-300 bg-white/[0.02] backdrop-blur-xl shadow-lg hover:bg-white/10 transition-colors cursor-hover-target">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <MagneticButton href={project.link} className="group relative overflow-hidden flex items-center justify-center sm:justify-between px-8 sm:px-12 py-5 sm:py-8 rounded-full border border-white/20 bg-white/[0.02] hover:bg-white text-white hover:text-black transition-all duration-700 w-full sm:w-fit gap-6 sm:gap-12 cursor-hover-target backdrop-blur-3xl shadow-[0_0_40px_rgba(255,255,255,0.05)]">
            <span className="relative z-10 text-xs sm:text-sm font-extrabold tracking-[0.2em] sm:tracking-[0.3em] uppercase">Launch Platform</span>
            <div className="relative z-10 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-black transition-colors">
              <ExternalLink size={16} className="group-hover:rotate-12 group-hover:text-white transition-all duration-500 sm:w-5 sm:h-5" />
            </div>
          </MagneticButton>
        </div>

        {/* Image Area */}
        <div className="lg:col-span-7 relative group cursor-hover-target overflow-hidden h-[300px] sm:h-[450px] lg:h-auto bg-[#080808] order-1 lg:order-2" onClick={() => setSelectedImg(project.image)}>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000 z-10" />
          
          <motion.div style={{ y: yImage }} className="absolute inset-[-20%] w-[140%] h-[140%] hidden lg:block">
            <img 
              src={project.image} 
              alt={project.title} 
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-[5000ms] group-hover:scale-[1.05] grayscale-[20%] group-hover:grayscale-0"
            />
          </motion.div>
          {/* Mobile static image */}
          <div className="absolute inset-0 w-full h-full lg:hidden">
             <img 
              src={project.image} 
              alt={project.title} 
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          <div className="absolute inset-0 z-20 hidden lg:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="w-36 h-36 bg-black/60 backdrop-blur-3xl rounded-full flex items-center justify-center border border-white/10 scale-50 group-hover:scale-100 transition-transform duration-700 shadow-[0_0_80px_rgba(0,0,0,0.8)]">
               <Maximize2 className="text-white" size={44} strokeWidth={1} />
            </div>
          </div>
        </div>

      </div>
    </motion.article>
  );
};

// ================= MAIN COMPONENT ================= //

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const revealVariants = {
    hidden: { opacity: 0, y: 100, rotate: 2 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 50, damping: 25, mass: 1 } }
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
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
            Selected Portfolio
          </motion.div>
          
          <div className="overflow-hidden pb-4 w-full">
            <motion.h1 variants={revealVariants} className="text-[16vw] sm:text-[11rem] lg:text-[13rem] font-bold tracking-tighter leading-[0.8] relative whitespace-nowrap">
              <span className="text-transparent outline-text drop-shadow-2xl mix-blend-plus-lighter">PROVEN</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-10 w-full">
            <motion.h1 variants={revealVariants} className="text-[16vw] sm:text-[11rem] lg:text-[13rem] font-bold tracking-tighter leading-[0.8] relative whitespace-nowrap">
              <span className="text-white pb-2 sm:pb-4 inline-block drop-shadow-[0_20px_40px_rgba(255,255,255,0.15)] md:drop-shadow-[0_40px_80px_rgba(255,255,255,0.15)]">WORK.</span>
            </motion.h1>
          </div>

          <motion.p variants={revealVariants} className="text-gray-400 text-lg sm:text-3xl font-light tracking-wide leading-[1.6] sm:leading-[1.8] max-w-5xl px-4 mix-blend-plus-lighter">
            A curated collection of enterprise-grade applications. Scroll to explore the architecture, aesthetic, and engineering behind each digital platform.
          </motion.p>
        </motion.header>

        {/* ================= PROJECTS GRID (STICKY STACKING) ================= */}
        <div className="flex flex-col gap-10 lg:gap-0 relative perspective-1000">
          {projects.map((project, idx) => {
            const stickyTop = `calc(10vh + ${idx * 30}px)`; 
            return (
              <ProjectCard 
                key={idx} 
                project={project} 
                idx={idx} 
                setSelectedImg={setSelectedImg} 
                stickyTop={stickyTop} 
              />
            );
          })}
        </div>

      </div>

      {/* ================= CINEMATIC LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }} 
            animate={{ opacity: 1, backdropFilter: "blur(60px)" }} 
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/90 p-4 sm:p-10 cursor-auto"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 sm:top-14 sm:right-14 text-white/50 hover:text-white transition-all duration-500 p-4 sm:p-8 bg-white/5 border border-white/10 rounded-full backdrop-blur-3xl z-50 hover:bg-white/20 hover:scale-110 shadow-[0_0_40px_rgba(255,255,255,0.1)] cursor-hover-target" 
              onClick={() => setSelectedImg(null)}
            >
              <X className="w-6 h-6 sm:w-10 sm:h-10" strokeWidth={1.5} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 80 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 80 }} 
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 1 }} 
              className="relative max-w-[2000px] w-full flex justify-center items-center cursor-auto perspective-1000 mt-16 sm:mt-0" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-white/5 blur-[300px] rounded-full z-0 pointer-events-none hidden sm:block" />
              <img 
                src={selectedImg} 
                alt="Expanded View" 
                className="relative z-10 w-full h-auto max-h-[85vh] sm:max-h-[90vh] object-contain rounded-2xl sm:rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] sm:shadow-[0_0_250px_rgba(0,0,0,1)] border border-white/[0.1]" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

export default Projects;