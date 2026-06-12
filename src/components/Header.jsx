import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

// ================= FRAMER MOTION VARIANTS =================
const drawerVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 40,
      mass: 1,
      when: "beforeChildren"
    } 
  },
  exit: { 
    x: "100%", 
    opacity: 0, 
    transition: { 
      duration: 0.4, 
      ease: [0.32, 0.72, 0, 1] 
    } 
  },
};

const navVariants = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.08, 
      delayChildren: 0.1 
    } 
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 40, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 300, damping: 24 } 
  },
  exit: { opacity: 0, x: 20, transition: { duration: 0.2 } }
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
    ["/resume", "Resume"],
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
            
            {/* The Monogram Badge */}
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
                <Link
                  key={path}
                  to={path}
                  className="relative py-2 group transition-all duration-300"
                >
                  <span className={`relative z-10 transition-colors duration-300 flex items-center gap-2 ${
                    active ? "text-teal-300 drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]" : "text-gray-400 group-hover:text-white"
                  }`}>
                    {label}
                  </span>

                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-transparent via-teal-400 to-transparent transition-all duration-500 ${
                    active 
                      ? "w-full opacity-100 shadow-[0_0_15px_rgba(45,212,191,0.8)]" 
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}></span>
                </Link>
              );
            })}
          </nav>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-3 text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all duration-300 relative z-10 active:scale-90 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* ================= ULTRA PREMIUM MOBILE DRAWER ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Deep Frosted Glass Backdrop */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-[#050505]/80 z-40 lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Premium Sidebar */}
            <motion.aside
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 z-50 h-[100dvh] w-[85%] max-w-[400px] bg-gradient-to-b from-[#0a0a0a]/95 to-[#050505]/95 backdrop-blur-3xl border-l border-white/10 flex flex-col lg:hidden shadow-[-40px_0_80px_rgba(0,0,0,0.9)]"
            >
              
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-8 border-b border-white/10 relative overflow-hidden">
                {/* Subtle Header Glow */}
                <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-teal-500/10 blur-[60px] pointer-events-none z-0"></div>
                
                <div className="flex items-baseline font-sans uppercase tracking-[0.2em] relative z-10">
                  <span className="text-[16px] font-semibold text-gray-300">Anas</span>
                  <span className="text-[16px] font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 ml-2 drop-shadow-md">Khan</span>
                  <span className="relative flex h-1.5 w-1.5 ml-2 mb-0.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-500 shadow-[0_0_8px_#2dd4bf]"></span>
                  </span>
                </div>

                <motion.button 
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setOpen(false)}
                  className="p-3 text-gray-400 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 rounded-full transition-all duration-300 z-10 hover:rotate-90 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  <X size={22} />
                </motion.button>
              </div>

              {/* Drawer Links (Staggered Animation) */}
              <div className="flex-1 overflow-y-auto px-10 pt-12 pb-6 custom-scrollbar relative z-10">
                <motion.nav
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col gap-6"
                >
                  {links.map(([path, label]) => (
                    <motion.div key={path} variants={itemVariants}>
                      <Link
                        to={path}
                        onClick={() => setOpen(false)}
                        className={`group flex items-center justify-between text-xl tracking-[0.2em] uppercase font-extrabold py-5 border-b border-white/5 transition-all duration-500 hover:border-white/15 ${
                          isActive(path) ? "text-teal-400 pl-4 bg-white/[0.02] rounded-xl" : "text-gray-500 hover:text-white hover:pl-3"
                        }`}
                      >
                        <span className="relative overflow-hidden inline-block pb-1">
                          {label}
                          {/* Hover Underline Slide */}
                          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-400 transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out shadow-[0_0_10px_#2dd4bf]"></span>
                        </span>
                        
                        {/* Active Dot Indicator */}
                        <div className={`transition-all duration-500 pr-4 ${isActive(path) ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
                           <div className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.8)]"></div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              </div>

              {/* Drawer Footer Connect */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="p-8 border-t border-white/10 bg-gradient-to-t from-white/[0.03] to-transparent relative z-10"
              >
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mb-4">Let's Connect</p>
                <a href="mailto:anaskhan995620@gmail.com" className="text-[15px] font-medium text-gray-300 hover:text-teal-400 transition-colors duration-300 drop-shadow-sm">
                  anaskhan995620@gmail.com
                </a>
              </motion.div>
              
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;