import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, X, Maximize2 } from "lucide-react";

// Project Images
import urbanGreensImg from "../assets/urbangreens.png";
import bajajAutoImg from "../assets/bajajnewimage.png";
import weatherImg from "../assets/weather.png";
import aiMockInterviewImg from "../assets/Ai-mock-interview.png";
import weightlossimg from "../assets/drabubakar.png";
import bizflowimg from "../assets/bizzflow.png";
import nexposimg from "../assets/nexpos.png";

const projects = [
  {
    title: "BIZFLOW",
    subtitle: "Enterprise B2B SaaS & Workspace Management Platform",
    description: "A full-stack, multi-tenant SaaS application engineered on the MERN stack. Designed with an ultra-premium 'Deep Space' dark mode aesthetic, it features advanced security protocols including Google OAuth 2.0, Passwordless Magic Link (OTP) authentication, and strict cross-domain HTTP-only cookies. The robust backend architecture is equipped with automated cron jobs for data lifecycle management (Soft Delete/Recycle Bin), rate-limiting for API protection, and seamless invoice generation.",
    link: "https://bizflow-saas-web.vercel.app", 
    image: bizflowimg, 
    tech: ["React.js", "Node.js & Express", "MongoDB", "Google OAuth 2.0", "JWT Auth", "Tailwind CSS", "Framer Motion"],
    glowColor: "bg-[#4f46e5]/20", 
  },
  {
    title: "NEXPOS",
    subtitle: "Enterprise-Grade Point of Sale & Retail Management System",
    description: "A next-generation, full-stack retail SaaS platform built on Next.js and MongoDB. Designed with an ultra-premium 'Silicon Valley' glassmorphic aesthetic, it features real-time inventory tracking, a dedicated CRM for 'Khata' (customer credit) management, and secure role-based access control (RBAC) via Next-Auth. The system boasts seamless Razorpay payment gateway integration, dynamic Recharts analytics dashboards, and an automated, print-ready thermal receipt generator.",
    link: "https://nexpos-azure.vercel.app", 
    image: nexposimg, 
    tech: ["Next.js (App Router)", "React.js", "MongoDB & Mongoose", "Next-Auth", "Tailwind CSS", "Razorpay", "Recharts"],
    glowColor: "bg-[#10b981]/20", 
  },
  {
    title: "WEIGHTLOSS-DOC",
    subtitle: "Elite Bio-Medical & Metabolic Optimization Platform",
    description: "A high-end clinical web application designed for a specialized metabolic clinic. The platform features an ultra-premium 'Silicon Valley' aesthetic, built with a focus on data-driven health optimization. It includes interactive biometric diagnostic tools (BMI), automated intake systems, and an evidence-based case study gallery.",
    link: "https://weight-loss-doc.vercel.app",
    image: weightlossimg,
    tech: ["React.js", "Tailwind CSS v4", "Lucide Icons", "Framer Motion"],
    glowColor: "bg-[#10b9bd]/20",
  },
  {
    title: "AI-MOCK-INTERVIEW",
    subtitle: "AI-Powered Interview Practice Platform",
    description: "An AI-driven mock interview platform currently under active development using the MERN stack and Tailwind CSS. The system is being built to simulate real interview experiences with AI-generated questions, resume-based assessments, performance feedback, and skill analysis.",
    link: "https://ai-mock-interview-lac-two.vercel.app",
    image: aiMockInterviewImg,
    tech: ["MERN Stack", "Tailwind CSS", "AI Integration", "JWT Auth"],
    glowColor: "bg-teal-500/20",
  },
  {
    title: "UrbanGreens",
    subtitle: "Full-Stack Grocery Commerce Platform",
    description: "A production-ready grocery commerce platform engineered with the MERN stack and Tailwind CSS. Designed for scale and reliability, featuring secure authentication, product and order management, cart workflows, and Razorpay payment integration with a refined, high-performance user experience.",
    link: "https://urbangreens-frontend-n2hv3.vercel.app",
    image: urbanGreensImg,
    tech: ["MERN Stack", "Tailwind CSS", "Razorpay", "JWT Auth"],
    glowColor: "bg-emerald-500/20",
  },
  {
    title: "Bajaj Auto Sales",
    subtitle: "Enterprise Automobile Sales & Service System",
    description: "An enterprise-grade automobile sales and service management system built using the MERN stack. Enables vehicle discovery, pricing transparency, customer enquiries, booking, and service workflows within a scalable, business-ready interface.",
    link: "https://nationalautosales.vercel.app",
    image: bajajAutoImg,
    tech: ["MERN Stack", "Tailwind CSS", "REST APIs"],
    glowColor: "bg-blue-500/20",
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

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Framer Motion Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-[#050505] text-white px-6 sm:px-10 md:px-20 lg:px-28 pt-32 pb-44 overflow-hidden selection:bg-teal-500/30 font-sans">
      
      {/* 🌟 Ultra-Premium Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Subtle Texture Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.15] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= HEADER ================= */}
        <motion.header 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={{ show: { transition: { staggerChildren: 0.2 } } }}
          className="mb-32 max-w-3xl"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] sm:text-xs uppercase tracking-widest text-teal-400 mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(45,212,191,0.05)]">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Selected Work
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6 text-white">
            Designing & engineering <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              premium digital products.
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
            A curated collection of production-grade applications built with a focus on clarity, scalability, performance, and a timeless user experience.
          </motion.p>
        </motion.header>

        {/* ================= PROJECTS GRID ================= */}
        <div className="space-y-32 sm:space-y-40 lg:space-y-48">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.article 
                key={idx} 
                initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
                className="group relative grid lg:grid-cols-12 gap-10 sm:gap-16 items-center"
              >
                
                {/* 📸 IMAGE SECTION (With Zoom Functionality) */}
                <div className={`lg:col-span-7 relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className={`absolute inset-0 ${project.glowColor} blur-[80px] rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-1000 pointer-events-none`}></div>

                  <div
                    onClick={() => setSelectedImg(project.image)}
                    className="cursor-zoom-in block relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 transition-all duration-700 group-hover:border-white/20 group-hover:shadow-[0_20px_60px_-15px_rgba(45,212,191,0.15)]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[280px] sm:h-[400px] lg:h-[480px] object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />

                    {/* Image Hover Overlay & Icons */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
                      <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out hover:bg-black/60 shadow-2xl">
                        <Maximize2 className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 📝 CONTENT SECTION */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-teal-400 font-bold mb-4">
                    {project.subtitle}
                  </p>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500">
                    {project.title}
                  </h3>

                  <div className="p-8 rounded-[2rem] bg-[#0a0a0a]/60 border border-white/5 backdrop-blur-xl mb-8 shadow-inner group-hover:bg-[#111111]/80 group-hover:border-white/10 transition-colors duration-500">
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-bold px-5 py-2.5 rounded-full border border-white/10 text-gray-300 bg-white/[0.02] hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* View Live Button */}
                  <div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.03] border border-white/10 text-sm font-bold text-white transition-all duration-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 hover:border-transparent hover:text-white hover:shadow-[0_10px_30px_-10px_rgba(45,212,191,0.5)] active:scale-95"
                    >
                      View Live Project
                      <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* ================= ULTRA PREMIUM IMAGE MODAL (GALLERY VIEW) ================= */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }} 
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }} 
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md z-50 hover:rotate-90 hover:scale-110 duration-300"
              onClick={() => setSelectedImg(null)}
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImg} 
                alt="Project Full View" 
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/10"
              />
              {/* Modal Background Glow */}
              <div className="absolute -inset-10 bg-teal-500/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;