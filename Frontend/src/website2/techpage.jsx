import React from "react";
import imgg from "./public/tech-development.png"; 

export function Techpage({setCurrentsite}) {
  return (
    <div className="px-4 md:px-16 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-2">
          We Are Also in Software Development
        </h1>
        <hr className="w-32 md:w-64 h-1 mx-auto mb-4 bg-gradient-to-r from-gray-300 via-gray-700 to-gray-200 border-0 rounded" />
        <h3 className="text-base md:text-lg text-gray-800">
          Delivering excellence through innovation and expertise
        </h3>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-center md:text-left">
          Services We Offer
        </h2>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Grid of Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
            <div className="bg-teal-300 text-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-4">Website Development</h3>
              <p className="text-sm">
                Crafting modern, high-performance websites with creative design
                and seamless functionality. We deliver digital experiences that
                inspire, engage, and drive lasting impact.
              </p>
            </div>

            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-4">App Development</h3>
              <p className="text-sm">
                Building sleek, user-friendly mobile apps with powerful
                performance and scalability. We turn ideas into intuitive
                applications that enhance everyday life.
              </p>
            </div>

            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-4">Game Development</h3>
              <p className="text-sm">
                Designing immersive, high-quality games with stunning visuals
                and smooth gameplay. We create interactive worlds that
                entertain, challenge, and captivate players.
              </p>
            </div>

            <div className="bg-teal-300 text-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between items-start">
              <p className="text-sm mb-4">
                We have a team of highly skilled experts dedicated to Software
                Development and design solutions that exceed expectations.
              </p>
              <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 shadow" onClick={()=>setCurrentsite("tech")}>
                Explore Now
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={imgg}
              alt="Development Work"
              className="w-full max-w-md h-auto rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
