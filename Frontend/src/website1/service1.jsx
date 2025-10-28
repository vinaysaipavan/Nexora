import { useEffect, useRef } from "react";
import "./service1.css";

export function Services() {
  // References to DOM elements
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cursor = cursorRef.current;

    if (!section || !cursor) return;

    // Handle mouse move
    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    // Show and hide cursor
    const handleMouseEnter = () => {
      cursor.style.display = "block";
      cursor.style.background = "white";
    };

    const handleMouseLeave = () => {
      cursor.style.display = "none";
    };

    // Attach listeners
    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup on component unmount
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div id="services" className="column flex flex-col md:px-[8vw] cursor-none relative overflow-hidden bg-[#fcffff]" ref={sectionRef}>
      <h2 className="sm:text-4xl text-2xl font-bold my-8 text-center">Services we offer</h2>
      <div className="cursor2" ref={cursorRef}></div>
      <div className="row">
        <div className="white1">
          <div className="head">
            <div className="heading">Web Application Development</div>
            <div className="number">001</div>
          </div>
          <div className="description">
            <p>
              Web application development combines cutting-edge technology and
              innovative design to transform the digital landscape.
            </p>
          </div>
        </div>
        <div className="black1">
          <div className="head">
            <div className="heading"><span>App Development</span><span>(IOS & Android)</span></div>
            <div className="number">002</div>
          </div>
          <div className="description">
            <p>
              Mobile app development drives innovation, transforming ideas into
              user-friendly, immersive experiences that redefine how we interact
              with technology on the go.
            </p>
          </div>
        </div>
      </div>

      <div className="row rowY">
        <div className="black1">
            <div className="head">
              <div className="heading">Game Development</div>
              <div className="number">003</div>
            </div>
            <div className="description">
              <p>
                We craft immersive gaming experiences that blend stunning
                visuals with seamless performance. From concept to console, we
                turn your ideas into worlds players can’t put down.
              </p>
            </div>
          </div>
          <div className="white1">
            <div className="head">
              <div className="heading">Animation (2D & 3D)</div>
              <div className="number">004</div>
            </div>
            <div className="description">
              <p>
                Our animations bring stories to life with emotion, depth, and
                motion. Whether it’s sleek 2D charm or cinematic 3D realism, we
                make imagination move.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div className="white1">
            <div className="head">
              <div className="heading">UI/UX Designing</div>
              <div className="number">005</div>
            </div>
            <div className="description">
              <p>
                We design digital experiences that feel as good as they look.
                Every pixel and interaction is built to delight, engage, and
                convert.
              </p>
            </div>
          </div>
          <div className="black1">
            <div className="head">
              <div className="heading">AI Automation Softwares</div>
              <div className="number">006</div>
            </div>
            <div className="description">
              <p>
                Empower your business with smart, self-learning systems that
                think faster and work smarter. We transform complex workflows
                into effortless automation.
              </p>
            </div>
          </div>
        </div>

        <div className="row rowY">
          <div className="black1">
            <div className="head">
              <div className="heading">IoT Engineering</div>
              <div className="number">007</div>
            </div>
            <div className="description">
              <p>
                We connect the digital and physical worlds with intelligent IoT
                solutions. Smarter devices, seamless data, and endless
                innovation — all in sync.
              </p>
            </div>
          </div>
          <div className="white1">
            <div className="head">
              <div className="heading">Digital Marketing</div>
              <div className="number">008</div>
            </div>
            <div className="description">
              <p>
                We build brands that don’t just get noticed — they get
                remembered. From strategy to storytelling, we turn clicks into
                loyal communities
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}







