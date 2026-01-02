import React, { useState } from "react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
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

    setForm({ name: "", email: "", message: "" });
    toast.success("Thanks for reaching out. I’ll get back to you soon.");

    try {
      const res = await fetch(
        "https://anaskhanportfolio.onrender.com/api/message",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) toast.error("Something went wrong. Please try again.");
    } catch {
      toast.error("Network error. Please try later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative bg-black text-white px-6 sm:px-10 md:px-20 lg:px-28 pt-40 pb-44">
      <div className="max-w-7xl mx-auto">

        {/* Editorial Header */}
        <header className="mb-32 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gray-500">
            Contact
          </p>

          <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Let’s build something
            <br />
            meaningful together.
          </h2>

          <p className="mt-8 text-gray-400 text-sm sm:text-base leading-relaxed">
            Have a project, idea, or collaboration in mind? I’m always open to
            discussing new opportunities and meaningful digital products.
          </p>
        </header>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Form */}
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
              Send a message
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full bg-black border border-gray-700 px-4 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full bg-black border border-gray-700 px-4 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400"
              />

              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="w-full bg-black border border-gray-700 px-4 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 resize-none"
              />

              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-4 text-sm font-medium text-white transition-all duration-300 hover:gap-6 disabled:opacity-50"
              >
                {sending ? "Sending…" : "Send Message"}
                <span className="text-xl">→</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
              Contact details
            </p>

            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-center gap-3">
                <FiPhone /> <span>+91 84297 55694</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail /> <span>anaskhan995620@email.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin /> <span>Lucknow, India</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-6 text-xl text-gray-400 pt-6">
              <a href="https://www.linkedin.com/in/khan-anas-a26b66364/" target="_blank" rel="noreferrer" className="hover:text-white"><FaLinkedin /></a>
              <a href="https://github.com/khanlazyanas/anaskhanportfolio" target="_blank" rel="noreferrer" className="hover:text-white"><FaGithub /></a>
              <a href="https://instagram.com/khan_anas842" target="_blank" rel="noreferrer" className="hover:text-white"><FaInstagram /></a>
              <a href="https://wa.me/918429755694" target="_blank" rel="noreferrer" className="hover:text-white"><FaWhatsapp /></a>
              <a href="https://www.youtube.com/@khananas2318" target="_blank" rel="noreferrer" className="hover:text-white"><FaYoutube /></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
