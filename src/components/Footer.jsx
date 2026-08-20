import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-green-950 text-white scroll-mt-20"
    >

      <div className="max-w-350 mx-auto px-6 lg:px-10">

        {/* Main Footer */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 py-10">

          {/* About */}

          <div className="lg:col-span-1">

           <div className="flex items-center">
  <img
    src={logo}
    alt="Eat Protein Logo"
    className="w-40 h-20 object-contain rounded-4xl"
  />
</div>

              <div>

                <h2 className="text-xl font-bold">
                  Eat Protein
                </h2>

                <p className="text-xs text-green-200">
                  Your trusted health partner
                </p>

              </div>

            <p className="text-sm text-green-100 leading-6 mt-4">

              Your trusted partner for premium
              protein-rich foods and healthy
              lifestyle solutions.

            </p>


            {/* Social */}

            <div className="flex gap-3 mt-5">

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-green-800 flex items-center justify-center hover:bg-green-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-green-800 flex items-center justify-center hover:bg-green-600 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-green-800 flex items-center justify-center hover:bg-green-600 transition"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-green-800 flex items-center justify-center hover:bg-green-600 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-green-800 flex items-center justify-center hover:bg-green-600 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>


          {/* Quick Links */}

          <div>

            <h3 className="font-bold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-green-100">

              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="#shop" className="hover:text-white">
                  Shop
                </a>
              </li>

              <li>
                <a href="#diet-plans" className="hover:text-white">
                  Diet Plans
                </a>
              </li>

              <li>
                <a href="#fitness" className="hover:text-white">
                  Fitness
                </a>
              </li>

              <li>
                <a href="#recipes" className="hover:text-white">
                  Recipes
                </a>
              </li>

              <li>
                <a href="#franchise" className="hover:text-white">
                  Franchise
                </a>
              </li>

            </ul>

          </div>


          {/* Categories */}

          <div>

            <h3 className="font-bold text-lg mb-4">
              Categories
            </h3>

            <ul className="space-y-2 text-sm text-green-100">

              <li>Chicken & Meat</li>
              <li>Eggs</li>
              <li>Dairy Products</li>
              <li>Nuts & Seeds</li>
              <li>Vegetables</li>
              <li>Fruits</li>
              <li>Bakery & Snacks</li>
              <li>Restaurants</li>

            </ul>

          </div>


          {/* Company */}

          <div>

            <h3 className="font-bold text-lg mb-4">
              Company
            </h3>

            <ul className="space-y-2 text-sm text-green-100">

              <li>
                <a href="#about" className="hover:text-white">
                  About Us
                </a>
              </li>

              <li>
                <a href="#franchise" className="hover:text-white">
                  Franchise
                </a>
              </li>

              <li>Careers</li>

              <li>Privacy Policy</li>

              <li>Terms & Conditions</li>

            </ul>

          </div>


          {/* Contact */}

          <div id="contact-info">

            <h3 className="font-bold text-lg mb-4">
              Contact Us
            </h3>

            <div className="space-y-3 text-sm text-green-100">

              <p className="flex items-start gap-3">

                <FaPhone className="mt-1" />

                <span>
                  +91 96407 01380
                </span>

              </p>


              <p className="flex items-start gap-3">

                <FaEnvelope className="mt-1" />

                <span>
                  support@eatprotein.in
                </span>

              </p>


              <p className="flex items-start gap-3">

                <FaMapMarkerAlt className="mt-1" />

                <span>
                  Hyderabad, Telangana,
                  India
                </span>

              </p>

            </div>

          </div>

        </div>


        {/* Bottom */}

        <div className="border-t border-green-800 py-5 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-xs text-green-200 text-center md:text-left">
            © 2026 Eat Protein. All rights reserved.
          </p>

          <p className="text-xs text-green-200">
            Eat Healthy. Live Strong.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;