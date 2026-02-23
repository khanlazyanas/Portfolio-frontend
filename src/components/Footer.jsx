import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import logo from "../assets/anas4.png";

const Footer = () => {
  const location = useLocation();

  // 🔥 Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/services", "Service"],
    ["/projects", "Projects"],
    ["/skills", "Skills"],
    ["/resume", "Resume"],
    ["/contact", "Contact"],
  ];

  return (
    <footer className="relative bg-[#050505] text-gray-400 px-6 sm:px-10 md:px-20 lg:px-28 pt-32 pb-16 overflow-hidden border-t border-white/5">

      {/* Subtle Texture & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none" />

      {/* Ambient Glow Accents (Subtle) */}
      <div className="absolute -bottom-40 left-[-120px] w-[420px] h-[420px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-[-100px] w-[300px] h-[300px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 relative z-10">

        {/* ================= BRAND SECTION ================= */}
        <div className="lg:col-span-4">
          <Link to="/" className="inline-block group">
            <img
              src={logo}
              alt="Logo"
              className="h-12 mb-6 invert transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] group-hover:-translate-y-1"
            />
          </Link>

          <p className="text-sm leading-relaxed max-w-sm mb-6 text-gray-400">
            Full-stack MERN developer crafting scalable, high-performance web applications with clean architecture and modern UX.
          </p>

          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-white backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Available for Work
          </div>
        </div>

        {/* ================= NAVIGATION ================= */}
        <div className="lg:col-span-2">
          <p className="text-[11px] uppercase tracking-[0.3em] text-white font-semibold mb-6">
            Navigation
          </p>
          <ul className="space-y-3 text-sm">
            {links.map(([path, label]) => (
              <li key={path}>
                <Link
                  to={path}
                  className="hover:text-white transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= QUICK ACTIONS ================= */}
        <div className="lg:col-span-2">
          <p className="text-[11px] uppercase tracking-[0.3em] text-white font-semibold mb-6">
            Actions
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/contact" className="hover:text-white transition-colors group flex items-center">
                Hire Me <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
              </Link>
            </li>
            <li>
              <Link to="/resume" className="hover:text-white transition-colors group flex items-center">
                View Resume <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* ================= CONTACT & SOCIAL ================= */}
        <div className="lg:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-white font-semibold mb-6">
            Connect
          </p>

          <div className="space-y-4 text-sm mb-8">
            <a
              href="mailto:anaskhan995620@gmail.com"
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
            >
              <div className="p-2 rounded-lg bg-black border border-white/10 group-hover:border-white/40 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300">
                <FaEnvelope />
              </div>
              anaskhan995620@gmail.com
            </a>
            <p className="flex items-center gap-3 text-gray-500">
              <span className="p-2">📍</span> India • IST Timezone
            </p>
          </div>

          <div className="flex gap-3 text-lg">
            {[
              ["https://github.com/khanlazyanas/anaskhanportfolio", <FaGithub />],
              ["https://www.linkedin.com/in/khan-anas-a26b66364/", <FaLinkedin />],
              ["https://instagram.com/khan_anas842", <FaInstagram />],
              ["https://wa.me/8429755694", <FaWhatsapp />],
              ["https://www.youtube.com/@khananas2318", <FaYoutube />],
            ].map(([url, icon], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-black border border-white/10 text-gray-400 hover:text-white hover:border-white/50 hover:-translate-y-1 transition-all duration-500 shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="max-w-7xl mx-auto mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 relative z-10">
        <p>© {new Date().getFullYear()} Anas Khan. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
          <span className="flex items-center gap-1">Built with <span className="text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">React & Tailwind</span></span>
        </div>
      </div>

      {/* ================= FLOATING ACTION BUTTONS (STEALTH MODE) ================= */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-5 z-50">
        
        {/* 🔥 Stealth WhatsApp Button with White Glow */}
        <div className="relative group flex items-center justify-center">
          {/* Subtle White Pulse behind the button */}
          <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-md animate-pulse"></div>
          
          <a
            href="https://api.whatsapp.com/send?phone=918429755694"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-black border border-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#111] group-hover:border-white/60 group-hover:shadow-[0_0_35px_rgba(255,255,255,0.7)]"
          >
            <FaWhatsapp className="text-3xl" />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-black border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-2 group-hover:translate-x-0 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Chat on WhatsApp
              {/* Tooltip Arrow */}
              <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-[6px] border-transparent border-l-black"></span>
            </span>
          </a>
        </div>

        {/* 🔥 Stealth Scroll to Top Button with White Glow */}
        <div className="relative group flex items-center justify-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-black border border-white/20 text-gray-300 transition-all duration-500 hover:text-white hover:bg-[#111] hover:border-white/60 shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.7)] group-hover:scale-110"
          >
            <FaArrowUp className="text-xl transition-transform duration-500 group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;