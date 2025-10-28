import React from "react";
import { BsArrowDown } from "react-icons/bs";
import homeImg from "./public/home-img.jpg";
import { Navbar } from "./Navbar";
import { Technologies } from "./techstacks";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";

export function HomeHero() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar />
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${homeImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInUp">
            Nexora's Sports Construction
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 animate-fadeInDown">
            Your ultimate destination for premier sports court construction. We
            build the courts where champions train and communities play.
          </p>

          <button className="bg-gradient-to-r from-cyan-400 to-sky-500 text-black font-semibold px-8 py-3 rounded-xl text-lg transition-transform duration-300 shadow-lg hover:scale-105 hover:shadow-cyan-400/40" onClick={()=>navigate("/quotation")}>
            Generate Quotation
          </button>
        </div>

        {/* Bouncing Arrow */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
          <BsArrowDown size={40} color="#fff" />
        </div>
      </section>
      <Technologies />
      <Footer />
    </>
  );
}
