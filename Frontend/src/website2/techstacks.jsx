import { useState } from "react";
import { GiShuttlecock } from "react-icons/gi";
import { PiCourtBasketball } from "react-icons/pi";
import { IoTennisballOutline } from "react-icons/io5";
import { FaPersonSwimming } from "react-icons/fa6";
import { IoIosFootball } from "react-icons/io";
import { MdOutlineSportsCricket } from "react-icons/md";
import { GiBasketballBasket } from "react-icons/gi";
import { TbBallVolleyball } from "react-icons/tb";
import { GiRunningShoe } from "react-icons/gi";
import { GiGymBag } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import React from "react";
import badminton from "./public/badminton.jpeg";
import pickle from "./public/pickleball.jpeg";
import tennis from "./public/tennis.jpeg";
import swim from "./public/swimming.jpeg";
import gym from "./public/gym.jpg";
import basket from "./public/basket.jpg";
import cricket from "./public/cricket.webp";
import foot from "./public/foot.jpg";
import volly from "./public/volly.jpeg";
import run from "./public/run.jpeg";

export function Technologies() {
  const [activeTab, setActiveTab] = useState("Indoor");
  const [hoverIndex, setHoverIndex] = useState(null);
  const [activePopup, setActivePopup] = useState(null);

  const techStacks = {
    Indoor: [
      { name: "Badminton court", icon: <GiShuttlecock size={40} />, sport: "badminton" },
      { name: "Pickle ball court", icon: <PiCourtBasketball size={40} />, sport: "pickleball" },
      { name: "Swimming", icon: <FaPersonSwimming size={40} />, sport: "swimming" },
      { name: "Gym flooring", icon: <GiGymBag size={40} />, sport: "gym" },
    ],
    Outdoor: [
      { name: "Football", icon: <IoIosFootball size={40} />, sport: "football" },
      { name: "Cricket", icon: <MdOutlineSportsCricket size={40} />, sport: "cricket" },
      { name: "Basketball court", icon: <GiBasketballBasket size={40} />, sport: "basketball" },
      { name: "Volleyball court", icon: <TbBallVolleyball size={40} />, sport: "volleyball" },
      { name: "Running track", icon: <GiRunningShoe size={40} />, sport: "running" },
      { name: "Tennis court", icon: <IoTennisballOutline size={40} />, sport: "tennis" },
    ],
  };

  const sportData = {
    basketball: {
      title: "Basketball Court",
      description: "Our basketball court construction delivers international-grade quality with precision excavation, durable WBM sub-base, and triple-layer asphalt foundation for superior strength and longevity. A premium synthetic surface system with multi-layer cushioning ensures perfect bounce, grip, and play comfort. The court is secured with a 10-foot galvanized chain link fence and illuminated by high-intensity floodlights for all-day play. Finished with FIBA-standard dunking rims and accurate line markings, it stands as a showcase of performance and craftsmanship.",
      image: basket
    },
    badminton: {
      title: "Badminton Court",
      description: "Our badminton courts feature professional-grade construction with shock-absorbent wooden flooring that reduces player fatigue and injury risk. Each court is precisely marked with international standards and equipped with tournament-grade nets and posts. The playing area is surrounded by protective barriers and illuminated with specialized lighting to eliminate shadows and glare. Our courts ensure optimal shuttle trajectory and player movement for both recreational and competitive play.",
      image: badminton
    },
    football: {
      title: "Football Ground",
      description: "Our football grounds feature FIFA-approved natural or synthetic turf with professional drainage systems that ensure playability in all weather conditions. Each field is precisely marked with international dimensions and includes professional goal posts with nets. The facility is surrounded by spectator stands, flood lighting for night matches, and includes team dugouts. Our maintenance program ensures the pitch remains in tournament-ready condition throughout the year.",
      image: foot
    },
    gym: {
      title: "Gym Flooring",
      description: "Our specialized gym flooring solutions combine shock absorption, durability, and safety for all types of fitness activities. Using high-density rubber tiles, interlocking mats, and specialized surfaces for different workout zones, we create spaces that reduce injury risk and equipment damage. Our flooring is resistant to heavy weights, provides excellent traction, and is easy to maintain. We offer various thickness options and custom designs to match your facility's needs.",
      image: gym
    },
    pickleball: {
      title: "Pickleball Court",
      description: "Our pickleball courts are constructed to official USAPA specifications with professional-grade playing surfaces that provide consistent ball bounce and player traction. Each court features permanent net posts with tournament-quality nets, precise boundary markings, and player-friendly surfaces that reduce joint stress. The facilities include spectator areas, storage for equipment, and options for both indoor and outdoor installation to accommodate year-round play.",
      image: pickle
    },
    running: {
      title: "Running Track",
      description: "Our running tracks are engineered with world-class polyurethane surfaces that meet IAAF certification standards. The shock-absorbent layers reduce impact on joints while providing optimal energy return for runners. Each track features precise lane markings, competition starting blocks, and integrated drainage systems. We offer various color options and can customize the number of lanes to fit your space requirements while ensuring consistent performance across all weather conditions.",
      image: run
    },
    tennis: {
      title: "Tennis Court",
      description: "Our tennis court construction delivers professional playing surfaces with multiple surface options including acrylic hard courts, artificial grass, or clay. Each court is built with proper foundation, precise slope for drainage, and tournament-standard net posts and nets. The facilities include player benches, fencing, and lighting for evening play. Our courts provide consistent ball bounce and player footing whether for recreational play or competitive tournaments.",
      image: tennis
    },
    volleyball: {
      title: "Volleyball Court",
      description: "Our volleyball courts feature professional-grade sand or hard court surfaces designed for optimal player performance and safety. Beach volleyball courts include specially selected sand that provides perfect footing and cushioning, while indoor courts feature shock-absorbent surfaces. Each facility includes official height nets, boundary markers, and surrounding safety zones. Our installations accommodate both recreational play and official competitions with precision.",
      image: volly
    },
    swimming: {
      title: "Swimming Pool",
      description: "Our swimming facilities feature Olympic-standard construction with advanced filtration systems and temperature control. Each pool is designed with safety as the top priority, including non-slip decks, proper depth markings, and certified lifeguard stations. We offer various pool types including lap pools, recreational pools, and specialized training pools. Our installations include changing rooms, shower facilities, and spectator areas for competitions.",
      image: swim
    },
    cricket: {
      title: "Cricket Ground",
      description: "Our cricket grounds are built to international standards with carefully prepared pitches that offer consistent bounce and pace. The outfield features premium turf with excellent drainage systems for all-weather play. Each facility includes professional practice nets, sight screens, and digital scoreboards. We also install protective fencing, player pavilions, and flood lighting for day-night matches, creating the perfect environment for both training and competitive cricket.",
      image: cricket
    }
  };

  const openPopup = (sport) => {
    setActivePopup(sport);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  // Close popup when clicking outside content
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  // Close popup with Escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closePopup();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const HighlightedText = ({ text }) => {
    const parts = text.split(/(triple-layer asphalt foundation|shock-absorbent wooden flooring|high-quality synthetic turf|professional drainage systems|shock absorption, durability, and safety|safety, creativity, and development|versatile playing surfaces|professional-grade playing surfaces|world-class polyurethane surfaces|multiple surface options|professional-grade sand or hard court surfaces)/gi);
    
    return parts.map((part, index) => 
      sportData[activePopup]?.description.includes(part.toLowerCase()) && [
        'triple-layer asphalt foundation',
        'shock-absorbent wooden flooring', 
        'high-quality synthetic turf',
        'professional drainage systems',
        'shock absorption, durability, and safety',
        'safety, creativity, and development',
        'versatile playing surfaces',
        'professional-grade playing surfaces',
        'world-class polyurethane surfaces',
        'multiple surface options',
        'professional-grade sand or hard court surfaces'
      ].some(highlight => highlight.toLowerCase() === part.toLowerCase()) ? (
        <span key={index} className="bg-white text-black px-1 rounded font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className="tech text-white sm:py-24 py-14 px-6 md:px-24 min-h-[80vh]" id="technologies">
      <h2 className="text-3xl font-bold mb-8">Sports construction</h2>
      <div className="flex gap-10 border-b border-gray-700 mb-10">
        {Object.keys(techStacks).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 uppercase tracking-wide font-medium transition-all ${
              activeTab === tab
                ? "text-[#3db3a5] border-b-2 border-[#3db3a5]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
        {techStacks[activeTab].map((tech, index) => (
          <div
            key={tech.name}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => openPopup(tech.sport)}
            className="bg-[#99e1d9] text-black sm:py-10 py-4 rounded-lg relative group overflow-hidden flex flex-col items-center transition-all duration-500 hover:bg-[#3db3a5] cursor-pointer"
          >
            <div className="mb-4">{tech.icon}</div>
            <div
              className={`h-[3px] w-16 mb-4 transition-all duration-500 ${
                hoverIndex === index
                  ? "bg-white opacity-0 scale-x-100"
                  : "bg-black opacity-100 scale-x-100"
              }`}
            ></div>
            <p className="font-semibold transition-all duration-500">
              {tech.name}
            </p>
            <div
              className={`h-[3px] w-16 mt-4 transition-all duration-500 ${
                hoverIndex === index
                  ? "bg-white opacity-100 scale-x-100"
                  : "bg-black opacity-0 scale-x-0"
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* Popup Overlay */}
      {activePopup && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="bg-[#ff7e1c] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                <img 
                  src={sportData[activePopup]?.image} 
                  alt={sportData[activePopup]?.title}
                  className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-3xl border-2 border-white"
                />
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {sportData[activePopup]?.title}
                  </h3>
                  <p className="text-white text-lg leading-relaxed">
                    <HighlightedText text={sportData[activePopup]?.description} />
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white border-opacity-30 flex justify-center">
                <button className="bg-white text-[#ff7e1c] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Quotation
                </button>
              </div>
            </div>
            
            {/* Close Button */}
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200"
            >
              <FaTimes size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}