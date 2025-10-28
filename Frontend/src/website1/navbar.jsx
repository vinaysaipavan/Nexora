import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link, useNavigate, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { id: "home", label: "Home", type: "section" },
    { id: "about", label: "About", type: "route", path: "/about" },
    { id: "technologies", label: "Technologies", type: "section" },
    { id: "services", label: "Services", type: "section" },
    { id: "our-works", label: "Our Works", type: "section" },
    { id: "contact-us", label: "Contact Us", type: "route", path: "/contact" },
  ];

  const handleNavClick = (item) => {
    if (item.type === "section") {
      if (location.pathname !== "/") {
        // Navigate to home first
        navigate("/", { state: { scrollTo: item.id } });
      } else {
        // Already on home, scroll directly
        const el = document.getElementById(item.id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (item.type === "route") {
      navigate(item.path);
    }

    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-10/12 lg:w-4/5 bg-gray-900/90 backdrop-blur-sm rounded-xl z-30 border border-teal-400/10 shadow-2xl shadow-teal-400/20 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-32"
        }`}
      >
        <div className="flex items-center justify-between px-3 lg:px-6 py-3">
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src="./Logo.png"
                alt="logo"
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full cursor-pointer hover:scale-105 transition-transform duration-250"
              />
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className="whitespace-nowrap px-4 py-2 text-gray-300 hover:text-teal-400 hover:bg-teal-400/10 rounded-lg transition-all duration-250 ease-in-out hover:-translate-y-0.5 font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white bg-gray-800/90 backdrop-blur-sm rounded-lg border border-teal-400/10 hover:bg-gray-700/90 transition-all duration-250"
          >
            {isMenuOpen ? (
              <RxCross1 size={20} />
            ) : (
              <RxHamburgerMenu size={20} />
            )}
          </button>

          <div className="hidden lg:block w-10 h-10 lg:w-12 lg:h-12"></div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          onClick={toggleMenu}
        >
          <div
            className="fixed top-0 right-0 w-64 h-full bg-gray-900/95 backdrop-blur-md border-l border-teal-400/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4 border-b border-gray-700">
              <button
                onClick={toggleMenu}
                className="p-2 text-white hover:text-teal-400 transition-colors"
              >
                <RxCross1 size={24} />
              </button>
            </div>

            <div className="flex justify-center py-6 border-b border-gray-700">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                <img
                  src="./Logo.png"
                  alt="logo"
                  className="w-16 h-16 rounded-full"
                />
              </button>
            </div>

            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="whitespace-nowrap px-4 py-3 text-gray-300 hover:text-teal-400 hover:bg-teal-400/10 rounded-lg transition-all duration-250 font-medium text-lg border border-transparent hover:border-teal-400/20 text-center"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
