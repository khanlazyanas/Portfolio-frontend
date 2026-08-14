import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
// FIXED: Added useMotionTemplate to the import list to resolve the white screen crash
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { 
  ArrowRight, Download, Mail, Code2, MonitorSmartphone, 
  Server, Zap, Cloud, Quote, ExternalLink, X, Maximize2,
  Github, Linkedin, Send, MapPin, Sparkles, Terminal, Layers
} from "lucide-react"; 
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiOpenai, SiGithub, SiLinkedin,
  SiNextdotjs, SiFramer, SiJsonwebtokens
} from "react-icons/si";

// ================= ASSETS ================= //
import profileImage from "../assets/anas2.jpg";
import urbanGreensImg from "../assets/urbangreens.png";
import bajajAutoImg from "../assets/bajajnewimage.png";
import weatherImg from "../assets/weather.png";
import aiMockInterviewImg from "../assets/Ai-mock-interview.png";
import weightlossimg from "../assets/drabubakar.png";
import bizflowimg from "../assets/bizzflow.png";
import nexposimg from "../assets/nexpos.png";
import taskmindimg from "../assets/taskmind.png";

// ================= DATA ARRAYS ================= //
const techStack = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Framer Motion", icon: <SiFramer /> },
  { name: "JWT Security", icon: <SiJsonwebtokens /> },
  { name: "HTML5 Arch", icon: <SiHtml5 /> },
  { name: "CSS3 Modules", icon: <SiCss3 /> },
  { name: "AI Integration", icon: <SiOpenai /> },
];

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
    title: "Understand the core problem before writing a single line of code.",
    desc: "Every great application starts with absolute clarity. I analyze requirements, define database schemas, and map out API endpoints."
  },
  {
    phase: "02 // Systems Design",
    title: "Design scalable systems, not just temporary features.",
    desc: "Focusing on modular component architecture in React/Next.js and ensuring the backend is robust enough to handle future growth."
  },
  {
    phase: "03 // Engineering",
    title: "Build with absolute clarity and maintainability in mind.",
    desc: "Writing clean, DRY, and well-documented code. Utilizing modern hooks, custom contexts, and secure authentication flows."
  },
  {
    phase: "04 // Optimization",
    title: "Optimize aggressively for performance and real-world scale.",
    desc: "Implementing lazy loading, caching strategies, database indexing, and minimizing bundle sizes for maximum speed."
  },
  {
    phase: "05 // Deployment",
    title: "Deliver clean, well-documented, and production-ready solutions.",
    desc: "Setting up CI/CD pipelines, configuring environment variables, and pushing to production environments like Vercel or AWS."
  }
];

const projects = [
  {
    title: "BIZFLOW",
    subtitle: "Enterprise B2B SaaS & Workspace Management Platform",
    description: "A full-stack, multi-tenant SaaS application engineered on the MERN stack. Designed with an ultra-premium 'Deep Space' dark mode aesthetic, it features advanced security protocols including Google OAuth 2.0, Passwordless Magic Link (OTP) authentication, and strict cross-domain HTTP-only cookies.",
    link: "https://bizflow-saas-web.vercel.app", 
    image: bizflowimg, 
    tech: ["React.js", "Node.js", "MongoDB", "OAuth 2.0", "JWT", "Tailwind", "Framer"],
    glowColor: "rgba(79, 70, 229, 0.35)", 
  },
  {
    title: "NEXPOS",
    subtitle: "Enterprise-Grade Point of Sale & Retail Management System",
    description: "A next-generation, full-stack retail SaaS platform built on Next.js and MongoDB. Designed with an ultra-premium 'Silicon Valley' glassmorphic aesthetic, it features real-time inventory tracking, a dedicated CRM for 'Khata' management, and secure role-based access control (RBAC) via Next-Auth.",
    link: "https://nexpos-azure.vercel.app", 
    image: nexposimg, 
    tech: ["Next.js", "MongoDB", "Next-Auth", "Tailwind CSS", "Razorpay", "Recharts"],
    glowColor: "rgba(16, 185, 129, 0.35)", 
  },
  {
    title: "WEIGHTLOSS-DOC",
    subtitle: "Elite Bio-Medical & Metabolic Optimization Platform",
    description: "A high-end clinical web application designed for a specialized metabolic clinic. The platform features an ultra-premium 'Silicon Valley' aesthetic, built with a focus on data-driven health optimization. It includes interactive biometric diagnostic tools (BMI), automated intake systems, and an evidence-based case study gallery.",
    link: "https://weight-loss-doc.vercel.app",
    image: weightlossimg,
    tech: ["React.js", "Tailwind CSS v4", "Lucide Icons", "Framer Motion"],
    glowColor: "rgba(6, 182, 212, 0.35)",
  },
  {
    title: "TASKMIND AI",
    subtitle: "AI-Powered SaaS Task Manager & Automated Workspace",
    description: "A highly intelligent, automated task management platform built with Next.js and the MERN architecture. It features a context-aware AI assistant utilizing the Google Gemini API with custom function calling for real-time database operations via natural language.",
    link: "https://taskmind-ai-three.vercel.app", 
    image: taskmindimg, 
    tech: ["Next.js", "MongoDB", "Google Gemini", "Vercel Cron", "dnd-kit"],
    glowColor: "rgba(59, 130, 246, 0.35)", 
  },
  {
    title: "AI-MOCK-INTERVIEW",
    subtitle: "AI-Powered Interview Practice Platform",
    description: "An AI-driven mock interview platform currently under active development using the MERN stack and Tailwind CSS. The system is being built to simulate real interview experiences with AI-generated questions, resume-based assessments, performance feedback, and skill analysis.",
    link: "https://ai-mock-interview-lac-two.vercel.app",
    image: aiMockInterviewImg,
    tech: ["Next.js", "Tailwind CSS", "AI Integration", "JWT Auth"],
    glowColor: "rgba(20, 184, 166, 0.35)",
  },
  {
    title: "UrbanGreens",
    subtitle: "Full-Stack Grocery Commerce Platform",
    description: "A production-ready grocery commerce platform engineered with the MERN stack and Tailwind CSS. Designed for scale and reliability, featuring secure authentication, product and order management, cart workflows, and Razorpay payment integration with a refined, high-performance user experience.",
    link: "https://urbangreens-frontend-n2hv3.vercel.app",
    image: urbanGreensImg,
    tech: ["MERN Stack", "Tailwind CSS", "Razorpay", "JWT Auth"],
    glowColor: "rgba(34, 197, 94, 0.35)",
  },
  {
    title: "National Auto Sales",
    subtitle: "Enterprise Automobile Sales & Service System",
    description: "An enterprise-grade automobile sales and service management system built using the MERN stack. Enables vehicle discovery, pricing transparency, customer enquiries, booking, and service workflows within a scalable, business-ready interface.",
    link: "https://nationalautosales.vercel.app",
    image: bajajAutoImg,
    tech: ["MERN Stack", "Tailwind CSS", "REST APIs"],
    glowColor: "rgba(79, 70, 229, 0.35)",
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

// 1. Cinematic Preloader Sequence
const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; 
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min(100, Math.floor((currentStep / steps) * 100)));
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[99999] bg-[#000000] flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
      <div className="overflow-hidden mb-8 relative z-10 px-4 text-center">
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-7xl font-bold tracking-[0.3em] sm:tracking-[0.5em] uppercase text-transparent outline-text-preloader leading-tight"
        >
          ANAS KHAN
        </motion.h1>
      </div>
      <div className="w-48 sm:w-80 h-[1px] bg-white/10 relative overflow-hidden z-10">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-8 z-10"
      >
        <span className="text-gray-500 font-mono text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-center">Loading Experience</span>
        <span className="text-white font-mono text-xs sm:text-sm tracking-widest">{progress}%</span>
      </motion.div>
    </motion.div>
  );
};

// 2. Ultra-Fluid Mouse Spotlight Card
const SpotlightCard = ({ children, className, glowColor = "rgba(255, 255, 255, 0.1)" }) => {
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
      className={`relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] border border-white/[0.04] bg-[#030303]/60 backdrop-blur-3xl shadow-2xl transition-all duration-700 group ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-700 z-0"
        style={{
          opacity,
          background: `radial-gradient(1200px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

// 3. True 3D Magnetic Tilt Component
const TiltWrapper = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const mouseXSpring = useSpring(x, { stiffness: 60, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 60, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

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

  if (isTouchDevice) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      <div style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }} className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

// 4. Heavy Magnetic Button Wrapper
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
  return <div className="inline-block w-full sm:w-auto">{content}</div>;
};

// 5. Custom Animated Cursor with Spring Trailer
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
          scale: isHovering ? 2 : 1,
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

// 6. True Parallax Project Card with Dynamic Mesh Glare
const ProjectCard = ({ project, idx, setSelectedImg, stickyTop }) => {
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.15), transparent 60%)`;

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
      className="lg:sticky flex flex-col overflow-hidden rounded-[2rem] sm:rounded-[3rem] border border-white/[0.04] bg-[#020202] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] mb-12 lg:mb-48 last:mb-0 transform-gpu group/card"
      style={{ top: stickyTop }}
    >
      <motion.div className="absolute inset-0 z-50 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 hidden lg:block" style={{ background }} />

      <div className="grid lg:grid-cols-12 h-full lg:min-h-[850px] relative overflow-hidden flex-col-reverse lg:flex-row">
        
        <div className="absolute top-[-40%] left-[-30%] w-[1200px] h-[1200px] blur-[300px] rounded-full pointer-events-none z-0 opacity-40 transition-colors duration-1000 hidden lg:block" style={{ backgroundColor: project.glowColor.replace('0.25', '0.6') }} />

        {/* Content Area - Optimized for mobile stacking */}
        <div className="lg:col-span-5 p-8 sm:p-12 lg:p-24 flex flex-col justify-between lg:border-r border-white/[0.05] relative z-20 bg-black/40 backdrop-blur-[50px] order-2 lg:order-1">
          <div>
            <div className="flex items-center gap-4 sm:gap-8 mb-8 sm:mb-14">
              <span className="text-xl sm:text-2xl font-mono text-white/50 font-bold block">0{idx + 1}</span>
              <div className={`h-[2px] w-12 sm:w-24 bg-gradient-to-r from-white to-transparent`} />
              <span className="text-[10px] sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.5em] text-white/60 font-bold line-clamp-1">{project.subtitle}</span>
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
              <ArrowRight size={16} className="group-hover:translate-x-1 group-hover:-rotate-45 group-hover:text-white transition-all duration-500 sm:w-5 sm:h-5" />
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
              className="w-full h-full object-cover object-center transition-transform duration-[5000ms] group-hover:scale-[1.05] grayscale-[20%] group-hover:grayscale-0"
            />
          </motion.div>
          {/* Static image for mobile to prevent jitter */}
          <div className="absolute inset-0 w-full h-full lg:hidden">
             <img 
              src={project.image} 
              alt={project.title} 
              loading="lazy"
              className="w-full h-full object-cover object-center"
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

// ================= MAIN HOME COMPONENT ================= //

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Mobile-aware Parallax
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const yHeroText = useTransform(scrollYProgress, [0, 0.4], [0, isMobile ? 100 : 200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const scaleHeroImage = useTransform(scrollYProgress, [0, 0.4], [1, isMobile ? 1.05 : 1.15]);
  const yHeroImage = useTransform(scrollYProgress, [0, 0.4], [0, isMobile ? 50 : 100]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect, behavior: "smooth" });
    }
  };

  const revealVariants = {
    hidden: { opacity: 0, y: 80, rotate: 2 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 40, damping: 25, mass: 1 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 60, damping: 20, mass: 1 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <main className={`relative bg-[#000000] text-white selection:bg-white selection:text-black font-sans antialiased cursor-auto md:cursor-none ${loading ? 'h-screen overflow-hidden' : ''}`}>
        
        <CustomCursor />
        
        {/* 🌟 Background - Mobile Optimized */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-black overflow-hidden">
          <div className="absolute top-[-10%] left-[-20%] w-[150vw] md:w-[60vw] h-[150vw] md:h-[60vw] rounded-full bg-teal-900/20 blur-[150px] md:blur-[250px] mix-blend-screen animate-[pulse_14s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10%] right-[-20%] w-[150vw] md:w-[80vw] h-[150vw] md:h-[80vw] rounded-full bg-indigo-900/20 blur-[150px] md:blur-[250px] mix-blend-screen animate-[pulse_18s_ease-in-out_infinite_reverse]" />
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:150px_150px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80 md:opacity-95" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] mix-blend-overlay pointer-events-none" />
        </div>

        <motion.div 
          className="fixed top-0 left-0 right-0 h-[2px] md:h-[4px] bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 z-[999] origin-left shadow-[0_0_20px_rgba(20,184,166,0.8)]"
          style={{ scaleX }}
        />

        {/* ================= SECTION 1: HERO ================= */}
        <section id="hero" className="relative z-10 min-h-[100vh] flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-10 md:px-20 lg:px-28 max-w-[1920px] mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-24 items-center w-full relative">
            
            <motion.header 
              style={{ y: yHeroText, opacity: opacityHero }}
              initial="hidden" animate="visible" variants={staggerContainer} 
              className="lg:col-span-7 flex flex-col items-start relative z-20 w-full"
            >
              <motion.div variants={revealVariants} className="inline-flex items-center gap-3 sm:gap-5 px-5 sm:px-8 py-2.5 sm:py-4 rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-3xl mb-8 sm:mb-14 shadow-[0_0_50px_rgba(255,255,255,0.05)] cursor-hover-target overflow-hidden">
                <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,1)]"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.4em] uppercase text-gray-300">Available For Impact</span>
              </motion.div>

              <div className="overflow-hidden pb-2 w-full">
                <motion.h1 variants={revealVariants} className="text-[22vw] sm:text-[11rem] lg:text-[14rem] font-bold tracking-tighter leading-[0.8] relative whitespace-nowrap">
                  <span className="text-transparent outline-text drop-shadow-2xl mix-blend-plus-lighter">ANAS</span>
                </motion.h1>
              </div>
              <div className="overflow-hidden pb-6 sm:pb-10 w-full">
                <motion.h1 variants={revealVariants} className="text-[22vw] sm:text-[11rem] lg:text-[14rem] font-bold tracking-tighter leading-[0.8] relative whitespace-nowrap">
                  <span className="text-white pb-2 sm:pb-4 inline-block drop-shadow-[0_20px_40px_rgba(255,255,255,0.15)] md:drop-shadow-[0_40px_80px_rgba(255,255,255,0.15)]">KHAN.</span>
                </motion.h1>
              </div>

              <motion.div variants={revealVariants} className="flex items-center gap-4 sm:gap-6 bg-[#0a0a0a]/90 border border-white/[0.08] px-6 sm:px-10 py-4 sm:py-6 rounded-2xl sm:rounded-[2.5rem] backdrop-blur-3xl mb-8 sm:mb-14 w-full max-w-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] cursor-hover-target">
                <Terminal className="text-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.6)] w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
                <div className="text-teal-400 text-sm sm:text-2xl md:text-4xl font-mono tracking-tight font-light h-6 sm:h-10 flex items-center">
                  <Typewriter
                    words={["MERN Stack Architect", "Next.js Specialist", "Premium UI Engineer"]}
                    loop={true} cursor cursorStyle="█" typeSpeed={50} deleteSpeed={30} delaySpeed={3000}
                  />
                </div>
              </motion.div>

              <motion.p variants={revealVariants} className="text-gray-400 text-base sm:text-2xl md:text-3xl leading-[1.6] sm:leading-[1.8] max-w-4xl font-light tracking-wide mb-10 sm:mb-20 mix-blend-plus-lighter">
                I engineer scalable digital ecosystems. Focused on clean modular architecture, seamless fluid interactions, and high-performance backend infrastructure that stands the test of time.
              </motion.p>

              <motion.div variants={revealVariants} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:w-auto">
                <MagneticButton href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="group relative px-8 sm:px-14 py-5 sm:py-8 bg-white text-black font-semibold rounded-full overflow-hidden flex items-center justify-center gap-4 sm:gap-6 shadow-[0_0_80px_rgba(255,255,255,0.25)] cursor-pointer hover:scale-[1.02] transition-transform duration-500 w-full sm:w-auto">
                  <span className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-extrabold z-10">Explore Masterpieces</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 group-hover:-rotate-45 transition-transform duration-500 z-10 hidden sm:block" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </MagneticButton>
                
                <MagneticButton href="/resume" className="group px-8 sm:px-14 py-5 sm:py-8 bg-transparent border border-white/[0.2] text-white rounded-full hover:bg-white/[0.05] flex items-center justify-center gap-4 sm:gap-6 backdrop-blur-3xl transition-colors duration-500 cursor-pointer w-full sm:w-auto mt-4 sm:mt-0">
                  <Download size={20} className="text-gray-400 group-hover:text-white transition-colors hidden sm:block" />
                  <span className="text-xs sm:text-sm font-extrabold tracking-[0.15em] sm:tracking-[0.2em] uppercase">Download Dossier</span>
                </MagneticButton>
              </motion.div>
            </motion.header>

            <motion.article 
              initial={{ opacity: 0, filter: "blur(40px)", scale: 0.8 }} 
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }} 
              transition={{ type: "spring", stiffness: 40, damping: 25, delay: 0.8 }}
              className="lg:col-span-5 relative w-full h-full flex flex-col justify-center perspective-1000 mt-10 lg:mt-0"
            >
              <TiltWrapper className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full relative z-10">
                  <motion.div style={{ scale: scaleHeroImage, y: yHeroImage }} className="col-span-1 sm:col-span-2 rounded-[2rem] sm:rounded-[4rem] overflow-hidden border border-white/[0.08] relative group h-[300px] sm:h-[500px] lg:h-[700px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] lg:shadow-[0_40px_100px_rgba(0,0,0,0.95)] cursor-hover-target bg-[#050505]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-95 pointer-events-none" />
                    <img src={profileImage} alt="Anas Khan" loading="eager" className="w-full h-full object-cover transition-transform duration-[5000ms] group-hover:scale-110 grayscale-[10%] lg:grayscale-[40%] group-hover:grayscale-0" />
                    
                    <div className="absolute top-6 right-6 sm:top-10 sm:right-10 z-20 px-4 sm:px-6 py-2 sm:py-3 bg-black/60 backdrop-blur-2xl rounded-full border border-white/10 flex items-center gap-2 sm:gap-4 shadow-2xl">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,1)]" />
                      <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white">System Online</span>
                    </div>
                    
                    <div className="absolute bottom-8 left-8 sm:bottom-16 sm:left-16 z-20 flex flex-col gap-3 sm:gap-6" style={{ transform: "translateZ(40px)" }}>
                      <div className="flex items-center gap-2 sm:gap-3 text-teal-400 bg-black/50 w-fit px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full backdrop-blur-2xl border border-white/10">
                        <MapPin className="w-3 h-3 sm:w-5 sm:h-5" />
                        <p className="text-[8px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold">Operating From</p>
                      </div>
                      <p className="text-3xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tighter drop-shadow-[0_15px_30px_rgba(0,0,0,1)]">Kanpur, IN.</p>
                    </div>
                  </motion.div>

                  <SpotlightCard className="p-8 sm:p-12 flex flex-col justify-center items-center group cursor-hover-target rounded-[2rem] sm:rounded-[3rem] hidden sm:flex">
                    <p className="text-5xl sm:text-8xl font-bold text-white mb-2 sm:mb-6 group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl">10<span className="text-teal-500">+</span></p>
                    <p className="text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.4em] text-gray-500 font-bold text-center">Architected <br/>Projects</p>
                  </SpotlightCard>

                  <SpotlightCard className="p-8 sm:p-12 flex flex-col justify-center items-center group cursor-hover-target rounded-[2rem] sm:rounded-[3rem] hidden sm:flex">
                    <div className="flex gap-4 sm:gap-6 mb-4 sm:mb-8">
                      <SocialIcon href="https://github.com" icon={<SiGithub className="w-5 h-5 sm:w-7 sm:h-7" />} />
                      <SocialIcon href="https://linkedin.com" icon={<SiLinkedin className="w-5 h-5 sm:w-7 sm:h-7" />} />
                    </div>
                    <p className="text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.4em] text-gray-500 font-bold text-center">Global <br/>Network</p>
                  </SpotlightCard>
                </div>
              </TiltWrapper>
            </motion.article>
          </div>
        </section>

        {/* ================= MARQUEE TECH BANNER ================= */}
        <section className="relative z-20 py-10 sm:py-20 border-y border-white/[0.05] bg-[#020202] overflow-hidden flex flex-col gap-6 sm:gap-12 mask-edges">
          <div className="flex w-[200%] animate-[marquee_20s_linear_infinite] sm:animate-[marquee_40s_linear_infinite] items-center">
            {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-4 sm:gap-8 mx-8 sm:mx-16 opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-hover-target grayscale hover:grayscale-0">
                <span className="text-3xl sm:text-6xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">{tech.icon}</span>
                <span className="text-xl sm:text-4xl font-extrabold tracking-[0.1em] sm:tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">{tech.name}</span>
              </div>
            ))}
          </div>
          <div className="flex w-[200%] animate-[marquee_20s_linear_infinite_reverse] sm:animate-[marquee_40s_linear_infinite_reverse] items-center">
            {[...techStack, ...techStack, ...techStack].reverse().map((tech, idx) => (
              <div key={idx} className="flex items-center gap-4 sm:gap-8 mx-8 sm:mx-16 opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-hover-target grayscale hover:grayscale-0">
                <span className="text-3xl sm:text-6xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">{tech.icon}</span>
                <span className="text-xl sm:text-4xl font-extrabold tracking-[0.1em] sm:tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 2: SERVICES & METHODOLOGY ================= */}
        <section id="services" className="relative z-10 px-4 sm:px-10 md:px-20 lg:px-28 py-32 md:py-56 max-w-[1920px] mx-auto border-t border-white/[0.05]">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="mb-20 sm:mb-40 flex flex-col items-center text-center max-w-6xl mx-auto">
            <motion.div variants={revealVariants} className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-3 sm:py-5 rounded-full bg-white/[0.02] border border-white/[0.1] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-300 mb-8 sm:mb-14 backdrop-blur-3xl shadow-2xl">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              Core Capabilities
            </motion.div>
            <div className="overflow-hidden pb-2 sm:pb-4">
              <motion.h2 variants={revealVariants} className="text-5xl sm:text-7xl lg:text-[9rem] font-bold tracking-tighter mb-2 sm:mb-4 leading-[0.9]">
                Architecting solutions
              </motion.h2>
            </div>
            <div className="overflow-hidden pb-4 sm:pb-8">
              <motion.h2 variants={revealVariants} className="text-5xl sm:text-7xl lg:text-[9rem] font-bold tracking-tighter mb-6 sm:mb-12 leading-[0.9]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-white to-gray-600">
                  for real-world scale.
                </span>
              </motion.h2>
            </div>
            <motion.p variants={revealVariants} className="text-gray-400 text-lg sm:text-3xl font-light tracking-wide leading-[1.6] sm:leading-[1.8] max-w-5xl px-4">
              I don't just write code. I help visionary teams design, build, and refine entire digital ecosystems that are incredibly fast, scalable, and secure.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 mb-32 sm:mb-56">
            {servicesData.map((service, idx) => (
              <motion.div key={idx} variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className={service.colSpan}>
                <SpotlightCard glowColor="rgba(255,255,255,0.15)" className="p-8 sm:p-14 lg:p-16 h-full cursor-hover-target rounded-[2rem] sm:rounded-[4rem]">
                  <div className={`w-16 h-16 sm:w-28 sm:h-28 rounded-xl sm:rounded-[2.5rem] bg-[#0a0a0a] flex items-center justify-center mb-8 sm:mb-14 text-gray-500 transition-all duration-700 border border-white/[0.08] shadow-inner ${service.color}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-8 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-700 leading-tight">{service.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-xl lg:text-2xl leading-[1.6] sm:leading-[1.8] font-light">{service.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-start mt-10 sm:mt-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-5 lg:sticky lg:top-56">
              <h3 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tighter mb-6 sm:mb-12 text-white leading-[0.9]">Engineering <br/><span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-700">Methodology.</span></h3>
              <p className="text-lg sm:text-2xl lg:text-3xl text-gray-400 font-light leading-relaxed mb-10 sm:mb-20">A systematic, uncompromising approach to transforming complex business requirements into elegant, high-performance software architecture.</p>
              
              <SpotlightCard glowColor="rgba(59, 130, 246, 0.2)" className="p-10 sm:p-20 cursor-hover-target rounded-[2rem] sm:rounded-[4rem] hidden sm:block">
                <Quote className="text-white/10 w-20 h-20 sm:w-40 sm:h-40 mb-8 sm:mb-14 group-hover:scale-110 transition-transform duration-1000" />
                <blockquote className="text-2xl sm:text-5xl font-medium text-gray-300 leading-[1.3] tracking-tight">
                  “Good software is not defined by features — but by how well it holds up over time under <span className="text-white font-bold drop-shadow-2xl">real-world pressure.</span>”
                </blockquote>
              </SpotlightCard>
            </motion.div>

            <div className="lg:col-span-7 relative pt-8 sm:pt-12 pl-4 sm:pl-0">
              <div className="absolute top-0 bottom-0 left-[24px] sm:left-[45px] w-[2px] bg-white/10">
                 <motion.div 
                   className="absolute top-0 w-full bg-gradient-to-b from-teal-500 via-blue-500 to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                   style={{ height: useTransform(scrollYProgress, [0.3, 0.7], ["0%", "100%"]) }}
                 />
              </div>
              
              <div className="flex flex-col gap-16 sm:gap-32">
                {processSteps.map((step, idx) => (
                  <motion.div 
                    key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealVariants}
                    className="relative pl-16 sm:pl-36 group cursor-hover-target"
                  >
                    <div className="absolute left-[13px] sm:left-[33px] top-1 sm:top-4 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-[4px] sm:border-[5px] border-[#000] bg-gray-600 group-hover:bg-white transition-colors duration-500 shadow-[0_0_0_5px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_30px_rgba(255,255,255,1)] z-10" />
                    
                    <p className="text-[10px] sm:text-base uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold text-teal-500 mb-4 sm:mb-8 flex items-center gap-3 sm:gap-5">
                      <span className="w-8 sm:w-16 h-[2px] bg-teal-500/50 block"></span>
                      {step.phase}
                    </p>
                    <h4 className="text-2xl sm:text-5xl font-bold text-white mb-4 sm:mb-8 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-500">{step.title}</h4>
                    <p className="text-gray-400 text-base sm:text-2xl leading-[1.6] sm:leading-[1.8] font-light">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: THE SHOWCASE ================= */}
        <section id="projects" className="relative z-10 py-32 md:py-56 px-4 sm:px-10 md:px-20 lg:px-28 max-w-[1920px] mx-auto border-t border-white/[0.05]">
          
          <motion.header initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-24 sm:mb-56 flex flex-col items-center text-center max-w-6xl mx-auto">
            <motion.div variants={revealVariants} className="inline-flex items-center gap-3 sm:gap-5 px-6 sm:px-10 py-3 sm:py-5 rounded-full bg-white/[0.02] border border-white/[0.1] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.4em] text-gray-300 mb-8 sm:mb-14 backdrop-blur-3xl shadow-2xl">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
              Selected Portfolio
            </motion.div>
            <div className="overflow-hidden pb-2 sm:pb-4">
              <motion.h2 variants={revealVariants} className="text-5xl sm:text-8xl lg:text-[11rem] font-bold tracking-tighter mb-4 sm:mb-10 leading-[0.9]">
                Proof of <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-700">Work.</span>
              </motion.h2>
            </div>
            <motion.p variants={revealVariants} className="text-gray-400 text-lg sm:text-3xl font-light tracking-wide leading-[1.6] sm:leading-[1.8] max-w-5xl px-4">
              A curated collection of enterprise-grade applications. Scroll to explore the architecture, aesthetic, and engineering behind each digital platform.
            </motion.p>
          </motion.header>

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
        </section>

        {/* ================= SECTION 4: CONTACT ================= */}
        <section id="contact" className="relative z-10 py-32 md:py-56 px-4 sm:px-10 border-t border-white/[0.05] flex flex-col items-center overflow-hidden">
          
          <div className="absolute bottom-[-30%] sm:bottom-[-60%] left-[50%] -translate-x-1/2 w-[150vw] sm:w-[140vw] h-[150vw] sm:h-[140vw] rounded-full bg-teal-900/20 blur-[150px] sm:blur-[300px] mix-blend-screen pointer-events-none animate-[pulse_15s_ease-in-out_infinite]" />

          <div className="max-w-[1800px] w-full flex flex-col items-center text-center relative z-20">
            <p className="text-xs sm:text-base uppercase tracking-[0.4em] sm:tracking-[0.8em] text-gray-500 font-bold mb-8 sm:mb-14">Next Steps</p>
            <div className="overflow-hidden pb-4 sm:pb-6 mb-10 sm:mb-20">
              <motion.h2 initial={{ y: 150 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1, type: "spring" }} className="text-6xl sm:text-[12rem] lg:text-[15rem] font-bold tracking-tighter leading-[0.8] text-white drop-shadow-2xl">
                LET'S TALK.
              </motion.h2>
            </div>
            <p className="text-lg sm:text-4xl text-gray-400 font-light max-w-4xl mb-16 sm:mb-32 leading-[1.6] sm:leading-[1.8] px-4">
              Currently available for freelance opportunities, full-time engineering roles, and visionary projects. Let's build something extraordinary together.
            </p>

            <SpotlightCard glowColor="rgba(20, 184, 166, 0.25)" className="w-full max-w-5xl p-8 sm:p-16 lg:p-24 mb-20 sm:mb-40 cursor-hover-target text-left rounded-[2rem] sm:rounded-[4rem]">
              <form className="flex flex-col gap-8 sm:gap-16" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
                  <div className="relative group">
                    <input type="text" placeholder="YOUR NAME" className="w-full bg-transparent border-b border-white/20 pb-4 sm:pb-6 text-white text-base sm:text-2xl font-light tracking-widest focus:outline-none focus:border-white transition-colors uppercase placeholder:text-gray-700 peer rounded-none" />
                    <div className="absolute bottom-0 left-0 h-[2px] bg-white w-0 peer-focus:w-full transition-all duration-700 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                  </div>
                  <div className="relative group">
                    <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-b border-white/20 pb-4 sm:pb-6 text-white text-base sm:text-2xl font-light tracking-widest focus:outline-none focus:border-white transition-colors uppercase placeholder:text-gray-700 peer rounded-none" />
                    <div className="absolute bottom-0 left-0 h-[2px] bg-white w-0 peer-focus:w-full transition-all duration-700 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                  </div>
                </div>
                <div className="relative group mt-2 sm:mt-6">
                  <textarea placeholder="PROJECT DETAILS OR MESSAGE" rows="4" className="w-full bg-transparent border-b border-white/20 pt-4 sm:pt-6 pb-4 sm:pb-6 text-white text-base sm:text-2xl font-light tracking-widest focus:outline-none focus:border-white transition-colors resize-none uppercase placeholder:text-gray-700 peer rounded-none"></textarea>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-white w-0 peer-focus:w-full transition-all duration-700 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                </div>
                
                <MagneticButton className="mt-8 sm:mt-14 group w-full py-6 sm:py-10 rounded-full border border-white text-black bg-white flex items-center justify-center gap-4 sm:gap-6 hover:bg-transparent hover:text-white transition-all duration-700 cursor-pointer shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-none overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span className="text-xs sm:text-lg font-extrabold tracking-[0.2em] sm:tracking-[0.4em] uppercase relative z-10">Transmit Message</span>
                  <Send className="w-4 h-4 sm:w-6 sm:h-6 relative z-10 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
                </MagneticButton>
              </form>
            </SpotlightCard>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-20 sm:mb-32 px-4">
              <SocialIcon href="https://github.com" icon={<Github className="w-6 h-6 sm:w-10 sm:h-10" strokeWidth={1.5} />} label="GitHub" />
              <SocialIcon href="https://linkedin.com" icon={<Linkedin className="w-6 h-6 sm:w-10 sm:h-10" strokeWidth={1.5} />} label="LinkedIn" />
              <SocialIcon href="mailto:your.email@example.com" icon={<Mail className="w-6 h-6 sm:w-10 sm:h-10" strokeWidth={1.5} />} label="Email" />
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10 sm:mb-16" />

            <div className="flex flex-col sm:flex-row items-center justify-between w-full text-[10px] sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.4em] text-gray-500 uppercase px-4 gap-4 sm:gap-0">
              <p>© {new Date().getFullYear()} Anas Khan</p>
              <p>Designed & Engineered in India</p>
            </div>
          </div>
        </section>

        {/* ================= CINEMATIC LIGHTBOX MODAL ================= */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div 
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }} 
              animate={{ opacity: 1, backdropFilter: "blur(60px)" }} 
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 sm:p-10 cursor-auto"
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
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.33%); }
          }
          @keyframes marquee_reverse {
            0% { transform: translateX(-33.33%); }
            100% { transform: translateX(0%); }
          }
          @keyframes shimmer {
            100% { transform: translateX(100%); }
          }
          .outline-text {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.7);
            color: transparent;
          }
          @media (min-width: 768px) {
            .outline-text {
              -webkit-text-stroke: 3px rgba(255, 255, 255, 0.8);
            }
          }
          .outline-text-preloader {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
            color: transparent;
          }
          @media (min-width: 768px) {
            .outline-text-preloader {
              -webkit-text-stroke: 2px rgba(255, 255, 255, 0.4);
            }
          }
          .mask-edges {
            -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
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
    </>
  );
};

function SocialIcon({ href, icon, label }) {
  return (
    <MagneticButton href={href} className="flex flex-col items-center gap-3 sm:gap-6 group cursor-hover-target">
      <div className="p-6 sm:p-12 rounded-full border border-white/10 bg-white/[0.02] text-gray-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-700 shadow-2xl relative overflow-hidden backdrop-blur-xl group-hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]">
        <div className="relative z-10 scale-100 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      </div>
      <span className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.4em] text-gray-600 group-hover:text-white transition-colors duration-500">{label}</span>
    </MagneticButton>
  );
}

export default Home;