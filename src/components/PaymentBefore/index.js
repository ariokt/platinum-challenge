import React, { useState } from 'react'
import Timer from '../Timer'
import './index.css'

function PaymentBefore({pesananBerhasil}) {
    const [dateLimit, setDateLimit] = useState();

    const sliceDayLimit = (day) => {
        if (day === "Sun") {
            return "Senin";
        } else if (day === "Mon") {
            return "Selasa";
        } else if (day === "Tue") {
            return "Rabu";
        } else if (day === "Wed") {
            return "Kamis";
        } else if (day === "Thu") {
            return "Jumat";
        } else if (day === "Fri") {
            return "Sabtu";
        } else if (day === "Sat") {
            return "Minggu";
        }
    }
    
    return (
        <div className="count-down-section">
             <div className="count-down-due">
                 <p className="count-head">Selesaikan Pembayaran Sebelum</p>
                 {dateLimit && 
                 <p className="count-detail">{sliceDayLimit(dateLimit.slice(0,3))}, {parseInt(dateLimit.slice(8,10))+1} {dateLimit.slice(4,7)} {dateLimit.slice(11,16)} jam {dateLimit.slice(16,21)} WIB</p>}
             </div>
             <div className="count-timer">
                 <Timer timerType = {true} setDateLimit = {setDateLimit} pesananBerhasil={pesananBerhasil}/>
             </div>
        </div>
    ); 
}

export default PaymentBefore
