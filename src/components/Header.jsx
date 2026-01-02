import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/anas4.png";

const drawerVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i },
  }),
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const links = [
    ["/", "Introduction"],
    ["/about", "About"],
    ["/projects", "Projects"],
    ["/skills", "Skills"],
    ["/experience", "Experience"],
    ["/resume", "Resume"],
    ["/contact", "Contact"],
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-outfit">
      {/* Glass Header */}
      <div className="backdrop-blur-2xl bg-black/45 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[76px] flex items-center justify-between">

          {/* Logo */}
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
            <img
              src={logo}
              alt="Anas Khan"
              className="h-10 md:h-12 w-auto object-contain invert select-none hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12 text-[13px] tracking-[0.18em] uppercase font-lexend">
            {links.map(([path, label]) => (
              <Link
                key={path}
                to={path}
                className={`relative transition-all duration-300 ${
                  isActive(path)
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {label}

                {/* Glow underline */}
                {isActive(path) && (
                  <span className="absolute left-0 -bottom-3 w-full h-[2px] bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 rounded-full shadow-[0_0_12px_rgba(45,212,191,0.8)] animate-glow" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-gray-300 hover:text-white transition"
            aria-label="Open Menu"
          >
            <div className="space-y-2">
              <span className="block w-6 h-[2px] bg-white rounded-full" />
              <span className="block w-4 h-[2px] bg-white/70 rounded-full" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            <motion.aside
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-black px-10 pt-28 backdrop-blur-2xl"
            >
              <nav className="flex flex-col gap-10 font-lexend">
                {links.map(([path, label], i) => (
                  <motion.div
                    key={path}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={() => setOpen(false)}
                  >
                    <Link
                      to={path}
                      className={`text-2xl tracking-wide transition ${
                        isActive(path)
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Fonts & Glow */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Lexend:wght@400;600;700;900&display=swap');

          .font-outfit { font-family: 'Outfit', sans-serif; }
          .font-lexend { font-family: 'Lexend', sans-serif; }

          @keyframes glow {
            0%,100% { opacity: 0.6; }
            50% { opacity: 1; }
          }

          .animate-glow {
            animation: glow 2.5s ease-in-out infinite;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
