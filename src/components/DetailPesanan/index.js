import React from "react";
import './index.css'

const DetailPesanan = ({dataMobil}) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const sliceMonth = (month) => {
        const intMonth = parseInt(month);
        const strMonth = monthNames[intMonth-1];
        return strMonth;
    }

    const detailPesanan = [{
        head : 'Nama/tipe Mobil',
        detail: dataMobil.nama_mobil
    },
    {
        head : 'Kategori',
        detail: dataMobil.kategori_mobil
    }, 
    {
        head : 'Tangga Mulai Sewa',
        detail: `${dataMobil.start_rent_at.slice(8,10)} ${sliceMonth(dataMobil.start_rent_at.slice(5,7))} ${dataMobil.start_rent_at.slice(0,4)}`
    },
    {
        head : 'Tanggal Akhir Sewa',
        detail: `${dataMobil.finish_rent_at.slice(8,10)} ${sliceMonth(dataMobil.finish_rent_at.slice(5,7))} ${dataMobil.finish_rent_at.slice(0,4)}`
    },
    ]
    return <div className="detail-pesanan-section">
        <div className="head-name">
            <p>Detail Pesananmu</p>
        </div>
        <div className="detail-pesanan">
            {detailPesanan.map((items, index) => {
                return <span key={index}>
                    <p className="head-detail">{items.head}</p>
                    <p className="items-detail">{items.detail}</p>
                </span>
            })}
        </div>
    </div>
}

export default DetailPesanan;