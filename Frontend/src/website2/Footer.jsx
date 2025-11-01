import "./App.css";
import "./footer.css";
import { IoCallSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


export function Footer({setCurrentsite}) {
    const navigate = useNavigate();
    const scrollToSection = (item) => {
        if (window.location.pathname === "/") {
            const element = document.getElementById(item);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, null, `#${item}`);
            }
        } else {
            navigate(`/${item}`);
        }
    };
  return (
    <>
        <footer className="border-t-4 border-red-500 bg-zinc-900 pt-4">
            <div>
                <div className="flex justify-around w-[100%] md:flex-row flex-col">
                    <div className="footer-about">
                        <h1>About</h1>
                        <p>At Nexora Group, we are dedicated to delivering innovative tech solutions that drive success and transform businesses. Our team of experts specializes in cutting-edge technologies to help you stay ahead in the digital age.</p>
                    </div>
                    <div className="services">
                        <h1>Services</h1>
                        <a  className="cursor-pointer">PlayGround Construction</a>
                        <a  className="cursor-pointer">Road Construction</a>
                        <a  className="cursor-pointer">UI/UX Design</a>
                        <a  className="cursor-pointer">Digital Marketing</a>
                        <a  className="cursor-pointer">Game Development</a>
                        <a  className="cursor-pointer">Animations (2D & 3D)</a>
                        <a  className="cursor-pointer">AI Automations</a>
                        <a  className="cursor-pointer">IoT Engineering</a>
                    </div>
                    <div className="quick-links">
                        <h1>Quick Links</h1>
                        <a className="cursor-pointer" onClick={() => scrollToSection('home')}>Home</a>
                        <a className="cursor-pointer" onClick={()=>navigate('/about')}>About</a>
                        <a className="cursor-pointer" onClick={() => scrollToSection('projects')}>Projects</a>
                        <a className="cursor-pointer" onClick={() => scrollToSection('faq')}>FAQ</a>
                        <a className="cursor-pointer" onClick={()=>navigate("/contact")}>Contact</a>
                        <a className="cursor-pointer" onClick={()=>setCurrentsite("tech")}>Technology</a>
                    </div>
                    <div className="connect items-center">
                        <h1>Connect With Us</h1>
                        <div className="phone flex flex-col gap-2">
                            <a href="tel:+918639863632" className="flex items-center gap-2"><IoCallSharp className="text-lg" />8431322728</a>
                            <a href="tel:+919441813927" className="flex items-center gap-2"><IoCallSharp className="text-lg" />8660961882</a>
                        </div>
                        <div className="flex items-center mt-5">
                            <a href="mailto:info@avishkartechsolutions.com" className="flex items-center gap-2"><FaEnvelope className="text-lg" />info.nexoragroup@gmail.com</a>
                        </div>
                        <div className="map">
                            <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2609920104937!2d78.3769590749362!3d17.447217983450173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e57327e88f%3A0xaae9ea94d6b94f02!2sAvishkar%20Tech%20Solutions!5e0!3m2!1sen!2sin!4v1760266910218!5m2!1sen!2sin"
                            width="300"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Avishkar Tech Solutions Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="rights">© 2025 Nexora Group. All rights reserved.</p>
            </div>
        </footer>
    </>
  );
}
