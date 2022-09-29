import React from "react";
import Hero from "../../components/SectionHero";
import Services from "../../components/SectionServices";
import Products from "../../components/SectionProducts";
import Testimonial from "../../components/SectionTestimonial";
import Sewa from "../../components/SectionSewa";
import Faq from "../../components/SectionFaq";
import NavigationBar from "../../components/SectionNavigationBar";
import Footer from "../../components/SectionFooter";

const LandingPage = () => {
  const timer = window.sessionStorage.getItem("TimerPembayaran");
  if (timer) {
    window.sessionStorage.removeItem("TimerPembayaran");
    window.location.reload();
  }

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
