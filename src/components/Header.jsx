import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/anas4.png";

/* Drawer slide animation (same as before) */
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

/* NAV container → controls stagger */
const navVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,   // ⭐ ek ek karke
      delayChildren: 0.15,
    },
  },
};

/* Individual item animation */
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Header = () => {
  const [open, setOpen] = useState(false);
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

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-outfit">
      {/* Desktop Header */}
      <div
        className="
          relative backdrop-blur-[18px]
          bg-[linear-gradient(90deg,
            rgb(34,38,41)_0%,
            rgb(28,30,33)_50%,
            rgb(36,32,38)_100%
          )]
          border-b border-white/5
        "
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[76px] flex items-center justify-between">
          <Link to="/" onClick={() => setOpen(false)}>
            <img
              src={logo}
              alt="Anas Khan"
              className="h-10 md:h-12 invert select-none"
            />
          </Link>

          <nav className="hidden md:flex gap-12 text-[13px] tracking-[0.18em] uppercase font-lexend">
            {links.map(([path, label]) => (
              <Link
                key={path}
                to={path}
                className={isActive(path) ? "text-white" : "text-gray-400 hover:text-white"}
              >
                {label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-gray-300 hover:text-white"
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
              animate={{ opacity: 0.55 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            <motion.aside
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="
                fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm
                backdrop-blur-[18px]
                bg-[linear-gradient(90deg,
                  rgb(34,38,41)_0%,
                  rgb(28,30,33)_50%,
                  rgb(36,32,38)_100%
                )]
                px-10 pt-28
              "
            >
              {/* ⭐ NAV STAGGER CONTROLLER */}
              <motion.nav
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-10 font-lexend"
              >
                {links.map(([path, label]) => (
                  <motion.div
                    key={path}
                    variants={itemVariants}
                    onClick={() => setOpen(false)}
                  >
                    <Link
                      to={path}
                      className={`text-2xl tracking-wide ${
                        isActive(path)
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
