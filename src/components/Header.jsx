import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

// ================= PREMIUM BEZIER CURVES & VARIANTS =================
const transitionCurve = [0.22, 1, 0.36, 1]; // Ultra-smooth Apple-like curve

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.6, ease: transitionCurve, when: "beforeChildren", staggerChildren: 0.1 } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    y: 20, 
    transition: { duration: 0.4, ease: transitionCurve } 
  },
};

const linkRevealVariants = {
  hidden: { y: "150%", opacity: 0, rotate: 5 },
  visible: { 
    y: 0, 
    opacity: 1, 
    rotate: 0,
    transition: { duration: 0.8, ease: transitionCurve } 
  },
  exit: { y: "100%", opacity: 0, transition: { duration: 0.3 } }
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const links = [
    ["/", "Intro"],
    ["/about", "About"],
    ["/services", "Services"],
    ["/projects", "Projects"],
    ["/skills", "Skills"],
    ["/contact", "Contact"],
    ["/blog", "Blog"],
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-sans">
      
      {/* ================= DESKTOP HEADER ================= */}
      <div
        className={`relative transition-all duration-500 border-b ${
          scrolled 
            ? "bg-[#050505]/70 backdrop-blur-3xl border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] py-3" 
            : "bg-transparent border-transparent py-5 lg:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between relative z-10">
          
          {/* Logo Section */}
          <Link to="/" onClick={() => setOpen(false)} className="group relative z-10 flex items-center gap-4 cursor-pointer">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden transition-all duration-500 group-hover:border-teal-500/30 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.2)]"
            >
              <div className="absolute inset-0 bg-teal-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="relative z-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 text-lg sm:text-xl tracking-tighter drop-shadow-lg">
                AK
              </span>
            </motion.div>

            {/* Typography Name */}
            <div className="flex items-baseline font-sans uppercase tracking-[0.25em] select-none">
              <span className="text-[18px] sm:text-[22px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 transition-all duration-500 group-hover:text-white">
                Anas
              </span>
              <span className="text-[18px] sm:text-[22px] font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-teal-300 ml-2.5 drop-shadow-[0_0_12px_rgba(45,212,191,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(45,212,191,0.8)]">
                Khan
              </span>
              <span className="relative flex h-2 w-2 ml-3 mb-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500 shadow-[0_0_8px_#2dd4bf]"></span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] tracking-[0.2em] uppercase font-bold">
            {links.map(([path, label]) => {
              const active = isActive(path);
              return (
                <Link key={path} to={path} className="relative py-2 group transition-all duration-300">
                  <span className={`relative z-10 transition-colors duration-300 flex items-center gap-2 ${
                    active ? "text-teal-300 drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]" : "text-gray-400 group-hover:text-white"
                  }`}>
                    {label}
                  </span>
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-transparent via-teal-400 to-transparent transition-all duration-500 ${
                    active ? "w-full opacity-100 shadow-[0_0_15px_rgba(45,212,191,0.8)]" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}></span>
                </Link>
              );
            })}
          </nav>

          {/* ================= CUSTOM ANIMATED HAMBURGER ICON ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative z-[60] w-12 h-12 flex flex-col justify-center items-center gap-[6px] bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors duration-300 shadow-lg"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: transitionCurve }}
              className="w-5 h-[2px] bg-white rounded-full block"
            ></motion.span>
            <motion.span
              animate={open ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-[2px] bg-teal-400 rounded-full block shadow-[0_0_8px_rgba(45,212,191,0.8)]"
            ></motion.span>
            <motion.span
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: transitionCurve }}
              className="w-5 h-[2px] bg-white rounded-full block"
            ></motion.span>
          </button>
        </div>
      </div>

      {/* ================= ULTRA PREMIUM FLOATING MOBILE MODAL ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Ultra Dark Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 bg-[#050505]/60 z-40 lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Floating Glassmorphism Menu Panel */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-4 md:inset-x-20 top-24 bottom-6 z-50 bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] flex flex-col overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.9)] lg:hidden"
            >
              {/* Internal Glow Effects */}
              <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-teal-500/20 blur-[100px] pointer-events-none z-0 rounded-full"></div>
              <div className="absolute bottom-[-20%] left-[-20%] w-[300px] h-[300px] bg-blue-500/20 blur-[100px] pointer-events-none z-0 rounded-full"></div>

              {/* Huge Typography Links (Mask Reveal Effect) */}
              <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 relative z-10 gap-4 sm:gap-6">
                {links.map(([path, label]) => (
                  <div key={path} className="overflow-hidden">
                    <motion.div variants={linkRevealVariants}>
                      <Link
                        to={path}
                        onClick={() => setOpen(false)}
                        className={`group flex items-center justify-between transition-colors duration-300 ${
                          isActive(path) ? "text-white" : "text-gray-500 hover:text-white"
                        }`}
                      >
                        <span className={`text-4xl sm:text-5xl font-black uppercase tracking-tighter ${isActive(path) ? "text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-white drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]" : ""}`}>
                          {label}
                        </span>
                        
                        {/* Interactive Arrow on Active/Hover */}
                        <span className={`h-[2px] bg-teal-400 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(45,212,191,0.8)] ${
                          isActive(path) ? "w-12 sm:w-20 opacity-100" : "w-0 opacity-0 group-hover:w-12"
                        }`}></span>
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Premium Footer with Social Grid */}
              <motion.div 
                variants={linkRevealVariants}
                className="p-8 bg-gradient-to-t from-white/[0.05] to-transparent border-t border-white/10 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6"
              >
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mb-2 text-center sm:text-left">Let's Connect</p>
                  <a href="mailto:anaskhan995620@gmail.com" className="text-sm font-semibold text-gray-300 hover:text-teal-400 transition-colors">
                    anaskhan995620@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <SocialLink href="https://github.com" icon={<FaGithub size={20} />} />
                  <SocialLink href="https://linkedin.com" icon={<FaLinkedin size={20} />} />
                  <SocialLink href="https://instagram.com" icon={<FaInstagram size={20} />} />
                  <SocialLink href="https://wa.me/918429755694" icon={<FaWhatsapp size={20} />} />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

// Sleek Social Link Component for Mobile Menu Footer
function SocialLink({ href, icon }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-teal-500/20 hover:border-teal-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] active:scale-90"
    >
      {icon}
    </a>
  );
}

export default Header;