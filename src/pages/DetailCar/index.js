import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Accordion, Button } from "react-bootstrap";
import axios from "axios";
import { IntlProvider, FormattedNumber } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "../../components/SectionNavigationBar";
import Footer from "../../components/SectionFooter";
import { DateRange } from "react-date-range";
import "./index.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DetailCar = () => {
  const [car, setCar] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectionRange, setSelectionRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection',
    }
  ]);
  const [jumlahHari, setJumlahHari] = useState(0);
  const [hargaSewa, setHargaSewa] = useState(0);
  // const token = window.localStorage.getItem("token");
  

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('popstate', () => { 
      navigate("/cars");
    });
    const SEARCH_URL = `https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`;
    axios
      .get(SEARCH_URL)
      .then((response) => {
        setCar(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const handleTanggal = () => {
    setSelectionRange([
      {
        startDate: null,
        endDate: null,
        key: 'selection',
      }
    ]);
    setHargaSewa(0);
    setJumlahHari(0);

  }
  useEffect(() => {

    if (selectionRange[0].endDate && selectionRange[0].startDate) { //kalau udah select tanggal
      const totalHari = (selectionRange[0].endDate - selectionRange[0].startDate)/86400000+1; //hitung jumlah hari
      if(selectionRange[0].startDate < new Date()){
        window.alert("Tanggal yang Anda pilih tidak sesuai!");
        handleTanggal();
      } else if (totalHari > 7) { // jika lebih dari 7 hari user akan pilih ulang
        handleTanggal();
        window.alert("Tidak boleh sewa lebih dari 7 hari!");
      } else {
        setJumlahHari(totalHari); // hitung berapa hari berdasarkan tanggal yang dipilih
        setHargaSewa(car.price*jumlahHari); // menentukan harga
      }
    }
  }, [selectionRange, jumlahHari]);

  

  const handleBayar = (e) => {
    e.preventDefault();
    const sendData = {start_rent_at: selectionRange[0].startDate, //tanggal awal sewa
                      finish_rent_at: selectionRange[0].endDate, // tanggal akhir sewa
                      jumlah_hari_sewa: jumlahHari, // jumlah hari
                      harga_sewa_total: hargaSewa, // total biaya
                      harga_sewa_harian: car.price, // harga sewa per hari
                      car_id: id, // id mobil
                      nama_mobil: car.name, // nama mobil
                      kategori_mobil: car.category, // kategori mobil
                    };
    // if (token) { //udah login atau belum
    //   window.sessionStorage.setItem("LastOrder", JSON.stringify(sendData)); 
    //   navigate("/payment", {state: sendData});
    // } else {
    //   window.sessionStorage.setItem("LastOrder", JSON.stringify(sendData));
    //   navigate("/payment");
    // }
    window.sessionStorage.setItem("LastOrder", JSON.stringify(sendData));
    navigate("/payment"); 
  }

  return (
    <div>
      <NavigationBar />
      <div className="hero-div"></div>
      <div className="detail-section w-75">
        <Card className="card-detail">
          <Card.Body className="d-flex flex-column">
            <Card.Title className="detail-title">Tentang Paket</Card.Title>
            <Card.Title className="detail-title">Include</Card.Title>
            <ul className="detail-list">
              <li>
                Apa saja yang termasuk dalam paket misal durasi max 12 jam
              </li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
            <Card.Title className="detail-title">Exclude</Card.Title>
            <ul className="detail-list">
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Refund, Reschedule, Overtime
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="detail-list">
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
        <Card className="card-detail-total d-flex flex-direction-column gap-3 p-md-4">
          <Card.Img variant="top" src={car.image} />
          <Card.Body className="d-flex flex-column gap-2">
            <Card.Title className="detail-title">{car.name}</Card.Title>
            <div className="d-flex category">
              <FontAwesomeIcon icon={faUserGroup} className="category-icon" />
              <Card.Text>{car.category}</Card.Text>
            </div>
            <p>Tentukan lama sewa mobil (max. 7 hari)</p>
            <DateRange
            className="card-detail__calender"
            startDatePlaceholder="Tanggal Awal Sewa"
            endDatePlaceholder="Tanggal Akhir Sewa"
            onChange={item => setSelectionRange([item.selection])}
            retainEndDateOnFirstSelection={true}
            ranges={selectionRange}
            />
            <strong className="d-flex justify-content-between">
              <Card.Text>Total</Card.Text>
              <IntlProvider locale="id">
                Rp <FormattedNumber value={hargaSewa} currency="IDR"/>{" "}
              </IntlProvider>
            </strong>
          </Card.Body>
          {jumlahHari ? <Button variant='success' style={{width: '100%'}} onClick={handleBayar}>Lanjutkan Pembayaran</Button> :
            <Button variant='success' style={{width: '100%'}} disabled>Lanjutkan Pembayaran</Button>}
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default DetailCar;
