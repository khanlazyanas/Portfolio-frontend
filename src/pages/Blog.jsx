import { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaArrowRight, FaTags } from "react-icons/fa";

// Dummy Blog Data (Aap isko baad me apne real content se change kar lena)
const blogData = [
  {
    id: 1,
    title: "How I Built an AI-Powered Mock Interview System",
    excerpt: "A deep dive into the architecture, challenges, and technologies behind my latest project using React and modern AI tools.",
    date: "March 5, 2026",
    category: "Projects",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Balancing SSC CGL Prep with Software Development",
    excerpt: "Time management strategies I use to maintain coding skills while preparing for competitive exams without burning out.",
    date: "Feb 20, 2026",
    category: "Productivity",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Designing the Database for an Online Grocery Store",
    excerpt: "Understanding ER Diagrams and module structures for an efficient and scalable e-commerce management system.",
    date: "Feb 12, 2026",
    category: "Database",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Mastering Tailwind CSS & Framer Motion",
    excerpt: "Learn how to build stunning, animated, and responsive user interfaces quickly using these two powerful libraries.",
    date: "Jan 28, 2026",
    category: "Frontend",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories for the filter buttons
  const categories = ["All", ...new Set(blogData.map(post => post.category))];

  // Filter posts based on selected category
  const filteredPosts = activeCategory === "All" 
    ? blogData 
    : blogData.filter(post => post.category === activeCategory);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#030712] text-slate-300 font-inter min-h-screen overflow-hidden selection:bg-cyan-500/30 pb-24">
      
      {/* ===== HERO SECTION ===== */}
      <motion.section 
        initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="relative pt-40 pb-16 px-6 text-center"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

        <motion.div variants={fadeUp} className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-400 uppercase tracking-[0.25em] backdrop-blur-md">
            My Thoughts & Articles
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Discoveries</span>
          </h1>
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Writing about my journey in tech, project breakdowns, coding tips, and everything I learn along the way.
          </p>
        </motion.div>
      </motion.section>

      {/* ===== CATEGORY FILTER ===== */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 flex flex-wrap justify-center gap-4"
      >
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat 
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]" 
                : "bg-white/[0.03] text-slate-400 border border-white/10 hover:bg-white/[0.08] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.section>

      {/* ===== BLOG GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, i) => (
            <motion.article
              layout
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={post.id}
              className="group bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 text-cyan-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    <FaTags className="text-[10px]" /> {post.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5"><FaCalendarAlt /> {post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                  <span className="flex items-center gap-1.5"><FaClock /> {post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-400 font-light text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <button className="flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:text-cyan-300 transition-colors w-fit mt-auto">
                  Read Article <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No posts found for this category.
          </div>
        )}
      </section>

    </div>
  );
}