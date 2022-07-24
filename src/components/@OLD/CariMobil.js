import React from "react";
import HasilCari from "./HasilCari";
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const CariMobil = () => {
  const BASE_URL = `https://bootcamp-rent-car.herokuapp.com/admin/car`;

  const [mobil, setMobil] = useState([]);
  const [namaMobil, setNamaMobil] = useState("");
  const [kategoriMobil, setKategoriMobil] = useState("");
  const [hargaMobil, setHargaMobil] = useState("");

  useEffect(() => {
    axios.get(BASE_URL).then((response) => {
      setMobil(response.data);
      // console.log(response.data);
    });
  }, []);

  const handleSearchNama = (e) => {
    setNamaMobil(e.target.value);
  };
  const handleSearchKategori = (e) => {
    setKategoriMobil(e.target.value);
  };
  const handleSearchHarga = (e) => {
    setHargaMobil(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Nama Mobil 👉️", namaMobil);
    console.log("Kategori Mobil 👉️", kategoriMobil);
    console.log("Harga Mobil 👉️", hargaMobil);
  };

  return (
    <div>
      <Form className="cari-content">
        <Form.Group controlId="formNama" className="mt-3">
          <Form.Label>Nama Mobil</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ketik Nama/Tipe Mobil"
            onChange={handleSearchNama}
            autoComplete="off"
            value={namaMobil}
          />
        </Form.Group>
        <Form.Group controlId="formKategori" className="mt-3">
          <Form.Label>Kategori</Form.Label>
          <Form.Select onChange={handleSearchKategori}>
            <option key="blankChoice" hidden>
              Masukan Kapasitas Mobil
            </option>
            <option value="3">2 - 4 Orang</option>
            <option value="5">4 - 6 Orang</option>
            <option value="7">6 - 8 Orang</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formHarga" className="mt-3">
          <Form.Label>Harga</Form.Label>
          <Form.Select onChange={handleSearchHarga}>
            <option key="blankChoice" hidden>
              Masukan Harga Sewa per Hari
            </option>
            <option value="400000"> &#60; Rp.400.000 </option>
            <option value="600000">Rp.400.000 - Rp. 600.000</option>
            <option value="600001"> &#62; Rp. 600.000</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formSewa" className="mt-3">
          <Form.Label>Status</Form.Label>
          <Form.Select disabled>
            <option key="blankChoice" hidden>
              Status Mobil
            </option>
            <option value="sedia">Sedia</option>
            <option value="sewa">Disewa</option>
          </Form.Select>
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          className="mt-4"
          onClick={handleClick}
        >
          Cari Mobil
        </Button>
      </Form>

      {/* Hasil Section */}
      <div className="mt-5 hasil-card">
        <div className="d-flex flex-wrap align-items-baseline justify-content-around">
          {mobil.map((result, index) => {
            return mobil.length < 0 ? (
              <div className="hasil-card">Data Tidak Ada</div>
            ) : (
              <HasilCari result={result} index={index} />
            );
            // return mobil.length < 0 ? (
            //   <div className="hasil-card">Data Tidak Ada</div>
            // ) : (
            //   <HasilCari result={result} index={index} />
            // );
          })}
        </div>
      </div>
    </div>
  );
};

export default CariMobil;
