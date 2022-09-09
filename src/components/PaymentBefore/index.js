import React from 'react'
import Timer from '../Timer'
import './index.css'

function PaymentBefore() {
    return <div className="count-down-section">
             <div className="count-down-due">
                 <p className="count-head">Selesaikan Pembayaran Sebelum</p>
                 <p className="count-detail">Rabu, 19 Mei 2022 jam 13.00 WIB</p>
             </div>
             <div className="count-timer">
                 <Timer timerType = {true}></Timer>
             </div>
         </div>

}

export default PaymentBefore
