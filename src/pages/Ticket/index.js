import React from "react";
import { Card } from "react-bootstrap";
import './styles.css'
import FiArrow from '../../assets/image/fi_arrow-left.png'
import FiCheck from '../../assets/image/ficheck.png'
import Fi3 from '../../assets/image/fi3.png'
import BlueLine from '../../assets/image/blueline.png'
import SuccessGreen from '../../assets/image/success.png'
import ButtonUnduh from '../../assets/image/ButtonUnduh.png'
import PdfView from "../../components/PdfView";

export default function Ticket() {
    return (
        <div className='ticket--container'>
            <div className='ticket--bar'>
                <div className='ticket--bar-left'>
                    <img src={FiArrow} alt=''
                    style={{height:'24px', weight:'auto'}}/>
                    <div>
                        <h1>Ticket</h1>
                        <p>Order ID: xxxxxx</p>
                    </div>
                </div>
                <div className='ticket--bar-right'>
                    <img src={FiCheck} alt=''
                    style={{height:'14px', weight:'auto'}}/>
                    <p>Pilih Metode</p>
                    <img src={BlueLine} alt=''
                    style={{height:'1px', weight:'auto'}}/>
                    <img src={FiCheck} alt=''
                    style={{height:'14px', weight:'auto'}}/>
                    <p>Bayar</p>
                    <img src={BlueLine} alt=''
                    style={{height:'1px', weight:'auto'}}/>
                    <img src={Fi3} alt=''
                    style={{height:'14px', weight:'auto'}}/>
                    <p>Tiket</p>
                </div>
            </div>
            <div className='ticket--success'>
                <img src={SuccessGreen} alt=''
                style={{height:'48px', weight:'auto'}}/>
                <h2>Pembayaran Berhasil!</h2>
                <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
            </div>
            <Card className='ticket--invoice'
            style={{width: '605px', height: '290px'}}>
                <div className='ticket--invoice-h'>
                    <div className='ticket--invoive-hl'>
                        <h3>Invoice</h3>
                        <p>no invoice</p>
                    </div>
                    <img src={ButtonUnduh} alt=''
                    style={{height: '36px', weight:'auto'}}/>
                </div>
                <PdfView />
            </Card>
        </div>
    )
}