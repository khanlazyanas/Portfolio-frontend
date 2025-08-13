import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/anas4.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visits, setVisits] = useState(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const linkStyle = (path) =>
    location.pathname === path
      ? "text-indigo-600 font-semibold"
      : "text-gray-700 hover:text-indigo-600 transition-colors";

  useEffect(() => {
    fetch("https://anaskhanportfolio.onrender.com/api/visit")
      .then((res) => res.json())
      .then((data) => setVisits(data.visits || 0))
      .catch(() => setVisits(0));
  }, []);

  return (
    <header className="bg-[#fdf6e3] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img
            src={logo}
            alt="Logo"
            className="h-10 md:h-[60px] w-auto object-contain hover:scale-105 transition-transform duration-300 select-none"
          />
        </Link>

        

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className={linkStyle("/")}>Home</Link>
          <Link to="/about" className={linkStyle("/about")}>About</Link>
          <Link to="/projects" className={linkStyle("/projects")}>Projects</Link>
          <Link to="/skills" className={linkStyle("/skills")}>Skills</Link>
          <Link to="/experience" className={linkStyle("/experience")}>Experience</Link>
          <Link to="/resume" className={linkStyle("/resume")}>Resume</Link>
          <Link to="/contact" className={linkStyle("/contact")}>Contact</Link>
        </nav>
{/* Visit Counter (Desktop) */}
<div className="hidden md:flex items-center justify-center w-16 h-16 bg-cream-500 text-black rounded-full shadow-lg flex-col">
  <span className="text-lg font-bold">{visits === null ? "..." : visits}</span>
  <span className="text-[10px] tracking-wide font-semibold uppercase">Visits</span>
</div>
        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#fdf6e3] shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden rounded-l-xl`}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} className="text-gray-700 focus:outline-none text-2xl">
            ✕
          </button>
        </div>
        <nav className="flex flex-col space-y-6 px-6 text-lg font-medium">
          <Link to="/" onClick={closeMenu} className={linkStyle("/")}>Home</Link>
          <Link to="/about" onClick={closeMenu} className={linkStyle("/about")}>About</Link>
          <Link to="/projects" onClick={closeMenu} className={linkStyle("/projects")}>Projects</Link>
          <Link to="/skills" onClick={closeMenu} className={linkStyle("/skills")}>Skills</Link>
          <Link to="/experience" onClick={closeMenu} className={linkStyle("/experience")}>Experience</Link>
          <Link to="/resume" onClick={closeMenu} className={linkStyle("/resume")}>Resume</Link>
          <Link to="/contact" onClick={closeMenu} className={linkStyle("/contact")}>Contact</Link>

          {/* Mobile Visit Counter */}
<div className="mt-4 mx-auto flex items-center justify-center w-20 h-20 bg-dark-cream-500 text-black rounded-full shadow-lg flex-col">
  <span className="text-xl font-bold">{visits === null ? "..." : visits}</span>
  <span className="text-xs tracking-wide font-semibold uppercase">Visits</span>
</div>
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-30 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
