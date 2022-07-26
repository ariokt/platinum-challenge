import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const Sewa = () => {
  return (
    <div>
      <section className="sewa-section">
        <div className="sewa-container">
          <h1>Sewa Mobil di Jawa Timur Sekarang</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio
            blanditiis voluptatem libero sit quam nisi deserunt quas,
            exercitationem, rem porro quia atque aspernatur cum, ipsum nemo
            nihil vel sed.
          </p>
          <Link to="/cars">
            <Button variant="success">Mulai Sewa Mobil</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Sewa;
