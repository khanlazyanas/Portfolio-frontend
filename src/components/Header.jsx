import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

// ================= PREMIUM BEZIER CURVES & VARIANTS =================
const transitionCurve = [0.22, 1, 0.36, 1]; // Ultra-smooth Apple-like curve
const springConfig = { stiffness: 100, damping: 20, mass: 1 };

const menuOverlayVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: transitionCurve, staggerChildren: 0.1, delayChildren: 0.2 } 
  },
  exit: { 
    opacity: 0, 
    y: "-100%", 
    transition: { duration: 0.6, ease: transitionCurve, staggerChildren: 0.05, staggerDirection: -1 } 
  },
};

const linkRevealVariants = {
  hidden: { y: "100%", opacity: 0, rotate: 5 },
  visible: { 
    y: 0, 
    opacity: 1, 
    rotate: 0,
    transition: { duration: 0.8, ease: transitionCurve } 
  },
  exit: { y: "100%", opacity: 0, transition: { duration: 0.4, ease: transitionCurve } }
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const location = useLocation();
  const { scrollY } = useScroll();

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

  // Smart scroll detection (Hide on scroll down, show on scroll up + Island effect)
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    // Hide nav if scrolling down, show if scrolling up (Headroom effect)
    if (latest > 150 && latest > previous && !open) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [open]);

  return (
    <>
      {/* ================= SMART FLOATING DESKTOP/MOBILE HEADER ================= */}
      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-150%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: transitionCurve }}
        className="fixed top-0 left-0 w-full z-[100] font-sans px-4 sm:px-6 md:px-10 flex justify-center pointer-events-none mt-4 sm:mt-6"
      >
        <motion.div
          animate={{
            width: scrolled ? "100%" : "100%",
            maxWidth: scrolled ? "1200px" : "1920px",
            backgroundColor: scrolled ? "rgba(5, 5, 5, 0.7)" : "rgba(5, 5, 5, 0)",
            backdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
            borderColor: scrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
            borderRadius: scrolled ? "100px" : "0px",
            paddingTop: scrolled ? "12px" : "16px",
            paddingBottom: scrolled ? "12px" : "16px",
            paddingLeft: scrolled ? "24px" : "0px",
            paddingRight: scrolled ? "24px" : "0px",
            boxShadow: scrolled ? "0 20px 40px -10px rgba(0,0,0,0.5)" : "none"
          }}
          transition={{ duration: 0.6, ease: transitionCurve }}
          className="w-full flex items-center justify-between border pointer-events-auto"
        >
          {/* Logo Section */}
          <Link to="/" onClick={() => setOpen(false)} className="group relative flex items-center gap-3 sm:gap-4 cursor-pointer outline-none">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full sm:rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden transition-all duration-500 group-hover:border-teal-500/40 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]"
            >
              <div className="absolute inset-0 bg-teal-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <span className="relative z-10 font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 text-base sm:text-lg tracking-tighter">
                AK
              </span>
            </motion.div>

            {/* Typography Name */}
            <div className="flex items-baseline font-sans uppercase tracking-[0.2em] sm:tracking-[0.25em] select-none">
              <span className="text-sm sm:text-lg lg:text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 transition-all duration-500 group-hover:text-white">
                Anas
              </span>
              <span className="text-sm sm:text-lg lg:text-[20px] font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 ml-1.5 sm:ml-2.5 drop-shadow-[0_0_12px_rgba(45,212,191,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(45,212,191,0.8)]">
                Khan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (Magnetic Pill Animation) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[11px] tracking-[0.2em] uppercase font-bold relative">
            {links.map(([path, label]) => {
              const active = isActive(path);
              const isHovered = hoveredPath === path;
              
              return (
                <Link 
                  key={path} 
                  to={path} 
                  onMouseEnter={() => setHoveredPath(path)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className="relative px-5 py-2.5 outline-none"
                >
                  {/* Floating Hover Pill */}
                  {isHovered && (
                    <motion.div
                      layoutId="hover-pill"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={springConfig}
                    />
                  )}
                  
                  {/* Active Indicator Dot */}
                  {active && (
                    <motion.div
                      layoutId="active-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-teal-400 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.8)]"
                      transition={springConfig}
                    />
                  )}

                  <span className={`relative z-10 transition-colors duration-300 ${
                    active ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : "text-gray-400 group-hover:text-white"
                  }`}>
                    {label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* ================= CUSTOM ANIMATED HAMBURGER ICON (Mobile Only) ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative z-[110] w-12 h-12 flex flex-col justify-center items-center bg-transparent border border-white/10 rounded-full overflow-hidden transition-all duration-300 outline-none"
            aria-label="Toggle Menu"
          >
            {/* Background color morph */}
            <motion.div 
              animate={{ backgroundColor: open ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)" }}
              className="absolute inset-0"
            />
            {/* Top Line */}
            <motion.span
              animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: -4 }}
              transition={{ duration: 0.4, ease: transitionCurve }}
              className="absolute w-5 h-[2px] bg-white rounded-full block"
            />
            {/* Middle Line */}
            <motion.span
              animate={open ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: transitionCurve }}
              className="absolute w-5 h-[2px] bg-teal-400 rounded-full block shadow-[0_0_8px_rgba(45,212,191,0.8)]"
            />
            {/* Bottom Line */}
            <motion.span
              animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 4 }}
              transition={{ duration: 0.4, ease: transitionCurve }}
              className="absolute w-5 h-[2px] bg-white rounded-full block"
            />
          </button>

        </motion.div>
      </motion.header>

      {/* ================= ULTRA PREMIUM FULL-SCREEN MOBILE MODAL ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            // Using 100dvh ensures it fits perfectly on mobile Safari/Chrome without cutting off
            className="fixed inset-0 z-[90] bg-[#020202]/95 backdrop-blur-3xl flex flex-col lg:hidden h-[100dvh] overflow-hidden"
          >
            {/* Cinematic Grain Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06] mix-blend-overlay pointer-events-none" />
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-teal-500/10 blur-[150px] pointer-events-none rounded-full translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[80vw] h-[80vw] bg-blue-500/10 blur-[150px] pointer-events-none rounded-full -translate-x-1/4 translate-y-1/4" />

            {/* Menu Links Area */}
            <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 relative z-10 gap-6 sm:gap-8 mt-20">
              {links.map(([path, label], idx) => (
                <div key={path} className="overflow-hidden">
                  <motion.div variants={linkRevealVariants}>
                    <Link
                      to={path}
                      onClick={() => setOpen(false)}
                      className={`group flex items-center justify-between transition-colors duration-300 outline-none ${
                        isActive(path) ? "text-white" : "text-gray-500 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white/30">0{idx + 1}</span>
                        <span className={`text-4xl sm:text-6xl font-black uppercase tracking-tighter ${isActive(path) ? "text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-white drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]" : ""}`}>
                          {label}
                        </span>
                      </div>
                      
                      {/* Interactive Active Dot */}
                      <span className={`w-3 h-3 rounded-full bg-teal-400 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(45,212,191,0.8)] ${
                        isActive(path) ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-50 group-hover:opacity-50 group-hover:bg-white"
                      }`} />
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Premium Footer with Social Grid */}
            <motion.div 
              variants={linkRevealVariants}
              className="px-8 sm:px-12 pb-10 pt-8 border-t border-white/5 relative z-10 flex flex-col gap-8 bg-gradient-to-t from-black/80 to-transparent"
            >
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mb-3">Reach Out</p>
                <a href="mailto:anaskhan995620@gmail.com" className="text-base sm:text-lg font-light tracking-wide text-gray-300 hover:text-teal-400 transition-colors">
                  anaskhan995620@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <SocialLink href="https://github.com" icon={<FaGithub size={22} />} />
                <SocialLink href="https://linkedin.com" icon={<FaLinkedin size={22} />} />
                <SocialLink href="https://instagram.com" icon={<FaInstagram size={22} />} />
                <SocialLink href="https://wa.me/918429755694" icon={<FaWhatsapp size={22} />} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Sleek Social Link Component for Mobile Menu Footer
function SocialLink({ href, icon }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="p-4 sm:p-5 bg-white/[0.03] border border-white/[0.08] rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 active:scale-90"
    >
      {icon}
    </a>
  );
}

export default Header;