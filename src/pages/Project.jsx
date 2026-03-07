import React, { useState } from "react";
import { ArrowRight, ExternalLink, X, Maximize2 } from "lucide-react";

import urbanGreensImg from "../assets/urbangreens.png";
import bajajAutoImg from "../assets/bajajnewimage.png";
import weatherImg from "../assets/weather.png";
import aiMockInterviewImg from "../assets/Ai-mock-interview.png";
import weightlossimg from "../assets/drabubakar.png";

const projects = [
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

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="relative bg-[#050505] text-white px-6 sm:px-10 md:px-20 lg:px-28 pt-32 pb-44 overflow-hidden selection:bg-teal-500/30">
      {/* 🌟 Premium Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Subtle Texture Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.1] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ================= HEADER ================= */}
        <header className="mb-32 max-w-3xl">
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

        {/* ================= PROJECTS GRID ================= */}
        <div className="space-y-32 sm:space-y-40 lg:space-y-48">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <article key={idx} className="group relative grid lg:grid-cols-12 gap-10 sm:gap-16 items-center">
                {/* 📸 IMAGE SECTION (With Zoom Functionality) */}
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

                    {/* Image Hover Icons */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 hover:bg-white/20">
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

                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {project.title}
                  </h3>

                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm mb-8 shadow-inner group-hover:bg-white/[0.04] transition-colors">
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Tags */}
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

                  {/* View Live Button (With New Professional Glow) */}
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
      </div>

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
    </section>
  );
};

export default Projects;