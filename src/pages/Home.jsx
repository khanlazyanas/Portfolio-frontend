import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/anas2.jpg";
import { ArrowRight, Download, Mail } from "lucide-react"; // Naye modern icons

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiOpenai,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";

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

const Home = () => {
  return (
    <section className="relative bg-[#050505] text-white px-6 sm:px-10 md:px-20 lg:px-28 pt-32 pb-44 overflow-hidden selection:bg-teal-500/30">
      <div className="max-w-7xl mx-auto relative">

        {/* 🌟 Premium Parallax Grid & Glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.15] translate-y-[-20px]" />

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-teal-400/60 rounded-full animate-ping shadow-[0_0_10px_rgba(45,212,191,0.8)]" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse shadow-[0_0_15px_rgba(96,165,250,0.6)]" />

        {/* Dynamic Background Glows */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

        {/* ================= HEADER / HERO LEFT ================= */}
        <header className="mb-24 lg:mb-32 max-w-3xl relative z-10">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] sm:text-xs uppercase tracking-widest text-teal-400 mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(45,212,191,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Available for New Opportunities
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-bold tracking-tighter leading-[1.1]">
            Hi, I’m{" "}
            {/* 🔥 Animated Gradient Text */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              Anas Khan
            </span>
            <br />
            <span className="text-gray-300">Software Engineer.</span>
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

          {/* ✅ NAYA: Social Connect Bar */}
          <div className="flex items-center gap-4 mt-8">
            <SocialIcon href="https://github.com" icon={<SiGithub size={20} />} hover="hover:text-white hover:border-white hover:bg-white/10" />
            <SocialIcon href="https://linkedin.com" icon={<SiLinkedin size={20} />} hover="hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10" />
            <SocialIcon href="mailto:your.email@example.com" icon={<Mail size={20} />} hover="hover:text-teal-400 hover:border-teal-400 hover:bg-teal-400/10" />
          </div>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link
              to="/projects"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>

            <Link
              to="/resume"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/20 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] active:scale-95"
            >
              <Download size={18} className="text-gray-400 group-hover:text-white transition-colors" />
              Download Resume
            </Link>
          </div>
        </header>

        {/* ================= HERO RIGHT / IMAGE & CONTENT ================= */}
        <article className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

          {/* 📸 Holographic Floating Image Card */}
          <div className="relative max-w-[450px] mx-auto w-full group">
            {/* Pulsing Holographic Border */}
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

          {/* 💻 Tech Stack & Stats Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-teal-400 font-semibold mb-4">
              <span className="w-8 h-[1px] bg-teal-400"></span> Core Expertise
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Designing systems built <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">to last.</span>
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-8">
              From crafting complex API architectures to optimizing frontend rendering, I prioritize clarity, scalability, and maintainability in every single line of code.
            </p>

            {/* 🔥 Dynamic Hover Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-12">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className={`
                    flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full
                    border border-white/10 text-gray-400 bg-white/5 backdrop-blur-md
                    transition-all duration-300 cursor-default
                    ${tech.hoverColor}
                  `}
                >
                  <span className="text-base">{tech.icon}</span>
                  {tech.name}
                </span>
              ))}
            </div>

            {/* 📊 Premium Interactive Stats Dashboard */}
            <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] hover:-translate-y-1">
              <div className="text-center group/stat">
                <p className="text-3xl font-bold text-white mb-1 group-hover/stat:scale-110 transition-transform">10<span className="text-teal-400">+</span></p>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Projects</p>
              </div>
              <div className="text-center border-l border-r border-white/10 group/stat">
                <p className="text-3xl font-bold text-white mb-1 group-hover/stat:scale-110 transition-transform">1<span className="text-teal-400">+</span></p>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Years Exp.</p>
              </div>
              <div className="text-center group/stat">
                <p className="text-3xl font-bold text-white mb-1 group-hover/stat:scale-110 transition-transform">MERN</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Stack</p>
              </div>
            </div>

          </div>
        </article>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gray-400 to-transparent animate-pulse"></div>
      </div>
    </section>
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