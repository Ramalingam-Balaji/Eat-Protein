import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaGooglePlay,
} from "react-icons/fa";

const navItems = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "Shop",
    path: "#shop",
  },
  {
    name: "Diet Plans",
    path: "#diet-plans",
  },
  {
    name: "Fitness",
    path: "#fitness",
  },
  {
    name: "Reviews",
    path: "#reviews",
  },
  {
    name: "Franchise",
    path: "#franchise",
  },
  {
    name: "About Us",
    path: "#about",
  },
  {
    name: "Contact Us",
    path: "#contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Added for navigation between pages and sections
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // ================= SECTION NAVIGATION =================

  const handleNavigation = (path) => {
    closeMenu();

    const sectionId = path.replace("#", "");

    // If already on Home page
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // If on another page such as Login / Signup
    navigate("/");

    // Wait until Home page is rendered
    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center">

            <button
              onClick={() => handleNavigation("#home")}
              className="bg-transparent border-none p-0"
            >
              <img
                src="./src/assets/logo.png"
                alt="Logo"
                className="w-40 h-30 object-contain cursor-pointer"
              />
            </button>

          </div>


          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center gap-8">

            {navItems.map((item) => (

              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="text- font-semibold text-gray-700 hover:text-green-600 transition duration-200 whitespace-nowrap bg-transparent border-none"
              >
                {item.name}
              </button>

            ))}

          </nav>


          {/* ================= DESKTOP BUTTONS ================= */}

          <div className="hidden xl:flex items-center gap-4">

            {/* Download App */}

            <a
              href="https://play.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg font-semibold text- transition"
            >

              <FaGooglePlay />

              Download App

            </a>


            {/* Login / Signup */}

            <Link
              to="/login"
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded-lg font-semibold text- transition"
            >
              Login / Signup
            </Link>

          </div>


          {/* ================= MOBILE MENU BUTTON ================= */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden text-2xl text-green-700"
          >

            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}

          </button>

        </div>


        {/* ================= MOBILE MENU ================= */}

        {menuOpen && (

          <div className="xl:hidden border-t border-gray-100 py-4">

            <nav className="flex flex-col gap-1">

              {navItems.map((item) => (

                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className="text-left px-4 py-3 rounded-lg text-gray-700 font-semibold hover:bg-green-50 hover:text-green-600 transition bg-transparent border-none"
                >
                  {item.name}
                </button>

              ))}


              {/* Mobile Buttons */}

              <div className="flex flex-col gap-3 mt-4 px-4">

                <a
                  href="https://play.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold"
                >

                  <FaGooglePlay />

                  Download App

                </a>


                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="text-center border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-3 rounded-lg font-semibold"
                >
                  Login / Signup
                </Link>

              </div>

            </nav>

          </div>

        )}

      </div>

    </header>
  );
};

export default Navbar;