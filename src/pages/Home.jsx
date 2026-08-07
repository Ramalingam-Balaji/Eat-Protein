import Hero from "../components/Hero";
import Features from "../components/Features";
import ProteinCalculator from "../components/ProteinCalculator";
import ShopCategories from "../components/ShopCategories";
import HowItWorks from "../components/HowItWorks";
import Stats from "../components/Stats";
import Reviews from "../components/Reviews";
import Franchise from "../components/Franchise";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <main>

      {/* ================= HOME ================= */}

      <section id="home">

        <Hero />

      </section>


      {/* ================= FEATURES ================= */}

      <section id="features">

        <Features />

      </section>


      {/* ================= DIET PLANS ================= */}

      <section id="diet-plans">

        <ProteinCalculator />

      </section>


      {/* ================= SHOP ================= */}

      <section id="shop">

        <ShopCategories />
        <Stats/>
      </section> 

      <section id="fitness">

        <HowItWorks />

      </section>
      <section id="reviews">

        <Reviews />

      </section>
      <section id="franchise">

        <Franchise />

      </section>
      <section id="about">

        <AboutUs />

      </section>

      <section id="contact">

        <Footer />

      </section>

    </main>
  );
};

export default Home;