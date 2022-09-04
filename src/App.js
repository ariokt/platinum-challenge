import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Services from "./components/SectionServices";
import Products from "./components/SectionProducts";
import Testimonial from "./components/SectionTestimonial";
import Faq from "./components/SectionFaq";
import CarList from "./pages/CarList";
import DetailCar from "./pages/DetailCar";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/cars/:id" element={<DetailCar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
