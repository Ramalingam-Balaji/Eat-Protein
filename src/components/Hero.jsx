import hero from "../assets/hero.png";
import {
  FaAppleAlt,
  FaHeartbeat,
  FaDumbbell,
  FaUtensils,
  FaMapMarkerAlt,
  FaGooglePlay,
  FaStar,
  FaClipboardList,
  FaFire,
  FaStore,
  FaDrumstickBite,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section  className="bg-linear-to-r from-green-50 to-white pt-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 items-center">

          {/* Left Side */}

          <div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">

              Eat Healthy.
              <br />

              <span className="text-green-600">
                Gain & Lose Weight.
              </span>
            </h1>
               <h6 className="text-1xl lg:text-1xl font-bold leading-tight">
                One app for a stronger you!
                </h6>

            <p className="mt-6 text-gray-600 text-lg leading-8">

              Achieve your fitness goals with personalized diet plans,
              workout schedules and healthy recipes specially designed
              for you.

            </p>

           {/* Icons */}

<div className="flex flex-wrap gap-1 mt-8">

  <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
    <FaAppleAlt className="text-red-500 text-2xl" />
    <span className="font-medium text-gray-700">Healthy Foods</span>
  </div>

  <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
    <FaHeartbeat className="text-green-600 text-2xl" />
    <span className="font-medium text-gray-700">Diet Plans</span>
  </div>

  <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
    <FaDumbbell className="text-orange-500 text-2xl" />
    <span className="font-medium text-gray-700">Fitness</span>
  </div>

  <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
    <FaUtensils className="text-purple-500 text-2xl" />
    <span className="font-medium text-gray-700">Recipes</span>
  </div>

</div>

            {/* Buttons */}

           <div className="mt-10">

  {/* Buttons */}
  <div className="flex flex-wrap gap-5">

    {/* Download App Button */}
    <a
       href="https://play.google.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
    >
      <FaGooglePlay className="text-xl" />
      Download App
    </a>

    {/* Find Stores Button */}
    <button
      onClick={() =>
        window.open(
          "https://www.google.com/maps/search/healthy+food+stores+near+me",
          "_blank"
        )
      }
      className="flex items-center gap-2 border-2 border-gray-300 hover:border-green-600 hover:text-green-600 px-8 py-4 rounded-xl font-semibold transition duration-300"
    >
      <FaMapMarkerAlt className="text-red-500 text-xl" />
      Find Stores Near You
    </button>

  </div>

  {/* Ratings */}
  <div className="flex items-center gap-3 mt-5">

    <div className="flex text-yellow-400 text-xl">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>

    <p className="text-gray-600 font-medium">
      <span className="font-bold text-black">4.9/5</span> from
      <span className="font-bold"> 50,000+</span> happy users
    </p>

  </div>

</div>

          </div>

          {/* Right Side */}

<div className="relative flex justify-center items-center mt-16 lg:mt-0">

  {/* Hero Image */}
  <img
    src={hero}
    alt="Hero"
    className="w-75 md:w-95 lg:w-75 relative z-10"
  />
  {/* Mobile Cards */}

<div className="grid grid-cols-1 gap-4 mt-1 lg:hidden">

  <div className="bg-white rounded-xl shadow-md p-4">
    <h3 className="text-green-600 font-bold">Protein Goal</h3>
    <p className="text-2xl font-bold">60g</p>
  </div>

  <div className="bg-white rounded-xl shadow-md p-4">
    <h3 className="text-orange-500 font-bold">Calories</h3>
    <p className="text-2xl font-bold">420 kcal</p>
  </div>

  {/*<div className="bg-white rounded-xl shadow-md p-4">
    <h3 className="text-blue-600 font-bold">Active Stores</h3>
    <p className="text-2xl font-bold">25+</p>
  </div>*/}

  <div className="bg-white rounded-xl shadow-md p-4">
    <h3 className="text-red-500 font-bold">Diet Plan</h3>
    <p className="font-semibold">High Protein</p>
  </div>

</div>

  {/* Protein Goal */}
  <div className="hidden lg:block absolute top-6 -right-20 bg-white shadow-xl rounded-2xl p-5 w-56 hover:scale-105 transition duration-300">

    <div className="flex items-center gap-3">

      <div className="bg-green-100 p-3 rounded-full">
        <FaDrumstickBite className="text-green-600 text-2xl" />
      </div>

      <div>
        <p className="text-gray-500 text-sm">Protein Goal</p>
        <h2 className="text-2xl font-bold">60g</h2>
        <p className="text-xs text-gray-400">Today's Intake</p>
      </div>

    </div>

  </div>

  {/* Calories */}
  <div className="hidden lg:block absolute top-48 -right-24 bg-white shadow-xl rounded-2xl p-5 w-56 hover:scale-105 transition duration-300">

    <div className="flex items-center gap-3">

      <div className="bg-orange-100 p-3 rounded-full">
        <FaFire className="text-orange-500 text-2xl" />
      </div>

      <div>
        <p className="text-gray-500 text-sm">Calories Burned</p>
        <h2 className="text-2xl font-bold">420 kcal</h2>
        <p className="text-xs text-gray-400">Today</p>
      </div>

    </div>

  </div>

  {/* Active Stores */}
  <div className="hidden lg:block absolute bottom-6 -right-20 bg-white shadow-xl rounded-2xl p-5 w-56 hover:scale-105 transition duration-300">

    <div className="flex items-center gap-3">

      <div className="bg-green-100 p-3 rounded-full">
        <FaStore className="text-green-600 text-2xl" />
      </div>

      <div>
        <p className="text-gray-500 text-sm">Active Stores</p>
        <h2 className="text-2xl font-bold">25+</h2>
        <p className="text-xs text-gray-400">Near You</p>
      </div>

    </div>

  </div>

  {/* Diet Plan */}
  <div className="hidden lg:block absolute bottom-5 -left-24 bg-white shadow-xl rounded-2xl p-5 w-56 hover:scale-105 transition duration-300">

    <div className="flex items-center gap-3">

      <div className="bg-red-100 p-3 rounded-full">
        <FaClipboardList className="text-red-500 text-2xl" />
      </div>

      <div>
        <p className="text-gray-500 text-sm">Diet Plan</p>
        <h2 className="text-xl font-bold">High Protein</h2>
        <p className="text-xs text-gray-400">Weight Gain Plan</p>
      </div>

    </div>

  </div>

</div>

        </div>

      </div>
    </section>
  );
};

export default Hero;