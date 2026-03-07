import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const drawerVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { x: "100%", transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const navVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const links = [
    ["/", "Introduction"],
    ["/about", "About"],
    ["/services", "Service"],
    ["/projects", "Projects"],
    ["/skills", "Skills"],
    ["/resume", "Resume"],
    ["/contact", "Contact"],
    ["/blog", "Blog"],
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-outfit">
      
      {/* Desktop Header */}
      <div
        className={`relative transition-all duration-700 border-b ${
          scrolled 
            ? "backdrop-blur-2xl bg-[#030303]/80 border-white/5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] py-2" 
            : "bg-transparent border-transparent py-4"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[70px] flex items-center justify-between relative z-10">
          
          {/* ================= ULTRA PREMIUM LOGO ================= */}
          <Link to="/" onClick={() => setOpen(false)} className="group relative z-10 flex items-center gap-4 cursor-pointer">
            
            {/* The Monogram Badge */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-white/10 to-white/0 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden"
            >
              {/* Dynamic Glow Behind Monogram */}
              <div className="absolute inset-0 bg-teal-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Shimmer Line inside box */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:animate-[shimmer_1.5s_infinite]"></div>

              <span className="relative z-10 font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 text-xl tracking-tighter drop-shadow-lg">
                AK
              </span>
            </motion.div>

            {/* Typography Name */}
            <div className="flex items-baseline font-outfit uppercase tracking-[0.3em] select-none">
              {/* Silver Metallic Text */}
              <span className="text-[22px] font-light text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 transition-all duration-500 group-hover:text-white">
                Anas
              </span>
              
              {/* Liquid Teal Glowing Text */}
              <span className="text-[22px] font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300 ml-2 drop-shadow-[0_0_12px_rgba(45,212,191,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(45,212,191,0.8)]">
                Khan
              </span>

              {/* The Radar Ping Dot */}
              <span className="relative flex h-2 w-2 ml-2.5 mb-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400 shadow-[0_0_8px_#2dd4bf]"></span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 text-[11px] tracking-[0.25em] uppercase font-lexend font-semibold">
            {links.map(([path, label]) => (
              <Link
                key={path}
                to={path}
                className="relative group py-2"
              >
                <span className={`transition-all duration-500 ${
                  isActive(path) 
                    ? "text-teal-300 drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]" 
                    : "text-gray-400 group-hover:text-white"
                }`}>
                  {label}
                </span>
                
                {/* Ultra Smooth Underline */}
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-transparent via-teal-400 to-transparent transition-all duration-500 ${
                  isActive(path) 
                    ? "w-full opacity-100 shadow-[0_0_15px_rgba(45,212,191,0.6)]" 
                    : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-70"
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl border border-white/5 transition-all duration-300 relative z-10 active:scale-95"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-[#050505]/60 z-40 md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.aside
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 z-50 h-[100dvh] w-[85%] max-w-[340px] bg-[#030303]/95 backdrop-blur-2xl border-l border-white/5 flex flex-col md:hidden shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-7 border-b border-white/5">
                
                {/* Mobile Drawer Logo */}
                <div className="flex items-baseline font-outfit uppercase tracking-[0.2em]">
                  <span className="text-[18px] font-light text-gray-300">Anas</span>
                  <span className="text-[18px] font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200 ml-2">Khan</span>
                  <span className="relative flex h-1.5 w-1.5 ml-2 mb-0.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-500"></span>
                  </span>
                </div>

                <button 
                  onClick={() => setOpen(false)}
                  className="p-2.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 active:scale-90"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto px-8 pt-12 pb-6">
                <motion.nav
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-8 font-lexend"
                >
                  {links.map(([path, label]) => (
                    <motion.div key={path} variants={itemVariants}>
                      <Link
                        to={path}
                        onClick={() => setOpen(false)}
                        className={`group flex items-center justify-between text-lg tracking-[0.2em] uppercase font-semibold pb-4 border-b border-white/5 transition-all duration-300 ${
                          isActive(path) ? "text-teal-300 border-teal-500/20" : "text-gray-500 hover:text-white hover:border-white/20"
                        }`}
                      >
                        <span className="relative overflow-hidden">
                          {label}
                          {/* Hover text slide effect */}
                          <span className="absolute left-0 bottom-0 w-full h-[1px] bg-teal-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                        </span>
                        
                        {/* Active Indicator inside drawer */}
                        <div className={`transition-all duration-500 ${isActive(path) ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
                           <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]"></div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;