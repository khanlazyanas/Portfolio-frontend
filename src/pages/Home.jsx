import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { 
  ArrowRight, Download, Mail, Code2, MonitorSmartphone, 
  Server, Zap, Cloud, CheckCircle2, Quote, ExternalLink, X, Maximize2 
} from "lucide-react"; 
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiOpenai, SiGithub, SiLinkedin,
} from "react-icons/si";

// Images (Make sure paths are correct based on your folder structure)
import profileImage from "../assets/anas2.jpg";
import urbanGreensImg from "../assets/urbangreens.png";
import bajajAutoImg from "../assets/bajajnewimage.png";
import weatherImg from "../assets/weather.png";
import aiMockInterviewImg from "../assets/Ai-mock-interview.png";
import weightlossimg from "../assets/drabubakar.png";
import bizflowimg from "../assets/bizzflow.png";


// ================= DATA ARRAYS ================= //

const techStack = [
  { name: "HTML", icon: <SiHtml5 />, hoverColor: "hover:text-[#E34F26] hover:border-[#E34F26]/50 hover:bg-[#E34F26]/10" },
  { name: "CSS", icon: <SiCss3 />, hoverColor: "hover:text-[#1572B6] hover:border-[#1572B6]/50 hover:bg-[#1572B6]/10" },
  { name: "JavaScript", icon: <SiJavascript />, hoverColor: "hover:text-[#F7DF1E] hover:border-[#F7DF1E]/50 hover:bg-[#F7DF1E]/10" },
  { name: "React", icon: <SiReact />, hoverColor: "hover:text-[#61DAFB] hover:border-[#61DAFB]/50 hover:bg-[#61DAFB]/10" },
  { name: "Tailwind", icon: <SiTailwindcss />, hoverColor: "hover:text-[#06B6D4] hover:border-[#06B6D4]/50 hover:bg-[#06B6D4]/10" },
  { name: "Node.js", icon: <SiNodedotjs />, hoverColor: "hover:text-[#339933] hover:border-[#339933]/50 hover:bg-[#339933]/10" },
  { name: "Express", icon: <SiExpress />, hoverColor: "hover:text-white hover:border-white/50 hover:bg-white/10" },
  { name: "MongoDB", icon: <SiMongodb />, hoverColor: "hover:text-[#47A248] hover:border-[#47A248]/50 hover:bg-[#47A248]/10" },
  { name: "AI Tools", icon: <SiOpenai />, hoverColor: "hover:text-[#412991] hover:border-[#412991]/50 hover:bg-[#412991]/10" },
];

const servicesData = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end development of production-ready web applications — from frontend interfaces to backend logic, APIs, and databases. Built with long-term scalability in mind.",
    icon: <Code2 size={28} />,
    color: "text-teal-400",
    bgGlow: "group-hover:bg-teal-400/10",
    borderGlow: "group-hover:border-teal-400/30"
  },
  {
    title: "Frontend Engineering & UX",
    description: "Crafting clean, responsive, and accessible user interfaces that feel fast, intuitive, and consistent across all devices and screen sizes.",
    icon: <MonitorSmartphone size={28} />,
    color: "text-blue-400",
    bgGlow: "group-hover:bg-blue-400/10",
    borderGlow: "group-hover:border-blue-400/30"
  },
  {
    title: "Backend & API Architecture",
    description: "Designing secure and scalable backend systems, RESTful APIs, authentication flows, and data models that perfectly support business growth.",
    icon: <Server size={28} />,
    color: "text-purple-400",
    bgGlow: "group-hover:bg-purple-400/10",
    borderGlow: "group-hover:border-purple-400/30"
  },
  {
    title: "Performance Optimization",
    description: "Improving load times, reducing bottlenecks, and optimizing both frontend and backend performance for a seamless user experience.",
    icon: <Zap size={28} />,
    color: "text-yellow-400",
    bgGlow: "group-hover:bg-yellow-400/10",
    borderGlow: "group-hover:border-yellow-400/30"
  },
  {
    title: "Deployment & Scalability",
    description: "Preparing applications for real-world traffic — cloud deployment, environment setup, CI/CD pipelines, and robust scalability planning.",
    icon: <Cloud size={28} />,
    color: "text-emerald-400",
    bgGlow: "group-hover:bg-emerald-400/10",
    borderGlow: "group-hover:border-emerald-400/30"
  }
];

const processSteps = [
  "Understand the core problem before writing a single line of code.",
  "Design scalable systems, not just temporary features.",
  "Build with absolute clarity and maintainability in mind.",
  "Optimize aggressively for performance and real-world scale.",
  "Deliver clean, well-documented, and production-ready solutions."
];

const projects = [
  {
    title: "BIZFLOW",
    subtitle: "Enterprise B2B SaaS & Workspace Management Platform",
    description:
      "A full-stack, multi-tenant SaaS application engineered on the MERN stack. Designed with an ultra-premium 'Deep Space' dark mode aesthetic, it features advanced security protocols including Google OAuth 2.0, Passwordless Magic Link (OTP) authentication, and strict cross-domain HTTP-only cookies. The robust backend architecture is equipped with automated cron jobs for data lifecycle management (Soft Delete/Recycle Bin), rate-limiting for API protection, and seamless invoice generation.",
    link: "https://bizflow-saas-web.vercel.app", 
    image: bizflowimg, 
    tech: [
      "React.js", 
      "Node.js & Express", 
      "MongoDB", 
      "Google OAuth 2.0", 
      "JWT Auth", 
      "Tailwind CSS", 
      "Framer Motion"
    ],
    glowColor: "bg-[#4f46e5]/20", 
  },
  {
    title: "WEIGHTLOSS-DOC",
    subtitle: "Elite Bio-Medical & Metabolic Optimization Platform",
    description:
      "A high-end clinical web application designed for a specialized metabolic clinic. The platform features an ultra-premium 'Silicon Valley' aesthetic, built with a focus on data-driven health optimization. It includes interactive biometric diagnostic tools (BMI), automated intake systems, and an evidence-based case study gallery. Engineered with a 'Quiet Luxury' design language to establish clinical authority and trust.",
    link: "https://weight-loss-doc.vercel.app",
    image: weightlossimg,
    tech: ["React.js", "Tailwind CSS v4", "Lucide Icons", "Framer Motion"],
    glowColor: "bg-[#10b9bd]/20",
  },
  {
    title: "AI-MOCK-INTERVIEW",
    subtitle: "AI-Powered Interview Practice Platform",
    description:
      "An AI-driven mock interview platform currently under active development using the MERN stack and Tailwind CSS. The system is being built to simulate real interview experiences with AI-generated questions, resume-based assessments, performance feedback, and skill analysis. Focused on delivering a modern, responsive, and user-friendly interface.",
    link: "https://ai-mock-interview-lac-two.vercel.app",
    image: aiMockInterviewImg,
    tech: ["MERN Stack", "Tailwind CSS", "AI Integration", "JWT Auth"],
    glowColor: "bg-teal-500/20",
  },
  {
    title: "UrbanGreens",
    subtitle: "Full-Stack Grocery Commerce Platform",
    description:
      "A production-ready grocery commerce platform engineered with the MERN stack and Tailwind CSS. Designed for scale and reliability, featuring secure authentication, product and order management, cart workflows, and Razorpay payment integration with a refined, high-performance user experience.",
    link: "https://urbangreens-frontend-n2hv3.vercel.app",
    image: urbanGreensImg,
    tech: ["MERN Stack", "Tailwind CSS", "Razorpay", "JWT Auth"],
    glowColor: "bg-emerald-500/20",
  },
  {
    title: "Bajaj Auto Sales",
    subtitle: "Enterprise Automobile Sales & Service System",
    description:
      "An enterprise-grade automobile sales and service management system built using the MERN stack. Enables vehicle discovery, pricing transparency, customer enquiries, booking, and service workflows within a scalable, business-ready interface.",
    link: "https://nationalautosales.vercel.app",
    image: bajajAutoImg,
    tech: ["MERN Stack", "Tailwind CSS", "REST APIs"],
    glowColor: "bg-blue-500/20",
  },
  {
    title: "Weather Forecast",
    subtitle: "Real-Time Weather Intelligence App",
    description:
      "A modern React-based weather application delivering real-time forecasts, location search, and API-driven insights using OpenWeather, wrapped in a calm, responsive, and user-centric interface.",
    link: "https://anaskhanweathersearch.netlify.app/",
    image: weatherImg,
    tech: ["React", "API Integration", "Tailwind CSS"],
    glowColor: "bg-purple-500/20",
  },
];

// ================= MAIN COMPONENT ================= //

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Smooth scroll helper
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="relative bg-[#050505] text-white selection:bg-teal-500/30 overflow-hidden">
      
      {/* 🌟 Global Premium Background Grid & Glows */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.1] pointer-events-none z-0" />
      <div className="fixed -top-40 -left-40 w-[600px] h-[600px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* ================= SECTION 1: HERO ================= */}
      <section id="hero" className="relative z-10 px-6 sm:px-10 md:px-20 lg:px-28 pt-32 pb-20 max-w-7xl mx-auto">
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-teal-400/60 rounded-full animate-ping shadow-[0_0_10px_rgba(45,212,191,0.8)]" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse shadow-[0_0_15px_rgba(96,165,250,0.6)]" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Header Content */}
          <header className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] sm:text-xs uppercase tracking-widest text-teal-400 mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(45,212,191,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Available for New Opportunities
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-bold tracking-tighter leading-[1.1]">
              Hi, I’m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                Anas Khan
              </span>
              <br />
              <span className="text-gray-300">MERN Developer.</span>
            </h1>

            <div className="mt-8 text-teal-400 text-lg sm:text-xl font-mono h-8 font-medium">
              <span className="text-gray-500 mr-2">{">"}</span>
              <Typewriter
                words={[
                  "Full-Stack MERN Developer",
                  "Building Scalable Web Apps",
                  "Turning Coffee into Code ☕",
                  "MongoDB • Express • React • Node",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={2000}
              />
            </div>

            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
              I build robust digital systems, not just features. Focused on clean architecture, seamless user experiences, and high-performance backend infrastructure.
            </p>

            {/* Social Connect Bar */}
            <div className="flex items-center gap-4 mt-8">
              <SocialIcon href="https://github.com" icon={<SiGithub size={20} />} hover="hover:text-white hover:border-white hover:bg-white/10" />
              <SocialIcon href="https://linkedin.com" icon={<SiLinkedin size={20} />} hover="hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10" />
              <SocialIcon href="mailto:your.email@example.com" icon={<Mail size={20} />} hover="hover:text-teal-400 hover:border-teal-400 hover:bg-teal-400/10" />
            </div>

            {/* Action Buttons */}
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>

              <Link
                to="/resume"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/20 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] active:scale-95"
              >
                <Download size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                Download Resume
              </Link>
            </div>
          </header>

          {/* Hero Image & Tech Stack */}
          <article className="relative z-10">
            {/* Holographic Floating Image Card */}
            <div className="relative max-w-[450px] mx-auto w-full group mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-blue-500 to-teal-500 rounded-[3rem] blur-md opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
              <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-[#0a0a0a] animate-[translateY_6s_ease-in-out_infinite] transform-gpu">
                <img
                  src={profileImage}
                  alt="Anas Khan"
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
              </div>
            </div>

            {/* Tech Stack Content */}
            <div className="max-w-xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-teal-400 font-semibold mb-4">
                <span className="w-8 h-[1px] bg-teal-400"></span> Core Expertise
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Designing systems built <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">to last.</span>
              </h2>

              {/* Dynamic Hover Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-10">
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    className={`flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full border border-white/10 text-gray-400 bg-white/5 backdrop-blur-md transition-all duration-300 cursor-default ${tech.hoverColor}`}
                  >
                    <span className="text-base">{tech.icon}</span>
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Premium Stats Dashboard */}
              <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] hover:-translate-y-1">
                <div className="text-center group/stat">
                  <p className="text-3xl font-bold text-white mb-1 group-hover/stat:scale-110 transition-transform">10<span className="text-teal-400">+</span></p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Projects</p>
                </div>
                <div className="text-center border-l border-r border-white/10 group/stat">
                  <p className="text-3xl font-bold text-white mb-1 group-hover/stat:scale-110 transition-transform">Junior Developer (Fresher)<span className="text-teal-400"></span></p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold"></p>
                </div>
                <div className="text-center group/stat">
                  <p className="text-3xl font-bold text-white mb-1 group-hover/stat:scale-110 transition-transform">MERN</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Stack</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ================= SECTION 2: SERVICES ================= */}
      <section id="services" className="relative z-10 px-6 sm:px-10 md:px-20 lg:px-28 py-24 max-w-7xl mx-auto border-t border-white/5">
        <header className="mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs uppercase tracking-widest text-gray-300 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            My Services
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-6">
            Solutions designed <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              for real-world scale.
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            I help individuals and teams design, build, and refine web applications that are incredibly fast, scalable, and maintainable — not just visually appealing.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {servicesData.map((service, idx) => (
            <div 
              key={idx}
              className={`group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] ${service.borderGlow} ${idx === 0 || idx === 3 ? "md:col-span-2 lg:col-span-2" : "col-span-1"}`}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 bg-[#0a0a0a] transition-colors duration-500 ${service.bgGlow} ${service.color} shadow-inner`}>
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process & Philosophy */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* How I Work */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-teal-400 font-semibold mb-8">
              <span className="w-8 h-[1px] bg-teal-400"></span> How I Work
            </div>
            <ul className="space-y-6">
              {processSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div className="mt-0.5 relative">
                    <div className="absolute inset-0 bg-teal-400 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <CheckCircle2 size={20} className="text-teal-500 relative z-10" />
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Philosophy */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-blue-400 font-semibold mb-8">
              <span className="w-8 h-[1px] bg-blue-400"></span> Philosophy
            </div>
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-900/10 to-transparent border border-blue-500/20 backdrop-blur-sm group hover:border-blue-500/40 transition-colors duration-500">
              <Quote className="absolute top-6 right-6 text-blue-500/20 w-16 h-16 group-hover:scale-110 transition-transform duration-500" />
              <blockquote className="relative z-10 text-xl sm:text-2xl font-medium text-gray-200 leading-snug italic">
                “Good software is not defined by features — but by how well it holds up over time under <span className="text-blue-400">real-world pressure.</span>”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: PROJECTS ================= */}
      <section id="projects" className="relative z-10 px-6 sm:px-10 md:px-20 lg:px-28 py-24 pb-44 max-w-7xl mx-auto border-t border-white/5">
        <header className="mb-24 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs uppercase tracking-widest text-gray-300 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Selected Work
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-6 text-white">
            Designing & engineering <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              premium digital products.
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
            A curated collection of production-grade applications built with a focus on clarity, scalability, performance, and timeless user experience.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="space-y-32 lg:space-y-40">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <article key={idx} className="group relative grid lg:grid-cols-12 gap-10 sm:gap-16 items-center">
                {/* IMAGE SECTION */}
                <div className={`lg:col-span-7 relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className={`absolute inset-0 ${project.glowColor} blur-[80px] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none`}></div>
                  <div
                    onClick={() => setSelectedImg(project.image)}
                    className="cursor-zoom-in block relative overflow-hidden rounded-[2rem] bg-[#111827]/40 border border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_40px_rgba(45,212,191,0.1)]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[260px] sm:h-[380px] lg:h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 hover:bg-white/20">
                        <Maximize2 className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CONTENT SECTION */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-teal-400 font-bold mb-4">
                    {project.subtitle}
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {project.title}
                  </h3>
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm mb-8 shadow-inner group-hover:bg-white/[0.04] transition-colors">
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2.5 mb-10">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-bold px-4 py-2 rounded-full border border-white/10 text-gray-300 bg-white/[0.03] hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-white transition-all duration-500 hover:bg-teal-400 hover:text-black hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] active:scale-95"
                    >
                      View Live Project
                      <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ================= IMAGE MODAL (GALLERY VIEW) ================= */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300 p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full"
            onClick={() => setSelectedImg(null)}
          >
            <X size={32} />
          </button>
          
          <div className="relative max-w-6xl w-full">
            <img 
              src={selectedImg} 
              alt="Project Full View" 
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10 animate-in zoom-in duration-300"
            />
            <div className="absolute -inset-10 bg-teal-500/10 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
      )}

    </main>
  );
};

// Reusable component for Social Icons
function SocialIcon({ href, icon, hover }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`p-3 rounded-xl border border-white/10 text-gray-400 bg-white/5 backdrop-blur-sm transition-all duration-300 ${hover} hover:-translate-y-1`}
    >
      {icon}
    </a>
  );
}

export default Home;