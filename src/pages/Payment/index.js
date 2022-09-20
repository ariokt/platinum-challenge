import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PaymentStep from '../../components/PaymentStep/index'
import DetailPesanan from "../../components/DetailPesanan";
import MetodePembayaran from "../../components/MetodePembayaran";
import DetailPesananPayment from "../../components/DetailPesananPayment";
import TujuanPembayaran from '../../components/TujuanPembayaran'
import IntruksiPembayaran from "../../components/IntruksiPembayaran";
import KonfirmasiPembayaran from "../../components/KonfirmasiPembayaran";
import PaymentBefore from "../../components/PaymentBefore";
import NavigationBar from "../../components/SectionNavigationBar";
import Invoice from "../../components/Invoice";
import Footer from "../../components/SectionFooter";
import './index.css'

const Payment = () => {
    const navigate = useNavigate();
    const token = window.localStorage.getItem("token");
    const carOrder = JSON.parse(window.localStorage.getItem("LastOrder"));
    const dataStep = JSON.parse(window.localStorage.getItem("dataStep"));
    const [pembayaran, setPembayaran] = useState("")
    const [doneMetodePembayaran, setDoneMetodePembayaran] = useState(false);
    const [stepDone, setStepDone] = useState({one: false, two: false, three: false});
    const [idPesanan, setIdPesanan] = useState(false);
    const [pesananBerhasil, setPesananBerhasil] = useState(false);

    useEffect(() => {
        const getIdPesanan = window.sessionStorage.getItem("idPesanan");
        const getPesananBerhasil = window.sessionStorage.getItem("pesananBerhasil")
        if (getIdPesanan && getPesananBerhasil) {
            setIdPesanan(parseInt(getIdPesanan));
            setPesananBerhasil(true);
            setStepDone({one: true, two: true, three: false});
        } else if (dataStep) {
            setPembayaran(dataStep.pembayaran);
            setDoneMetodePembayaran(dataStep.doneMetodePembayaran);
            setStepDone(dataStep.stepDone);
        }

        window.addEventListener('popstate', () => { 
            window.sessionStorage.removeItem("idPesanan");
            window.sessionStorage.removeItem("pesananBerhasil");
            window.localStorage.removeItem("dataStep");
            navigate("/");
            window.sessionStorage.removeItem("TimerPembayaran");
            window.location.reload();
        });
    }, []);

    const paymentChoseComp = () => {
     return (
        <div className="row">
            <div className='col-md-6'>
                <MetodePembayaran pembayaran={pembayaran} setPembayaran={setPembayaran}/>
            </div>
            <div className='col-md-6'>
                <DetailPesananPayment token={token} setDoneMetodePembayaran = {setDoneMetodePembayaran} carOrder={carOrder} 
                pembayaran={pembayaran} setStepDone={setStepDone} />
            </div>  
        </div>
     ); 
    }

    const transfer = () => {
        return (
            <div>
                <div className="row">
                    <div className='col-md-7'>
                        <PaymentBefore pesananBerhasil={pesananBerhasil}/>
                        <TujuanPembayaran pembayaran={pembayaran} totalPrice={carOrder.harga_sewa_total} />
                        <IntruksiPembayaran className='int-pos' pembayaran={pembayaran} />
                    </div>
                    <div className="col-md-5">
                        <KonfirmasiPembayaran carOrder={carOrder} token={token} setIdPesanan={setIdPesanan} setPesananBerhasil={setPesananBerhasil} setStepDone={setStepDone} />
                    </div>
                </div>
            </div>
        ); 
    }

    if (idPesanan && pesananBerhasil) {
        return (
            <div>
                <NavigationBar />
                <div className="hero-div"></div>
                <div className="payment-section"></div>
                <div className="payment-section">
                    <PaymentStep stepDone={stepDone} pesananBerhasil={pesananBerhasil} />
                    <Invoice idPesanan={idPesanan} token={token}/>
                </div> 
                <Footer />   
            </div>
        );
    } else {
        return (
            <div>
                <NavigationBar />
                <div className="hero-div"></div>
                <div className="payment-section">
                    <PaymentStep stepDone={stepDone} />
                    {carOrder && <DetailPesanan dataMobil={carOrder}/>}
                    {doneMetodePembayaran ? transfer() : paymentChoseComp()}
                </div>
                <Footer /> 
            </div> 
        ); 
    }
}

export default Payment