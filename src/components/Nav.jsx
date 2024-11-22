import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            />
            <a className="hidden md:flex md:flex-col md:items-center  text-white text-4xl lg:text-6xl font-bold">
              <span>Dot</span>
              <span className="">Dager</span>
            </a>
          </li>
          <li>
            <button className="md:hidden text-white" onClick={toggleMenu}>
              <Menu size={32} />
            </button>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6 text-md">
              {["Inicio", "Lenguajes", "Testimonios"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative group text-white font-semibold"
                  >
                    {item}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
                  </a>
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
            {["Inicio", "Lenguajes", "Testimonios"].map((item) => (
              <li key={item} className="text-4xl font-bold">
                <a onClick={toggleMenu} href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleMenu}
            className="bg-slate-800 rounded-full p-4"
          >
            <X size={58} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
