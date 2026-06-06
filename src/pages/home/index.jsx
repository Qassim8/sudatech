import React from "react";
import Hero from "../../components/Hero";
import Categories from "../../components/Categories";
import FeaturedProducts from "../../components/FeaturedProducts";
import WhyUs from "../../components/WhyUs";
import Testimonials from "../../components/Testimonials";
import CTABox from "../../components/CTABox";

const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyUs />
      <Testimonials />
      <CTABox />
    </main>
  );
};

export default Home;
