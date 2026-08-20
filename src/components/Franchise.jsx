import {
  FaStore,
  FaChartLine,
  FaTags,
  FaGift,
  FaUsers,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

import franchiseStore from "../assets/franchise_store.png";

const benefits = [
  {
    icon: <FaChartLine />,
    title: "Low Investment",
    desc: "High Returns",
  },
  {
    icon: <FaStore />,
    title: "Exclusive Area",
    desc: "Rights",
  },
  {
    icon: <FaTags />,
    title: "Marketing & Branding",
    desc: "Support",
  },
  {
    icon: <FaGift />,
    title: "6 Months Digital",
    desc: "Marketing",
  },
  {
    icon: <FaUsers />,
    title: "Training &",
    desc: "Onboarding",
  },
  {
    icon: <FaHeadset />,
    title: "Delivery & Tech",
    desc: "Support",
  },
];

const Franchise = () => {
  return (
    <section
      id="franchise"
      className="w-full bg-white py-10 px-4 sm:px-6 lg:px-10 scroll-mt-20"
    >
      <div className="max-w-350 mx-auto">

        {/* Main Franchise Container */}

        <div className="overflow-hidden rounded-3xl border border-green-100 bg-linear-to-r from-green-50 via-white to-green-50 shadow-sm hover:shadow-md transition duration-300">

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

            {/* ================================================= */}
            {/* LEFT - FRANCHISE STORE IMAGE */}
            {/* ================================================= */}

            

  {/* LEFT - IMAGE */}
  <div className="lg:col-span-4 flex items-center justify-center p-6 lg:p-8">
    <img
      src={franchiseStore}
      alt="Eat Protein Franchise Store"
      className="w-full max-w-[900Px] h-auto object-contain"
    />
  </div>

            {/* ================================================= */}
            {/* MIDDLE - FRANCHISE CONTENT */}
            {/* ================================================= */}

            <div className="lg:col-span-4 p-7 sm:p-8 lg:p-10 flex flex-col justify-center">

              {/* Small Label */}

              <div className="flex items-center gap-2 mb-3">

                <span className="w-8 h-0.5 bg-green-600"></span>

                <p className="text-green-600 text-sm font-bold tracking-wide">
                  BUSINESS OPPORTUNITY
                </p>

              </div>


              {/* Heading */}

              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight">
                Join the Eat Protein
              </h2>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-green-600 leading-tight">
                Franchise Family
              </h2>


              {/* Description */}

              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7 max-w-md">
                Low investment. High returns. Be a part of India's
                fastest-growing health & nutrition platform.
              </p>


              {/* Highlights */}

              <div className="flex flex-wrap gap-3 mt-5">

                <div className="flex items-center gap-2 bg-white border border-green-100 rounded-lg px-3 py-2">

                  <FaChartLine className="text-green-600" />

                  <span className="text-xs font-semibold text-gray-700">
                    High Returns
                  </span>

                </div>


                <div className="flex items-center gap-2 bg-white border border-green-100 rounded-lg px-3 py-2">

                  <FaStore className="text-green-600" />

                  <span className="text-xs font-semibold text-gray-700">
                    Growing Brand
                  </span>

                </div>

              </div>


              {/* Button */}

              <button
                className="mt-6 w-fit flex items-center gap-3 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold shadow-sm hover:shadow-md transition duration-300"
              >

                Become a Franchise Partner

                <FaArrowRight className="text-sm" />

              </button>

            </div>


            {/* ================================================= */}
            {/* RIGHT - BENEFITS */}
            {/* ================================================= */}

            <div className="lg:col-span-4 p-6 sm:p-8 flex items-center">

              <div className="w-full">

                <div className="mb-5">

                  <p className="text-lg font-bold text-gray-800">
                    Why Partner With Us?
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Everything you need to grow your business.
                  </p>

                </div>


                {/* Benefits Grid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                  {benefits.map((item, index) => (

                    <div
                      key={index}
                      className="group flex items-center gap-3 p-3.5 bg-white border border-green-100 rounded-xl hover:border-green-300 hover:bg-green-50 hover:shadow-sm transition duration-300"
                    >

                      {/* Icon */}

                      <div className="shrink-0 w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 text-lg group-hover:bg-green-600 group-hover:text-white transition duration-300">

                        {item.icon}

                      </div>


                      {/* Text */}

                      <div>

                        <p className="text-xs sm:text-sm font-bold text-gray-700">
                          {item.title}
                        </p>

                        <p className="text-xs text-gray-500 mt-0.5">
                          {item.desc}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Franchise;