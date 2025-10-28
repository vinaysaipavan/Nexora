import "./Works.css";
import { useEffect, useRef, useState } from "react";
import imgg from "./public/callcenter.jpeg"

export function Works() {
  const reviewsContentRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [hoveredImageUrl, setHoveredImageUrl] = useState("");

  const projects = [
    {
      id: 1,
      title: "NexGen Realty Pvt. Ltd.",
      description: "We built a modern, high-performance real estate platform where users can search, compare, and book properties with ease. The site features advanced filters, 3D property views, and inquiry forms.",
      image: imgg,
      url: "https://nexgenrealty.example.com" 
    },
    {
      id: 2,
      title: "Foodzy – Restaurant Ordering Website",
      description: "Foodzy is a full-featured restaurant ordering and delivery website that allows customers to browse menus, place orders, and track deliveries online.",
      image: imgg,
      url: "https://foodzy.example.com" 
    },
    {
      id: 3,
      title: "SkillForge – Online Learning Platform",
      description: "SkillForge is a responsive e-learning platform that provides video courses, live sessions, and progress tracking for students and professionals.",
      image: imgg,
      url: "https://skillforge.example.com" 
    },
    {
      id: 4,
      title: "TechCart – E-commerce Website",
      description: "We developed an end-to-end e-commerce website for electronics retail, supporting multiple vendors, product search, and secure transactions.",
      image: imgg,
      url: "https://techcart.example.com" 
    }
  ];

  useEffect(() => {
    const reviewsContent = reviewsContentRef.current;
    if (!reviewsContent) return;

    // Drag-to-scroll functionality
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - reviewsContent.offsetLeft;
      scrollLeft = reviewsContent.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - reviewsContent.offsetLeft;
      const walk = (x - startX) * 1.5;
      reviewsContent.scrollLeft = scrollLeft - walk;
    };

    // Mouse move tracker for custom cursor
    const handleMouseMoveGlobal = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    reviewsContent.addEventListener("mousedown", handleMouseDown);
    reviewsContent.addEventListener("mouseleave", handleMouseLeave);
    reviewsContent.addEventListener("mouseup", handleMouseUp);
    reviewsContent.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousemove", handleMouseMoveGlobal);

    return () => {
      reviewsContent.removeEventListener("mousedown", handleMouseDown);
      reviewsContent.removeEventListener("mouseleave", handleMouseLeave);
      reviewsContent.removeEventListener("mouseup", handleMouseUp);
      reviewsContent.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousemove", handleMouseMoveGlobal);
    };
  }, []);

  const handleImageClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleImageMouseEnter = (url) => {
    setIsHoveringImage(true);
    setHoveredImageUrl(url);
  };

  const handleImageMouseLeave = () => {
    setIsHoveringImage(false);
    setHoveredImageUrl("");
  };

  return (
    <>
      <div 
        className={`custom-cursor fixed pointer-events-none hidden ${isHoveringImage ? 'cursor-visible' : ''}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      >
        <div className="cursor-circle w-[60px] h-[60px] rounded-full flex items-center justify-center">
          <div className="cursor-arrow text-white font-bold text-lg">→</div>
        </div>
        <div className="cursor-text absolute top-[70px] left-[50%] bg-black text-white rounded-lg whitespace-nowrap">View Project</div>
      </div>

      <div className="works-hero" id="our-works">
        <div className="works-subhero">
          <h1
            style={{
              width: "200vh",
              fontSize: "30px",
              fontWeight: "bold",
              color: "#202c39",
            }}
          >
            Previous works
          </h1>

          {projects.map((project) => (
            <div key={project.id} className="works-container flex flex-col items-center justify-center w-[80%] max-w-[500px] bg-slate-200 p-5 rounded-md relative overflow-hidden">
              <div className="image-container relative w-[100%] rounded-md overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image w-[100%] h-auto rounded-md bg-cover block"
                  onClick={() => handleImageClick(project.url)}
                  onMouseEnter={() => handleImageMouseEnter(project.url)}
                  onMouseLeave={handleImageMouseLeave}
                />
                <div className="image-overlay absolute top-0 left-0 w-[100%] h-[100%] text-white flex items-center justify-center rounded-md pointer-events-none opacity-0">
                  <span>Click to View Project</span>
                </div>
              </div>
              <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          ))}

          <div className="reviews">
            <div className="works-text">
              <h2>Why Our Clients Trust Us</h2>
              <p>
                At Nexora Group, we combine creativity, clean code,
                and cutting-edge technology to build websites that perform
                flawlessly across devices. Every project we deliver reflects our
                commitment to quality and client satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="reviews-hero" aria-labelledby="reviews-title">
          <h1 id="reviews-title">
            Our clients <span>love ❤️</span> us
          </h1>

          <div className="reviews-wrapper">
            <div
              ref={reviewsContentRef}
              className="reviews-content"
              role="list"
            >
              {/* Review cards remain the same */}
              <article className="review-card" role="listitem">
                <p className="review-text">
                  "Nexora Group is simply amazing! Their expertise in
                  handling complex IT projects is commendable. I'm extremely
                  happy with the services they provided. From scoping out the
                  requirements to delivering the final version, everything was
                  smooth. Keep up the good work!"
                </p>
                <div className="review-author">
                  — Sarah L., CEO of Tech Innovators
                </div>
              </article>

              <article className="review-card" role="listitem">
                <p className="review-text">
                  "As a customer of Nexora Group, I must say that their
                  services are top-notch. The team is professional,
                  detail-oriented, and very competent. I am completely satisfied
                  with their work and would recommend them to anyone looking for
                  reliable IT services."
                </p>
                <div className="review-author">
                  — Sathish Y., CEO of Tech Innovators
                </div>
              </article>

              <article className="review-card" role="listitem">
                <p className="review-text">
                  "I recently worked with Nexora Group and was
                  delighted with the quality of their work. They were
                  professional, efficient, and delivered on time. Their
                  communication was excellent, and they kept me updated
                  throughout the project. Highly recommended for any IT project
                  you wish to entrust."
                </p>
                <div className="review-author">
                  — Sai, CEO of Tech Innovators
                </div>
              </article>

              <article className="review-card" role="listitem">
                <p className="review-text">
                  "I recently availed the services of this company and I must
                  say I'm very impressed. The quality of work delivered by
                  Nexora Group is exceptional. They are professional,
                  efficient, and deliver on time. I highly recommend their
                  services — especially for businesses that want dependability."
                </p>
                <div className="review-author">
                  — Johny., CEO of Tech Innovators
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}