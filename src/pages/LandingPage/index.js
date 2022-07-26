import React from "react";
import Hero from "../../components/SectionHero";
import Services from "../../components/SectionServices";
import Products from "../../components/SectionProducts";
import Testimonial from "../../components/SectionTestimonial";
import Sewa from "../../components/SectionSewa";
import Faq from "../..//components/SectionFaq";
const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Products />
      <Testimonial />
      <Sewa />
      <Faq />
    </div>
  );
};

export default LandingPage;
