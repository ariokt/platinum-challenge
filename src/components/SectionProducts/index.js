import React from "react";
import "./index.css";
import Icon1 from "../../assets/image/icon_complete-1.png";
import Icon2 from "../../assets/image/icon_price-1.png";
import Icon3 from "../../assets/image/icon_24hrs-1.png";
import Icon4 from "../../assets/image/icon_professional-1.png";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";

const Products = () => {
  const data = [
    {
      produk: "Mobil Lengkap",
      text: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
      img: Icon1,
    },
    {
      produk: "Harga Murah",
      text: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
      img: Icon2,
    },
    {
      produk: "Layanan 24 Jam",
      text: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
      img: Icon3,
    },
    {
      produk: "Sopir Profesional",
      text: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
      img: Icon4,
    },
  ];
  return (
    <div>
      <section id="products" className="product-section">
        <div className="product-title">
          <h2>Why Us?</h2>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="product-card-container">
          <Row>
            {data.map((item, index) => {
              return (
                <CardComponent
                  key={index}
                  produk={item.produk}
                  text={item.text}
                  image={item.img}
                />
              );
            })}
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Products;
