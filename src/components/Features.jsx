import {
  FaDrumstickBite,
  FaClipboardList,
  FaDumbbell,
  FaLeaf,
  FaGift,
  FaTruck,
} from "react-icons/fa";

const data = [
  {
    icon: <FaDrumstickBite />,
    title: "High Quality Protein Foods",
    desc: "Fresh protein-rich foods from trusted suppliers.",
  },
  {
    icon: <FaClipboardList />,
    title: "Personalized Diet Plans",
    desc: "AI-powered meal plans based on your goals.",
  },
  {
    icon: <FaDumbbell />,
    title: "Fitness & Fit Pass",
    desc: "Workout routines and fitness tracking.",
  },
  {
    icon: <FaLeaf />,
    title: "Healthy Recipes",
    desc: "Nutritious recipes for every lifestyle.",
  },
  {
    icon: <FaGift />,
    title: "Rewards & Food Points",
    desc: "Earn points on every healthy purchase.",
  },
  {
    icon: <FaTruck />,
    title: "Fast Delivery Near You",
    desc: "Quick delivery of healthy meals and groceries.",
  },
];

const Features = () => {
  return (
    <section className="bg-white">

      <div className="max-w-8xl mx-auto px-5 lg:px-8">

        {/* Main Green Container */}
        <div className="bg-green-700 rounded-3xl shadow-lg overflow-hidden">

          {/* 6 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

            {data.map((item, index) => (
              <div
                key={index}
                className="
                  p-4
                  min-h-[170px]
                  border-b
                  sm:border-r
                  md:border-r
                  lg:border-r
                  border-green-600
                  last:border-r-0
                  bg-green-700
                  hover:bg-green-600
                  transition
                  duration-300
                  flex
                  flex-col
                  items-start
                "
              >

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-green-600 text-yellow-300 flex items-center justify-center text-xl mb-3">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="font-bold text-white text-sm lg:text-base leading-5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs lg:text-sm text-green-100 leading-5 mt-2">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Features;