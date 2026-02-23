import React from "react";
import profileImage from "../assets/anas2.jpg";
import { 
  Terminal, 
  Code2, 
  Layers, 
  Rocket, 
  Quote, 
  Target, 
  Cpu, 
  Zap, 
  CheckCircle2 
} from "lucide-react"; // Make sure lucide-react is installed

const journeyData = [
  {
    year: "2022",
    title: "The Foundation",
    description: "Started with HTML, CSS, and JavaScript fundamentals. Built the core understanding of how the web works.",
    icon: <Terminal size={18} />,
    color: "text-gray-400"
  },
  {
    year: "2023",
    title: "Entering the Frontend",
    description: "Learned React, state management, backend development basics, and how to consume REST APIs effectively.",
    icon: <Code2 size={18} />,
    color: "text-blue-400"
  },
  {
    year: "2024",
    title: "Full-Stack Mastery",
    description: "Built end-to-end MERN stack projects focusing on scalability, database architecture, and performance optimization.",
    icon: <Layers size={18} />,
    color: "text-purple-400"
  },
  {
    year: "Now",
    title: "System Design & Beyond",
    description: "Deepening system design knowledge, exploring AI integrations, and building production-ready, enterprise-grade solutions.",
    icon: <Rocket size={18} />,
    color: "text-teal-400"
  }
];

const processData = [
  {
    num: "01",
    title: "Understand Deeply",
    desc: "I dissect the problem before writing a single line of code. Clarity is the first step to scalable software.",
    icon: <Target size={24} className="text-teal-400" />
  },
  {
    num: "02",
    title: "Design Architecture",
    desc: "Structuring databases, APIs, and component trees to ensure the system is maintainable and ready for scale.",
    icon: <Layers size={24} className="text-blue-400" />
  },
  {
    num: "03",
    title: "Build & Iterate",
    desc: "Writing clean, modular, and testable code using modern frameworks while continuously refining based on feedback.",
    icon: <Cpu size={24} className="text-purple-400" />
  },
  {
    num: "04",
    title: "Optimize & Ship",
    desc: "Aggressively optimizing load times, backend queries, and UI responsiveness before hitting the deploy button.",
    icon: <Zap size={24} className="text-yellow-400" />
  }
];

const About = () => {
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
            About Me
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-6">
            Building thoughtful, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              scalable digital experiences.
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            I’m Anas Khan — a full-stack developer focused on crafting clean, scalable, and production-ready web applications with a strong emphasis on performance, architecture, and user experience.
          </p>
        </header>

        {/* ================= HERO INTRO ================= */}
        <article className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center mb-32">
          
          {/* 📸 Image Section */}
          <div className="lg:col-span-5 relative group mx-auto w-full max-w-[420px]">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-blue-500 to-teal-500 rounded-[2.5rem] blur-md opacity-20 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0a0a0a]">
              <img
                src={profileImage}
                alt="Anas Khan"
                className="w-full h-[400px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* 📝 Bio Section */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl bg-[#111827]/40 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-500/10 blur-[50px] rounded-full pointer-events-none"></div>

              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-teal-400 font-semibold mb-6">
                <span className="w-6 h-[1px] bg-teal-400"></span> Who I Am
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                Full-stack developer with a <br className="hidden sm:block" /> product mindset.
              </h3>

              <div className="space-y-5 text-gray-400 text-sm sm:text-base leading-relaxed">
                <p>
                  Hello! I’m <span className="text-white font-medium">Anas Khan</span>, a self-driven full-stack developer who enjoys transforming complex problems into elegant, maintainable, and high-performance systems.
                </p>
                <p>
                  I specialize in building modern user interfaces using <span className="text-teal-400 font-medium">React</span> and <span className="text-teal-400 font-medium">Tailwind CSS</span>, combined with scalable backend systems powered by the <span className="text-blue-400 font-medium">MERN stack</span>.
                </p>
                <p className="pl-4 border-l-2 border-teal-500/50 italic text-gray-300">
                  "Beyond writing code, I focus on system design, clean architecture, and long-term project sustainability."
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* ================= TIMELINE & PHILOSOPHY ================= */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* 🛣️ Journey Timeline (Col 7) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-teal-400 font-semibold mb-10">
              <span className="w-8 h-[1px] bg-teal-400"></span> The Journey
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
              {journeyData.map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  
                  {/* Timeline Dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0a0a0a] text-gray-400 group-hover:text-teal-400 group-hover:border-teal-400/50 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.4)] transition-all duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-md">
                    {item.icon}
                  </div>

                  {/* Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm group-hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-sm font-bold ${item.color}`}>{item.year}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 💡 Process & Philosophy (Col 5) */}
          <div className="lg:col-span-5 space-y-16">
            
            {/* Process Bento Grid */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-blue-400 font-semibold mb-8">
                <span className="w-8 h-[1px] bg-blue-400"></span> How I Work
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {processData.map((step, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 group">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-2xl font-black text-white/10 group-hover:text-white/20 transition-colors">{step.num}</span>
                      <div className="p-2 rounded-lg bg-white/5 group-hover:scale-110 transition-transform">{step.icon}</div>
                    </div>
                    <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy Card */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-teal-900/10 to-transparent border border-teal-500/20 backdrop-blur-sm group hover:border-teal-500/40 transition-colors duration-500">
              <Quote className="absolute top-6 right-6 text-teal-500/20 w-12 h-12 group-hover:scale-110 transition-transform duration-500" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-teal-400 font-semibold mb-4">Philosophy</p>
              <blockquote className="relative z-10 text-lg sm:text-xl font-medium text-gray-200 leading-snug italic">
                “I believe great software is quiet, reliable, and easy to evolve. <span className="text-teal-400">Clean architecture and clarity</span> always come before unnecessary complexity.”
              </blockquote>
            </div>

          </div>
        </div>

        {/* ================= VALUES ================= */}
        <div className="mt-32 pt-16 border-t border-white/10 text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gray-500 mb-8">
            Core Values
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Clarity over cleverness",
              "Performance is a feature",
              "Ownership mindset",
              "Continuous learning",
              "Respect for users"
            ].map((value, idx) => (
              <span 
                key={idx} 
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] text-xs sm:text-sm text-gray-300 uppercase tracking-widest hover:border-teal-400/50 hover:bg-teal-400/10 hover:text-teal-400 transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] hover:-translate-y-1"
              >
                <CheckCircle2 size={14} className="opacity-50" />
                {value}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;