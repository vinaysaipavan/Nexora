import imgg from "./public/image1.jpg";

export function Sports({setCurrentsite}) {
  return (
    <section className="bg-blue-100 py-12 px-4 md:px-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          We Are Also in Construction
        </h1>
        <hr className="border-2 border-gray-900 w-48 mx-auto mb-4" />
        <h3 className="text-gray-900 text-lg md:text-xl">
          Delivering excellence through innovation and expertise
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-12 lg:gap-24">
        {/* Left Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
          <div className="bg-teal-200 text-gray-900 p-6 rounded-xl shadow-lg flex flex-col justify-between h-full">
            <h3 className="font-bold text-lg mb-2">Real Estate</h3>
            <p className="text-sm md:text-base">
              Providing top-notch real estate solutions with modern, innovative designs and trusted quality. We strive to create spaces that blend elegance, comfort, and lasting value for every client.
            </p>
          </div>

          <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg flex flex-col justify-between h-full">
            <h3 className="font-bold text-lg mb-2">Sports Court Construction</h3>
            <p className="text-sm md:text-base">
              We build durable, world-class sports courts designed for all levels of play. Our courts combine performance, safety, and style to deliver an exceptional sporting experience.
            </p>
          </div>

          <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg flex flex-col justify-between h-full">
            <h3 className="font-bold text-lg mb-2">Interior Designing</h3>
            <p className="text-sm md:text-base">
              We craft creative and functional interiors that match your style and needs. Blending aesthetics with comfort, we turn every space into something uniquely yours.
            </p>
          </div>

          <div className="bg-teal-200 text-gray-900 p-6 rounded-xl shadow-lg flex flex-col justify-between h-full">
            <p className="text-sm md:text-base mb-4">
              We have a team of highly skilled experts dedicated to delivering quality construction and design solutions that exceed expectations.
            </p>
            <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition" onClick={() => setCurrentsite("construct")}>
              Explore Now
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={imgg}
            alt="Construction Work"
            className="w-full max-w-md lg:max-w-lg rounded-xl shadow-2xl object-cover h-96 lg:h-auto mt-6 lg:mt-0"
          />
        </div>
      </div>
    </section>
  );
}
