import React from "react";
import { Link } from "react-router-dom";
import { 
  Code2, 
  MonitorSmartphone, 
  Server, 
  Zap, 
  Cloud, 
  CheckCircle2, 
  ArrowRight,
  Quote
} from "lucide-react"; // Ensure lucide-react is installed

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

const Services = () => {
  return (
    <section className="relative bg-[#050505] text-white px-6 sm:px-10 md:px-20 lg:px-28 pt-32 pb-44 overflow-hidden selection:bg-teal-500/30">
      
      {/* 🌟 Premium Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Subtle Texture Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.1] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================= HEADER ================= */}
        <header className="mb-24 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs uppercase tracking-widest text-gray-300 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            My Expertise
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

        {/* ================= SERVICES GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {servicesData.map((service, idx) => (
            <div 
              key={idx}
              className={`
                group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm 
                transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]
                ${service.borderGlow}
                ${idx === 0 || idx === 3 ? "md:col-span-2 lg:col-span-2" : "col-span-1"}
              `}
            >
              {/* Background Glow inside Card */}
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

        {/* ================= PROCESS & PHILOSOPHY ================= */}
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

        {/* ================= CTA ================= */}
        <div className="mt-32 pt-16 border-t border-white/10 flex flex-col items-center text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">Ready to see these skills in action?</h3>
          <Link
            to="/projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold rounded-full overflow-hidden transition-all shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore My Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;