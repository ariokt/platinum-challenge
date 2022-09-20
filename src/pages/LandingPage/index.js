import React, { useEffect } from "react";
import Hero from "../../components/SectionHero";
import Services from "../../components/SectionServices";
import Products from "../../components/SectionProducts";
import Testimonial from "../../components/SectionTestimonial";
import Sewa from "../../components/SectionSewa";
import Faq from "../../components/SectionFaq";
import NavigationBar from "../../components/SectionNavigationBar";
import Footer from "../../components/SectionFooter";

const LandingPage = () => {

  return (
    <div>
      <NavigationBar />
      <Hero />
      <Services />
      <Products />
      <Testimonial />
      <Sewa />
      <Faq />
      <Footer />
    </div>
  );
};

export default LandingPage;
