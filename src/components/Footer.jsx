import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/anas4.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 px-6 md:px-20 py-14">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
        {/* Brand Logo & Intro */}
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-10 md:h-[60px] w-auto object-contain invert hover:scale-105 transition-transform duration-300 select-none"
            />
          </Link>
          <em>
  Passionate <strong>Frontend Developer</strong> crafting seamless digital experiences using <strong>React</strong>, <strong>Tailwind CSS</strong>, and modern tools — powered by the <strong>MERN</strong> stack.
</em>

        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Skills", path: "/skills" },
              { name: "Experience", path: "/experience" },
              { name: "Resume", path: "/resume" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-white transition duration-200 ease-in-out"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Connect With Me</h3>
          <ul className="flex flex-wrap gap-4 mt-2 text-2xl">
            <li>
              <a
                href="https://github.com/khanlazyanas/anaskhanportfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/khan-anas-a26b66364/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/khan_anas842"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/8429755694"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@khananas2318"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center border-t border-gray-700 pt-5 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} © 2025 Anas Khan — Full-Stack Visionary. Built with 💙 using React, Tailwind CSS & a pinch of genius.

      </div>
    </footer>
  );
};

export default Footer;
