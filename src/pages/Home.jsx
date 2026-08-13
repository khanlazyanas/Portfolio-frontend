import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useMouse } from "framer-motion";
import { 
  ArrowRight, Download, Mail, Code2, MonitorSmartphone, 
  Server, Zap, Cloud, CheckCircle2, Quote, ExternalLink, X, Maximize2,
  Github, Linkedin, Send, MapPin, Sparkles, Terminal, ChevronRight
} from "lucide-react"; 
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiOpenai, SiGithub, SiLinkedin,
  SiNextdotjs, SiFramer, SiJsonwebtokens
} from "react-icons/si";

// ================= ASSETS ================= //
import profileImage from "../assets/anaskhan1.jpg";
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
    color: "group-hover:text-teal-400",
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    title: "Frontend Engineering & UX",
    description: "Crafting clean, responsive, and accessible user interfaces that feel fast, intuitive, and consistent across all devices and screen sizes.",
    icon: <MonitorSmartphone size={28} strokeWidth={1.5} />,
    color: "group-hover:text-blue-400",
    colSpan: "col-span-1"
  },
  {
    title: "Backend & API Architecture",
    description: "Designing secure and scalable backend systems, RESTful APIs, authentication flows, and data models that perfectly support business growth.",
    icon: <Server size={28} strokeWidth={1.5} />,
    color: "group-hover:text-purple-400",
    colSpan: "col-span-1"
  },
  {
    title: "Performance Optimization",
    description: "Improving load times, reducing bottlenecks, and optimizing both frontend and backend performance for a seamless user experience.",
    icon: <Zap size={28} strokeWidth={1.5} />,
    color: "group-hover:text-yellow-400",
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    title: "Deployment & Scalability",
    description: "Preparing applications for real-world traffic — cloud deployment, environment setup, CI/CD pipelines, and robust scalability planning.",
    icon: <Cloud size={28} strokeWidth={1.5} />,
    color: "group-hover:text-emerald-400",
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
    description: "A full-stack, multi-tenant SaaS application engineered on the MERN stack. Designed with an ultra-premium 'Deep Space' dark mode aesthetic, it features advanced security protocols including Google OAuth 2.0, Passwordless Magic Link (OTP) authentication, and strict cross-domain HTTP-only cookies. The robust backend architecture is equipped with automated cron jobs for data lifecycle management (Soft Delete/Recycle Bin), rate-limiting for API protection, and seamless invoice generation.",
    link: "https://bizflow-saas-web.vercel.app", 
    image: bizflowimg, 
    tech: ["React.js", "Node.js", "MongoDB", "OAuth 2.0", "JWT", "Tailwind", "Framer"],
    glowColor: "rgba(79, 70, 229, 0.15)", 
  },
  {
    title: "NEXPOS",
    subtitle: "Enterprise-Grade Point of Sale & Retail Management System",
    description: "A next-generation, full-stack retail SaaS platform built on Next.js and MongoDB. Designed with an ultra-premium 'Silicon Valley' glassmorphic aesthetic, it features real-time inventory tracking, a dedicated CRM for 'Khata' (customer credit) management, and secure role-based access control (RBAC) via Next-Auth. The system boasts seamless Razorpay payment gateway integration, dynamic Recharts analytics dashboards, and an automated, print-ready thermal receipt generator.",
    link: "https://nexpos-azure.vercel.app", 
    image: nexposimg, 
    tech: ["Next.js", "MongoDB", "Next-Auth", "Tailwind CSS", "Razorpay", "Recharts"],
    glowColor: "rgba(16, 185, 129, 0.15)", 
  },
  {
    title: "WEIGHTLOSS-DOC",
    subtitle: "Elite Bio-Medical & Metabolic Optimization Platform",
    description: "A high-end clinical web application designed for a specialized metabolic clinic. The platform features an ultra-premium 'Silicon Valley' aesthetic, built with a focus on data-driven health optimization. It includes interactive biometric diagnostic tools (BMI), automated intake systems, and an evidence-based case study gallery.",
    link: "https://weight-loss-doc.vercel.app",
    image: weightlossimg,
    tech: ["React.js", "Tailwind CSS v4", "Lucide Icons", "Framer Motion"],
    glowColor: "rgba(6, 182, 212, 0.15)",
  },
  {
    title: "TASKMIND AI",
    subtitle: "AI-Powered SaaS Task Manager & Automated Workspace",
    description: "A highly intelligent, automated task management platform built with Next.js and the MERN architecture. It features a context-aware AI assistant utilizing the Google Gemini API with custom function calling for real-time database operations via natural language. The backend is robustly engineered with background Vercel Cron Jobs for automated daily reminders, native OS-level Push Notifications via the Web Push API, and an interactive drag-and-drop Kanban board for seamless workflow execution.",
    link: "https://taskmind-ai-three.vercel.app", 
    image: taskmindimg, 
    tech: ["Next.js", "MongoDB", "Google Gemini", "Vercel Cron", "dnd-kit"],
    glowColor: "rgba(59, 130, 246, 0.15)", 
  },
  {
    title: "AI-MOCK-INTERVIEW",
    subtitle: "AI-Powered Interview Practice Platform",
    description: "An AI-driven mock interview platform currently under active development using the MERN stack and Tailwind CSS. The system is being built to simulate real interview experiences with AI-generated questions, resume-based assessments, performance feedback, and skill analysis.",
    link: "https://ai-mock-interview-lac-two.vercel.app",
    image: aiMockInterviewImg,
    tech: ["Next.js", "Tailwind CSS", "AI Integration", "JWT Auth"],
    glowColor: "rgba(20, 184, 166, 0.15)",
  },
  {
    title: "UrbanGreens",
    subtitle: "Full-Stack Grocery Commerce Platform",
    description: "A production-ready grocery commerce platform engineered with the MERN stack and Tailwind CSS. Designed for scale and reliability, featuring secure authentication, product and order management, cart workflows, and Razorpay payment integration with a refined, high-performance user experience.",
    link: "https://urbangreens-frontend-n2hv3.vercel.app",
    image: urbanGreensImg,
    tech: ["MERN Stack", "Tailwind CSS", "Razorpay", "JWT Auth"],
    glowColor: "rgba(34, 197, 94, 0.15)",
  },
  {
    title: "Bajaj Auto Sales",
    subtitle: "Enterprise Automobile Sales & Service System",
    description: "An enterprise-grade automobile sales and service management system built using the MERN stack. Enables vehicle discovery, pricing transparency, customer enquiries, booking, and service workflows within a scalable, business-ready interface.",
    link: "https://nationalautosales.vercel.app",
    image: bajajAutoImg,
    tech: ["MERN Stack", "Tailwind CSS", "REST APIs"],
    glowColor: "rgba(79, 70, 229, 0.15)",
  },
  {
    title: "Weather Forecast",
    subtitle: "Real-Time Weather Intelligence App",
    description: "A modern React-based weather application delivering real-time forecasts, location search, and API-driven insights using OpenWeather, wrapped in a calm, responsive, and user-centric interface.",
    link: "https://anaskhanweathersearch.netlify.app/",
    image: weatherImg,
    tech: ["React", "API Integration", "Tailwind CSS"],
    glowColor: "rgba(168, 85, 247, 0.15)",
  },
];


// ================= 1000x PREMIUM SUB-COMPONENTS ================= //

// 1. Mouse Spotlight Card (Apple-style interactive border glow)
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

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

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
      className={`relative overflow-hidden rounded-[3rem] border border-white/[0.08] bg-[#050505] shadow-2xl transition-all duration-500 group ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

// 2. 3D Magnetic Tilt Component (Silicon Valley Depth Effect)
const TiltWrapper = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 3. Magnetic Button Wrapper (High-end Physics Interaction)
const MagneticButton = ({ children, className, href }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 }); // Increased magnetism
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );

  if (href) {
    if (href.startsWith('#')) {
      return <a href={href} className="inline-block">{content}</a>;
    }
    return <Link to={href} className="inline-block">{content}</Link>;
  }
  return content;
};

// 4. Custom Animated Cursor (Awwwards Standard)
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.classList.contains('cursor-hover-target')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.05 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-white/60 rounded-full pointer-events-none z-[9998] mix-blend-difference flex items-center justify-center backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
      >
        {isHovering && <span className="text-[5px] font-extrabold text-black uppercase tracking-[0.2em]">View</span>}
      </motion.div>
    </>
  );
};


// ================= MAIN HOME COMPONENT ================= //

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const containerRef = useRef(null);
  
  // Advanced Scroll Tracking for Progress Bar and Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth Spring for the top progress bar
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Hero Parallax effects
  const yHeroText = useTransform(scrollYProgress, [0, 0.3], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleHeroImage = useTransform(scrollYProgress, [0, 0.3], [1, 1.15]);
  const yHeroImage = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  // Smooth scroll handler
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Reusable Reveal Animation (Staggered text mask effect)
  const revealVariants = {
    hidden: { opacity: 0, y: 100, rotate: 5 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 60, damping: 20, mass: 1 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  return (
    <main ref={containerRef} className="relative bg-[#000000] text-white selection:bg-white selection:text-black overflow-hidden font-sans antialiased cursor-none">
      
      <CustomCursor />

      {/* 🌟 1000x Ultra Premium Liquid Mesh Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black">
        {/* Deep, rich, slow-moving orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-teal-900/15 blur-[180px] mix-blend-screen animate-[pulse_12s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-30%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-indigo-900/15 blur-[180px] mix-blend-screen animate-[pulse_15s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-[30%] right-[30%] w-[50vw] h-[50vw] rounded-full bg-fuchsia-900/10 blur-[180px] mix-blend-screen animate-[pulse_18s_ease-in-out_infinite]" />
        
        {/* Micro-architectural Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        {/* Cinematic Film Grain Overlay (The secret to premium UI) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06] mix-blend-overlay pointer-events-none" />
      </div>

      {/* Global Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 z-[999] origin-left shadow-[0_0_20px_rgba(20,184,166,0.5)]"
        style={{ scaleX }}
      />

      {/* ================= SECTION 1: HERO (THE MACBOOK PRO VIBE) ================= */}
      <section id="hero" className="relative z-10 min-h-[100vh] flex items-center pt-32 pb-20 px-6 sm:px-10 md:px-20 lg:px-28 max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center w-full relative">
          
          {/* Header Content with Heavy Parallax & Masking */}
          <motion.header 
            style={{ y: yHeroText, opacity: opacityHero }}
            initial="hidden" animate="visible" variants={staggerContainer} 
            className="lg:col-span-7 flex flex-col items-start relative z-20"
          >
            {/* Availability Pill */}
            <motion.div variants={revealVariants} className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.1] backdrop-blur-3xl mb-12 shadow-[0_0_40px_rgba(255,255,255,0.05)] cursor-hover-target overflow-hidden">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,1)]"></span>
              </span>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-300">Available For Impact</span>
            </motion.div>

            {/* Masked Typography (Awwwards Style) */}
            <div className="overflow-hidden pb-4">
              <motion.h1 variants={revealVariants} className="text-7xl sm:text-8xl lg:text-[9.5rem] font-bold tracking-tighter leading-[0.85] relative">
                <span className="text-white drop-shadow-2xl">ANAS</span>
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-6">
              <motion.h1 variants={revealVariants} className="text-7xl sm:text-8xl lg:text-[9.5rem] font-bold tracking-tighter leading-[0.85] relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via-gray-400 to-gray-700 pb-4 inline-block">KHAN.</span>
              </motion.h1>
            </div>

            {/* Typewriter Terminal */}
            <motion.div variants={revealVariants} className="flex items-center gap-5 bg-[#0a0a0a]/80 border border-white/[0.08] px-8 py-5 rounded-[2rem] backdrop-blur-2xl mb-12 w-full max-w-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <Terminal size={28} className="text-teal-400" />
              <div className="text-teal-400 text-xl sm:text-3xl font-mono tracking-tight font-light h-10 flex items-center">
                <Typewriter
                  words={["MERN Stack Architect", "Next.js Specialist", "Premium UI Engineer"]}
                  loop={true} cursor cursorStyle="█" typeSpeed={50} deleteSpeed={30} delaySpeed={3000}
                />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p variants={revealVariants} className="text-gray-400 text-xl sm:text-2xl leading-[1.8] max-w-3xl font-light tracking-wide mb-16">
              I engineer scalable digital ecosystems. Focused on clean modular architecture, seamless fluid interactions, and high-performance backend infrastructure that stands the test of time.
            </motion.p>

            {/* Magnetic Action Buttons */}
            <motion.div variants={revealVariants} className="flex flex-wrap items-center gap-8">
              <MagneticButton href="#projects" className="group relative px-12 py-6 bg-white text-black font-semibold rounded-full overflow-hidden flex items-center gap-4 shadow-[0_0_50px_rgba(255,255,255,0.2)] cursor-pointer hover:scale-105 transition-transform duration-500">
                <span className="text-sm uppercase tracking-[0.2em] font-bold">Explore Masterpieces</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 group-hover:-rotate-45 transition-transform duration-500" />
              </MagneticButton>
              
              <MagneticButton href="/resume" className="group px-12 py-6 bg-transparent border border-white/[0.2] text-white rounded-full hover:bg-white/[0.05] flex items-center gap-4 backdrop-blur-2xl transition-colors duration-500 cursor-pointer">
                <Download size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-sm font-bold tracking-[0.15em] uppercase">Download Dossier</span>
              </MagneticButton>
            </motion.div>
          </motion.header>

          {/* Premium Hero Visuals (Asymmetrical Bento Dashboard) */}
          <motion.article 
            initial={{ opacity: 0, filter: "blur(40px)", scale: 0.8 }} 
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }} 
            transition={{ type: "spring", stiffness: 40, damping: 20, delay: 0.4 }}
            className="lg:col-span-5 relative w-full h-full flex flex-col justify-center perspective-1000"
          >
            <TiltWrapper className="w-full">
              <div className="grid grid-cols-2 gap-6 w-full">
                {/* Main Image Frame with Deep Parallax */}
                <motion.div style={{ scale: scaleHeroImage, y: yHeroImage }} className="col-span-2 rounded-[3rem] overflow-hidden border border-white/[0.1] relative group h-[450px] sm:h-[600px] shadow-[0_30px_80px_rgba(0,0,0,0.9)] cursor-hover-target bg-[#050505]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-90" />
                  <img src={profileImage} alt="Anas Khan" loading="eager" className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-8 right-8 z-20 px-5 py-2.5 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 flex items-center gap-3 shadow-2xl">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,1)]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">System Online</span>
                  </div>
                  
                  <div className="absolute bottom-12 left-12 z-20 flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-teal-400 bg-black/50 w-fit px-4 py-2 rounded-full backdrop-blur-xl border border-white/10">
                      <MapPin size={16} />
                      <p className="text-[10px] uppercase tracking-[0.25em] font-bold">Operating From</p>
                    </div>
                    <p className="text-5xl font-bold text-white tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,1)]">Lucknow, IN.</p>
                  </div>
                </motion.div>

                {/* Bento Stat 1 */}
                <SpotlightCard className="p-10 flex flex-col justify-center items-center group cursor-hover-target">
                  <p className="text-7xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl">10<span className="text-teal-500">+</span></p>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-bold text-center">Architected <br/>Projects</p>
                </SpotlightCard>

                {/* Bento Socials */}
                <SpotlightCard className="p-10 flex flex-col justify-center items-center group cursor-hover-target">
                  <div className="flex gap-5 mb-6">
                    <SocialIcon href="https://github.com" icon={<SiGithub size={24} />} />
                    <SocialIcon href="https://linkedin.com" icon={<SiLinkedin size={24} />} />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-bold text-center">Global <br/>Network</p>
                </SpotlightCard>
              </div>
            </TiltWrapper>
          </motion.article>
        </div>
      </section>

      {/* ================= MARQUEE TECH BANNER (1000x SMOOTH INFINITE SCROLL) ================= */}
      <section className="relative z-20 py-16 border-y border-white/[0.05] bg-[#020202] overflow-hidden flex flex-col gap-10">
        <div className="flex w-[200%] animate-[marquee_40s_linear_infinite] items-center">
          {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
            <div key={idx} className="flex items-center gap-6 mx-14 opacity-30 hover:opacity-100 transition-opacity duration-500 cursor-hover-target grayscale hover:grayscale-0">
              <span className="text-5xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">{tech.icon}</span>
              <span className="text-3xl font-extrabold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">{tech.name}</span>
            </div>
          ))}
        </div>
        <div className="flex w-[200%] animate-[marquee_40s_linear_infinite_reverse] items-center">
          {[...techStack, ...techStack, ...techStack].reverse().map((tech, idx) => (
            <div key={idx} className="flex items-center gap-6 mx-14 opacity-30 hover:opacity-100 transition-opacity duration-500 cursor-hover-target grayscale hover:grayscale-0">
              <span className="text-5xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">{tech.icon}</span>
              <span className="text-3xl font-extrabold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-white">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 2: SERVICES & METHODOLOGY (SPOTLIGHT BENTO GRID) ================= */}
      <section id="services" className="relative z-10 px-6 sm:px-10 md:px-20 lg:px-28 py-48 max-w-[1800px] mx-auto border-t border-white/[0.05]">
        
        {/* Section Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-32 flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div variants={revealVariants} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.02] border border-white/[0.1] text-xs uppercase tracking-[0.25em] text-gray-300 mb-12 backdrop-blur-2xl shadow-2xl">
            <Sparkles size={16} className="text-blue-400" />
            Core Capabilities
          </motion.div>
          <div className="overflow-hidden pb-4">
            <motion.h2 variants={revealVariants} className="text-6xl sm:text-7xl lg:text-[7rem] font-bold tracking-tighter mb-4 leading-[0.9]">
              Architecting solutions
            </motion.h2>
          </div>
          <div className="overflow-hidden pb-8">
            <motion.h2 variants={revealVariants} className="text-6xl sm:text-7xl lg:text-[7rem] font-bold tracking-tighter mb-10 leading-[0.9]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-white to-gray-600">
                for real-world scale.
              </span>
            </motion.h2>
          </div>
          <motion.p variants={revealVariants} className="text-gray-400 text-2xl font-light tracking-wide leading-[1.8] max-w-4xl">
            I don't just write code. I help visionary teams design, build, and refine entire digital ecosystems that are incredibly fast, scalable, and secure.
          </motion.p>
        </motion.div>

        {/* Services Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-48">
          {servicesData.map((service, idx) => (
            <motion.div key={idx} variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className={service.colSpan}>
              <SpotlightCard glowColor="rgba(255,255,255,0.15)" className="p-12 sm:p-14 h-full cursor-hover-target">
                <div className={`w-24 h-24 rounded-[2rem] bg-[#0a0a0a] flex items-center justify-center mb-12 text-gray-500 transition-colors duration-700 border border-white/[0.08] shadow-inner ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-700 leading-tight">{service.title}</h3>
                <p className="text-gray-400 text-xl leading-[1.8] font-light">{service.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Development Timeline (Awwwards Style Vertical Scroll) */}
        <div className="grid lg:grid-cols-12 gap-24 items-start mt-20">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-5 sticky top-48">
            <h3 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-10 text-white leading-[0.9]">Engineering <br/><span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-700">Methodology.</span></h3>
            <p className="text-2xl text-gray-400 font-light leading-relaxed mb-16">A systematic, uncompromising approach to transforming complex business requirements into elegant, high-performance software architecture.</p>
            
            <SpotlightCard glowColor="rgba(59, 130, 246, 0.15)" className="p-16">
              <Quote className="text-white/10 w-32 h-32 mb-12 group-hover:scale-110 transition-transform duration-1000" />
              <blockquote className="text-4xl font-medium text-gray-300 leading-[1.3] tracking-tight">
                “Good software is not defined by features — but by how well it holds up over time under <span className="text-white font-bold drop-shadow-lg">real-world pressure.</span>”
              </blockquote>
            </SpotlightCard>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="lg:col-span-7 relative pt-10">
            {/* Animated Line */}
            <div className="absolute top-0 bottom-0 left-[35px] w-[2px] bg-white/10">
               <motion.div 
                 className="absolute top-0 w-full bg-gradient-to-b from-teal-500 via-blue-500 to-purple-500"
                 style={{ height: useTransform(scrollYProgress, [0.3, 0.7], ["0%", "100%"]) }}
               />
            </div>
            
            <div className="flex flex-col gap-24">
              {processSteps.map((step, idx) => (
                <motion.div 
                  key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealVariants}
                  className="relative pl-28 group cursor-hover-target"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[24px] top-3 w-6 h-6 rounded-full border-[4px] border-[#000] bg-gray-600 group-hover:bg-white transition-colors duration-500 shadow-[0_0_0_4px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(255,255,255,1)] z-10" />
                  
                  <p className="text-sm uppercase tracking-[0.4em] font-bold text-teal-500 mb-6 flex items-center gap-4">
                    <span className="w-12 h-[1px] bg-teal-500/50 block"></span>
                    {step.phase}
                  </p>
                  <h4 className="text-4xl font-bold text-white mb-6 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-500">{step.title}</h4>
                  <p className="text-gray-400 text-xl leading-relaxed font-light">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: THE SHOWCASE (3D STICKY STACKING PREMIUM CARDS) ================= */}
      <section id="projects" className="relative z-10 py-48 px-6 sm:px-10 md:px-20 lg:px-28 max-w-[1800px] mx-auto border-t border-white/[0.05]">
        
        <motion.header initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-48 flex flex-col items-center text-center max-w-6xl mx-auto">
          <motion.div variants={revealVariants} className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/[0.02] border border-white/[0.1] text-xs uppercase tracking-[0.3em] text-gray-300 mb-12 backdrop-blur-3xl shadow-2xl">
            <Code2 size={16} className="text-teal-400" />
            Selected Portfolio
          </motion.div>
          <div className="overflow-hidden pb-4">
            <motion.h2 variants={revealVariants} className="text-7xl sm:text-8xl lg:text-[8rem] font-bold tracking-tighter mb-8 leading-[0.9]">
              Proof of <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-700">Work.</span>
            </motion.h2>
          </div>
          <motion.p variants={revealVariants} className="text-gray-400 text-2xl font-light tracking-wide leading-[1.8] max-w-4xl">
            A curated collection of enterprise-grade applications. Scroll to explore the architecture, aesthetic, and engineering behind each digital platform.
          </motion.p>
        </motion.header>

        {/* 3D Sticky Stacking Cards Layout */}
        <div className="flex flex-col gap-10 lg:gap-0 relative perspective-1000">
          {projects.map((project, idx) => {
            const stickyTop = `calc(10vh + ${idx * 40}px)`; // Dynamic stack calculation
            
            return (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 200, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:sticky flex flex-col overflow-hidden rounded-[3rem] border border-white/[0.1] bg-[#030303] shadow-[0_-30px_60px_rgba(0,0,0,0.95)] mb-10 lg:mb-48 last:mb-0 transform-gpu"
                style={{ top: stickyTop }}
              >
                <div className="grid lg:grid-cols-12 h-full min-h-[750px] relative">
                  
                  {/* Internal ambient glow for the card */}
                  <div className="absolute top-[-30%] left-[-20%] w-[600px] h-[600px] blur-[200px] rounded-full pointer-events-none z-0 opacity-40 transition-colors duration-1000" style={{ backgroundColor: project.glowColor.replace('0.15', '0.5') }} />

                  {/* Left Content Area */}
                  <div className="lg:col-span-5 p-12 sm:p-20 flex flex-col justify-between border-r border-white/[0.05] relative z-20 bg-black/60 backdrop-blur-3xl">
                    <div>
                      <div className="flex items-center gap-6 mb-12">
                        <span className="text-lg font-mono text-gray-500 font-bold block">0{idx + 1}</span>
                        <div className={`h-[2px] w-24 bg-gradient-to-r from-white to-transparent`} />
                        <span className="text-xs uppercase tracking-[0.4em] text-gray-400 font-bold">{project.subtitle}</span>
                      </div>
                      
                      <h3 className="text-5xl sm:text-7xl font-bold text-white mb-10 tracking-tighter uppercase leading-[0.9] drop-shadow-xl">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 text-xl leading-[1.8] font-light mb-14">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-4 mb-14">
                        {project.tech.map((item, i) => (
                          <span key={i} className="text-xs font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full border border-white/10 text-gray-300 bg-white/[0.03] backdrop-blur-xl shadow-lg">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <MagneticButton href={project.link} className="group flex items-center justify-between px-10 py-6 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white text-white hover:text-black transition-all duration-700 w-fit gap-10 cursor-hover-target backdrop-blur-2xl shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                      <span className="text-sm font-extrabold tracking-[0.25em] uppercase">Launch Platform</span>
                      <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black transition-colors">
                        <ArrowRight size={18} className="group-hover:translate-x-1 group-hover:-rotate-45 group-hover:text-white transition-all duration-500" />
                      </div>
                    </MagneticButton>
                  </div>

                  {/* Right Image Area (Massive Interactive Visual) */}
                  <div className="lg:col-span-7 relative group cursor-hover-target overflow-hidden h-[500px] lg:h-auto bg-[#080808]" onClick={() => setSelectedImg(project.image)}>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-1000 z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-[4000ms] group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                    />
                    
                    {/* Hover expand icon */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="w-28 h-28 bg-black/70 backdrop-blur-2xl rounded-full flex items-center justify-center border border-white/20 scale-50 group-hover:scale-100 transition-transform duration-700 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                         <Maximize2 className="text-white" size={36} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ================= SECTION 4: CONTACT / FOOTER (ULTRA PREMIUM GLASSMORPHISM) ================= */}
      <section className="relative z-10 py-48 px-6 sm:px-10 border-t border-white/[0.05] flex flex-col items-center overflow-hidden">
        
        {/* Massive Background Glow */}
        <div className="absolute bottom-[-60%] left-[50%] -translate-x-1/2 w-[120vw] h-[120vw] rounded-full bg-teal-900/15 blur-[250px] mix-blend-screen pointer-events-none animate-[pulse_15s_ease-in-out_infinite]" />

        <div className="max-w-6xl w-full flex flex-col items-center text-center relative z-20">
          <p className="text-sm uppercase tracking-[0.6em] text-gray-500 font-bold mb-12">Next Steps</p>
          <div className="overflow-hidden pb-4 mb-16">
            <motion.h2 initial={{ y: 150 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1, type: "spring" }} className="text-7xl sm:text-[9rem] lg:text-[12rem] font-bold tracking-tighter leading-[0.8] text-white drop-shadow-2xl">
              LET'S TALK.
            </motion.h2>
          </div>
          <p className="text-2xl sm:text-3xl text-gray-400 font-light max-w-3xl mb-24 leading-relaxed">
            Currently available for freelance opportunities, full-time engineering roles, and visionary projects. Let's build something extraordinary together.
          </p>

          {/* Premium Contact Form UI */}
          <SpotlightCard glowColor="rgba(20, 184, 166, 0.2)" className="w-full max-w-4xl p-12 sm:p-20 mb-32 cursor-hover-target">
            <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="relative group">
                  <input type="text" placeholder="YOUR NAME" className="w-full bg-transparent border-b border-white/20 pb-5 text-white text-xl font-light tracking-wider focus:outline-none focus:border-white transition-colors uppercase placeholder:text-gray-700" />
                  <div className="absolute bottom-0 left-0 h-[2px] bg-white w-0 group-focus-within:w-full transition-all duration-500" />
                </div>
                <div className="relative group">
                  <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-b border-white/20 pb-5 text-white text-xl font-light tracking-wider focus:outline-none focus:border-white transition-colors uppercase placeholder:text-gray-700" />
                  <div className="absolute bottom-0 left-0 h-[2px] bg-white w-0 group-focus-within:w-full transition-all duration-500" />
                </div>
              </div>
              <div className="relative group mt-4">
                <textarea placeholder="PROJECT DETAILS OR MESSAGE" rows="4" className="w-full bg-transparent border-b border-white/20 pt-4 pb-5 text-white text-xl font-light tracking-wider focus:outline-none focus:border-white transition-colors resize-none uppercase placeholder:text-gray-700"></textarea>
                <div className="absolute bottom-0 left-0 h-[2px] bg-white w-0 group-focus-within:w-full transition-all duration-500" />
              </div>
              
              <MagneticButton className="mt-10 group w-full py-8 rounded-full border border-white text-black bg-white flex items-center justify-center gap-5 hover:bg-transparent hover:text-white transition-all duration-700 cursor-pointer shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-none">
                <span className="text-sm font-extrabold tracking-[0.3em] uppercase">Transmit Message</span>
                <Send size={20} className="group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-500" />
              </MagneticButton>
            </form>
          </SpotlightCard>

          {/* Socials & Copyright */}
          <div className="flex flex-wrap justify-center gap-10 mb-24">
            <SocialIcon href="https://github.com" icon={<Github size={32} strokeWidth={1.5} />} label="GitHub" />
            <SocialIcon href="https://linkedin.com" icon={<Linkedin size={32} strokeWidth={1.5} />} label="LinkedIn" />
            <SocialIcon href="mailto:your.email@example.com" icon={<Mail size={32} strokeWidth={1.5} />} label="Email" />
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

          <div className="flex flex-col sm:flex-row items-center justify-between w-full text-xs font-bold tracking-[0.3em] text-gray-500 uppercase">
            <p>© {new Date().getFullYear()} Anas Khan</p>
            <p className="mt-6 sm:mt-0">Designed & Engineered in India</p>
          </div>
        </div>
      </section>

      {/* ================= CINEMATIC LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }} 
            animate={{ opacity: 1, backdropFilter: "blur(50px)" }} 
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 sm:p-10 cursor-auto"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-10 sm:top-14 right-10 sm:right-14 text-white/50 hover:text-white transition-all duration-500 p-6 bg-white/5 border border-white/10 rounded-full backdrop-blur-3xl z-50 hover:bg-white/10 hover:scale-110 shadow-2xl cursor-hover-target" 
              onClick={() => setSelectedImg(null)}
            >
              <X size={36} strokeWidth={1.5} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 60 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 60 }} 
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 1 }} 
              className="relative max-w-[1700px] w-full flex justify-center items-center cursor-auto perspective-1000" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-white/5 blur-[250px] rounded-full z-0 pointer-events-none" />
              <img 
                src={selectedImg} 
                alt="Expanded View" 
                className="relative z-10 w-full h-auto max-h-[90vh] object-contain rounded-[2rem] shadow-[0_0_200px_rgba(0,0,0,1)] border border-white/[0.08]" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS Overrides for Premium Awwwards Feel */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee_reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0%); }
        }
        /* Custom sleek scrollbar */
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #111; border-radius: 5px; border: 1px solid #222; }
        ::-webkit-scrollbar-thumb:hover { background: #333; }
        /* Ultra smooth font rendering */
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
        /* Perspective class for 3D tilts */
        .perspective-1000 { perspective: 1000px; }
      `}} />
    </main>
  );
};

// ================= MAGNETIC SOCIAL ICON COMPONENT ================= //
function SocialIcon({ href, icon, label }) {
  return (
    <MagneticButton href={href} className="flex flex-col items-center gap-5 group cursor-hover-target">
      <div className="p-8 sm:p-10 rounded-full border border-white/10 bg-white/[0.02] text-gray-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-700 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        <div className="relative z-10 scale-100 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      </div>
      <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-600 group-hover:text-white transition-colors duration-500">{label}</span>
    </MagneticButton>
  );
}

export default Home;