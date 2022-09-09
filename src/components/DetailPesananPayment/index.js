import React from "react";
import './index.css'
import UserLogo from '../../assets/image/fi_users.svg'
import Accordion from "react-bootstrap/Accordion";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import { Button } from "react-bootstrap";

const DetailPesananPayment = (props) => {
    const {pembayaran, setPembayaran, setPreviousPage} = props;

    function statusPembayaran() {
        setPembayaran(true);
        setPreviousPage(pembayaran);
    }
    const harga = "3.500.000,00"
    return <div className="detail-pesanan-pay"> 
        <div className="jenis">
            <p>Innova</p>
            <div>
                <img src={UserLogo}></img>
                <p>6-8 orang</p>    
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
                                    <p>Sewa Mobil Rp.{} x {} Hari</p>
                                    <p>Rp {harga}</p>
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
                        <ul>
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
            <p>Rp {harga}</p>
        </div>
        <div className="d-grid">         
            <Button onClick= {
                () => statusPembayaran()} 
                variant='success' className={pembayaran === 'null' ? 'disabled' : ''} >Bayar</Button>
        </div>
    </div>
}
export default DetailPesananPayment;