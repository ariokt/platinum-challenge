import React from 'react'
import ServiceImage from "../../assets/image/img_service.png";
import correctList from '../../assets/image/icon_checklist.svg';
import "./index.css";

const Services = () => {
  const listContent = ["Sewa Mobil Dengan Supir di Bali 12 Jam", "Sewa Mobil Lepas Kunci di Bali 24 Jam", "Sewa Mobil Jangka Panjang Bulanan",
                       "Gratis Antar - Jemput Mobil di Bandara","Layanan Airport Transfer / Drop In Out"];

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
            <ul className="services-section__list list-unstyled d-flex flex-column">
                {listContent.map((item,y) => <li key={y} className='d-flex align-items-center'><img src={correctList} className='me-3'alt=""/><p>{item}</p></li>)}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services