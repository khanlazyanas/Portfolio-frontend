import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaClock, FaArrowRight, FaTags, FaTimes } from "react-icons/fa";

// ================= FULLY PROFESSIONAL BLOG DATA =================
const blogData = [
  {
    id: 1,
    title: "Architecting NEXPOS: Next-Gen Enterprise Retail SaaS",
    excerpt: "How I engineered a scalable Point of Sale system using Next.js, Next-Auth, MongoDB, and Razorpay.",
    content: `
      <p class="text-gray-300 leading-relaxed mb-6 text-lg">Building an enterprise-grade retail management system requires absolute precision, speed, and real-time data sync. For <strong>NEXPOS</strong>, the goal was to deliver a 'Silicon Valley' aesthetic while handling complex inventory logic.</p>
      
      <h3 class="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-teal-500 pl-4">The Next.js App Router Advantage</h3>
      <p class="text-gray-300 leading-relaxed mb-6">Transitioning to the Next.js App Router allowed me to leverage server components, significantly reducing the JavaScript payload sent to the client. This made the dashboard load instantly, which is critical for fast-paced retail billing environments.</p>
      
      <h3 class="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-teal-500 pl-4">Security & RBAC with Next-Auth</h3>
      <p class="text-gray-300 leading-relaxed mb-6">In a POS system, cashiers and admins have very different permissions. I implemented strict Role-Based Access Control (RBAC) using <strong>Next-Auth</strong>. By decoding sessions on the server side, the system securely isolates administrative analytics from the standard billing interface.</p>

      <h3 class="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-teal-500 pl-4">Real-Time Dashboards</h3>
      <p class="text-gray-300 leading-relaxed mb-6">To visualize sales data, I integrated <strong>Recharts</strong>, transforming raw MongoDB aggregation pipelines into beautiful, interactive, and actionable charts for store owners.</p>
    `,
    date: "May 15, 2026",
    category: "Architecture & Next.js",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Building BIZFLOW: Multi-Tenant SaaS on the MERN Stack",
    excerpt: "Deep dive into the backend architecture of Bizflow, featuring JWT, OAuth 2.0, and automated cron jobs.",
    content: `
      <p class="text-gray-300 leading-relaxed mb-6 text-lg"><strong>BIZFLOW</strong> is an enterprise B2B SaaS platform designed to manage workspaces and invoicing. Building a multi-tenant architecture on the MERN stack presents unique backend challenges, primarily around data isolation and security.</p>
      
      <h3 class="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-blue-500 pl-4">Advanced Security Protocols</h3>
      <p class="text-gray-300 leading-relaxed mb-6">To ensure enterprise-grade security, I implemented a hybrid authentication model. Users can log in seamlessly via <strong>Google OAuth 2.0</strong> or use a Passwordless Magic Link (OTP). All session tokens are strictly stored in cross-domain HTTP-only cookies to prevent XSS attacks.</p>
      
      <h3 class="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-blue-500 pl-4">Data Lifecycle & Cron Jobs</h3>
      <p class="text-gray-300 leading-relaxed mb-6">In SaaS, deleting data accidentally can be catastrophic. I designed a 'Soft Delete' architecture with a built-in Recycle Bin. To maintain database health, I wrote automated <strong>Node.js Cron Jobs</strong> that permanently wipe deleted data after 30 days, keeping the MongoDB clusters lean and performant.</p>
    `,
    date: "April 28, 2026",
    category: "Backend & Security",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
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
    id: 4,
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

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

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
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative bg-[#050505] text-white min-h-screen overflow-hidden selection:bg-teal-500/30 pt-32 pb-44 px-6 sm:px-10 md:px-20 lg:px-28 font-sans">
      
      {/* 🌟 Ultra-Premium Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Subtle Texture Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.15] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= HEADER ================= */}
        <motion.header 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants} 
          className="mb-20 max-w-3xl text-center md:text-left mx-auto md:mx-0"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] sm:text-xs uppercase tracking-widest text-teal-400 mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(45,212,191,0.05)]">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Engineering Journal
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6 text-white">
            Insights & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              technical discoveries.
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl font-medium mx-auto md:mx-0">
            Writing deep dives into software architecture, database design, full-stack security, and the business logic behind scalable SaaS applications.
          </motion.p>
        </motion.header>

        {/* ================= CATEGORY FILTER ================= */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} 
          className="mb-16 flex flex-wrap justify-center md:justify-start gap-3"
        >
          {categories.map((cat, index) => (
            <button 
              key={index} 
              onClick={() => setActiveCategory(cat)} 
              className={`px-6 py-3 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-teal-500/20 text-teal-300 border border-teal-500/50 shadow-[0_0_20px_rgba(20,184,166,0.2)]" 
                  : "bg-[#111111] text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.section>

        {/* ================= BLOG CARDS GRID ================= */}
        <section>
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
            <AnimatePresence>
              {filteredPosts.map((post) => (
                <motion.article 
                  layout 
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }} 
                  key={post.id} 
                  className="group relative bg-[#0a0a0a]/80 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-white/20 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-700 flex flex-col cursor-pointer backdrop-blur-xl" 
                  onClick={() => setSelectedPost(post)}
                >
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>

                  {/* Image Section */}
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 opacity-90" />
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out opacity-70 group-hover:opacity-100" 
                    />
                    <div className="absolute top-6 left-6 z-20">
                      <span className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 text-teal-300 text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-[0.15em] shadow-lg">
                        <FaTags size={10} /> {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 sm:p-10 flex flex-col flex-grow relative z-20 -mt-12 bg-gradient-to-t from-[#050505] to-transparent">
                    <div className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">
                      <span className="flex items-center gap-1.5"><FaCalendarAlt /> {post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                      <span className="flex items-center gap-1.5"><FaClock /> {post.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 font-medium text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <span className="flex items-center gap-2 text-sm font-bold text-teal-400 group-hover:text-teal-300 transition-colors w-fit mt-auto bg-teal-500/10 px-5 py-2.5 rounded-full border border-teal-500/20">
                      Read Case Study <FaArrowRight className="group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </motion.article>
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
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }} 
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }} 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/80"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }} 
              animate={{ y: 0, opacity: 1, scale: 1 }} 
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-[0_0_80px_rgba(20,184,166,0.15)] relative"
            >
              {/* Subtle Modal Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-teal-500/10 blur-[120px] pointer-events-none"></div>

              {/* Modal Header Image */}
              <div className="relative h-48 sm:h-64 shrink-0">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 bg-black/50 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white p-3.5 rounded-full backdrop-blur-md transition-all duration-300 z-50 hover:rotate-90 hover:scale-110"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Modal Content - Custom Scrollbar applied inline via Tailwind arbitrary variants */}
              <div className="p-8 sm:p-12 overflow-y-auto relative z-10 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
                
                <div className="flex items-center gap-3 text-[10px] sm:text-xs font-bold text-teal-400 mb-6 uppercase tracking-[0.2em]">
                  <span>{selectedPost.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50"></span>
                  <span>{selectedPost.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50"></span>
                  <span>{selectedPost.readTime}</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-12 leading-[1.15] tracking-tight">
                  {selectedPost.title}
                </h2>
                
                {/* HTML Content Rendered directly from Blog Data */}
                <div 
                  className="font-medium text-base sm:text-lg"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }} 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}