import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { FaCalendarAlt, FaClock, FaTags, FaTimes } from "react-icons/fa";
// FIXED: Added ArrowRight to the lucide-react imports to resolve the white screen crash
import { Layers, ArrowRight } from "lucide-react";

// ================= FULLY PROFESSIONAL BLOG DATA =================
const blogData = [
  {
    id: 1,
    title: "Engineering TaskMind AI: Context-Aware SaaS & Background Automation",
    excerpt: "A deep dive into integrating Google Gemini API for intelligent task management, Vercel Cron Jobs, and OS-level Web Push notifications.",
    content: `
      <p class="text-gray-300 leading-relaxed mb-6 text-lg">Modern SaaS applications must go beyond basic CRUD operations. For <strong>TaskMind AI</strong>, the objective was to build an intelligent, self-sustaining workspace that actively assists the user through natural language and background automation.</p>
      
      <h3 class="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-teal-500 pl-4">Context-Aware AI Integration</h3>
      <p class="text-gray-300 leading-relaxed mb-6">Integrating the <strong>Google Gemini API</strong> wasn't just about adding a chatbot. By leveraging advanced function calling, the LLM directly interacts with the MongoDB database. Users can seamlessly create, update, or reschedule tasks using natural language, effectively turning the AI into a real-time, intelligent database controller.</p>
      
      <h3 class="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-teal-500 pl-4">Serverless Background Automation</h3>
      <p class="text-gray-300 leading-relaxed mb-6">To ensure users never miss a deadline, the backend architecture relies on strictly timed <strong>Vercel Cron Jobs</strong>. Instead of running continuous server processes, a highly optimized Next.js API route is triggered daily, querying the database for due tasks and securely handling the background logic via serverless infrastructure.</p>

      <h3 class="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-teal-500 pl-4">Native OS Push Notifications</h3>
      <p class="text-gray-300 leading-relaxed mb-6">Closing the loop on automation meant delivering alerts even when the browser is closed. By implementing the <strong>Web Push API</strong> paired with securely stored VAPID keys, TaskMind authenticates with device-level notification services, providing a native, OS-level application experience directly from the web.</p>
    `,
    date: "July 07, 2026",
    category: "AI & Automation",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Architecting NEXPOS: Next-Gen Enterprise Retail SaaS",
    excerpt: "How I engineered a scalable Point of Sale system using Next.js, Next-Auth, MongoDB, and Razorpay.",
    content: `
      <p class="text-gray-300 leading-relaxed mb-6 text-lg">Building an enterprise-grade retail management system requires absolute precision, speed, and real-time data sync. For <strong>NEXPOS</strong>, the goal was to deliver a 'Silicon Valley' aesthetic while handling complex inventory logic.</p>
      
      <h3 class="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-blue-500 pl-4">The Next.js App Router Advantage</h3>
      <p class="text-gray-300 leading-relaxed mb-6">Transitioning to the Next.js App Router allowed me to leverage server components, significantly reducing the JavaScript payload sent to the client. This made the dashboard load instantly, which is critical for fast-paced retail billing environments.</p>
      
      <h3 class="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-blue-500 pl-4">Security & RBAC with Next-Auth</h3>
      <p class="text-gray-300 leading-relaxed mb-6">In a POS system, cashiers and admins have very different permissions. I implemented strict Role-Based Access Control (RBAC) using <strong>Next-Auth</strong>. By decoding sessions on the server side, the system securely isolates administrative analytics from the standard billing interface.</p>

      <h3 class="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-blue-500 pl-4">Real-Time Dashboards</h3>
      <p class="text-gray-300 leading-relaxed mb-6">To visualize sales data, I integrated <strong>Recharts</strong>, transforming raw MongoDB aggregation pipelines into beautiful, interactive, and actionable charts for store owners.</p>
    `,
    date: "May 15, 2026",
    category: "Architecture & Next.js",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Building BIZFLOW: Multi-Tenant SaaS on the MERN Stack",
    excerpt: "Deep dive into the backend architecture of Bizflow, featuring JWT, OAuth 2.0, and automated cron jobs.",
    content: `
      <p class="text-gray-300 leading-relaxed mb-6 text-lg"><strong>BIZFLOW</strong> is an enterprise B2B SaaS platform designed to manage workspaces and invoicing. Building a multi-tenant architecture on the MERN stack presents unique backend challenges, primarily around data isolation and security.</p>
      
      <h3 class="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-purple-500 pl-4">Advanced Security Protocols</h3>
      <p class="text-gray-300 leading-relaxed mb-6">To ensure enterprise-grade security, I implemented a hybrid authentication model. Users can log in seamlessly via <strong>Google OAuth 2.0</strong> or use a Passwordless Magic Link (OTP). All session tokens are strictly stored in cross-domain HTTP-only cookies to prevent XSS attacks.</p>
      
      <h3 class="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-purple-500 pl-4">Data Lifecycle & Cron Jobs</h3>
      <p class="text-gray-300 leading-relaxed mb-6">In SaaS, deleting data accidentally can be catastrophic. I designed a 'Soft Delete' architecture with a built-in Recycle Bin. To maintain database health, I wrote automated <strong>Node.js Cron Jobs</strong> that permanently wipe deleted data after 30 days, keeping the MongoDB clusters lean and performant.</p>
    `,
    date: "April 28, 2026",
    category: "Backend & Security",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Engineering 'Quiet Luxury' in Healthcare UIs",
    excerpt: "How I built the WeightLoss-Doc platform with an ultra-premium aesthetic and interactive biometric tools.",
    content: `
      <p class="text-gray-300 leading-relaxed mb-6 text-lg">Building clinical web applications requires more than just functionality; it requires establishing trust through design. For the <strong>WeightLoss-Doc</strong> platform, the goal was to create a 'Silicon Valley' aesthetic that felt premium, secure, and intuitive.</p>
      
      <h3 class="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-teal-500 pl-4">The 'Quiet Luxury' Design Language</h3>
      <p class="text-gray-300 leading-relaxed mb-6">I utilized Tailwind CSS and Framer Motion to engineer a calm, distraction-free environment. By using deep, rich backgrounds paired with subtle glows, the UI avoids overwhelming the user while still feeling highly modern.</p>
      
      <h3 class="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-teal-500 pl-4">Handling Biometric Data</h3>
      <p class="text-gray-300 leading-relaxed mb-6">One of the core features was the interactive BMI diagnostic tool. I used React state management to instantly reflect biometric calculations, providing users with immediate, highly personalized health feedback.</p>
    `,
    date: "March 10, 2026",
    category: "UI/UX & Frontend",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Applying BCA Fundamentals to Real-World Scalability",
    excerpt: "How core computer science concepts from my BCA studies shape the way I build production-ready databases.",
    content: `
      <p class="text-gray-300 leading-relaxed mb-6 text-lg">There is a misconception that modern frameworks abstract away the need for core fundamentals. However, while building scalable systems like UrbanGreens, the principles I learned during my <strong>BCA at IGNOU</strong> proved invaluable.</p>
      
      <h3 class="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-blue-500 pl-4">Database Normalization</h3>
      <p class="text-gray-300 leading-relaxed mb-6">Before writing a single line of backend code for complex apps, I map out ER Diagrams. Applying normalization rules ensures that as a database grows to thousands of users, we don't encounter data redundancy or update anomalies.</p>
      
      <h3 class="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-blue-500 pl-4">Algorithmic Efficiency</h3>
      <p class="text-gray-300 leading-relaxed mb-6">Understanding Time & Space complexity is crucial when writing API endpoints. By properly indexing frequently queried fields in MongoDB and avoiding nested loops in data processing, server response times drop drastically, creating a better user experience.</p>
    `,
    date: "Feb 22, 2026",
    category: "Core Computer Science",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1000&auto=format&fit=crop"
  }
];

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
const MagneticButton = ({ children, className, onClick }) => {
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

  return (
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
        {isHovering && <span className="text-[5px] font-extrabold text-black uppercase tracking-[0.3em]">Read</span>}
      </motion.div>
    </>
  );
};

// ================= MAIN COMPONENT ================= //

export default function Blog() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedPost) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedPost]);

  const categories = ["All", ...new Set(blogData.map(post => post.category))];
  const filteredPosts = activeCategory === "All" ? blogData : blogData.filter(post => post.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const revealVariants = {
    hidden: { opacity: 0, y: 100, rotate: 2 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 50, damping: 25, mass: 1 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 60, damping: 20, mass: 1 } }
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

      <div className="max-w-[1920px] mx-auto relative z-10 pt-28 sm:pt-36 pb-32 sm:pb-48 px-4 sm:px-10 md:px-20 lg:px-28">

        {/* ================= HEADER ================= */}
        <motion.header 
          initial="hidden" animate="visible" variants={containerVariants}
          className="mb-16 sm:mb-24 flex flex-col items-center text-center max-w-6xl mx-auto"
        >
          <motion.div variants={revealVariants} className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-3 sm:py-5 rounded-full bg-white/[0.02] border border-white/[0.1] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-300 mb-6 sm:mb-10 backdrop-blur-3xl shadow-2xl cursor-hover-target">
            <Layers className="w-4 h-4 text-teal-400" />
            Engineering Journal
          </motion.div>
          
          <div className="overflow-hidden w-full pb-2">
            <motion.h1 variants={revealVariants} className="text-[12vw] sm:text-[9rem] lg:text-[11rem] font-bold tracking-tighter leading-none relative whitespace-nowrap">
              <span className="text-transparent outline-text drop-shadow-2xl mix-blend-plus-lighter">TECHNICAL</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden w-full pb-6">
            <motion.h1 variants={revealVariants} className="text-[12vw] sm:text-[9rem] lg:text-[11rem] font-bold tracking-tighter leading-none relative whitespace-nowrap">
              <span className="text-white drop-shadow-[0_20px_40px_rgba(255,255,255,0.15)] md:drop-shadow-[0_40px_80px_rgba(255,255,255,0.15)]">INSIGHTS.</span>
            </motion.h1>
          </div>

          <motion.p variants={revealVariants} className="text-gray-400 text-base sm:text-2xl font-light tracking-wide leading-relaxed max-w-4xl mix-blend-plus-lighter mt-4">
            Writing deep dives into software architecture, database design, full-stack security, and the business logic behind scalable SaaS applications.
          </motion.p>
        </motion.header>

        {/* ================= CATEGORY FILTER ================= */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} 
          className="mb-12 sm:mb-20 flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {categories.map((cat, index) => (
            <button 
              key={index} 
              onClick={() => setActiveCategory(cat)} 
              className={`px-5 sm:px-8 py-2.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 cursor-hover-target ${
                activeCategory === cat 
                  ? "bg-teal-500/20 text-teal-300 border border-teal-500/50 shadow-[0_0_20px_rgba(20,184,166,0.3)]" 
                  : "bg-[#0a0a0a]/80 backdrop-blur-md text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.section>

        {/* ================= BLOG CARDS GRID ================= */}
        <section>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <motion.div 
                  layout 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.95 }} 
                  transition={{ duration: 0.4 }} 
                  key={post.id} 
                  onClick={() => setSelectedPost(post)}
                  className="cursor-pointer group h-full cursor-hover-target"
                >
                  <SpotlightCard glowColor="rgba(45, 212, 191, 0.15)" className="h-full flex flex-col p-0 border border-white/10 bg-[#0a0a0a]/80">
                    
                    {/* Image Section */}
                    <div className="relative h-64 sm:h-72 overflow-hidden w-full shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10 opacity-90" />
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out opacity-60 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0" 
                      />
                      <div className="absolute top-6 left-6 z-20">
                        <span className="flex items-center gap-2 bg-black/60 backdrop-blur-xl border border-white/10 text-teal-300 text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-[0.15em] shadow-lg">
                          <FaTags size={10} /> {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 sm:p-10 flex flex-col flex-grow relative z-20">
                      <div className="flex items-center gap-3 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-gray-500 mb-6">
                        <span className="flex items-center gap-1.5"><FaCalendarAlt /> {post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span className="flex items-center gap-1.5"><FaClock /> {post.readTime}</span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 font-light text-sm sm:text-lg leading-relaxed mb-8 flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <span className="flex items-center gap-3 text-xs sm:text-sm font-bold tracking-widest uppercase text-teal-400 group-hover:text-teal-300 transition-colors w-fit mt-auto bg-teal-500/10 px-6 py-3 rounded-full border border-teal-500/20">
                        Read Journal <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                      </span>
                    </div>

                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

      </div>

      {/* ================= ULTRA PREMIUM FULL BLOG MODAL ================= */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }} 
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }} 
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }} 
            className="fixed inset-0 z-[100000] flex items-center justify-center p-4 md:p-10 bg-black/90 cursor-auto"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }} 
              animate={{ y: 0, opacity: 1, scale: 1 }} 
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#050505] border border-white/10 rounded-[2rem] sm:rounded-[3rem] w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-[0_0_80px_rgba(20,184,166,0.15)] relative"
            >
              {/* Subtle Modal Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-teal-500/10 blur-[120px] pointer-events-none"></div>

              {/* Modal Header Image */}
              <div className="relative h-48 sm:h-72 shrink-0">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover opacity-40 grayscale-[20%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                
                <MagneticButton className="absolute top-6 right-6 sm:top-8 sm:right-8 z-50 cursor-hover-target" onClick={() => setSelectedPost(null)}>
                  <div className="bg-black/60 border border-white/10 text-gray-300 hover:text-white p-4 rounded-full backdrop-blur-xl transition-all duration-300 hover:bg-white/10 shadow-xl group hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                     <FaTimes size={18} className="group-hover:rotate-90 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </MagneticButton>
              </div>

              {/* Modal Content - Custom Scrollbar */}
              <div className="p-8 sm:p-12 lg:p-16 overflow-y-auto relative z-10 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
                
                <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-xs font-bold text-teal-400 mb-6 sm:mb-8 uppercase tracking-[0.2em]">
                  <span>{selectedPost.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50"></span>
                  <span>{selectedPost.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50"></span>
                  <span>{selectedPost.readTime}</span>
                </div>
                
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-10 leading-[1.1] tracking-tight drop-shadow-lg">
                  {selectedPost.title}
                </h2>
                
                {/* HTML Content Rendered directly from Blog Data */}
                <div 
                  className="font-light text-base sm:text-xl leading-relaxed text-gray-300 [&>h3]:text-2xl [&>h3]:sm:text-3xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-12 [&>h3]:mb-6 [&>h3]:border-l-4 [&>h3]:border-teal-500 [&>h3]:pl-5 [&>p]:mb-6 [&>strong]:text-white [&>strong]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }} 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
}