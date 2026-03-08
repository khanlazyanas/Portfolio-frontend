import React from "react";
import { FileText, Eye, Download, FileBadge, Calendar, FileType } from "lucide-react";

const Resume = () => {
  return (
    <section className="relative bg-[#050505] text-white px-6 sm:px-10 md:px-20 lg:px-28 pt-32 pb-44 min-h-screen overflow-hidden selection:bg-teal-500/30">
      
      {/* 🌟 Premium Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Subtle Texture Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.1] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">

        {/* ================= HEADER ================= */}
        <header className="text-center mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs uppercase tracking-widest text-gray-300 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Curriculum Vitae
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-6">
            My Professional <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              Resume.
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Review my technical skills, engineering experience, and full-stack projects. Available in both PDF and DOCX formats.
          </p>
        </header>

        {/* ================= RESUME CARD ================= */}
        <div className="w-full max-w-3xl bg-[#111827]/40 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(45,212,191,0.1)]">
          
          {/* Decorative Corner Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal-500/20 blur-[60px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-teal-500/30"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            
            {/* Glowing Icon Box */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-teal-500/20 blur-xl rounded-full"></div>
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500">
                <FileBadge size={48} className="text-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]" />
              </div>
            </div>

            {/* Resume Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Anas_Khan_Resume</h3>
              <p className="text-gray-400 text-sm mb-6">Full-Stack MERN Software Engineer</p>

              {/* Meta Tags */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
                  <Calendar size={14} className="text-teal-400" /> Updated: Feb 2026
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
                  <FileType size={14} className="text-blue-400" /> 1 Page
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
                  <FileText size={14} className="text-purple-400" /> Ready to Print
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                
                {/* PDF Button (Primary) - FIX HERE */}
                <a
                  href="/Anas_Khan_CV6.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] active:scale-[0.98]"
                >
                  <Eye size={18} /> View PDF
                </a>

                {/* DOCX Button (Secondary) - FIX HERE */}
                <a
                  href="/Anas_Khan_CV5.docx"
                  download
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:border-white/20 active:scale-[0.98]"
                >
                  <Download size={18} /> Download DOCX
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;