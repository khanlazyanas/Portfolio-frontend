import React, { useState } from "react";
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
} from "lucide-react"; // Make sure lucide-react is imported
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
        position: "bottom-right"
      });
    } catch {
      toast.error("Network error. Please try later.", { theme: "dark" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative bg-[#050505] text-white px-6 sm:px-10 md:px-20 lg:px-28 pt-32 pb-44 overflow-hidden selection:bg-teal-500/30">
      
      {/* 🌟 Premium Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Subtle Texture Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.1] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================= HEADER ================= */}
        <header className="mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs uppercase tracking-widest text-gray-300 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Contact Me
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-6">
            Let’s build something <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              meaningful together.
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            Have a project, idea, or collaboration in mind? I’m always open to discussing new opportunities and building scalable digital products.
          </p>
        </header>

        {/* ================= CONTENT GRID ================= */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* 📱 LEFT: Contact Info & Socials (Col Span 5) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              {/* Info Card 1: Phone */}
              <a href="tel:+918429755694" className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-teal-500/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Call Me</p>
                  <p className="text-white font-medium">+91 84297 55694</p>
                </div>
              </a>

              {/* Info Card 2: Email */}
              <a href="mailto:anaskhan995620@gmail.com" className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-teal-500/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email Me</p>
                  <p className="text-white font-medium">anaskhan995620@gmail.com</p>
                </div>
              </a>

              {/* Info Card 3: Location */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white font-medium">Lucknow, India (IST)</p>
                </div>
              </div>
            </div>

            {/* Socials Box */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-6 font-semibold">
                Follow my journey
              </p>
              <div className="flex flex-wrap gap-4 text-xl">
                <SocialIcon href="https://linkedin.com/in/khan-anas-a26b66364/" icon={<FaLinkedin />} hover="hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30" />
                <SocialIcon href="https://github.com/khanlazyanas/anaskhanportfolio" icon={<FaGithub />} hover="hover:text-white hover:bg-white/10 hover:border-white/30" />
                <SocialIcon href="https://instagram.com/khan_anas842" icon={<FaInstagram />} hover="hover:text-[#E1306C] hover:bg-[#E1306C]/10 hover:border-[#E1306C]/30" />
                <SocialIcon href="https://wa.me/918429755694" icon={<FaWhatsapp />} hover="hover:text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/30" />
                <SocialIcon href="https://youtube.com/@khananas2318" icon={<FaYoutube />} hover="hover:text-[#FF0000] hover:bg-[#FF0000]/10 hover:border-[#FF0000]/30" />
              </div>
            </div>

          </div>

          {/* 📝 RIGHT: Glassmorphism Form (Col Span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-[#111827]/40 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
              
              {/* Decorative Corner Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-500/20 blur-[60px] rounded-full pointer-events-none"></div>

              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-gray-400 text-sm mb-8">Fill out the form below and I'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name Input */}
                <div className="relative group">
                  <User className="absolute left-4 top-[18px] text-gray-500 group-focus-within:text-teal-400 transition-colors" size={18} />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    required
                    className="w-full bg-[#050505]/50 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/50 transition-all"
                  />
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <Mail className="absolute left-4 top-[18px] text-gray-500 group-focus-within:text-teal-400 transition-colors" size={18} />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full bg-[#050505]/50 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/50 transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-[18px] text-gray-500 group-focus-within:text-teal-400 transition-colors" size={18} />
                  <textarea
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-[#050505]/50 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-teal-400/50 focus:ring-1 focus:ring-teal-400/50 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] disabled:opacity-60 active:scale-[0.98] mt-4"
                >
                  {sending ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Reusable Social Icon Component
function SocialIcon({ href, icon, hover }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className={`p-3.5 rounded-xl border border-white/10 bg-white/[0.02] text-gray-400 backdrop-blur-sm transition-all duration-300 ${hover} hover:-translate-y-1 shadow-sm`}
    >
      {icon}
    </a>
  );
}

export default Contact;