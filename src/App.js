import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import CarList from "./pages/CarList";
import DetailCar from "./pages/DetailCar";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoutes from "./route/PrivateRoutes";
import Payment from "./pages/Payment";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Invoice from "./pages/Invoice";

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
          <Route element={<PrivateRoutes />}>
            <Route path="/pembayaran" element={<Payment />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path='/invoice' element={<Invoice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
