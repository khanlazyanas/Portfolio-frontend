import React, { useState } from "react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { toast } from 'react-toastify';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://anaskhanportfolio-1.onrender.com/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        toast.success("Thanks for your message! I'll be in touch soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again!");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Error sending message. Please try again later.");
    }
  };

  return (
    <section className="pt-28 px-6 md:px-20 pb-20 bg-[#fdf6e3] text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact</h2>
        <div className="h-1 w-24 bg-red-500 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
        <div className="bg-white shadow-md rounded-xl px-6 py-5 flex items-center gap-4 w-full max-w-sm justify-center border">
          <FiPhone className="text-2xl text-red-500" />
          <span className="text-gray-700 font-medium">+91-8429755694</span>
        </div>
        <div className="bg-white shadow-md rounded-xl px-6 py-5 flex items-center gap-4 w-full max-w-sm justify-center border">
          <FiMapPin className="text-2xl text-red-500" />
          <span className="text-gray-700 font-medium">Lucknow, India</span>
        </div>
        <div className="bg-white shadow-md rounded-xl px-6 py-5 flex items-center gap-4 w-full max-w-sm justify-center border">
          <FiMail className="text-2xl text-red-500" />
          <span className="text-gray-700 font-medium">anaskhan995620@email.com</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="md:col-span-2 bg-white shadow-lg p-8 rounded-xl border">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Get In Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Enter your message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-white shadow-lg p-8 rounded-xl border text-center flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Message Me</h3>
            <p className="text-gray-600 text-sm mb-8">
              Need a good laugh or just want to chat? Reach out before my cat
              takes over this page. 😸
            </p>
          </div>
          <div className="flex justify-center space-x-4 text-xl text-gray-500 mt-4">
            <a href="https://www.linkedin.com/in/khan-anas-a26b66364/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/khanlazyanas/anaskhanportfolio" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://instagram.com/khan_anas842" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/918429755694" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.youtube.com/@khananas2318" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
