import {
  FaMobileAlt,
  FaMapMarkerAlt,
  FaShoppingBag,
  FaGift,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

const steps = [
  {
    number: "1",
    icon: <FaMobileAlt />,
    title: "Download App",
    description: "Download & sign up in seconds",
  },
  {
    number: "2",
    icon: <FaMapMarkerAlt />,
    title: "Find & Explore",
    description: "Find stores, products & plans near you",
  },
  {
    number: "3",
    icon: <FaShoppingBag />,
    title: "Order / Join",
    description: "Order your favorites or join fitness & diet plans",
  },
  {
    number: "4",
    icon: <FaGift />,
    title: "Track & Earn",
    description: "Track your progress and earn rewards",
  },
  {
    number: "5",
    icon: <FaHeart />,
    title: "Stay Healthy",
    description: "Stay consistent and live a healthy life",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-5">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-10">

          <p className="text-green-600 font-semibold">
            Simple & Easy
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-1">
            How Eat Protein Works?
          </h2>

          <p className="text-gray-500 mt-3">
            Everything you need to start your healthy lifestyle.
          </p>

        </div>

        {/* Desktop Flow */}

        <div className="hidden lg:flex items-start justify-between">

          {steps.map((step, index) => (

            <div
              key={index}
              className="flex items-start flex-1"
            >

              {/* Step */}

              <div className="flex flex-col items-center text-center w-full">

                <div className="relative">

                  <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-100 flex items-center justify-center text-green-600 text-2xl shadow-sm hover:bg-green-600 hover:text-white transition duration-300">
                    {step.icon}
                  </div>

                  <span className="absolute -top-2 -right-2 bg-green-600 text-white w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold">
                    {step.number}
                  </span>

                </div>

                <h3 className="font-bold text-gray-800 mt-4">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2 max-w-[160px]">
                  {step.description}
                </p>

              </div>

              {/* Arrow */}

              {index !== steps.length - 1 && (
                <div className="flex items-center pt-7 text-green-400 px-2">

                  <div className="w-16 border-t border-dashed border-green-300"></div>

                  <FaArrowRight />

                </div>
              )}

            </div>

          ))}

        </div>

        {/* Mobile / Tablet Flow */}

        <div className="lg:hidden space-y-4">

          {steps.map((step, index) => (

            <div
              key={index}
              className="flex items-center gap-4 bg-green-50 rounded-xl p-4 border border-green-100"
            >

              <div className="relative flex-shrink-0">

                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-green-600 text-xl shadow-sm">
                  {step.icon}
                </div>

                <span className="absolute -top-1 -right-1 bg-green-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold">
                  {step.number}
                </span>

              </div>

              <div>

                <h3 className="font-bold text-gray-800">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {step.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;