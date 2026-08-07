import {
  FaUsers,
  FaStore,
  FaTruck,
  FaLeaf,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    number: "10K+",
    text: "Happy Customers",
  },
  {
    icon: <FaStore />,
    number: "500+",
    text: "Stores Across India",
  },
  {
    icon: <FaTruck />,
    number: "200K+",
    text: "Orders Delivered",
  },
  {
    icon: <FaLeaf />,
    number: "60+",
    text: "Protein Categories",
  },
  {
    icon: <FaStar />,
    number: "4.8",
    text: "Average Rating",
  },
  {
    icon: <FaShieldAlt />,
    number: "99%",
    text: "Customer Satisfaction",
  },
];

const Stats = () => {
  return (
    <section  className="py-3 bg-white">
      <div className="max-w-8xl mx-auto px-5 lg:px-8">

        <div className="bg-green-700 rounded-2xl overflow-hidden">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

            {stats.map((item, index) => (

              <div
                key={index}
                className="flex items-center justify-center gap-3 p-5 border-b md:border-b-0 lg:border-r last:border-r-0 border-green-600 hover:bg-green-600 transition"
              >

                <div className="text-2xl text-green-100">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.number}
                  </h3>

                  <p className="text-xs text-green-100">
                    {item.text}
                  </p>
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Stats;