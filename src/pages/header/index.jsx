import { useEffect, useState } from "react";
import menuData from "./menuData";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/ModeToggle";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setNavbarOpen(false); 
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuData.map(item => item.path);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleStickyNavbar);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`top-0 left-0 z-9999 w-full ${
        sticky
          ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-99999 bg-white/80 backdrop-blur-xs transition"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative flex items-center justify-between py-6">
          Logo
          {/* <div className="w-40">
            <Link to="/">
              <img
                src="/images/logo/logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="hidden dark:block w-full object-cover"
              />
              <img
                src="/images/logo/logo-2.svg"
                alt="logo"
                width={100}
                height={100}
                className="block dark:hidden w-full object-cover"
              />
            </Link>
          </div> */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label="Mobile Menu"
            className="ring-primary absolute top-1/2 right-4 block -translate-y-1/2 rounded-lg py-[4px] px-[6px] focus:ring-2 lg:hidden"
          >
            <span
              className={`relative my-1.5 block h-0.5 w-[25px] bg-black transition-all duration-300 dark:bg-white ${
                navbarOpen ? "top-[8px] rotate-45" : " "
              }`}
            />
            <span
              className={`relative my-1.5 block h-0.5 w-[25px] bg-black transition-all duration-300 dark:bg-white ${
                navbarOpen ? "opacity-0" : " "
              }`}
            />
            <span
              className={`relative my-1.5 block h-0.5 w-[25px] bg-black transition-all duration-300 dark:bg-white ${
                navbarOpen ? "top-[-8px] -rotate-45" : " "
              }`}
            />
          </button>
          <nav
            className={`absolute right-0 z-30 w-[250px] bg-white border-[.5px] border-body-color/50 dark:border-body-color/20 dark:bg-dark rounded px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
              navbarOpen
                ? "visibility top-full opacity-100"
                : "invisible top-[120%] opacity-0"
            }`}
          >
            <ul className="block lg:flex lg:space-x-12">
              {menuData.map((menuItem, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(menuItem.path)}
                    className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 transition-colors duration-200 cursor-pointer ${
                      activeSection === menuItem.path
                        ? "text-primary dark:text-primary "
                        : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                    }`}
                  >
                    {menuItem.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center justify-end pr-18 lg:pr-0">
            <Link
              to="/signin"
              className="text-dark hidden  text-base font-medium hover:opacity-70 md:block dark:text-white"
            >
              Login
            </Link>
            <span className="text-dark hidden px-2 text-base font-medium md:block dark:text-white">
              /
            </span>
            <Link
              to="/signup"
              className="text-primary hidden pr-2 text-base font-medium hover:opacity-70 md:block"
            >
              Signup
            </Link>
            <div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;