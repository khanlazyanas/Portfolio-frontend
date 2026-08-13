import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  ArrowRight, Download, Mail, Code2, MonitorSmartphone, 
  Server, Zap, Cloud, CheckCircle2, Quote, ExternalLink, X, Maximize2,
  ChevronRight, Github, Linkedin, Send, MapPin, Sparkles, Terminal
} from "lucide-react"; 
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiOpenai, SiGithub, SiLinkedin,
  SiNextdotjs, SiFramer, SiJsonwebtokens
} from "react-icons/si";

// ================= ASSETS ================= //
// Make sure paths are correct based on your folder structure
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
  { name: "HTML5 Architecture", icon: <SiHtml5 /> },
  { name: "CSS3 Modules", icon: <SiCss3 /> },
  { name: "AI Prompts & API", icon: <SiOpenai /> },
];

const servicesData = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end development of production-ready web applications — from frontend interfaces to backend logic, APIs, and databases. Built with long-term scalability in mind.",
    icon: <Code2 size={28} strokeWidth={1.5} />,
    color: "group-hover:text-teal-400",
    glow: "group-hover:bg-teal-400/10",
    border: "group-hover:border-teal-400/50",
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    title: "Frontend Engineering & UX",
    description: "Crafting clean, responsive, and accessible user interfaces that feel fast, intuitive, and consistent across all devices and screen sizes.",
    icon: <MonitorSmartphone size={28} strokeWidth={1.5} />,
    color: "group-hover:text-blue-400",
    glow: "group-hover:bg-blue-400/10",
    border: "group-hover:border-blue-400/50",
    colSpan: "col-span-1"
  },
  {
    title: "Backend & API Architecture",
    description: "Designing secure and scalable backend systems, RESTful APIs, authentication flows, and data models that perfectly support business growth.",
    icon: <Server size={28} strokeWidth={1.5} />,
    color: "group-hover:text-purple-400",
    glow: "group-hover:bg-purple-400/10",
    border: "group-hover:border-purple-400/50",
    colSpan: "col-span-1"
  },
  {
    title: "Performance Optimization",
    description: "Improving load times, reducing bottlenecks, and optimizing both frontend and backend performance for a seamless user experience.",
    icon: <Zap size={28} strokeWidth={1.5} />,
    color: "group-hover:text-yellow-400",
    glow: "group-hover:bg-yellow-400/10",
    border: "group-hover:border-yellow-400/50",
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    title: "Deployment & Scalability",
    description: "Preparing applications for real-world traffic — cloud deployment, environment setup, CI/CD pipelines, and robust scalability planning.",
    icon: <Cloud size={28} strokeWidth={1.5} />,
    color: "group-hover:text-emerald-400",
    glow: "group-hover:bg-emerald-400/10",
    border: "group-hover:border-emerald-400/50",
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
    tech: ["React.js", "Node.js & Express", "MongoDB", "Google OAuth 2.0", "JWT Auth", "Tailwind CSS", "Framer Motion"],
    glowColor: "bg-indigo-500/20", 
  },
  {
    title: "NEXPOS",
    subtitle: "Enterprise-Grade Point of Sale & Retail Management System",
    description: "A next-generation, full-stack retail SaaS platform built on Next.js and MongoDB. Designed with an ultra-premium 'Silicon Valley' glassmorphic aesthetic, it features real-time inventory tracking, a dedicated CRM for 'Khata' (customer credit) management, and secure role-based access control (RBAC) via Next-Auth. The system boasts seamless Razorpay payment gateway integration, dynamic Recharts analytics dashboards, and an automated, print-ready thermal receipt generator.",
    link: "https://nexpos-azure.vercel.app", 
    image: nexposimg, 
    tech: ["Next.js", "React.js", "MongoDB", "Next-Auth", "Tailwind CSS", "Razorpay", "Recharts"],
    glowColor: "bg-emerald-500/20", 
  },
  {
    title: "WEIGHTLOSS-DOC",
    subtitle: "Elite Bio-Medical & Metabolic Optimization Platform",
    description: "A high-end clinical web application designed for a specialized metabolic clinic. The platform features an ultra-premium 'Silicon Valley' aesthetic, built with a focus on data-driven health optimization. It includes interactive biometric diagnostic tools (BMI), automated intake systems, and an evidence-based case study gallery.",
    link: "https://weight-loss-doc.vercel.app",
    image: weightlossimg,
    tech: ["React.js", "Tailwind CSS v4", "Lucide Icons", "Framer Motion"],
    glowColor: "bg-cyan-500/20",
  },
  {
    title: "TASKMIND AI",
    subtitle: "AI-Powered SaaS Task Manager & Automated Workspace",
    description: "A highly intelligent, automated task management platform built with Next.js and the MERN architecture. It features a context-aware AI assistant utilizing the Google Gemini API with custom function calling for real-time database operations via natural language. The backend is robustly engineered with background Vercel Cron Jobs for automated daily reminders, native OS-level Push Notifications via the Web Push API, and an interactive drag-and-drop Kanban board for seamless workflow execution.",
    link: "https://taskmind-ai-three.vercel.app", 
    image: taskmindimg, 
    tech: ["Next.js", "MongoDB", "Google Gemini API", "Vercel Cron", "Web Push API", "Tailwind CSS", "dnd-kit", "Shadcn UI"],
    glowColor: "bg-blue-500/20", 
  },
  {
    title: "AI-MOCK-INTERVIEW",
    subtitle: "AI-Powered Interview Practice Platform",
    description: "An AI-driven mock interview platform currently under active development using the MERN stack and Tailwind CSS. The system is being built to simulate real interview experiences with AI-generated questions, resume-based assessments, performance feedback, and skill analysis.",
    link: "https://ai-mock-interview-lac-two.vercel.app",
    image: aiMockInterviewImg,
    tech: ["Next.js", "Tailwind CSS", "AI Integration", "JWT Auth"],
    glowColor: "bg-teal-500/20",
  },
  {
    title: "UrbanGreens",
    subtitle: "Full-Stack Grocery Commerce Platform",
    description: "A production-ready grocery commerce platform engineered with the MERN stack and Tailwind CSS. Designed for scale and reliability, featuring secure authentication, product and order management, cart workflows, and Razorpay payment integration with a refined, high-performance user experience.",
    link: "https://urbangreens-frontend-n2hv3.vercel.app",
    image: urbanGreensImg,
    tech: ["MERN Stack", "Tailwind CSS", "Razorpay", "JWT Auth"],
    glowColor: "bg-green-500/20",
  },
  {
    title: "Bajaj Auto Sales",
    subtitle: "Enterprise Automobile Sales & Service System",
    description: "An enterprise-grade automobile sales and service management system built using the MERN stack. Enables vehicle discovery, pricing transparency, customer enquiries, booking, and service workflows within a scalable, business-ready interface.",
    link: "https://nationalautosales.vercel.app",
    image: bajajAutoImg,
    tech: ["MERN Stack", "Tailwind CSS", "REST APIs"],
    glowColor: "bg-indigo-600/20",
  },
  {
    title: "Weather Forecast",
    subtitle: "Real-Time Weather Intelligence App",
    description: "A modern React-based weather application delivering real-time forecasts, location search, and API-driven insights using OpenWeather, wrapped in a calm, responsive, and user-centric interface.",
    link: "https://anaskhanweathersearch.netlify.app/",
    image: weatherImg,
    tech: ["React", "API Integration", "Tailwind CSS"],
    glowColor: "bg-purple-500/20",
  },
];


// ================= SUB-COMPONENTS FOR MAXIMUM PREMIUM FEEL ================= //

// 1. Magnetic Button Wrapper (High-end Physics Interaction)
const MagneticButton = ({ children, className, onClick, href }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
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
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    if (href.startsWith('#')) {
      return <a href={href}>{content}</a>;
    }
    return <Link to={href}>{content}</Link>;
  }
  return content;
};

// 2. Custom Animated Cursor (Silicon Valley Standard)
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
      {/* Small dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[9998] mix-blend-difference flex items-center justify-center"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
      >
        {isHovering && <span className="text-[4px] font-bold text-black uppercase tracking-widest">Click</span>}
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

  // Hero Parallax effect
  const yHeroText = useTransform(scrollYProgress, [0, 0.2], [0, 200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scaleHeroImage = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  // Smooth scroll handler
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Reusable Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 70, damping: 20, mass: 1 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <main ref={containerRef} className="relative bg-[#000000] text-white selection:bg-teal-500/30 overflow-hidden font-sans antialiased cursor-none">
      
      {/* Render Custom Cursor */}
      <CustomCursor />

      {/* 🌟 Ultra Premium Absolute Background System */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black">
        {/* Dynamic mesh gradients */}
        <div className="absolute top-[-30%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-teal-900/10 blur-[150px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-30%] right-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-900/10 blur-[150px] mix-blend-screen animate-[pulse_12s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] rounded-full bg-purple-900/10 blur-[150px] mix-blend-screen animate-[pulse_15s_ease-in-out_infinite]" />
        
        {/* Architectural Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:120px_120px]" />
        
        {/* Cinematic Grain Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
      </div>

      {/* Global Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 z-[999] origin-left"
        style={{ scaleX }}
      />

      {/* ================= SECTION 1: HERO ================= */}
      <section id="hero" className="relative z-10 min-h-[100vh] flex items-center pt-32 pb-20 px-6 sm:px-10 md:px-20 lg:px-28 max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center w-full relative">
          
          {/* Header Content with Parallax */}
          <motion.header 
            style={{ y: yHeroText, opacity: opacityHero }}
            initial="hidden" animate="visible" variants={staggerContainer} 
            className="lg:col-span-7 flex flex-col items-start relative z-20"
          >
            {/* Availability Pill */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-2xl mb-12 shadow-[0_0_30px_rgba(255,255,255,0.03)] cursor-hover-target">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500 shadow-[0_0_12px_rgba(20,184,166,1)]"></span>
              </span>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-300">Open for new opportunities</span>
            </motion.div>

            {/* Massive Typography */}
            <motion.h1 variants={fadeUp} className="text-6xl sm:text-7xl lg:text-[8rem] font-bold tracking-tighter leading-[0.85] mb-8 relative">
              <span className="relative z-10 text-white drop-shadow-2xl">MOHAMMED</span>
              <br />
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-600 pb-4 inline-block">
                ILTAF.
              </span>
            </motion.h1>

            {/* Typewriter Role Terminal Box */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 bg-white/[0.02] border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md mb-10 w-full max-w-lg cursor-hover-target shadow-xl">
              <Terminal size={24} className="text-teal-400" />
              <div className="text-teal-400 text-xl sm:text-2xl font-mono tracking-tight font-light h-8 flex items-center">
                <Typewriter
                  words={["MERN Stack Architect", "Next.js Specialist", "Software Engineer"]}
                  loop={true} cursor cursorStyle="█" typeSpeed={60} deleteSpeed={40} delaySpeed={2500}
                />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p variants={fadeUp} className="text-gray-400 text-lg sm:text-xl leading-[1.8] max-w-2xl font-light tracking-wide mb-14">
              I engineer scalable digital ecosystems. Focused on clean modular architecture, seamless user experiences, and high-performance backend infrastructure that stands the test of time.
            </motion.p>

            {/* Magnetic Action Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-8">
              <MagneticButton href="#projects" className="group relative px-10 py-5 bg-white text-black font-semibold rounded-full overflow-hidden flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.15)] cursor-pointer">
                <span className="text-sm uppercase tracking-[0.15em]">Explore Work</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 group-hover:-rotate-45 transition-transform duration-300" />
              </MagneticButton>
              
              <MagneticButton href="/resume" className="group px-10 py-5 bg-transparent border border-white/[0.15] text-white rounded-full hover:bg-white/[0.05] flex items-center gap-3 backdrop-blur-xl transition-colors cursor-pointer">
                <Download size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-sm font-medium tracking-wide uppercase">Download CV</span>
              </MagneticButton>
            </motion.div>
          </motion.header>

          {/* Premium Hero Visuals (Asymmetrical Bento Dashboard) */}
          <motion.article 
            initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }} 
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }} 
            transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
            className="lg:col-span-5 relative w-full h-full flex flex-col justify-center"
          >
            <div className="grid grid-cols-2 gap-6 w-full">
              {/* Main Image Frame with Parallax */}
              <motion.div style={{ scale: scaleHeroImage }} className="col-span-2 rounded-[3rem] overflow-hidden border border-white/[0.08] relative group h-[450px] sm:h-[550px] shadow-[0_0_80px_rgba(0,0,0,0.8)] cursor-hover-target bg-[#0a0a0a]">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10 opacity-90" />
                <img src={profileImage} alt="Mohammed Iltaf" loading="eager" className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110 grayscale-[20%]" />
                
                {/* Floating Image Tags */}
                <div className="absolute top-8 right-8 z-20 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">Online</span>
                </div>
                
                <div className="absolute bottom-12 left-10 z-20 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-teal-400 bg-black/40 w-fit px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                    <MapPin size={14} />
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold">Based In</p>
                  </div>
                  <p className="text-4xl font-semibold text-white tracking-tight drop-shadow-xl">Lucknow, India</p>
                </div>
              </motion.div>

              {/* Bento Stat 1 */}
              <div className="rounded-[2.5rem] p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.08] backdrop-blur-xl flex flex-col justify-center items-center group hover:bg-white/[0.05] transition-all duration-500 cursor-hover-target shadow-2xl">
                <p className="text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">10<span className="text-teal-500">+</span></p>
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 font-bold">Projects Built</p>
              </div>

              {/* Bento Socials */}
              <div className="rounded-[2.5rem] p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.08] backdrop-blur-xl flex flex-col justify-center items-center group hover:bg-white/[0.05] transition-all duration-500 cursor-hover-target shadow-2xl">
                <div className="flex gap-4 mb-5">
                  <SocialIcon href="https://github.com" icon={<SiGithub size={22} />} />
                  <SocialIcon href="https://linkedin.com" icon={<SiLinkedin size={22} />} />
                </div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 font-bold">Connect Network</p>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* ================= MARQUEE TECH BANNER (INFINITE SCROLL) ================= */}
      <section className="relative z-20 py-12 border-y border-white/[0.05] bg-[#050505] overflow-hidden flex flex-col gap-6">
        {/* Row 1: Left to Right */}
        <div className="flex w-[200%] animate-[marquee_40s_linear_infinite] items-center">
          {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
            <div key={idx} className="flex items-center gap-4 mx-10 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-hover-target grayscale hover:grayscale-0">
              <span className="text-4xl text-white">{tech.icon}</span>
              <span className="text-2xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{tech.name}</span>
            </div>
          ))}
        </div>
        {/* Row 2: Right to Left */}
        <div className="flex w-[200%] animate-[marquee_40s_linear_infinite_reverse] items-center">
          {[...techStack, ...techStack, ...techStack].reverse().map((tech, idx) => (
            <div key={idx} className="flex items-center gap-4 mx-10 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-hover-target grayscale hover:grayscale-0">
              <span className="text-4xl text-white">{tech.icon}</span>
              <span className="text-2xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 2: SERVICES & METHODOLOGY (BENTO GRID) ================= */}
      <section id="services" className="relative z-10 px-6 sm:px-10 md:px-20 lg:px-28 py-40 max-w-[1800px] mx-auto border-t border-white/[0.05]">
        
        {/* Section Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-24 flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.1] text-xs uppercase tracking-[0.2em] text-gray-300 mb-10 backdrop-blur-xl shadow-lg">
            <Sparkles size={16} className="text-blue-400" />
            Core Capabilities
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tighter mb-10 leading-[0.9]">
            Architecting solutions <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-white to-gray-600">
              for real-world scale.
            </span>
          </h2>
          <p className="text-gray-400 text-xl font-light tracking-wide leading-[1.8]">
            I don't just write code. I help teams design, build, and refine entire digital ecosystems that are incredibly fast, scalable, and secure.
          </p>
        </motion.div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-40">
          {servicesData.map((service, idx) => (
            <motion.div 
              key={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              className={`group p-12 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] backdrop-blur-2xl transition-all duration-700 hover:-translate-y-4 overflow-hidden relative ${service.colSpan} ${service.border} shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-hover-target`}
            >
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none ${service.glow.replace('group-hover:', '')}`} />
              
              <div className={`w-20 h-20 rounded-[1.5rem] bg-[#0a0a0a] flex items-center justify-center mb-12 text-gray-500 transition-colors duration-500 border border-white/[0.08] shadow-inner ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-500">{service.title}</h3>
              <p className="text-gray-400 text-lg leading-[1.8] font-light">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Development Timeline (Process) - Replacing simple list with animated timeline */}
        <div className="grid lg:grid-cols-12 gap-20 items-start mt-20">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-5 sticky top-40">
            <h3 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-8 text-white">Engineering <br/><span className="text-gray-500">Methodology.</span></h3>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">A systematic approach to transforming complex business requirements into elegant, high-performance software architecture.</p>
            
            <div className="relative p-14 rounded-[3rem] bg-[#050505] border border-white/[0.08] backdrop-blur-2xl group hover:border-white/[0.15] transition-all duration-700 overflow-hidden shadow-2xl">
              <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full group-hover:bg-white/10 transition-colors duration-1000" />
              <Quote className="absolute top-10 right-10 text-white/5 w-24 h-24 group-hover:scale-110 transition-transform duration-1000" />
              <blockquote className="relative z-10 text-3xl font-medium text-gray-300 leading-[1.3] tracking-tight">
                “Good software is not defined by features — but by how well it holds up over time under <span className="text-white font-semibold">real-world pressure.</span>”
              </blockquote>
            </div>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="lg:col-span-7 relative">
            <div className="absolute top-0 bottom-0 left-[27px] w-[2px] bg-gradient-to-b from-teal-500/50 via-blue-500/50 to-transparent" />
            
            <div className="flex flex-col gap-16">
              {processSteps.map((step, idx) => (
                <motion.div 
                  key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
                  className="relative pl-20 group cursor-hover-target"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[18px] top-2 w-5 h-5 rounded-full border-[4px] border-[#000] bg-gray-500 group-hover:bg-white transition-colors duration-500 shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] z-10" />
                  
                  <p className="text-xs uppercase tracking-[0.3em] font-bold text-teal-500 mb-4">{step.phase}</p>
                  <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all">{step.title}</h4>
                  <p className="text-gray-400 text-lg leading-relaxed font-light">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: THE SHOWCASE (STICKY STACKING PREMIUM CARDS) ================= */}
      <section id="projects" className="relative z-10 py-40 px-6 sm:px-10 md:px-20 lg:px-28 max-w-[1800px] mx-auto border-t border-white/[0.05]">
        
        <motion.header initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-40 flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.1] text-xs uppercase tracking-widest text-gray-300 mb-10 backdrop-blur-xl">
            <Code2 size={16} className="text-teal-400" />
            Selected Portfolio
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-bold tracking-tighter mb-10 leading-[0.9]">
            Proof of <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-700">Work.</span>
          </h2>
          <p className="text-gray-400 text-xl font-light tracking-wide leading-relaxed">
            A curated collection of enterprise-grade applications. Scroll to explore the architecture, aesthetic, and engineering behind each platform.
          </p>
        </motion.header>

        {/* Sticky Stacking Cards Layout */}
        <div className="flex flex-col gap-10 lg:gap-0 relative">
          {projects.map((project, idx) => {
            // Dynamic sticky offset calculation so they stack like a deck of cards
            const stickyTop = `calc(10vh + ${idx * 30}px)`;
            
            return (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:sticky flex flex-col overflow-hidden rounded-[3rem] border border-white/[0.15] bg-[#030303] shadow-[0_-20px_50px_rgba(0,0,0,0.9)] mb-10 lg:mb-40 last:mb-0"
                style={{ top: stickyTop }}
              >
                <div className="grid lg:grid-cols-12 h-full min-h-[700px] relative">
                  
                  {/* Internal ambient glow for the card */}
                  <div className={`absolute top-[-20%] left-[-10%] w-[500px] h-[500px] ${project.glowColor} blur-[150px] rounded-full pointer-events-none z-0 opacity-50`} />

                  {/* Left Content Area */}
                  <div className="lg:col-span-5 p-10 sm:p-16 lg:p-20 flex flex-col justify-between border-r border-white/[0.05] relative z-20 bg-black/40 backdrop-blur-3xl">
                    <div>
                      <div className="flex items-center gap-6 mb-10">
                        <span className="text-sm font-mono text-gray-500 font-bold block">0{idx + 1}</span>
                        <div className={`h-[2px] w-16 bg-gradient-to-r from-white to-transparent`} />
                        <span className="text-xs uppercase tracking-[0.3em] text-gray-300 font-bold">{project.subtitle}</span>
                      </div>
                      
                      <h3 className="text-5xl sm:text-6xl font-bold text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 text-lg sm:text-xl leading-[1.8] font-light mb-12">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-3 mb-12">
                        {project.tech.map((item, i) => (
                          <span key={i} className="text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full border border-white/10 text-gray-300 bg-white/[0.03] backdrop-blur-md shadow-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <MagneticButton href={project.link} className="group flex items-center justify-between px-10 py-6 rounded-full border border-white/20 bg-white/[0.03] hover:bg-white text-white hover:text-black transition-all duration-500 w-fit gap-8 cursor-hover-target backdrop-blur-md">
                      <span className="text-sm font-bold tracking-[0.2em] uppercase">Launch Platform</span>
                      <ArrowRight size={20} className="group-hover:translate-x-2 group-hover:-rotate-45 transition-transform duration-300" />
                    </MagneticButton>
                  </div>

                  {/* Right Image Area (Massive Interactive Visual) */}
                  <div className="lg:col-span-7 relative group cursor-hover-target overflow-hidden h-[400px] lg:h-auto bg-[#080808]" onClick={() => setSelectedImg(project.image)}>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-1000 z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-[3000ms] group-hover:scale-110 grayscale-[15%] group-hover:grayscale-0"
                    />
                    
                    {/* Hover expand icon */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="w-24 h-24 bg-black/60 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 scale-50 group-hover:scale-100 transition-transform duration-700 shadow-2xl">
                         <Maximize2 className="text-white" size={32} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ================= SECTION 4: CONTACT / FOOTER (ULTRA PREMIUM) ================= */}
      <section className="relative z-10 py-40 px-6 sm:px-10 border-t border-white/[0.05] flex flex-col items-center overflow-hidden">
        
        {/* Massive Background Glow */}
        <div className="absolute bottom-[-50%] left-[50%] -translate-x-1/2 w-[100vw] h-[100vw] rounded-full bg-teal-900/10 blur-[200px] mix-blend-screen pointer-events-none" />

        <div className="max-w-5xl w-full flex flex-col items-center text-center relative z-20">
          <p className="text-sm uppercase tracking-[0.5em] text-gray-500 font-bold mb-10">What's Next?</p>
          <h2 className="text-6xl sm:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-[0.8] mb-16 text-white drop-shadow-2xl">
            LET'S TALK.
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 font-light max-w-2xl mb-16">
            Currently available for freelance opportunities, full-time roles, and challenging projects. Let's build something extraordinary together.
          </p>

          {/* Premium Contact Form UI (Visual Layout) */}
          <div className="w-full max-w-3xl p-10 sm:p-16 rounded-[3rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-3xl shadow-2xl mb-24 cursor-hover-target">
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <input type="text" placeholder="YOUR NAME" className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-lg font-light tracking-wide focus:outline-none focus:border-white transition-colors uppercase placeholder:text-gray-600" />
                <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-lg font-light tracking-wide focus:outline-none focus:border-white transition-colors uppercase placeholder:text-gray-600" />
              </div>
              <textarea placeholder="PROJECT DETAILS OR MESSAGE" rows="4" className="w-full bg-transparent border-b border-white/20 pt-4 pb-4 text-white text-lg font-light tracking-wide focus:outline-none focus:border-white transition-colors resize-none uppercase placeholder:text-gray-600 mt-4"></textarea>
              
              <MagneticButton className="mt-8 group w-full py-6 rounded-full border border-white/20 bg-white text-black flex items-center justify-center gap-4 hover:bg-transparent hover:text-white transition-all duration-500 cursor-pointer text-sm font-bold tracking-[0.2em] uppercase">
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
              </MagneticButton>
            </form>
          </div>

          {/* Socials & Copyright */}
          <div className="flex flex-wrap justify-center gap-8 mb-20">
            <SocialIcon href="https://github.com" icon={<Github size={28} strokeWidth={1.5} />} label="GitHub" />
            <SocialIcon href="https://linkedin.com" icon={<Linkedin size={28} strokeWidth={1.5} />} label="LinkedIn" />
            <SocialIcon href="mailto:your.email@example.com" icon={<Mail size={28} strokeWidth={1.5} />} label="Email" />
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />

          <div className="flex flex-col sm:flex-row items-center justify-between w-full text-xs font-bold tracking-[0.2em] text-gray-600 uppercase">
            <p>© {new Date().getFullYear()} Mohammed Iltaf</p>
            <p className="mt-4 sm:mt-0">Designed & Engineered in India</p>
          </div>
        </div>
      </section>

      {/* ================= CINEMATIC LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }} 
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }} 
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 sm:p-10 cursor-auto"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-8 sm:top-12 right-8 sm:right-12 text-white/50 hover:text-white transition-all duration-300 p-5 bg-white/5 border border-white/10 rounded-full backdrop-blur-2xl z-50 hover:bg-white/10 hover:scale-110 shadow-2xl cursor-hover-target" 
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} strokeWidth={1.5} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 40 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 40 }} 
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 1 }} 
              className="relative max-w-[1600px] w-full flex justify-center items-center cursor-auto" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-white/5 blur-[200px] rounded-full z-0 pointer-events-none" />
              <img 
                src={selectedImg} 
                alt="Expanded View" 
                className="relative z-10 w-full h-auto max-h-[90vh] object-contain rounded-3xl shadow-[0_0_150px_rgba(0,0,0,1)] border border-white/[0.08]" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Adding Keyframes & Global CSS Overrides for Premium Feel */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee_reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0%); }
        }
        /* Hide default scrollbar for sleekness */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: #222;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #444;
        }
        /* Base typography smoothing */
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}} />
    </main>
  );
};

// Extremely premium magnetic social icon
function SocialIcon({ href, icon, label }) {
  return (
    <MagneticButton href={href} className="flex flex-col items-center gap-4 group cursor-hover-target">
      <div className="p-6 sm:p-8 rounded-full border border-white/20 bg-transparent text-gray-400 group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-xl relative overflow-hidden">
        <div className="relative z-10">{icon}</div>
      </div>
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 group-hover:text-white transition-colors duration-300">{label}</span>
    </MagneticButton>
  );
}

export default Home;