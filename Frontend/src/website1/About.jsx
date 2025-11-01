import "./abou.css";
import "./abo.css";
import { useEffect, useRef } from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { useLocation } from "react-router-dom";

export function About({setCurrentsite}) {
  const location = useLocation();
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);
  useEffect(()=>{
    window.scrollTo(0,0);
  },[location.pathname]);
  useEffect(() => {
    const section = sectionRef.current;
    const cursor = cursorRef.current;

    if (!section || !cursor) return;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cursor.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <Navbar />
      <section className="about-hero" id="about">
        <div
          className="about-section flex flex-col md:flex-row items-center justify-around pb-[10vh] pt-16"
        >
          {/* Left text section */}
          <div
            ref={sectionRef}
            className="about-section-matter relative flex flex-col flex-5 pl-[30px]"
          >
            <div
              className="cursor bg-white h-[200px] w-[200px] rounded-full absolute"
              ref={cursorRef}
            ></div>

            <h1 className="about-heading text-b text-left mt-5">
              Nexora: <span>Who are we?</span>
            </h1>

            <div className="about-subheading">
              <h2>
                We are a team of innovators, builders, and creators driven by a dual passion for technology and construction. Our mission is to bridge the digital and physical worlds — crafting cutting-edge software solutions while building lasting structures that shape skylines and communities.
              </h2>
              <span>
                <h2>
                  From smart AI systems and immersive digital experiences to precision engineering and sustainable construction, we turn visionary ideas into tangible realities that stand the test of time.
                </h2>
              </span>
            </div>
          </div>

          {/* Right image section */}
          <div className="about-image flex-4 mt-8 md:mt-0">
            <img src="../about-image.png" alt="About Avishkar" />
          </div>
        </div>

        {/* Executive Team Section */}
        <div className="about-team text-center text-black p-2.5 font-light min-h-[70vh] bg-cover">
          <h1 className="title-about text-center text-black mt-6 text-3xl font-semibold">
            Executive Team
          </h1>

          <div className="container flex flex-wrap justify-center gap-8 mt-10">
            {/* Card 1 */}
            <article className="card w-[280px] sm:w-[320px] md:w-[360px]">
              <div className="slide slide1">
                <div className="icon">
                  <img src="../2.webp" alt="CEO" />
                </div>
              </div>
              <div className="slide slide2">
                <h3>P. Jagannadha Deekshith​</h3>
                <p>CHIEF EXECUTIVE OFFICER</p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="card w-[280px] sm:w-[320px] md:w-[360px]">
              <div className="slide slide1">
                <div className="icon">
                  <img src="../3.webp" alt="COO" />
                </div>
              </div>
              <div className="slide slide2">
                <h3>Pooja Hemanth</h3>
                <p>CHIEF OPERATING OFFICER</p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="card w-[280px] sm:w-[320px] md:w-[360px]">
              <div className="slide slide1">
                <div className="icon">
                  <img src="../1.webp" alt="Co-Founder" />
                </div>
              </div>
              <div className="slide slide2">
                <h3>G.V.V Sunil Gangadhar</h3>
                <p>CO-FOUNDER</p>
              </div>
            </article>

            {/* Card 4 */}
            <article className="card w-[280px] sm:w-[320px] md:w-[360px]">
              <div className="slide slide1">
                <div className="icon">
                  <img src="../4.webp" alt="Advisor" />
                </div>
              </div>
              <div className="slide slide2">
                <h3>Ram Kumar Varma P​</h3>
                <p>INDUSTRIAL ADVISOR</p>
              </div>
            </article>

            {/* Card 5 */}
            <article className="card w-[280px] sm:w-[320px] md:w-[360px]">
              <div className="slide slide1">
                <div className="icon">
                  <img src="../5.webp" alt="Managing Director" />
                </div>
              </div>
              <div className="slide slide2">
                <h3>Lavanya​</h3>
                <p>MANAGING DIRECTOR</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer setCurrentsite={setCurrentsite} />
    </>
  );
}
