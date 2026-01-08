import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import logo from "../assets/anas4.png";

const Footer = () => {
  const location = useLocation();

  // 🔥 Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/services", "Service"],
    ["/projects", "Projects"],
    ["/skills", "Skills"],
    // ["/experience", "Experience"],
    ["/resume", "Resume"],
    ["/contact", "Contact"],
  ];

  return (
    <footer className="relative bg-black text-gray-400 px-6 sm:px-10 md:px-20 lg:px-28 pt-32 pb-16 overflow-hidden">

      {/* Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Top Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Glow Accent */}
      <div className="absolute -bottom-40 right-[-120px] w-[420px] h-[420px] bg-teal-400/10 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-14 relative z-10">

        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-10 mb-6 invert hover:opacity-90 transition"
            />
          </Link>

          <p className="text-sm leading-relaxed max-w-sm">
            Full-stack MERN developer crafting scalable, high-performance web
            applications with clean architecture and modern UX.
          </p>

          <p className="mt-4 text-xs text-teal-400 uppercase tracking-widest">
            ● Actively building new projects
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500 mb-6">
            Navigation
          </p>
          <ul className="space-y-3 text-sm">
            {links.map(([path, label]) => (
              <li key={path}>
                <Link
                  to={path}
                  className="hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500 mb-6">
            Contact
          </p>

          <div className="space-y-4 text-sm">
            <a
              href="mailto:khananas@example.com"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <FaEnvelope />
              anaskhan995620@gmail.com
            </a>

            <p className="text-gray-500">📍 India • IST Timezone</p>

            <p className="inline-flex items-center gap-2 text-teal-400 text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Available for work
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500 mb-6">
            Quick Actions
          </p>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Hire Me →
              </Link>
            </li>
            <li>
              <Link to="/resume" className="hover:text-white transition">
                View Resume →
              </Link>
            </li>
            <li>
              <a
                href="mailto:anaskhan995620@gmail.com"
                className="hover:text-white transition"
              >
                Send Email →
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500 mb-6">
            Social
          </p>

          <div className="flex gap-5 text-xl">
            {[
              ["https://github.com/khanlazyanas/anaskhanportfolio", <FaGithub />],
              ["https://www.linkedin.com/in/khan-anas-a26b66364/", <FaLinkedin />],
              ["https://instagram.com/khan_anas842", <FaInstagram />],
              ["https://wa.me/8429755694", <FaWhatsapp />],
              ["https://www.youtube.com/@khananas2318", <FaYoutube />],
            ].map(([url, icon], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="relative group"
              >
                <span className="absolute inset-0 rounded-full bg-white/10 blur-md opacity-0 group-hover:opacity-100 transition" />
                <span className="relative z-10 hover:text-white transition">
                  {icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-24 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 relative z-10">
        <p>© {new Date().getFullYear()} Anas Khan. All rights reserved.</p>

        <div className="flex items-center gap-6 text-gray-600">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Built with React • Tailwind</span>
        </div>
      </div>

      {/* Back To Top */}
<button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="absolute bottom-6 right-6 p-3 rounded-full 
             border border-white/10 
             text-gray-400 hover:text-white hover:border-white/30 
             transition-all duration-300 
             animate-float group
             shadow-[0_0_18px_rgba(255,255,255,0.25)] 
             hover:shadow-[0_0_28px_rgba(255,255,255,0.45)]"
>
  {/* Glow layer */}
  <span className="absolute inset-0 rounded-full bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition" />

  {/* Icon */}
  <FaArrowUp className="relative z-10 text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-6deg]" />
</button>

<a
  href="https://api.whatsapp.com/send?phone=918429755694"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-20 right-6 p-3 rounded-full border border-white/10 
             text-white hover:text-white hover:border-white/30 
             transition-all duration-300 animate-float group
             shadow-[0_0_18px_rgba(255,255,255,0.25)] 
             hover:shadow-[0_0_28px_rgba(255,255,255,0.45)]
             z-50"
>
  <span className="absolute inset-0 rounded-full bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition" />

  <FaWhatsapp className="relative z-10 text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-6deg]" />
</a>


    </footer>
  );
};

export default Footer;
