import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react"; // Make sure to import from lucide-react
import logo from "../assets/anas4.png";

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
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
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
  ];

  // Smooth blur on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-outfit">
      
      {/* Desktop Header */}
      <div
        className={`relative transition-all duration-500 border-b ${
          scrolled 
            ? "backdrop-blur-2xl bg-[#050505]/70 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-1" 
            : "bg-transparent border-transparent py-3"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[70px] flex items-center justify-between relative z-10">
          
          {/* Logo */}
          <Link to="/" onClick={() => setOpen(false)} className="group relative">
            <div className="absolute inset-0 bg-teal-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            <img
              src={logo}
              alt="Anas Khan"
              className="relative h-10 md:h-12 invert select-none transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 text-[12px] tracking-[0.2em] uppercase font-lexend font-medium">
            {links.map(([path, label]) => (
              <Link
                key={path}
                to={path}
                className="relative group py-2"
              >
                <span className={`transition-colors duration-300 ${isActive(path) ? "text-white" : "text-gray-400 group-hover:text-teal-400"}`}>
                  {label}
                </span>
                
                {/* Glowing Underline Indicator */}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-teal-400 transition-all duration-300 ${
                  isActive(path) ? "w-full opacity-100 shadow-[0_0_10px_rgba(45,212,191,0.8)]" : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50"
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 text-gray-300 hover:text-white bg-white/5 rounded-lg border border-white/10 transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.aside
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 z-50 h-[100dvh] w-[85%] max-w-[320px] bg-[#050505] border-l border-white/10 flex flex-col md:hidden shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <img src={logo} alt="Logo" className="h-8 invert" />
                <button 
                  onClick={() => setOpen(false)}
                  className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto px-8 pt-10 pb-6">
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
                        className={`flex items-center justify-between text-lg tracking-widest uppercase font-medium pb-3 border-b border-white/5 transition-colors ${
                          isActive(path) ? "text-teal-400 border-teal-500/30" : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {label}
                        {isActive(path) && <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]"></div>}
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