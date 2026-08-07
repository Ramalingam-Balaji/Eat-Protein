import chicken from "../assets/chicken_meat.png";
import eggs from "../assets/eggs.png";
import dairy from "../assets/dairy_products.png";
import nuts from "../assets/nuts_seeds.png";
import vegetables from "../assets/vegetables.png";
import fruits from "../assets/fruits.png";
import bakery from "../assets/bakery_snacks.png";
import restaurants from "../assets/restaurants.png";

const categories = [
  {
    title: "Chicken & Meat",
    image: chicken,
  },
  {
    title: "Eggs",
    image: eggs,
  },
  {
    title: "Dairy Products",
    image: dairy,
  },
  {
    title: "Nuts & Seeds",
    image: nuts,
  },
  {
    title: "Vegetables",
    image: vegetables,
  },
  {
    title: "Fruits",
    image: fruits,
  },
  {
    title: "Bakery & Snacks",
    image: bakery,
  },
  {
    title: "Restaurants",
    image: restaurants,
  },
];

const ShopCategories = () => {
  return (
    <section
      id="shop"
      className="bg-white py-8 scroll-mt-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="flex items-center justify-between mb-5">

          <h2 className="text-2xl font-bold text-gray-800">
            Shop by Category
          </h2>

          <button className="text-green-700 font-semibold text-sm hover:text-green-900">
            View All Categories →
          </button>

        </div>


        {/* Categories */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">

          {categories.map((category, index) => (

            <div
              key={index}
              className="border border-gray-200 rounded-xl p-3 bg-white hover:shadow-md hover:border-green-500 transition duration-300 cursor-pointer"
            >

              {/* Image */}

              <div className="w-full h-20 flex items-center justify-center overflow-hidden">

                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-contain"
                />

              </div>


              {/* Title */}

              <h3 className="text-center text-sm font-semibold text-gray-700 mt-2">
                {category.title}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default ShopCategories;