import React, { useState } from "react";
import { motion } from "framer-motion";
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

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

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
        style: { background: "#111827", color: "#fff", border: "1px solid rgba(255,255,255,0.1)" }
      });
    } catch {
      toast.error("Network error. Please try later.", { 
        theme: "dark",
        style: { background: "#111827", color: "#fff", border: "1px solid rgba(255,255,255,0.1)" }
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
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-[#050505] text-white px-6 sm:px-10 md:px-20 lg:px-28 pt-32 pb-44 overflow-hidden selection:bg-teal-500/30 font-sans">
      
      {/* 🌟 Ultra-Premium Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      
      {/* Subtle Texture Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.15] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================= HEADER ================= */}
        <motion.header 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="mb-24 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] sm:text-xs uppercase tracking-widest text-teal-400 mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(45,212,191,0.05)] cursor-default transition-transform hover:scale-105">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Contact Me
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6">
            Let’s build something <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              meaningful together.
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
            Have a project, idea, or collaboration in mind? I’m always open to discussing new opportunities and engineering scalable digital products.
          </p>
        </motion.header>

        {/* ================= CONTENT GRID ================= */}
        <motion.div 
          variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-16 items-start"
        >

          {/* 📱 LEFT: Contact Info & Socials (Col Span 5) */}
          <motion.div variants={fadeUp} className="lg:col-span-5 space-y-10">
            
            <div className="space-y-5">
              {/* Info Card 1: Phone */}
              <a href="tel:+918429755694" className="flex items-center gap-5 p-6 rounded-3xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 hover:bg-[#111111] hover:border-teal-500/30 transition-all duration-500 group shadow-lg hover:shadow-[0_15px_40px_-15px_rgba(45,212,191,0.2)]">
                <div className="w-14 h-14 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all duration-500">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-1.5 font-bold">Call Me</p>
                  <p className="text-white font-semibold tracking-wide">+91 84297 55694</p>
                </div>
              </a>

              {/* Info Card 2: Email */}
              <a href="mailto:anaskhan995620@gmail.com" className="flex items-center gap-5 p-6 rounded-3xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 hover:bg-[#111111] hover:border-blue-500/30 transition-all duration-500 group shadow-lg hover:shadow-[0_15px_40px_-15px_rgba(59,130,246,0.2)]">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-1.5 font-bold">Email Me</p>
                  <p className="text-white font-semibold tracking-wide">anaskhan995620@gmail.com</p>
                </div>
              </a>

              {/* Info Card 3: Location */}
              <div className="flex items-center gap-5 p-6 rounded-3xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 hover:bg-[#111111] hover:border-purple-500/30 transition-all duration-500 group shadow-lg hover:shadow-[0_15px_40px_-15px_rgba(168,85,247,0.2)]">
                <div className="w-14 h-14 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-500">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-1.5 font-bold">Location</p>
                  <p className="text-white font-semibold tracking-wide">Lucknow, India (IST)</p>
                </div>
              </div>
            </div>

            {/* Socials Box */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-6 font-bold">
                Follow my journey
              </p>
              <div className="flex flex-wrap gap-4 text-xl">
                <SocialIcon href="https://linkedin.com/in/khan-anas-a26b66364/" icon={<FaLinkedin />} hover="hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/50" />
                <SocialIcon href="https://github.com/khanlazyanas/anaskhanportfolio" icon={<FaGithub />} hover="hover:text-white hover:bg-white/10 hover:border-white/50" />
                <SocialIcon href="https://instagram.com/khan_anas842" icon={<FaInstagram />} hover="hover:text-[#E1306C] hover:bg-[#E1306C]/10 hover:border-[#E1306C]/50" />
                <SocialIcon href="https://wa.me/918429755694" icon={<FaWhatsapp />} hover="hover:text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/50" />
                <SocialIcon href="https://youtube.com/@khananas2318" icon={<FaYoutube />} hover="hover:text-[#FF0000] hover:bg-[#FF0000]/10 hover:border-[#FF0000]/50" />
              </div>
            </div>

          </motion.div>

          {/* 📝 RIGHT: Ultra-Premium Glassmorphism Form (Col Span 7) */}
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <div className="bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] relative overflow-hidden group/form">
              
              {/* Decorative Background Glows inside Form */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-teal-500/10 blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 opacity-50 group-hover/form:opacity-100"></div>
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 opacity-50 group-hover/form:opacity-100"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Send a Message</h3>
                <p className="text-gray-400 text-sm mb-10 font-medium">Fill out the form below and I'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Input */}
                  <div className="relative group">
                    <User className="absolute left-5 top-[20px] text-gray-500 group-focus-within:text-teal-400 transition-colors duration-300" size={20} />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      required
                      className="w-full bg-[#111111]/80 border border-white/5 rounded-2xl pl-14 pr-5 py-5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-[#151515] focus:ring-4 focus:ring-teal-500/10 transition-all duration-300"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <Mail className="absolute left-5 top-[20px] text-gray-500 group-focus-within:text-teal-400 transition-colors duration-300" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className="w-full bg-[#111111]/80 border border-white/5 rounded-2xl pl-14 pr-5 py-5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-[#151515] focus:ring-4 focus:ring-teal-500/10 transition-all duration-300"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="relative group">
                    <MessageSquare className="absolute left-5 top-[20px] text-gray-500 group-focus-within:text-teal-400 transition-colors duration-300" size={20} />
                    <textarea
                      name="message"
                      rows="5"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      className="w-full bg-[#111111]/80 border border-white/5 rounded-2xl pl-14 pr-5 py-5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-[#151515] focus:ring-4 focus:ring-teal-500/10 transition-all duration-300 resize-none custom-scrollbar"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold py-5 rounded-2xl transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(45,212,191,0.5)] disabled:opacity-70 mt-6"
                  >
                    {sending ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={18} className="transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

// Reusable Social Icon Component with enhanced hover states
function SocialIcon({ href, icon, hover }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className={`p-4 rounded-2xl border border-white/5 bg-[#0a0a0a]/80 text-gray-400 backdrop-blur-md transition-all duration-300 ${hover} hover:-translate-y-1.5 shadow-lg hover:shadow-xl flex items-center justify-center`}
    >
      {icon}
    </a>
  );
}

export default Contact;