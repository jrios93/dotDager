import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const navItems = ["Inicio", "Lenguajes", "Testimonios"];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Manejo del fondo del nav
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detectar sección activa
      const sections = navItems.map((item) => ({
        id: item.toLowerCase(),
        element: document.getElementById(item.toLowerCase()),
      }));

      const currentSection = sections.find((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Altura aproximada del nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="relative">
        <ul className="flex p-6 justify-between items-center">
          <li className="flex items-center gap-2">
            <img
              width={100}
              height={100}
              src="/assets/img/pepino2.png"
              alt="Logo"
              className="h-[50px] w-auto"
            />
            <a className="hidden md:flex md:flex-col md:items-center text-white text-4xl lg:text-6xl font-bold">
              <span>Dot</span>
              <span>Dager</span>
            </a>
          </li>
          <li>
            <button className="md:hidden text-white" onClick={toggleMenu}>
              <Menu size={32} />
            </button>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6 text-md">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item.toLowerCase())}
                    className={`relative group text-white font-semibold px-4 py-2 transition-colors duration-300
                      ${
                        activeSection === item.toLowerCase()
                          ? "text-cyan-400"
                          : "hover:text-cyan-300"
                      }`}
                  >
                    {item}
                    <span
                      className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 transform -translate-x-1/2
                        ${
                          activeSection === item.toLowerCase()
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-50 flex flex-col justify-center items-center gap-20 bg-black/95 backdrop-blur-sm text-white
            transition-all duration-500 ease-in-out ${
              isMenuOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
        >
          <ul className="flex flex-col gap-10 items-center">
            {navItems.map((item) => (
              <li key={item} className="text-4xl font-bold">
                <button
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className={`transition-colors duration-300
                    ${
                      activeSection === item.toLowerCase()
                        ? "text-cyan-400"
                        : "text-white hover:text-cyan-300"
                    }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleMenu}
            className="bg-slate-800 rounded-full p-4 hover:bg-slate-700 transition-colors duration-300"
          >
            <X size={58} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
