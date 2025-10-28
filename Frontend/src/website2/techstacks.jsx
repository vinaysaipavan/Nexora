import { useState } from "react";
import { GiShuttlecock } from "react-icons/gi";
import { PiCourtBasketball } from "react-icons/pi";
import { IoTennisballOutline } from "react-icons/io5";
import { FaPersonSwimming } from "react-icons/fa6";
import { IoIosFootball } from "react-icons/io";
import { MdOutlineSportsCricket } from "react-icons/md";
import { GiBasketballBasket } from "react-icons/gi";

export function Technologies() {
  const [activeTab, setActiveTab] = useState("Indoor");
  const [hoverIndex, setHoverIndex] = useState(null);

  const techStacks = {
    Indoor: [
      { name: "Badminton court", icon: <GiShuttlecock size={40} /> },
      { name: "Pickle ball court", icon: <PiCourtBasketball size={40} /> },
      { name: "Tennis court", icon: <IoTennisballOutline size={40} /> },
      { name: "Swimming", icon: <FaPersonSwimming size={40} /> },
    ],
    Outdoor: [
      { name: "Football", icon: <IoIosFootball size={40} /> },
      { name: "Cricket", icon: <MdOutlineSportsCricket size={40} /> },
      { name: "Basketball court", icon: <GiBasketballBasket size={40} /> },
    ],
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
            className="bg-[#99e1d9] text-black sm:py-10 py-4 rounded-lg relative group overflow-hidden flex flex-col items-center transition-all duration-500 hover:bg-[#3db3a5]"
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
    </section>
  );
}
