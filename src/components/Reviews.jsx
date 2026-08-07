import {
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
} from "react-icons/fa";

const reviews = [
  {
    name: "Ravi Teja",
    role: "Hyderabad",
    image: "https://i.pravatar.cc/100?img=12",
    review:
      "Eat Protein helped me understand my daily protein needs and the nearby stores make it so easy to stay healthy.",
  },
  {
    name: "Anjali Sharma",
    role: "Vijayawada",
    image: "https://i.pravatar.cc/100?img=47",
    review:
      "The diet plans are personalized and easy to follow. I've seen real results in 2 months!",
  },
  {
    name: "Karthik",
    role: "Gym Trainer",
    image: "https://i.pravatar.cc/100?img=11",
    review:
      "FitPass feature brings my regular clients and the app is very user friendly.",
  },
];

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="w-full bg-white py-8 scroll-mt-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Header */}

        <div className="flex items-center justify-between mb-5">

          <h2 className="text-2xl font-bold text-gray-800">
            What Our Users Say
          </h2>

          <button className="hidden sm:flex items-center gap-2 text-green-700 font-semibold text-sm hover:text-green-900">
            View All Reviews
            <FaArrowRight />
          </button>

        </div>


        {/* Reviews */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {reviews.map((item, index) => (

            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-5 bg-white hover:shadow-lg hover:border-green-300 transition duration-300"
            >

              {/* User */}

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>

                    <h3 className="font-bold text-gray-800">
                      {item.name}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {item.role}
                    </p>

                  </div>

                </div>


                {/* Stars */}

                <div className="flex text-yellow-400 text-xs gap-1">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>

              </div>


              {/* Quote */}

              <div className="mt-4">

                <FaQuoteLeft className="text-green-600 text-xl mb-2" />

                <p className="text-sm text-gray-600 leading-6">
                  {item.review}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Reviews;