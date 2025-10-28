import React, { useState, useEffect, useRef } from "react";
import img1 from "./public/consultation.jpg";
import img2 from "./public/planning.webp";
import img3 from "./public/proposal.jpg";
import img4 from "./public/construction.jpg";
import img5 from "./public/handover.jpg";

export function Process() {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 5;
  const autoPlayRef = useRef(null);

  const steps = [
    {
      title: "Consultation & Discovery",
      description:
        "We begin with an in-depth consultation to understand your vision, requirements, and budget. Our team visits the site and collaborates with you to define project goals and expectations.",
      image: img1,
      points: [
        "Initial site assessment and evaluation",
        "Comprehensive requirements gathering",
        "Budget analysis and financial planning",
        "Preliminary timeline discussion",
      ],
    },
    {
      title: "Design & Planning",
      description:
        "Our experts translate your vision into architectural and structural blueprints while ensuring efficiency and regulatory compliance.",
      image: img2,
      points: [
        "Architectural visualization",
        "Engineering feasibility analysis",
        "Permit and documentation preparation",
        "Design approval from client",
      ],
    },
    {
      title: "Material Procurement",
      description:
        "We ensure top-quality materials at the best value through our trusted supplier network.",
      image: img3,
      points: [
        "Vendor selection and cost optimization",
        "Quality testing of materials",
        "Sustainable sourcing practices",
      ],
    },
    {
      title: "Construction & Execution",
      description:
        "Our team of professionals ensures flawless project execution adhering to safety and quality standards.",
      image: img4,
      points: [
        "On-site supervision and management",
        "Timely updates and reporting",
        "Strict quality control checks",
      ],
    },
    {
      title: "Final Handover",
      description:
        "We complete the project with detailed inspections and client walkthroughs before the official handover.",
      image: img5,
      points: [
        "Quality assurance and inspection",
        "Client satisfaction review",
        "Post-handover maintenance support",
      ],
    },
  ];

  // Move to next or previous step
  const nextStep = () => setCurrentStep((prev) => (prev + 1) % totalSteps);
  const prevStep = () =>
    setCurrentStep((prev) => (prev - 1 + totalSteps) % totalSteps);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(nextStep, 5000); 
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  // Progress bar width
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const step = steps[currentStep];

  return (
    <div
      className="bg-slate-300 py-8 md:py-16 px-4 md:px-8"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <section className="max-w-6xl mx-auto relative">
        <h1 className="text-center text-4xl md:text-5xl font-bold text-slate-800 mb-12">
          Our Proven Process for Flawless Execution
        </h1>

        <div className="w-full h-2 bg-slate-200 rounded-sm mb-12 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#2c5aa0] to-[#4a90e2] transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          {[...Array(totalSteps)].map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-10 h-10 border-2 rounded-full flex items-center justify-center font-bold cursor-pointer transition-all duration-300 bg-white text-slate-200 hover:border-[#4a90e2] hover:text-[#4a90e2] ${
                currentStep === index
                  ? "bg-[#2a324b] text-black"
                  : ""
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>

        <div className="relative min-h-[400px] transition-all duration-700 ease-in-out">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#2c5aa0] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Step {currentStep + 1}
              </span>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                {step.title}
              </h3>
              <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
                {step.description}
              </p>
              <ul className="space-y-2 text-slate-600">
                {step.points.map((point, i) => (
                  <li
                    key={i}
                    className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-[#2c5aa0] before:font-bold"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center px-2">
          <button
            onClick={prevStep}
            className="bg-[#2c5aa0] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#1e3d6f] hover:scale-110 transition-all duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>

          <div className="text-lg font-bold text-slate-700">
            <span className="text-[#2c5aa0] text-xl">{currentStep + 1}</span>/
            {totalSteps}
          </div>

          <button
            onClick={nextStep}
            className="bg-[#2c5aa0] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#1e3d6f] hover:scale-110 transition-all duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
