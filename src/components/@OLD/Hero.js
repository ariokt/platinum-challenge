import React from 'react';
import CarImage from "../assets/image/img_car.png";

const Hero = () => {
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
            <button type="button" className="btn btn-success">
              Mulai Sewa Mobil
            </button>
          </div>
        </div>
        <div className="hero-flex hero-image">
          <img
            src={CarImage}
            alt="img-car"
            width="100%"
            height="auto"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero