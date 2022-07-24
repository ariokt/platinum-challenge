import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import CarImage from "../../assets/image/img_car.png";
import "./index.css";

const Hero = () => {
  const [isHidden, setIsHidden] = useState(false);
  const locationCarDetail = useLocation();

  return (
    <div>
      <section className="hero-section">
        <div className="hero-flex hero-content">
          <div className="hero-title">
            <h1>Sewa & Rental Mobil Terbaik di kawasan Jawa Timur</h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <div
              className="hero-button"
              hidden={
                locationCarDetail.pathname !== "/cars" ? isHidden : !isHidden
              }
            >
              <Link to="/cars">
                <Button variant="success">Mulai Sewa Mobil</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-flex hero-image">
          <img src={CarImage} alt="img-car" width="100%" height="auto" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
