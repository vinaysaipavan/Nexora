import { useEffect, useRef } from "react";
import { Navbar } from "./navbar";
import { useLocation } from "react-router-dom";

export function Home() {
  const typedTextRef = useRef(null);
  const location = useLocation();

  // Handle hash navigation when component mounts or hash changes
  useEffect(() => {
    const handleHashNavigation = () => {
      if (location.hash) {
        const elementId = location.hash.replace("#", "");
        const element = document.getElementById(elementId);

        if (element) {
          // Small timeout to ensure the DOM is ready
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    handleHashNavigation();

    window.addEventListener("hashchange", handleHashNavigation);

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, [location.hash]);

  // Typed text effect
  useEffect(() => {
    const typedText = typedTextRef.current;
    if (!typedText) return;

    const phrases = [
      "Empowering Innovation in Apps, Games, AI & Beyond",
      "Crafting Digital Experiences that Inspire",
      "Building Smart Solutions with AI, IoT, and Automation",
      "Designing Future-Ready Software for a Smarter World",
    ];

    let i = 0,
      j = 0,
      isDeleting = false,
      speed = 80,
      timeoutId;

    function typeEffect() {
      const current = phrases[i];
      typedText.textContent = current.substring(0, j);

      if (!isDeleting && j < current.length) {
        j++;
        speed = 80;
      } else if (isDeleting && j > 0) {
        j--;
        speed = 40;
      } else if (!isDeleting && j === current.length) {
        isDeleting = true;
        speed = 1500;
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % phrases.length;
        speed = 300;
      }

      timeoutId = setTimeout(typeEffect, speed);
    }

    typeEffect();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative w-full h-screen overflow-hidden" id="home">
        <video
          src="./bg-video.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-blue-900/20 to-teal-900/30 backdrop-blur-[1px]" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 lg:mb-6">
            Nexora Group
          </h1>
          <p className="text-lg sm:text-xl text-beige tracking-wider lg:tracking-[0.3em] px-2 max-w-4xl">
            <span
              ref={typedTextRef}
              className="min-h-[1.5em] inline-block text-emerald-200"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
