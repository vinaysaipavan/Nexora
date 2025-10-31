import { Navbar } from "./Navbar";
import videofile from "./public/video.mp4"
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();
  return (
    <section className="relative w-full h-screen overflow-hidden" id="home">
      <Navbar />
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videofile}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Nexora Group
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl drop-shadow-md">
          Where Precision Meets Construction Expertise.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
        onClick={()=>navigate("/contact")}>
          Enquiry Now
        </button>
      </div>
    </section>
  );
}
