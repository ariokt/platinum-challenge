import React, { useState } from "react";
// import Navbar from '../../components/SectionNavigationBar/index'
import BackPage from '../../components/PaymentStep/index'
import DetailPesanan from "../../components/DetailPesanan";
import PembayaranTransfer from "../../components/PembayaranTransfer";
import DetailPesananPayment from "../../components/DetailPesananPayment";
import TujuanPembayaran from '../../components/TujuanPembayaran'
import IntruksiPembayaran from "../../components/IntruksiPembayaran";
import KonfirmasiPembayaran from "../../components/KonfirmasiPembayaran";
import PaymentBefore from "../../components/PaymentBefore";
import Invoice from "../../components/Invoice";
import './index.css'
const Payment = () => {
    const [pembayaran, setPembayaran] = useState('null')
    const [pembayaranStatus, setPembayaranStatus] = useState(false)
    const [previousPage, setPreviousPage] = useState("Pembayaran")

    const paymentChoseComp = () => {
     return <div className="row">
                <div className='col-md-6'>
                    <PembayaranTransfer pembayaran={pembayaran} setPembayaran={setPembayaran}/>
                </div>
                <div className='col-md-6'
                ><DetailPesananPayment pembayaran={pembayaran} setPembayaran = {setPembayaranStatus} setPreviousPage={setPreviousPage}/>
                </div>
                
            </div>
    }

    const transfer = () => {
        return <div>
            <div className="row">
                <div className='col-md-7'>
                    <PaymentBefore></PaymentBefore>
                    <TujuanPembayaran></TujuanPembayaran>
                    <IntruksiPembayaran className='int-pos'></IntruksiPembayaran>
                </div>
                <div className="col-md-5">
                    <KonfirmasiPembayaran></KonfirmasiPembayaran>
                </div>
            </div>
        </div>
    }

    return <div className="payment-section">
        <BackPage previousPage={previousPage} />
        <DetailPesanan />
        {pembayaranStatus ? transfer() : paymentChoseComp()}
        <div>
        <Invoice></Invoice>
        </div>
    </div>
}

export default Payment