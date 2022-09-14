import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
    const location = useLocation()
    
    const idPesanan = location.state;
    console.log(idPesanan)
    const token = window.localStorage.getItem("token");
    const [carOrder, setCarOrder] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
        const SEARCH_URL = `https://bootcamp-rent-car.herokuapp.com/customer/order/${idPesanan}`;
        async function getOrder() {
            try {
                const res = await axios({
                    method:"get",
                    url:SEARCH_URL,
                    headers:{'access_token':token}
                });
                setCarOrder(res);
            } catch (error) {
                console.log(error);
            }
        };
        getOrder();
    }, [])

    // const [pembayaran, setPembayaran] = useState(null);
    // const [pembayaranStatus, setPembayaranStatus] = useState(false);
    // const [previousPage, setPreviousPage] = useState("Pembayaran");

    // const paymentChoseComp = () => {
    //     return (
    //         <div className="row">
    //             <div className='col-md-6'>
    //                 <PembayaranTransfer pembayaran={pembayaran} setPembayaran={setPembayaran}/>
    //             </div>
    //             <div className='col-md-6'>
    //                 <DetailPesananPayment pembayaran={pembayaran} setPembayaran = {setPembayaranStatus} setPreviousPage={setPreviousPage}/>
    //             </div>
    //         </div>
    //     ) 
    //    }

    return (
        <div className="payment-section">
            {/* <BackPage previousPage={previousPage} />
            <DetailPesanan />
            {pembayaranStatus ? transfer() : paymentChoseComp()}
            <div>
                <Invoice></Invoice>
            </div> */}
            Payment
        </div>
    )
}

export default Payment