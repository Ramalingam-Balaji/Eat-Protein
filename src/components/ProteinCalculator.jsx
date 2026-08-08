import { useState } from "react";

import {
  FaAppleAlt,
  FaCalculator,
  FaCheckCircle,
  FaHeartbeat,
  FaUtensils,
  FaDrumstickBite,
  FaEgg,
  FaLeaf,
  FaGlassWhiskey,
  FaRedo,
  FaFire,
} from "react-icons/fa";

const ProteinCalculator = () => {
  // ==============================
  // INPUT STATES
  // ==============================

  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goal, setGoal] = useState("Weight Loss");

  // ==============================
  // RESULT STATES
  // ==============================

  const [protein, setProtein] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [bmiStatus, setBmiStatus] = useState("");
  const [dietPlan, setDietPlan] = useState(null);

  // ==============================
  // CALCULATE FUNCTION
  // ==============================

  const calculate = () => {
    const weightValue = Number(weight);
    const heightValue = Number(height) / 100;

    // Check values
    if (
      !weightValue ||
      !heightValue ||
      weightValue <= 0 ||
      heightValue <= 0
    ) {
      alert("Please enter valid weight and height.");
      return;
    }

    // ============================
    // BMI CALCULATION
    // ============================

    const bmiValue =
      weightValue / (heightValue * heightValue);

    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setBmiStatus("Underweight");
    } else if (bmiValue < 25) {
      setBmiStatus("Healthy Weight");
    } else if (bmiValue < 30) {
      setBmiStatus("Overweight");
    } else {
      setBmiStatus("Obesity");
    }

    // ============================
    // PROTEIN CALCULATION
    // ============================

    let multiplier = 1.2;

    if (goal === "Weight Loss") {
      multiplier = 1.4;
    } else if (goal === "Weight Gain") {
      multiplier = 1.6;
    } else if (goal === "Maintain Weight") {
      multiplier = 1.2;
    }

    const proteinValue = Math.round(
      weightValue * multiplier
    );

    setProtein(proteinValue);

    // ============================
    // MEAL PROTEIN
    // ============================

    const breakfastProtein = Math.round(
      proteinValue * 0.25
    );

    const lunchProtein = Math.round(
      proteinValue * 0.30
    );

    const snackProtein = Math.round(
      proteinValue * 0.15
    );

    const dinnerProtein = Math.round(
      proteinValue * 0.30
    );

    // ============================
    // DIET PLAN
    // ============================

    let meals;

    if (goal === "Weight Loss") {
      meals = {
        breakfast: {
          title: "Healthy Breakfast",
          foods: "Eggs, Greek yogurt, oats and fresh berries",
          protein: breakfastProtein,
          icon: <FaEgg />,
        },

        lunch: {
          title: "Protein Lunch",
          foods: "Grilled chicken, vegetables and brown rice",
          protein: lunchProtein,
          icon: <FaDrumstickBite />,
        },

        snack: {
          title: "Protein Snack",
          foods: "Greek yogurt, almonds and fresh fruit",
          protein: snackProtein,
          icon: <FaGlassWhiskey />,
        },

        dinner: {
          title: "Light Dinner",
          foods: "Paneer or tofu with vegetables and salad",
          protein: dinnerProtein,
          icon: <FaLeaf />,
        },
      };
    } else if (goal === "Weight Gain") {
      meals = {
        breakfast: {
          title: "Power Breakfast",
          foods:
            "Eggs, oats, milk, banana and peanut butter",
          protein: breakfastProtein,
          icon: <FaEgg />,
        },

        lunch: {
          title: "High Protein Lunch",
          foods:
            "Chicken or paneer, rice, vegetables and curd",
          protein: lunchProtein,
          icon: <FaDrumstickBite />,
        },

        snack: {
          title: "High Protein Snack",
          foods:
            "Milk, peanut butter sandwich and mixed nuts",
          protein: snackProtein,
          icon: <FaGlassWhiskey />,
        },

        dinner: {
          title: "Protein Dinner",
          foods:
            "Chicken or paneer, roti, vegetables and curd",
          protein: dinnerProtein,
          icon: <FaLeaf />,
        },
      };
    } else {
      meals = {
        breakfast: {
          title: "Balanced Breakfast",
          foods: "Eggs, oats, milk and fresh fruit",
          protein: breakfastProtein,
          icon: <FaEgg />,
        },

        lunch: {
          title: "Balanced Lunch",
          foods:
            "Chicken or paneer, rice and vegetables",
          protein: lunchProtein,
          icon: <FaDrumstickBite />,
        },

        snack: {
          title: "Healthy Snack",
          foods: "Greek yogurt, nuts and fresh fruit",
          protein: snackProtein,
          icon: <FaGlassWhiskey />,
        },

        dinner: {
          title: "Balanced Dinner",
          foods:
            "Fish, paneer or tofu with roti and vegetables",
          protein: dinnerProtein,
          icon: <FaLeaf />,
        },
      };
    }

    setDietPlan(meals);
  };

  // ==============================
  // RESET FUNCTION
  // ==============================

  const reset = () => {
    setAge("");
    setWeight("");
    setHeight("");
    setGoal("Weight Loss");

    setProtein(0);
    setBmi(0);
    setBmiStatus("");
    setDietPlan(null);
  };

  // ==============================
  // JSX
  // ==============================

  return (
    <section className="bg-white py-5">

      <div className="max-w-8xl mx-auto px-5 lg:px-8">

        {/* =========================================
            CALCULATOR SECTION
        ========================================= */}

        <div className="bg-gradient-to-br from-green-50 via-white to-green-100 rounded-3xl shadow-lg border border-green-100 overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 lg:p-8">

            {/* =====================================
                LEFT CONTENT
            ===================================== */}

            <div className="lg:col-span-4 flex flex-col justify-center">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center shadow-md">
                  <FaAppleAlt className="text-xl" />
                </div>

                <span className="text-green-700 font-bold">
                  Nutrition Calculator
                </span>

              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">

                Calculate Your Daily

                <span className="block text-green-600">
                  Protein Requirement
                </span>

              </h2>

              <p className="text-gray-600 mt-5 leading-7">
                Get a simple estimate of your daily protein
                requirement based on your age, weight,
                height and fitness goal.
              </p>

              <div className="space-y-3 mt-6">

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-600" />

                  <span className="text-sm text-gray-700">
                    Personalized protein target
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaHeartbeat className="text-green-600" />

                  <span className="text-sm text-gray-700">
                    BMI calculation
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaUtensils className="text-green-600" />

                  <span className="text-sm text-gray-700">
                    Personalized diet plan
                  </span>
                </div>

              </div>

            </div>

            {/* =====================================
                FORM
            ===================================== */}

            <div className="lg:col-span-5 bg-white rounded-2xl p-5 lg:p-6 shadow-md border border-gray-100">

              <div className="flex items-center gap-2 mb-5">

                <FaCalculator className="text-green-600" />

                <h3 className="font-bold text-gray-800">
                  Enter Your Details
                </h3>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                
{/* AGE */}
<div>
  <label className="text-sm font-semibold text-gray-700">
    Age
  </label>

  <div className="flex mt-2">
    <input
      type="number"
      min="1"
      placeholder="0"
      value={age}
      onChange={(e) => setAge(e.target.value)}
      className="w-full border border-gray-200 rounded-l-lg px-3 py-3 outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500"
    />

    <span className="bg-gray-100 px-3 flex items-center rounded-r-lg text-sm text-gray-500">
      Years
    </span>
  </div>
</div>


{/* WEIGHT */}
<div>
  <label className="text-sm font-semibold text-gray-700">
    Weight
  </label>

  <div className="flex mt-2">
    <input
      type="number"
      min="1"
      placeholder="0"
      value={weight}
      onChange={(e) => setWeight(e.target.value)}
      className="w-full border border-gray-200 rounded-l-lg px-3 py-3 outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500"
    />

    <span className="bg-gray-100 px-3 flex items-center rounded-r-lg text-sm text-gray-500">
      kg
    </span>
  </div>
</div>


{/* HEIGHT */}
<div>
  <label className="text-sm font-semibold text-gray-700">
    Height
  </label>

  <div className="flex mt-2">
    <input
      type="number"
      min="1"
      placeholder="0"
      value={height}
      onChange={(e) => setHeight(e.target.value)}
      className="w-full border border-gray-200 rounded-l-lg px-3 py-3 outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500"
    />

    <span className="bg-gray-100 px-3 flex items-center rounded-r-lg text-sm text-gray-500">
      cm
    </span>
  </div>
</div>



                {/* GOAL */}

                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Goal
                  </label>

                  <select
                    value={goal}
                    onChange={(e) =>
                      setGoal(e.target.value)
                    }
                    className="w-full mt-2 border border-gray-200 rounded-lg px-3 py-3 outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500"
                  >
                    <option>Weight Loss</option>
                    <option>Weight Gain</option>
                    <option>Maintain Weight</option>
                  </select>
                </div>

              </div>

              {/* BUTTONS */}

              <div className="mt-6 space-y-3">

                {/* CALCULATE */}

                <button
                  type="button"
                  onClick={calculate}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 shadow-md hover:shadow-lg transition"
                >
                  <FaCalculator />

                  Calculate My Plan
                </button>

                {/* RESET */}

                <button
                  type="button"
                  onClick={reset}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold flex justify-center items-center gap-2 border border-gray-200 transition"
                >
                  <FaRedo />

                  Reset
                </button>

              </div>

            </div>

            {/* =====================================
                RESULT
            ===================================== */}

            <div className="lg:col-span-3 bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col justify-center text-center">

              <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <FaDrumstickBite className="text-2xl" />
              </div>

              <p className="text-gray-600 font-semibold mt-4">
                Your Daily Protein Goal
              </p>

              <div className="my-2">

                <span className="text-5xl font-extrabold text-green-600">
                  {protein > 0 ? protein : "--"}
                </span>

                <span className="text-xl font-semibold text-gray-500 ml-2">
                  g
                </span>

              </div>

              <p className="text-sm text-gray-500">
                Protein / day
              </p>

              {/* BMI RESULT */}

              {bmi > 0 && (
                <div className="mt-5 pt-5 border-t border-gray-100">

                  <div className="flex items-center justify-center gap-2">

                    <FaHeartbeat className="text-red-500" />

                    <p className="text-sm text-gray-500">
                      Your BMI
                    </p>

                  </div>

                  <p className="text-3xl font-bold text-gray-800 mt-1">
                    {bmi}
                  </p>

                  <span className="inline-block mt-2 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                    {bmiStatus}
                  </span>

                </div>
              )}

              {/* GOAL RESULT */}

              {protein > 0 && (
                <div className="mt-5 bg-green-50 rounded-xl p-3">

                  <p className="text-xs text-gray-500">
                    Your Goal
                  </p>

                  <p className="font-bold text-green-700">
                    {goal}
                  </p>

                </div>
              )}

            </div>

          </div>
        </div>

        {/* =========================================
            DIET PLAN
        ========================================= */}

        {dietPlan && (
          <div className="mt-10">

            {/* TITLE */}

            <div className="text-center mb-7">

              <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                Personalized For You
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-3">

                Your{" "}

                <span className="text-green-600">
                  {goal}
                </span>{" "}

                Diet Plan

              </h2>

              <p className="text-gray-500 mt-2">
                Approximately {protein}g protein throughout your day
              </p>

            </div>

            {/* DAILY TARGET */}

            <div className="bg-green-700 text-white rounded-2xl p-5 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">

              <div>

                <p className="text-green-100 text-sm">
                  Daily Protein Target
                </p>

                <p className="text-3xl font-bold">
                  {protein}g
                </p>

              </div>

              <div className="flex items-center gap-3">

                <FaFire className="text-yellow-300 text-2xl" />

                <div>

                  <p className="font-semibold">
                    {goal}
                  </p>

                  <p className="text-green-100 text-sm">
                    Stay consistent with your plan
                  </p>

                </div>

              </div>

            </div>

            {/* MEAL CARDS */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

              <MealCard
                meal={dietPlan.breakfast}
                mealTime="Breakfast"
              />

              <MealCard
                meal={dietPlan.lunch}
                mealTime="Lunch"
              />

              <MealCard
                meal={dietPlan.snack}
                mealTime="Snack"
              />

              <MealCard
                meal={dietPlan.dinner}
                mealTime="Dinner"
              />

            </div>

          </div>
        )}

      </div>
    </section>
  );
};


// =============================================
// MEAL CARD
// =============================================

const MealCard = ({ meal, mealTime }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-5 hover:shadow-xl hover:-translate-y-1 transition duration-300">

      {/* ICON */}

      <div className="flex items-center justify-between">

        <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center text-xl">
          {meal.icon}
        </div>

        <span className="text-xs font-semibold text-gray-400 uppercase">
          {mealTime}
        </span>

      </div>

      {/* TITLE */}

      <h3 className="font-bold text-gray-800 text-lg mt-4">
        {meal.title}
      </h3>

      {/* FOOD */}

      <p className="text-sm text-gray-500 leading-6 mt-2 min-h-[48px]">
        {meal.foods}
      </p>

      {/* PROTEIN */}

      <div className="mt-4 flex items-center justify-between bg-green-50 rounded-lg px-3 py-2">

        <span className="text-sm text-gray-500">
          Protein
        </span>

        <span className="font-bold text-green-600">
          {meal.protein}g
        </span>

      </div>

    </div>
  );
};

export default ProteinCalculator;