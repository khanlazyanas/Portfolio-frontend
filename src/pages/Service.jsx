import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Code2, 
  MonitorSmartphone, 
  Server, 
  Zap, 
  Cloud, 
  CheckCircle2, 
  ArrowRight,
  Quote
} from "lucide-react"; 

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

  // Framer Motion Variants for Ultra-Premium feel
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.6 } 
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
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
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="mb-24 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] sm:text-xs uppercase tracking-widest text-teal-400 mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(45,212,191,0.05)] transition-transform hover:scale-105 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            My Expertise
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6">
            Solutions designed <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              for real-world scale.
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
            I help individuals and teams design, build, and refine web applications that are incredibly fast, scalable, and maintainable — not just visually appealing.
          </p>
        </motion.header>

        {/* ================= SERVICES BENTO GRID ================= */}
        <motion.div 
          variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32"
        >
          {servicesData.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`
                group relative p-8 sm:p-10 rounded-[2.5rem] bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 
                transition-all duration-700 hover:-translate-y-2 hover:bg-[#111111]/90 hover:border-white/20 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]
                ${service.borderGlow}
                ${idx === 0 || idx === 3 ? "md:col-span-2 lg:col-span-2" : idx === 4 ? "md:col-span-2 lg:col-span-3" : "col-span-1"}
              `}
            >
              {/* Subtle Inner Glow on Hover */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/10 bg-white/[0.02] transition-all duration-500 group-hover:scale-110 ${service.bgGlow} ${service.color} shadow-inner`}>
                {service.icon}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= PROCESS & PHILOSOPHY ================= */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* How I Work */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-teal-400 font-bold mb-8">
              <span className="w-8 h-[2px] bg-teal-400 rounded-full"></span> How I Work
            </div>

            <ul className="space-y-6">
              {processSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div className="mt-0.5 relative">
                    <div className="absolute inset-0 bg-teal-400 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <CheckCircle2 size={22} className="text-teal-500 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Philosophy */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-blue-400 font-bold mb-8">
              <span className="w-8 h-[2px] bg-blue-400 rounded-full"></span> Philosophy
            </div>

            <div className="relative p-10 rounded-[2.5rem] bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-white/5 backdrop-blur-2xl group hover:border-blue-500/30 transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)]">
              {/* Decorative inner gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <Quote className="absolute top-8 right-8 text-blue-500/20 w-20 h-20 group-hover:scale-110 group-hover:text-blue-500/30 transition-all duration-700 group-hover:-rotate-12" />
              
              <blockquote className="relative z-10 text-xl sm:text-3xl font-bold text-gray-200 leading-[1.4] tracking-tight italic">
                “Good software is not defined by features — but by how well it holds up over time under <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">real-world pressure.</span>”
              </blockquote>
            </div>
          </motion.div>

        </div>

        {/* ================= CTA ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-32 pt-16 border-t border-white/10 flex flex-col items-center text-center"
        >
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-10 tracking-tight">Ready to see these skills in action?</h3>
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold rounded-full overflow-hidden transition-all shadow-[0_10px_30px_-10px_rgba(45,212,191,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-3 text-lg">
                Explore My Projects
                <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;