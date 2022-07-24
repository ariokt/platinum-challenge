import React from 'react'
import Icon1 from "../assets/image/icon_complete-1.png";
import Icon2 from "../assets/image/icon_price-1.png";
import Icon3 from "../assets/image/icon_24hrs-1.png";
import Icon4 from "../assets/image/icon_professional-1.png";


const Products = () => {
  return (
    <div>
      <section id="products" className="product-section">
        <div className="product-title">
          <h1>Why Us?</h1>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="product-card-container">
          <div className="product-card-content">
            <img src={Icon1} alt="" />
            <h1>Mobil Lengkap</h1>
            <p>
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </div>
          <div className="product-card-content">
            <img src={Icon2} alt="" />
            <h1>Harga Murah</h1>
            <p>
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </div>
          <div className="product-card-content">
            <img src={Icon3} alt="" />
            <h1>Layanan 24 Jam</h1>
            <p>
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </div>
          <div className="product-card-content">
            <img src={Icon4} alt="" />
            <h1>Sopir Profesional</h1>
            <p>
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products