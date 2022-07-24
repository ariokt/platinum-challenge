import React from 'react'
import ServiceImage from "../../assets/image/img_service.png";
import "./index.css";

const Services = () => {
  return (
    <div>
      <section id="services" className="services-section">
        <div className="services-flex services-image">
          <img
            src={ServiceImage}
            alt="img-services"
            width="80%"
            height="auto"
          />
        </div>
        <div className="services-flex services-content">
          <div className="services-title">
            <h1>Best Car Rental for any kind of trip in East Java!</h1>
            <p>
              Sewa mobil di Jawa Timur bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul className="services-list">
              <li>Sewa Mobil dengan Supit di Bali 12 Jam</li>
              <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
              <li>Sewa Mobil Jangka Panjang Bulanan</li>
              <li>Gratis Antar-Jemput Mobil di Bandara</li>
              <li>Layanan Airport Transfer/Drop In Out</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services