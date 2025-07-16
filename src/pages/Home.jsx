import React from "react";
import Header from "../components/Header";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/anas3.jpg"; // image ka path

const Home = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 px-6 py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white text-center min-h-[80vh] flex items-center justify-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">

          {/* Profile Image with Glow */}
          <img
            src={profileImage}
            alt="Anas Khan"
            className="w-80 h-80 border-4 border-teal-400 shadow-2xl mb-8 object-cover rounded-xl glow-frame"
          />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              ANAS KHAN
            </span>
          </h1>

          <div className="text-xl sm:text-2xl text-teal-400 mt-4 font-mono h-10">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "MongoDB • Express • React • Node",
                "Full-Stack Web Developer"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>

          <p className="text-lg sm:text-xl text-gray-300 mt-6">
            I build fast, full-stack web applications using the MERN stack.
            Let's bring your ideas to life with clean, scalable code.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
