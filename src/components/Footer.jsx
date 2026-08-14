import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { ArrowRight, Download, Send } from "lucide-react";
import logo from "../assets/anas4.png";

// ================= MAGNETIC BUTTON COMPONENT ================= //
const MagneticButton = ({ children, className, href, onClick, target }) => {
  const ref = React.useRef(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouse = (e) => {
    if (isTouchDevice) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.4, y: middleY * 0.4 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 120, damping: 10, mass: 0.2 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    if (href.startsWith('#') || href.startsWith('mailto') || href.startsWith('http')) {
      return <a href={href} target={target} rel={target === '_blank' ? "noopener noreferrer" : undefined} className="inline-block w-full sm:w-auto">{content}</a>;
    }
    return <Link to={href} className="inline-block w-full sm:w-auto">{content}</Link>;
  }
  return <div className="inline-block w-full sm:w-auto cursor-pointer">{content}</div>;
};

// ================= SPOTLIGHT CARD COMPONENT ================= //
const SpotlightCard = ({ children, className, glowColor = "rgba(255, 255, 255, 0.15)" }) => {
  const divRef = React.useRef(null);
  const [isFocused, setIsFocused] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = React.useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => { setIsFocused(true); setOpacity(1); };
  const handleBlur = () => { setIsFocused(false); setOpacity(0); };
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
      className={`relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] border border-white/[0.05] bg-[#050505]/60 backdrop-blur-3xl shadow-2xl transition-all duration-500 group ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-500 z-0"
        style={{
          opacity,
          background: `radial-gradient(1000px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};


const Footer = () => {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0.8, 1], ["-20%", "0%"]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const links = [
    ["/", "Intro"],
    ["/about", "About"],
    ["/services", "Expertise"],
    ["/projects", "Masterpieces"],
    ["/skills", "Stack"],
    ["/resume", "Dossier"],
    ["/contact", "Connect"],
  ];

  return (
    <footer className="relative bg-[#000000] text-white pt-32 pb-12 overflow-hidden border-t border-white/[0.05] selection:bg-white selection:text-black">

      {/* ================= 20000x ULTRA PREMIUM BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep Ambient Mesh Glows */}
        <div className="absolute bottom-[-50%] left-[-20%] w-[120vw] sm:w-[80vw] h-[120vw] sm:h-[80vw] rounded-full bg-teal-900/20 blur-[200px] sm:blur-[300px] mix-blend-screen animate-[pulse_14s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-30%] right-[-20%] w-[100vw] sm:w-[60vw] h-[100vw] sm:h-[60vw] rounded-full bg-indigo-900/20 blur-[200px] sm:blur-[300px] mix-blend-screen animate-[pulse_18s_ease-in-out_infinite_reverse]" />
        
        {/* Micro-Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:100px_100px] sm:bg-[size:150px_150px]" />
        
        {/* Cinematic Noise Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06] mix-blend-overlay pointer-events-none" />
      </div>

      <motion.div 
        style={{ y: yParallax }} 
        className="max-w-[1920px] mx-auto px-6 sm:px-10 md:px-20 lg:px-28 relative z-10"
      >
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-32">

          {/* ================= BRAND & BIO SECTION ================= */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link to="/" className="inline-block group cursor-hover-target mb-10">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
                <img
                  src={logo}
                  alt="Anas Khan Logo"
                  className="h-14 sm:h-16 invert transition-all duration-700 relative z-10 group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]"
                />
              </div>
            </Link>

            <p className="text-xl sm:text-2xl font-light leading-[1.8] tracking-wide text-gray-400 mb-12 max-w-2xl mix-blend-plus-lighter">
              Architecting scalable digital ecosystems. I blend clean modular engineering with seamless fluid interactions to build high-performance infrastructure that stands the test of time.
            </p>

            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.1] backdrop-blur-3xl shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,1)]"></span>
              </span>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-300">Available For Impact</span>
            </div>
          </div>

          {/* ================= ARCHITECTURE (LINKS) ================= */}
          <div className="lg:col-span-3">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] font-bold text-gray-500 mb-8 sm:mb-12 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gray-500/50 block"></span>
              Architecture
            </p>
            <ul className="space-y-6">
              {links.map(([path, label], idx) => (
                <li key={path} className="overflow-hidden">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                  >
                    <Link
                      to={path}
                      className="group flex items-center gap-6 text-xl sm:text-2xl font-bold tracking-tighter uppercase text-gray-500 hover:text-white transition-all duration-500 w-fit cursor-hover-target"
                    >
                      <span className="text-xs font-mono font-medium tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                      <span className="relative">
                        {label}
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                      </span>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= INITIATIVES (CONTACT / CTA) ================= */}
          <div className="lg:col-span-4 flex flex-col">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] font-bold text-gray-500 mb-8 sm:mb-12 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gray-500/50 block"></span>
              Initiatives
            </p>
            
            <SpotlightCard className="p-8 sm:p-12 mb-10 text-left">
              <p className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tighter leading-[1.1] uppercase drop-shadow-xl">
                Ready to build <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700">the future?</span>
              </p>
              
              <MagneticButton href="/contact" className="group relative overflow-hidden flex items-center justify-between px-8 py-5 rounded-full border border-white/20 bg-white/[0.03] hover:bg-white text-white hover:text-black transition-all duration-700 w-full cursor-hover-target backdrop-blur-2xl shadow-[0_0_30px_rgba(255,255,255,0.05)] mt-8">
                <span className="relative z-10 text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase">Start Dialog</span>
                <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-black transition-colors">
                  <ArrowRight size={16} className="group-hover:translate-x-1 group-hover:-rotate-45 group-hover:text-white transition-all duration-500" />
                </div>
              </MagneticButton>
            </SpotlightCard>

            {/* Direct Connect Info */}
            <div className="space-y-6">
              <MagneticButton href="mailto:anaskhan995620@gmail.com" className="flex items-center gap-6 group cursor-hover-target w-fit">
                <div className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500 shadow-xl">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-600 mb-1">Direct Line</p>
                  <p className="text-lg sm:text-xl font-light tracking-wide text-gray-300 group-hover:text-white transition-colors">anaskhan995620@gmail.com</p>
                </div>
              </MagneticButton>

              <MagneticButton className="flex items-center gap-6 group cursor-hover-target w-fit">
                <div className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-gray-400 group-hover:bg-teal-500 group-hover:text-black group-hover:border-teal-400 transition-all duration-500 shadow-xl">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-600 mb-1">Operating Base</p>
                  <p className="text-lg sm:text-xl font-light tracking-wide text-gray-300 group-hover:text-white transition-colors">Kanpur, IN • IST</p>
                </div>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* ================= MASSIVE TYPOGRAPHY DIVIDER ================= */}
        <div className="w-full border-t border-white/[0.05] pt-12 pb-6 relative overflow-hidden flex flex-col items-center justify-center">
           <motion.h1 
             initial={{ opacity: 0, y: 50 }} 
             whileInView={{ opacity: 1, y: 0 }} 
             viewport={{ once: true }} 
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             className="text-[15vw] sm:text-[12rem] lg:text-[18rem] font-bold tracking-tighter leading-[0.75] text-transparent outline-text-footer opacity-40 select-none whitespace-nowrap text-center w-full"
           >
             ANAS KHAN.
           </motion.h1>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 pb-4 relative z-10">
          
          <p className="text-xs sm:text-sm font-bold tracking-[0.3em] text-gray-500 uppercase text-center md:text-left">
            © {new Date().getFullYear()} Anas Khan. <br className="sm:hidden"/>All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {[
              ["https://github.com/khanlazyanas/anaskhanportfolio", <FaGithub size={20} />],
              ["https://www.linkedin.com/in/khan-anas-a26b66364/", <FaLinkedin size={20} />],
              ["https://instagram.com/khan_anas842", <FaInstagram size={20} />],
              ["https://wa.me/918429755694", <FaWhatsapp size={20} />],
              ["https://www.youtube.com/@khananas2318", <FaYoutube size={20} />],
            ].map(([url, icon], i) => (
              <MagneticButton key={i} href={url} target="_blank" className="p-4 sm:p-5 rounded-full border border-white/10 bg-white/[0.02] text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-500 shadow-xl cursor-hover-target hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                {icon}
              </MagneticButton>
            ))}
          </div>

          <div className="flex items-center gap-8 text-[10px] sm:text-xs font-bold tracking-[0.3em] text-gray-600 uppercase">
             <span className="hover:text-white cursor-pointer transition-colors cursor-hover-target">Privacy</span>
             <span className="hover:text-white cursor-pointer transition-colors cursor-hover-target">Terms</span>
             <span className="hidden lg:block">Designed in India</span>
          </div>

        </div>

      </motion.div>

      {/* ================= FLOATING ACTION BUTTONS (STEALTH MODE) ================= */}
      <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 flex flex-col gap-4 sm:gap-6 z-50">
        
        {/* 🔥 Stealth WhatsApp Button with White Glow */}
        <MagneticButton href="https://api.whatsapp.com/send?phone=918429755694" target="_blank" className="group relative">
          <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-md animate-[pulse_2s_ease-in-out_infinite]" />
          <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#050505] border border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] cursor-hover-target">
            <FaWhatsapp className="text-2xl sm:text-3xl" />
          </div>
        </MagneticButton>

        {/* 🔥 Stealth Scroll to Top Button */}
        <MagneticButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="group relative">
          <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#050505] border border-white/10 text-gray-400 transition-all duration-500 hover:text-black hover:bg-white hover:border-white shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] cursor-hover-target">
            <FaArrowUp className="text-xl sm:text-2xl transition-transform duration-500 group-hover:-translate-y-1 sm:group-hover:-translate-y-2" />
          </div>
        </MagneticButton>

      </div>

      {/* CSS Overrides for Premium Awwwards Feel */}
      <style dangerouslySetInnerHTML={{__html: `
        .outline-text-footer {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
          color: transparent;
        }
        @media (min-width: 768px) {
          .outline-text-footer {
            -webkit-text-stroke: 2px rgba(255, 255, 255, 0.3);
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;