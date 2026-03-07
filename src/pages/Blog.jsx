import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaClock, FaArrowRight, FaTags, FaTimes } from "react-icons/fa";

// Fully Professional Blog Data
const blogData = [
  {
    id: 1,
    title: "Engineering 'Quiet Luxury' in Healthcare UIs",
    excerpt: "How I built the WeightLoss-Doc platform with an ultra-premium aesthetic and interactive biometric tools.",
    content: `
      <p>Building clinical web applications requires more than just functionality; it requires establishing trust through design. For the <strong>WeightLoss-Doc</strong> platform, the goal was to create a 'Silicon Valley' aesthetic that felt premium, secure, and intuitive.</p>
      <br/>
      <h3 class="text-xl font-bold text-teal-400 mb-2">The 'Quiet Luxury' Design Language</h3>
      <p>I utilized Tailwind CSS v4 and Framer Motion to engineer a calm, distraction-free environment. By using deep, rich backgrounds (#050505) paired with subtle teal and blue glows, the UI avoids overwhelming the user while still feeling highly modern.</p>
      <br/>
      <h3 class="text-xl font-bold text-teal-400 mb-2">Handling Biometric Data</h3>
      <p>One of the core features was the interactive BMI diagnostic tool. The challenge was making real-time health data processing feel instant and visually engaging without sacrificing accuracy. I used React state management to instantly reflect biometric calculations, providing users with immediate, highly personalized feedback.</p>
    `,
    date: "March 2, 2026",
    category: "UI/UX & Frontend",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Bridging Business & Code: Why Basic Accounting Matters",
    excerpt: "How understanding BBA fundamentals like Basic Accounting makes you a better software developer for enterprise applications.",
    content: `
      <p>There is a common misconception that software engineers only need to understand code. However, when building enterprise-grade applications—like an automobile sales system or an e-commerce platform—understanding business logic is just as critical.</p>
      <br/>
      <h3 class="text-xl font-bold text-teal-400 mb-2">The Developer-Business Gap</h3>
      <p>During my BBA studies, particularly while creating presentations on <strong>Basic Accounting</strong>, I realized how data flows in a real-world business. Concepts like ledgers, trial balances, and inventory valuation aren't just paper concepts; they are the exact logic needed to build solid backend modules.</p>
      <br/>
      <h3 class="text-xl font-bold text-teal-400 mb-2">Applying it to E-Commerce</h3>
      <p>When I built the order and payment modules for the UrbanGreens Grocery Platform, my accounting knowledge helped me structure the database to correctly handle transaction statuses, calculate tax, and manage inventory deductions without data anomalies.</p>
    `,
    date: "Feb 24, 2026",
    category: "Business Logic",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Architecting an AI-Powered Mock Interview System",
    excerpt: "A deep dive into the state management, API latency reduction, and AI integration behind my latest MERN stack project.",
    content: `
      <p>The AI Mock Interview platform was engineered to simulate real-world technical interviews. It processes a user's resume, generates context-aware questions, and evaluates answers dynamically.</p>
      <br/>
      <h3 class="text-xl font-bold text-teal-400 mb-2">System Architecture</h3>
      <p>Built on the MERN stack, the frontend leverages React for a seamless, real-time interface, while the Node.js/Express backend handles secure JWT authentication and heavy AI API communications.</p>
      <br/>
      <h3 class="text-xl font-bold text-teal-400 mb-2">Overcoming Latency</h3>
      <p>The biggest technical hurdle was latency. When an AI processes an answer and generates feedback, the user shouldn't be left staring at a loading screen. I implemented optimistic UI updates and asynchronous processing streams to ensure the conversation felt as natural as speaking to a human recruiter.</p>
    `,
    date: "Feb 15, 2026",
    category: "Artificial Intelligence",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Structuring Databases for Scalable E-Commerce",
    excerpt: "How I designed the Entity-Relationship (ER) diagrams and normalized data structures for UrbanGreens.",
    content: `
      <p>A beautiful frontend is useless without a rock-solid backend. For the UrbanGreens grocery commerce platform, the primary focus was designing a normalized, scalable database schema capable of handling concurrent transactions.</p>
      <br/>
      <h3 class="text-xl font-bold text-teal-400 mb-2">Database Design Phase</h3>
      <p>Before writing a single line of backend code, I mapped out comprehensive ER Diagrams. Understanding exactly how a 'Customer' entity relates to an 'Order', and how an 'Order' maps to multiple 'Products' via a junction table, was crucial.</p>
      <br/>
      <h3 class="text-xl font-bold text-teal-400 mb-2">Performance Considerations</h3>
      <p>By properly indexing frequently queried fields (like product categories and user emails) and structuring the Razorpay payment workflows securely, the system was optimized for both speed and data integrity.</p>
    `,
    date: "Jan 30, 2026",
    category: "Backend & Database",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = ["All", ...new Set(blogData.map(post => post.category))];
  const filteredPosts = activeCategory === "All" ? blogData : blogData.filter(post => post.category === activeCategory);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative bg-[#050505] text-white min-h-screen overflow-hidden selection:bg-teal-500/30 pt-32 pb-44 px-6 sm:px-10 md:px-20 lg:px-28 font-inter">
      
      {/* 🌟 Premium Background Glows (Matched with Projects.jsx) */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Subtle Texture Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.1] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= HEADER ================= */}
        <motion.header 
          initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }} 
          className="mb-24 max-w-3xl text-center md:text-left mx-auto md:mx-0"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs uppercase tracking-widest text-gray-300 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Engineering Journal
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-6 text-white">
            Insights & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              technical discoveries.
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl font-medium mx-auto md:mx-0">
            Writing about software architecture, database design, premium UI engineering, and the logic behind scalable applications.
          </motion.p>
        </motion.header>

        {/* ================= CATEGORY FILTER ================= */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} 
          className="mb-16 flex flex-wrap justify-center md:justify-start gap-3"
        >
          {categories.map((cat, index) => (
            <button 
              key={index} 
              onClick={() => setActiveCategory(cat)} 
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-teal-500/20 text-teal-300 border border-teal-500/50 shadow-[0_0_20px_rgba(20,184,166,0.2)]" 
                  : "bg-white/[0.03] text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.section>

        {/* ================= BLOG CARDS GRID ================= */}
        <section>
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {filteredPosts.map((post) => (
              <motion.article 
                layout 
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }} 
                key={post.id} 
                className="group relative bg-[#111827]/40 border border-white/10 rounded-[2rem] overflow-hidden hover:border-white/20 hover:shadow-[0_0_40px_rgba(45,212,191,0.08)] transition-all duration-500 flex flex-col cursor-pointer backdrop-blur-sm" 
                onClick={() => setSelectedPost(post)}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10 opacity-80" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out opacity-80 group-hover:opacity-100" 
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <span className="flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/10 text-teal-300 text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                      <FaTags size={10} /> {post.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 sm:p-10 flex flex-col flex-grow relative z-20 -mt-10">
                  <div className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5"><FaCalendarAlt /> {post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                    <span className="flex items-center gap-1.5"><FaClock /> {post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 font-medium text-sm leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <span className="flex items-center gap-2 text-sm font-bold text-teal-400 group-hover:text-teal-300 transition-colors w-fit mt-auto">
                    Read Case Study <FaArrowRight className="group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

      </div>

      {/* ================= FULL BLOG POPUP (MODAL) ================= */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 20, opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#050505] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-[0_0_80px_rgba(20,184,166,0.15)] relative"
            >
              {/* Subtle Modal Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-teal-500/10 blur-[100px] pointer-events-none"></div>

              {/* Modal Header Image */}
              <div className="relative h-56 sm:h-72 shrink-0">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white p-3 rounded-full backdrop-blur-md transition-all duration-300"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 sm:p-12 overflow-y-auto custom-scrollbar relative z-10">
                <div className="flex items-center gap-3 text-[10px] sm:text-xs font-bold text-teal-500 mb-6 uppercase tracking-[0.2em]">
                  <span>{selectedPost.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50"></span>
                  <span>{selectedPost.category}</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 leading-tight tracking-tight">
                  {selectedPost.title}
                </h2>
                
                {/* Styled Content Area */}
                <div 
                  className="text-gray-300 font-medium leading-loose space-y-6 text-base sm:text-lg"
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