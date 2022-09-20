import React from "react";
import './index.css'
import IconCheckList from '../../assets/image/check-payment.svg'

const MetodePembayaran = ({pembayaran, setPembayaran}) => {

    function classTransfer(name) {
        if(pembayaran === name) {
            return (
                <div className="space-icon d-flex">
                    <div><p>{name}</p></div>
                    <div className="space-icon-image"><img alt="" src={IconCheckList}></img></div >
                </div>
            ); 
        } else {
            return (
                <span className="no-space-icon">
                    <span>{name}</span>
                </span>
            ); 
        }
    }

    function tagPayment(name) {
        setPembayaran(name)
    }
    

    return (
        <div className="pembayaran-transfer-section">
            <div>
                <p>Pilih Bank Transfer</p>
                <p>Kamu bisa membayar dengan transfer melalui ATM, Internet banking atau Mobile Banking</p>
            </div>
            <div className="transfer-all">
                <div className="transfer-method" onClick={() => tagPayment("BCA Transfer")}>
                    <div className="logo-transfer">
                        BCA
                    </div>
                    {classTransfer("BCA Transfer")}
                </div>
                <div className="line"></div>
                <div className="transfer-method" onClick={() => tagPayment("BNI Transfer")}>
                    <span className="logo-transfer">
                        BNI
                    </span>
                    {classTransfer("BNI Transfer")}

                </div>
                <div className="line"></div>
                <div className="transfer-method" onClick={() => tagPayment("Mandiri Transfer")}>
                    <span className="logo-transfer">
                        Mandiri
                    </span>
                    {classTransfer("Mandiri Transfer")}
                </div>
            </div>
        </div>
    ) 
}

export default MetodePembayaran;