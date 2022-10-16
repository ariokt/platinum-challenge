import React from "react";
import './index.css'
import UserLogo from '../../assets/image/fi_users.svg'
import Accordion from "react-bootstrap/Accordion";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import { Button } from "react-bootstrap";
import { IntlProvider, FormattedNumber } from "react-intl";

const DetailPesananPayment = ({setDoneMetodePembayaran, carOrder, pembayaran, setStepDone}) => {

    const dataStepOne = (data) => {
        window.sessionStorage.setItem("dataStep", JSON.stringify(data));
    }

    function statusPembayaran() { // button Bayar saat memilih metode pembayaran
        setDoneMetodePembayaran(true);
        setStepDone({one: true, two: false, three: false});
        const data = {pembayaran: pembayaran, doneMetodePembayaran: true, stepDone: {one: true, two: false, three: false}};
        dataStepOne(data);
    }
    
    if (carOrder) {
        return (
            <div className="detail-pesanan-pay"> 
                <div className="jenis">
                    <p>{carOrder.nama_mobil}</p>
                    <div>
                        <img src={UserLogo} alt=""></img>
                        <p>{carOrder.kategori_mobil}</p>    
                    </div>
                </div>
                <Accordion className="accor-head">
                    <AccordionHeader className="accor-head">Rincian</AccordionHeader>
                    <AccordionBody>
                        <div>
                            <p className="head-rincian">Harga</p>
                            <ul className="decs-rincian">
                                <li>
                                    <div className="decs-2">
                                        <IntlProvider locale="id">
                                            <p>Sewa Mobil Rp. <FormattedNumber value={carOrder.harga_sewa_harian} currency="IDR"/> x {carOrder.jumlah_hari_sewa} Hari</p>
                                        </IntlProvider>
                                        <IntlProvider locale="id">
                                            <p style={{fontWeight:"700"}}>Rp. <FormattedNumber value={carOrder.harga_sewa_total} currency="IDR"/></p>
                                        </IntlProvider>
                                    </div>
                                    
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="head-rincian" >Biaya Lainnya</p>
                            <ul className="decs-rincian">
                                <li >
                                    <div className="decs-2">
                                        <p>Pajak</p>
                                        <p className="green-text-dec">Termasuk</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="decs-2">
                                        <p>Biaya makan sopir</p>
                                        <p className="green-text-dec">Termasuk</p>
                                    </div>
                                    
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="head-rincian">Belum Termasuk</p>
                            <ul className="decs-rincian">
                                <li>
                                    <p>Bensin</p>
                                </li>
                                <li>
                                    <p>Tol dan parkir</p>
                                </li>
                            </ul>
                        </div>
                    </AccordionBody>
                </Accordion>
                <div className="line"></div>
                <div className="total-payment">
                    <p>Total</p>
                    <IntlProvider locale="id">
                        <p style={{fontWeight:"700"}}>Rp. <FormattedNumber value={carOrder.harga_sewa_total} currency="IDR"/></p>
                    </IntlProvider>
                </div>
                <div className="d-grid">         
                    <Button onClick= {() => statusPembayaran()} variant='success' disabled={pembayaran ? false : true} >Bayar</Button>
                </div>
            </div>
        )
    } else {
        return <div></div>;
    }
    
}
export default DetailPesananPayment;