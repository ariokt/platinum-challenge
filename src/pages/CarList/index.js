import React from "react";
import axios from "axios";
import "./index.css";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IntlProvider, FormattedNumber } from "react-intl";
import SectionHero from "../../components/SectionHero";
import NavigationBar from "../../components/SectionNavigationBar";
import Footer from "../../components/SectionFooter";
import LoadingSkeleton from "../../components/LoadingSkeleton";

const CariMobil = () => {
  const BASE_URL = "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car";

  let navigate = useNavigate();
  // const [savedCars, setSavedCars] = useState([]);
  const [mobil, setMobil] = useState([]);
  const [loading, setLoading] = useState(true);
  const [namaMobil, setNamaMobil] = useState("");
  const [kategoriMobil, setKategoriMobil] = useState("");
  const [minPrice, setMinPrice]= useState("");
  const [maxPrice, setMaxPrice]= useState("");
  const [isRented, setIsRented] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  // const [hargaMobil, setHargaMobil] = useState([]);
  // const [alertVisible, setAlertVisible] = useState(false);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   window.addEventListener('popstate', () => { 
  //     navigate("/"); //tambah
  //   });
  //   setCarsList(BASE_URL);
  // }, []);

  function setCarsList(namaMobil, kategoriMobil, minPrice, maxPrice, isRented, page, limit) {
    axios({
        method: "GET",
        url: BASE_URL,
        timeout: 120000,
        params: {
            name: namaMobil,
            category: kategoriMobil,
            minPrice: minPrice,
            maxPrice: maxPrice,
            isRented: isRented,
            page: page,
            pageSize: limit,
        },
        headers: {
            accept: 'application/json',
        }
      })
      .then((response) => { 
        const filterNull = response.data.cars.filter(
          (items) =>
            items.name !== null &&
            items.category !== null &&
            items.price !== null &&
            items.image !== null
        );
        setMobil(filterNull);
        // setSavedCars(filterNull);
        setLoading(false);
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  }

  useEffect(() => (
    setCarsList(namaMobil, kategoriMobil, minPrice, maxPrice, isRented, page, limit)
  ), [namaMobil, kategoriMobil, minPrice, maxPrice, isRented, page, limit]);

  // const handleNotData = () => {
  //   // setMobil(savedCars);
  //   setAlertVisible(true);
  //   setTimeout(() => {
  //     setAlertVisible(false);
  //   }, 2000);
  // };

  function handleViewDetail(id) {
    navigate(`/cars/${id}`);
  }

  // const handleCariMobil = (e) => {
  //   e.preventDefault();
  //   if (savedCars.length > 0) {
  //     let filterData;
  //     if (hargaMobil.includes("-")) {
  //       filterData = savedCars.filter(
  //         (item) => {
  //           return(item.price > parseInt(hargaMobil.slice(0,6)) && item.price < parseInt(hargaMobil.slice(7,13)));
  //         }
  //       );
  //     } else if (hargaMobil === "400000") {
  //       filterData = savedCars.filter(
  //         (item) => {
  //           return(item.price < parseInt(hargaMobil));
  //         }
  //       );
  //     } else if (hargaMobil === "600000") {
  //       filterData = savedCars.filter(
  //         (item) => {
  //           return(item.price > parseInt(hargaMobil));
  //         }
  //       );
  //     } else if (kategoriMobil) {
  //       filterData = savedCars.filter(
  //         (item) => {
  //           return(item.category === kategoriMobil);
  //         }
  //       );
  //     } else {
  //       filterData = savedCars.filter(
  //         (item) => {
  //           return(item.name.toLowerCase() === namaMobil.toLowerCase());
  //         }
  //       );
  //     }
  //     if (filterData.length > 0) {
  //       setMobil(filterData);
  //     } else {
  //       handleNotData();
  //     }
  //   }
  //   setNamaMobil("");
  //   setKategoriMobil("");
  //   setHargaMobil("");
  // };

  return (
    <div>
      <NavigationBar />
      <SectionHero />
      <Form className="cari-content">
        <Form.Group controlId="formNama" className="mt-3 flex-fill">
          <Form.Label>Nama Mobil</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ketik Nama/Tipe Mobil"
            autoComplete="off"
            onChange={(e) => setNamaMobil(e.target.value)}
            value={namaMobil}
          />
        </Form.Group>
        <Form.Group controlId="formKategori" className="mt-3 flex-fill">
          <Form.Label>Kategori Mobil</Form.Label>
          <Form.Select onChange={(e) => setKategoriMobil(e.target.value)}>
            <option key="blankChoice" hidden>
              Kategori
            </option>
            <option value='small'>small</option>
            <option value='medium'>medium</option>
            <option value='large'>large</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formMinPrice" className="mt-3 flex-fill">
          <Form.Label>Harga Minimal</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ketik harga minimal"
            autoComplete="off"
            onChange={(e) => setMinPrice(e.target.value)}
            value={minPrice}
          />
        </Form.Group>
        <Form.Group controlId="formMinPrice" className="mt-3 flex-fill">
          <Form.Label>Harga Maksimal</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ketik harga maksimal"
            autoComplete="off"
            onChange={(e) => setMaxPrice(e.target.value)}
            value={maxPrice}
          />
        </Form.Group>
        
        <Form.Group controlId="formSewa" className="mt-3 flex-fill">
          <Form.Label>Status</Form.Label>
          <Form.Select onChange={(e) => setIsRented(e.target.value)}>
            <option key="blankChoice" hidden>
              Status Mobil
            </option>
            <option value="false">Tidak Disewakan</option>
            <option value="true">Disewakan</option>
          </Form.Select>
        </Form.Group>

        {/* <Button
          variant="success"
          type="submit"
          className="mt-3"
          // onClick={handleCariMobil}
          disabled={!namaMobil && !kategoriMobil && !hargaMobil}
        >
          Cari Mobil
        </Button> */}
      </Form>

      <div className="mt-5 hasil-card">
        {/* Alert saat tidak ada data yang ditemukan saat search mobil */}
        {!mobil.length && (
          <Alert variant="danger" className="carlist__alert">
            Data tidak ditemukan
          </Alert>
        )}

        {/* Skeleton saat loading data */}
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <div className="car-container">
            {mobil.map((result) => {
              return (
                <Card
                  key={result.id}>
                  <Card.Img className="car-container__card-img" variant="top" src={result.image} />
                  <Card.Body className="car-container__card-body d-flex flex-column">
                    <Card.Title>{result.name}</Card.Title>
                    <IntlProvider locale="id">
                      Rp <FormattedNumber value={result.price} currency="IDR"/>{" "} / hari
                    </IntlProvider>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </Card.Text>
                    <div className="d-grid mt-auto">
                      <Button
                        variant="success"
                        onClick={() => handleViewDetail(result.id)}
                      >
                        Pilih Mobil
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CariMobil;
