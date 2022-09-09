import React from "react";
import './index.css'

const DetailPesanan = (props) => {
    // {nama, kategori, tanggalAwal , tanggalAkhir} = props
    const detailPesanan = [{
        head : 'Nama/tipe Mobil',
        detail: 'Innova'
    },
    {
        head : 'Kategori',
        detail: '6 - 8 orang'
    }, 
    {
        head : 'Tangga Mulai Sewa',
        detail: '2 Jun 2022'
    },
    {
        head : 'Tanggal Akhir Sewa',
        detail: '8 Jun 2022'
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