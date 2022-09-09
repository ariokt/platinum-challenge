import React, { useState } from 'react'
import './index.css'


function IntruksiPembayaran() {
    const [onIntruction, setOnIntruction] = useState("ATM BCA")
    const greenLine = 'line-green'
    const boldName = 'bold-head-name'
    
    function onClickIntrction(name) {
        setOnIntruction(name);
    }

    const detailBca = () =>{
        return <div >
            <ul className='ul-detail'>
                <li>Masukkan Kartu ATM, lalu PIN</li>
                <li>Pilih menu "Transaksi Lainnya" - "Transfer" - "Ke Rek BCA Virtual Account"</li>
                <li className='intruction-extra'>
                    <p>Masukkan nomor BCA Virtual Account: 70020+OrderId</p>
                    <p>Contoh</p>
                    <p>No. Peserta: 12345678, maka ditulis 7002012345678</p>
                </li>
                <li>Layar ATM akan nampilkan konfirmasi, ikuti intruksi untuk menyelesaikan transaksi</li>
                <li>Ambil n simpanlah bukti transaksi tersebut</li>
            </ul>
        </div>
    } 
  return (
    <div className='intruksi-pembayaran-section'>
      <p className='head-intruksi-pembayaran'>Intruksi Pembayaran</p>
      <div className='choose-payment-intruction row no-gutters'>
            <div className='col no-gutter' onClick={() => onClickIntrction('ATM BCA')}>
                <p className={onIntruction === 'ATM BCA' ? boldName : 'default-name-intruction'}>ATM BCA</p>
                <div className={onIntruction === 'ATM BCA' ? greenLine : 'default-line'}></div>
            </div>
            <div className='col no-gutter' onClick={() => onClickIntrction('M-BCA')}>
                <p className={onIntruction === 'M-BCA' ? boldName : 'default-name-intruction'}>M-BCA</p>
                <div className={onIntruction === 'M-BCA' ? greenLine : 'default-line'}></div>
            </div>
            <div className='col no-gutter' onClick={() => onClickIntrction('BCA Klik')}>
                <p className={onIntruction === 'BCA Klik' ? boldName : 'default-name-intruction'}>BCA Klik</p>
                <div className={onIntruction === 'BCA Klik' ? greenLine : 'default-line'}></div>
            </div>
            <div className='col no-gutter' onClick={() => onClickIntrction('Internet Bank')}>
                <p className={onIntruction === 'Internet Bank' ? boldName : 'default-name-intruction'}>Internet Banking</p>
                <div className={onIntruction === 'Internet Bank' ? greenLine : 'default-line'}></div>
            </div>
        </div>
      <div className='detail-choose-payment'>
            {detailBca()}
        </div>
    </div>
  )
}

export default IntruksiPembayaran
