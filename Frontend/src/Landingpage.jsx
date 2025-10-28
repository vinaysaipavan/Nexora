import "./Landingpage.css";
import gsap from "gsap";
import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import videofile from "./public/video.mp4";

import defaultImage from "./public/galaxy.jpg";
import technologyImage from "./public/technology.jpg";
import constructionImage from "./public/construction.jpg";

gsap.registerPlugin(ScrollTrigger);

export function Landingpage({ setCurrentsite }) {
  const [bgImage, setBgImage] = useState(defaultImage);
  const bgRef = useRef(null);
  const videoRef = useRef(null); // 👈 ref for controlling video playback

  // text animations
  useGSAP(() => {
    gsap.from("#head", { y: -50, opacity: 0, duration: 1, delay: 0.5 });
    gsap.from("#para", { y: -30, opacity: 0, duration: 1, delay: 0.8 });
  }, []);

  // zoom-in background and pause video
  const animateBgIn = (image) => {
    setBgImage(image);
    gsap.fromTo(
      bgRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // pause video smoothly
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // zoom-out background and resume video
  const animateBgOut = () => {
    setBgImage(defaultImage);
    gsap.fromTo(
      bgRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // resume video playback
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className="relative flex flex-col h-screen w-full overflow-hidden text-center">
      {/* Background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
        style={{
          backgroundImage: `url(${bgImage})`,
          transformOrigin: "center center",
        }}
      ></div>

      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        src={videofile}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🌟 Content Section */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full gap-6">
        {/* Logo and Title */}
        <div className="flex flex-col items-center space-y-4 mt-2">
          <img
            src="./Logo.png"
            alt="Nexora Logo"
            className="w-24 sm:w-32 md:w-40 object-contain drop-shadow-lg"
          />
          <h1
            id="head"
            className="text-slate-100 text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold drop-shadow-md"
          >
            Nexora Group
          </h1>
          <p
            id="para"
            className="text-slate-50 text-sm sm:text-md  lg:text-[30px]"
          >
            <div>We work across Technology and Construction.</div><br />Choose your domain to explore our expertise.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-14 w-full px-6">
          {/* Technology */}
          <button
            className="text-white border-2 border-slate-200 px-8 py-4 rounded-lg text-xl sm:text-2xl font-semibold
               hover:bg-slate-200 hover:text-slate-800 transition-all duration-500
               w-[80%] sm:w-[60%] md:w-[45%] lg:w-[35%] xl:w-[25%]"
            onMouseEnter={() => animateBgIn(technologyImage)}
            onMouseLeave={animateBgOut}
            onClick={() => setCurrentsite("tech")}
          >
            Technology
          </button>

          {/* Construction */}
          <button
            className="text-white border-2 border-slate-200 px-8 py-4 rounded-lg text-xl sm:text-2xl font-semibold
               hover:bg-slate-200 hover:text-slate-800 transition-all duration-500
               w-[80%] sm:w-[60%] md:w-[45%] lg:w-[35%] xl:w-[25%]"
            onMouseEnter={() => animateBgIn(constructionImage)}
            onMouseLeave={animateBgOut}
            onClick={() => setCurrentsite("construct")}
          >
            Construction
          </button>
        </div>
      </div>
    </section>
  );
}
