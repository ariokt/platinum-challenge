import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import NavigationBar from "./components/SectionNavigationBar";
import Hero from "./components/SectionHero";
import Services from "./components/SectionServices";
import Products from "./components/SectionProducts";
import Testimonial from "./components/SectionTestimonial";
import Sewa from "./components/SectionSewa";
import Faq from "./components/SectionFaq";
import Footer from "./components/SectionFooter";
import CarList from "./pages/CarList";
import DetailCar from "./pages/DetailCar";

import Latihan from "./components/Latihan";
import Home from "./pages/LandingPage/Home";
import About from "./pages/LandingPage/About";
function App() {
  return (
    <div className="App">
      {/* <Latihan /> */}
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/testi" element={<Testimonial />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/cars/:id" element={<DetailCar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <Hero />
      <Services />
      <Products />
      <Testimonial />
      <Sewa />
      <Faq /> */}
      <Footer />
    </div>
  );
}

export default App;
