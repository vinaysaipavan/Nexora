import { useState } from "react";
import { FaAndroid, FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import {
  SiKotlin,
  SiSwift,
  SiFlutter,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiVuedotjs,
  SiHtml5,
  SiTailwindcss,
  SiPython,
} from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";

export function Technologies() {
  const [activeTab, setActiveTab] = useState("Mobile");
  const [hoverIndex, setHoverIndex] = useState(null);

  const techStacks = {
    Mobile: [
      { name: "Android", icon: <FaAndroid size={40} /> },
      { name: "React Native", icon: <FaReact size={40} /> },
      { name: "Kotlin", icon: <SiKotlin size={40} /> },
      { name: "Swift", icon: <SiSwift size={40} /> },
      { name: "Flutter", icon: <SiFlutter size={40} /> },
    ],
    Frontend: [
      { name: "React.js", icon: <FaReact size={40} /> },
      { name: "Angular", icon: <FaAngular size={40} /> },
      { name: "Next.js", icon: <SiNextdotjs size={40} /> },
      { name: "Vue.js", icon: <SiVuedotjs size={40} /> },
      { name: "Html5", icon: <SiHtml5 size={40} /> },
      { name: "TailwindCSS", icon: <SiTailwindcss size={40} /> },
    ],
    Backend: [
      { name: "Python", icon: <SiPython size={40} /> },
      { name: "Java", icon: <FaJava size={40} /> },
      { name: "Node.js", icon: <FaNodeJs size={40} /> },
      { name: "Express.js", icon: <SiExpress size={40} /> },
      { name: "MongoDB", icon: <SiMongodb size={40} /> },
    ],
  };

  return (
    <section className="tech text-white sm:py-24 py-14 px-6 md:px-24 min-h-[80vh]" id="technologies">
      <h2 className="text-3xl font-bold mb-8">Technologies</h2>
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
            className="bg-[#99e1d9] text-black py-10 rounded-lg relative group overflow-hidden flex flex-col items-center transition-all duration-500 hover:bg-[#3db3a5]"
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
