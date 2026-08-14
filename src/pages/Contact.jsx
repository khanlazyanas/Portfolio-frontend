import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";
import { 
  FaLinkedin, 
  FaGithub, 
  FaInstagram, 
  FaWhatsapp, 
  FaYoutube 
} from "react-icons/fa";
import { 
  User, 
  Mail, 
  MessageSquare, 
  Send, 
  Phone, 
  MapPin, 
  Loader2 
} from "lucide-react"; 
import { toast } from "react-toastify";

// ================= ULTRA PREMIUM SUB-COMPONENTS ================= //

// 1. Mouse Spotlight Card
const SpotlightCard = ({ children, className, glowColor = "rgba(255, 255, 255, 0.15)" }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => { setIsFocused(true); setOpacity(1); };
  const handleBlur = () => { setIsFocused(false); setOpacity(0); };
  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] border border-white/[0.05] bg-[#050505]/60 backdrop-blur-3xl shadow-2xl transition-all duration-500 group ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-500 z-0"
        style={{
          opacity,
          background: `radial-gradient(1000px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

// 2. Heavy Magnetic Button Wrapper
const MagneticButton = ({ children, className, href, onClick, target }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouse = (e) => {
    if (isTouchDevice) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.4, y: middleY * 0.4 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 100, damping: 10, mass: 0.3 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    if (href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('http')) {
      return <a href={href} target={target} rel={target === '_blank' ? "noopener noreferrer" : undefined} className="inline-block w-full sm:w-auto">{content}</a>;
    }
    return <Link to={href} className="inline-block w-full sm:w-auto">{content}</Link>;
  }
  return <div className="inline-block w-full sm:w-auto cursor-pointer">{content}</div>;
};

// 3. Custom Animated Cursor
const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      setIsHovering(
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.classList.contains('cursor-hover-target')
      );
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 border border-white/30 rounded-full pointer-events-none z-[9998] mix-blend-difference items-center justify-center backdrop-blur-[2px] hidden md:flex"
        style={{ x: cursorXSpring, y: cursorYSpring, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
          border: isHovering ? "none" : "1px solid rgba(255,255,255,0.3)"
        }}
        transition={{ duration: 0.15 }}
      >
        {isHovering && <span className="text-[5px] font-extrabold text-black uppercase tracking-[0.3em]">View</span>}
      </motion.div>
    </>
  );
};


// ================= MAIN COMPONENT ================= //

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    const payload = { ...form };

    try {
      const res = await fetch(
        "https://anaskhanportfolio.onrender.com/api/message",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Something went wrong");
      
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent! I’ll get back to you soon. 🚀", {
        theme: "dark",
        position: "bottom-right",
        style: { background: "#0a0a0a", color: "#fff", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px" }
      });
    } catch {
      toast.error("Network error. Please try later.", { 
        theme: "dark",
        position: "bottom-right",
        style: { background: "#0a0a0a", color: "#fff", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px" }
      });
    } finally {
      setSending(false);
    }
  };

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 25, mass: 1 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 60, damping: 20, mass: 1 } },
  };

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#000000] text-white overflow-hidden selection:bg-teal-500/30 font-sans antialiased cursor-auto md:cursor-none">
      
      <CustomCursor />

      {/* 🌟 Ultra-Premium Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[120vw] sm:w-[60vw] h-[120vw] sm:h-[60vw] rounded-full bg-teal-900/15 sm:bg-teal-900/20 blur-[150px] sm:blur-[250px] mix-blend-screen animate-[pulse_15s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[130vw] sm:w-[70vw] h-[130vw] sm:h-[70vw] rounded-full bg-blue-900/15 sm:bg-blue-900/20 blur-[150px] sm:blur-[250px] mix-blend-screen animate-[pulse_20s_ease-in-out_infinite_reverse]" />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:70px_70px] sm:bg-[size:150px_150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80 md:opacity-95" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06] mix-blend-overlay pointer-events-none" />
      </div>

      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] md:h-[4px] bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 z-[999] origin-left shadow-[0_0_20px_rgba(20,184,166,0.8)]"
        style={{ scaleX }}
      />

      {/* FIXED: Reduced pt-28 to pt-32 (was pt-40) and removed unnecessary massive gaps */}
      <div className="max-w-[1920px] mx-auto relative z-10 pt-32 pb-32 px-4 sm:px-10 md:px-20 lg:px-28">

        {/* ================= HEADER ================= */}
        <motion.header 
          initial="hidden" animate="show" variants={containerVariants}
          className="mb-16 flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          <motion.div variants={revealVariants} className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.1] text-xs uppercase tracking-[0.3em] text-gray-300 mb-6 backdrop-blur-3xl shadow-2xl cursor-hover-target">
            <Send className="w-4 h-4 text-teal-400" />
            Contact Me
          </motion.div>
          
          <div className="overflow-hidden w-full pb-2">
            <motion.h1 variants={revealVariants} className="text-[12vw] sm:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-none relative whitespace-nowrap">
              <span className="text-transparent outline-text drop-shadow-2xl mix-blend-plus-lighter">LET'S</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden w-full pb-6">
            <motion.h1 variants={revealVariants} className="text-[12vw] sm:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-none relative whitespace-nowrap">
              <span className="text-white drop-shadow-[0_20px_40px_rgba(255,255,255,0.15)]">CONNECT.</span>
            </motion.h1>
          </div>

          <motion.p variants={revealVariants} className="text-gray-400 text-base sm:text-2xl font-light tracking-wide leading-relaxed max-w-3xl mix-blend-plus-lighter">
            Have a project, idea, or collaboration in mind? I’m always open to discussing new opportunities and engineering scalable digital products.
          </motion.p>
        </motion.header>

        {/* ================= CONTENT GRID ================= */}
        <motion.div 
          variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start"
        >

          {/* 📱 LEFT: Contact Info & Socials (Col Span 5) */}
          <motion.div variants={fadeUp} className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              {/* Info Card 1: Phone */}
              <MagneticButton href="tel:+918429755694" className="w-full">
                <div className="flex items-center gap-5 p-6 rounded-[2rem] bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 hover:bg-[#111111] hover:border-teal-500/30 transition-all duration-500 group shadow-lg hover:shadow-[0_15px_40px_-15px_rgba(45,212,191,0.2)] cursor-hover-target w-full">
                  <div className="w-14 h-14 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all duration-500 shrink-0">
                    <Phone size={22} />
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em] mb-1 font-bold">Call Me</p>
                    <p className="text-base sm:text-lg text-white font-light tracking-wide truncate">+91 84297 55694</p>
                  </div>
                </div>
              </MagneticButton>

              {/* Info Card 2: Email */}
              <MagneticButton href="mailto:anaskhan995620@gmail.com" className="w-full">
                <div className="flex items-center gap-5 p-6 rounded-[2rem] bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 hover:bg-[#111111] hover:border-blue-500/30 transition-all duration-500 group shadow-lg hover:shadow-[0_15px_40px_-15px_rgba(59,130,246,0.2)] cursor-hover-target w-full">
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500 shrink-0">
                    <Mail size={22} />
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em] mb-1 font-bold">Email Me</p>
                    <p className="text-base sm:text-lg text-white font-light tracking-wide truncate">anaskhan995620@gmail.com</p>
                  </div>
                </div>
              </MagneticButton>

              {/* Info Card 3: Location */}
              <MagneticButton className="w-full">
                <div className="flex items-center gap-5 p-6 rounded-[2rem] bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 hover:bg-[#111111] hover:border-purple-500/30 transition-all duration-500 group shadow-lg hover:shadow-[0_15px_40px_-15px_rgba(168,85,247,0.2)] cursor-hover-target w-full">
                  <div className="w-14 h-14 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-500 shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em] mb-1 font-bold">Location</p>
                    <p className="text-base sm:text-lg text-white font-light tracking-wide truncate">Kanpur, India (IST)</p>
                  </div>
                </div>
              </MagneticButton>
            </div>

            {/* Socials Box */}
            <div className="pt-8 border-t border-white/10 text-center sm:text-left">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gray-500 mb-6 font-bold">
                Follow my journey
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xl sm:text-2xl">
                <SocialIcon href="https://linkedin.com/in/khan-anas-a26b66364/" icon={<FaLinkedin />} hoverColor="rgba(10, 102, 194, 0.4)" hoverText="hover:text-[#0A66C2]" />
                <SocialIcon href="https://github.com/khanlazyanas/anaskhanportfolio" icon={<FaGithub />} hoverColor="rgba(255, 255, 255, 0.4)" hoverText="hover:text-white" />
                <SocialIcon href="https://instagram.com/khan_anas842" icon={<FaInstagram />} hoverColor="rgba(225, 48, 108, 0.4)" hoverText="hover:text-[#E1306C]" />
                <SocialIcon href="https://wa.me/918429755694" icon={<FaWhatsapp />} hoverColor="rgba(37, 211, 102, 0.4)" hoverText="hover:text-[#25D366]" />
                <SocialIcon href="https://youtube.com/@khananas2318" icon={<FaYoutube />} hoverColor="rgba(255, 0, 0, 0.4)" hoverText="hover:text-[#FF0000]" />
              </div>
            </div>

          </motion.div>

          {/* 📝 RIGHT: Ultra-Premium Glassmorphism Form (Col Span 7) */}
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <SpotlightCard glowColor="rgba(45, 212, 191, 0.15)" className="p-8 sm:p-12 rounded-[2.5rem] group/form">
              
              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight group-hover/form:text-transparent group-hover/form:bg-clip-text group-hover/form:bg-gradient-to-r group-hover/form:from-white group-hover/form:to-gray-400 transition-colors duration-500">Send a Message</h3>
                <p className="text-gray-400 text-sm sm:text-base mb-8 font-light leading-relaxed">Fill out the form below and I'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Input */}
                  <div className="relative group cursor-hover-target">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-teal-400 transition-colors duration-300 z-10" size={20} />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      required
                      className="w-full bg-[#111111]/80 backdrop-blur-md border border-white/5 rounded-2xl pl-16 pr-6 py-5 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-[#151515] focus:ring-4 focus:ring-teal-500/10 transition-all duration-300 relative z-0"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative group cursor-hover-target">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors duration-300 z-10" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className="w-full bg-[#111111]/80 backdrop-blur-md border border-white/5 rounded-2xl pl-16 pr-6 py-5 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-[#151515] focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 relative z-0"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="relative group cursor-hover-target">
                    <MessageSquare className="absolute left-6 top-6 text-gray-500 group-focus-within:text-purple-400 transition-colors duration-300 z-10" size={20} />
                    <textarea
                      name="message"
                      rows="4"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      className="w-full bg-[#111111]/80 backdrop-blur-md border border-white/5 rounded-2xl pl-16 pr-6 py-6 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-[#151515] focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 resize-none custom-scrollbar relative z-0"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={sending}
                      className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold py-5 rounded-2xl transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(45,212,191,0.5)] disabled:opacity-70 group cursor-hover-target"
                    >
                      {sending ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          <span className="text-sm sm:text-base tracking-wider">Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span className="text-sm sm:text-base tracking-widest uppercase">Transmit Message</span>
                          <Send size={18} className="transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-1" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </SpotlightCard>
          </motion.div>

        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .outline-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.7);
          color: transparent;
        }
        @media (min-width: 768px) {
          .outline-text {
            -webkit-text-stroke: 3px rgba(255, 255, 255, 0.8);
          }
        }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 4px; border: 1px solid #111; }
        ::-webkit-scrollbar-thumb:hover { background: #444; }
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
      `}} />
    </main>
  );
};

// Reusable Social Icon Component using Magnetic logic
function SocialIcon({ href, icon, hoverColor, hoverText }) {
  return (
    <MagneticButton href={href} target="_blank">
      <div 
        className={`p-4 rounded-2xl border border-white/10 bg-[#0a0a0a]/80 text-gray-400 backdrop-blur-md transition-all duration-500 ${hoverText} shadow-lg flex items-center justify-center cursor-hover-target`}
        style={{ '--tw-ring-color': hoverColor }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = hoverColor.replace('0.4', '0.8');
          e.currentTarget.style.boxShadow = `0 10px 30px -10px ${hoverColor}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        }}
      >
        {icon}
      </div>
    </MagneticButton>
  );
}

export default Contact;