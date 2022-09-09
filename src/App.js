import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import NavigationBar from "./components/SectionNavigationBar";
import Services from "./components/SectionServices";
import Products from "./components/SectionProducts";
import Testimonial from "./components/SectionTestimonial";
import Faq from "./components/SectionFaq";
import Footer from "./components/SectionFooter";
import CarList from "./pages/CarList";
import DetailCar from "./pages/DetailCar";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login"
import Ticket from "./pages/Ticket";
import Payment from "./pages/Payment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/testi" element={<Testimonial />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/cars/:id" element={<DetailCar />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cars/:id/ticket" element={<Ticket />} />
          <Route path="/cars/:id/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
