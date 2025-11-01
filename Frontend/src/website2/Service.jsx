import vid1 from "./public/sports-video.mp4";
import vid2 from "./public/interior-video.mp4";
import vid3 from "./public/realestate-video.mp4";
import { useNavigate } from "react-router-dom";

export function Service() {
  const navigate = useNavigate();
  const services = [
    {
      name: "Sports",
      video: vid1,
      description: "You Dream, We Deliver! Let us, build your ‘Dream Home’",
    },
    {
      name: "Real Estate",
      video: vid2,
      description: "You Dream, We Deliver! Let us, build your ‘Dream Home’",
    },
    {
      name: "Interior Design",
      video: vid3,
      description: "You Dream, We Deliver! Let us, build your ‘Dream Home’",
    },
  ];

  const handleViewService = (serviceName) => {
    if (serviceName === "Sports") {
      navigate("/home"); 
    } else {
      alert(`Coming soon: ${serviceName} services!`);
    }
  };
  return (
    <section
      className="bg-[#202c39] min-h-[80vh] py-14 flex flex-col items-center"
      id="services"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-[#99e1d9] mb-12 text-center tracking-wide">
        Our Premium Construction Services
      </h1>

      <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-center px-6 md:px-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="group flex flex-col items-center bg-[#99e1d9] border-4 border-[#99e1d9] hover:border-[#39a498]
                       rounded-2xl p-5 w-full md:w-[300px] max-h-[60vh] justify-around 
                       transition-all duration-500 ease-in-out hover:scale-105"
          >
            <div className="flex flex-col items-center">
              <video
                src={service.video}
                autoPlay
                muted
                loop
                playsInline
                className="rounded-lg mb-3 w-full h-[150px] object-cover"
              ></video>
              <div className="text-2xl md:text-3xl font-semibold text-[#202c39] text-center tracking-wide">
                {service.name}
              </div>
            </div>

            <div className="w-10 h-0.5 bg-black my-3 transform scale-x-100 group-hover:scale-x-150 transition-transform duration-500"></div>

            <p className="text-[#202c39] text-center text-base md:text-lg font-normal leading-6">
              {service.description}
            </p>

            <button
              className="mt-4 px-6 py-2 bg-[#202c39] text-[#99e1d9] rounded-md 
                         hover:bg-[#39a498] hover:text-[#202c39] transition-all duration-300 ease-in-out"
                         onClick={() => handleViewService(service.name)}
            >
              View Services
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
