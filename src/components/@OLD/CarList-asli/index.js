import React from "react";
import "./index.css";
import SectionHero from "../../SectionHero";
import { Form, Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IntlProvider, FormattedNumber } from "react-intl";

const CariMobil = () => {
  const BASE_URL = "https://bootcamp-rent-car.herokuapp.com/admin/car/";

  let navigate = useNavigate();
  const [mobil, setMobil] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCarsList(BASE_URL);
  }, []);

  function setCarsList(URL){
    axios
      .get(URL)
      .then((response) => {
        setMobil(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  }

  function handleViewDetail(id) {
    navigate(`/cars/${id}`);
  }

  return (
    <div>
      <SectionHero/>
      <Form className="cari-content">
        <Form.Group controlId="formNama" className="mt-3">
          <Form.Label>Nama Mobil</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ketik Nama/Tipe Mobil"
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group controlId="formKategori" className="mt-3">
          <Form.Label>Kategori</Form.Label>
          <Form.Select>
            <option key="blankChoice" hidden>
              Masukan Kapasitas Mobil
            </option>
            <option value="2 - 4 orang">2 - 4 Orang</option>
            <option value="4 - 6 orang">4 - 6 Orang</option>
            <option value="6 - 8 orang">6 - 8 Orang</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formHarga" className="mt-3">
          <Form.Label>Harga</Form.Label>
          <Form.Select>
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

        <Button variant="success" type="submit" className="mt-4">
          Cari Mobil
        </Button>
      </Form>
      <div className="mt-5 hasil-card">
        {loading ? (
          <h1 className="d-flex justify-content-around">Loading...</h1>
        ) : (
          <div className="d-flex flex-wrap align-items-stretch justify-content-around">
            {mobil.map((result) => {
              return (
                <Card
                  key={result.id}
                  style={{ width: "18rem", margin: "1rem" }}
                >
                  <Card.Img variant="top" src={result.image} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{result.name}</Card.Title>
                    <IntlProvider locale="id">
                      <FormattedNumber
                        value={result.price}
                        style="currency"
                        currency="IDR"
                      />{" "}
                      / hari
                    </IntlProvider>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div className="d-grid mt-auto">
                      <Button
                        variant="success"
                        onClick={() => handleViewDetail(result.id)}
                      >
                        Detail
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CariMobil;
