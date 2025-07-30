import React from "react";
import Header from "../components/Header";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/anas3.jpg";

// Client images
import client1 from "../assets/saquibansari.jpg";
import client2 from "../assets/Iltaaf.jpg";
import client3 from "../assets/umar.jpg";
import client4 from "../assets/asjad.jpg";
import client5 from "../assets/abubakar1.jpg";
import client6 from "../assets/saquib1.jpg";

// Testimonials data
const testimonials = [
  {
    name: "Saquib Ansari",
    image: client1,
    quote: "Anas delivered our project ahead of schedule with clean code and amazing UI. Highly recommended!",
    rating: 5
  },
  {
    name: "Mohammad Iltaf",
    image: client2,
    quote: "Extremely professional and skilled. My React app now performs twice as fast.",
    rating: 4
  },
  {
    name: "Umar Iraqui",
    image: client3,
    quote: "From backend to frontend, everything was top-notch. Communication was smooth and clear!",
    rating: 4
  },
  {
    name: "Asjad Khan",
    image: client4,
    quote: "I loved working with Anas! He turned my vision into a working product seamlessly.",
    rating: 3
  },
  {
    name: "Abubakar",
    image: client5,
    quote: "Anas is a MERN magician! I’ll definitely hire him again for my next startup.",
    rating: 5
  },
  {
    name: "Mohammad Saquib",
    image: client6,
    quote: "Highly creative and always available for support. My go-to dev for anything MERN!",
    rating: 4
  }
];

const Home = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 px-6 py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white text-center min-h-[80vh] flex items-center justify-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
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

      {/* Testimonials Section */}
      <section className="bg-gray-950 py-20 text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          💬 What My Clients Say
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((client, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-2xl hover:shadow-teal-500/50 transition duration-300 text-center"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-20 h-20 rounded-full border-4 border-teal-400 mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold mb-1">{client.name}</h4>
              {client.rating >= 3 && (
                <div className="text-yellow-400 mb-2 text-lg">
                  {"⭐".repeat(client.rating)}
                </div>
              )}
              <p className="text-gray-300 italic">“{client.quote}”</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
