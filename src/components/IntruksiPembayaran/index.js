import React, { useState } from 'react'
import './index.css'


function IntruksiPembayaran({ pembayaran }) {
    const [onIntruction, setOnIntruction] = useState(`ATM ${pembayaran.slice(0,3)}`)
    const greenLine = 'line-green'
    const boldName = 'bold-head-name'
    
    function onClickIntrction(name) {
        setOnIntruction(name);
    }

    const detailBca = () =>{
        return <div >
            <ul className='ul-detail'>
                <li>Masukkan Kartu ATM, lalu PIN</li>
                <li>Pilih menu `&ldquo;`Transaksi Lainnya`&rdquo;` - `&ldquo;`Transfer`&rdquo;` - `&ldquo;`Ke Rek {pembayaran.slice(0,3)} Virtual Account`&rdquo;`</li>
                <li className='intruction-extra'>
                    <p>Masukkan nomor {pembayaran.slice(0,3)} Virtual Account: 70020+OrderId</p>
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
            <div className='col no-gutter' onClick={() => onClickIntrction(`ATM ${pembayaran.slice(0,3)}`)}>
                <p className={onIntruction === `ATM ${pembayaran.slice(0,3)}` ? boldName : 'default-name-intruction'}>ATM {pembayaran.slice(0,3)}</p>
                <div className={onIntruction === `ATM ${pembayaran.slice(0,3)}` ? greenLine : 'default-line'}></div>
            </div>
            <div className='col no-gutter' onClick={() => onClickIntrction(`M-${pembayaran.slice(0,3)}`)}>
                <p className={onIntruction === `M-${pembayaran.slice(0,3)}` ? boldName : 'default-name-intruction'}>M-{pembayaran.slice(0,3)}</p>
                <div className={onIntruction === `M-${pembayaran.slice(0,3)}` ? greenLine : 'default-line'}></div>
            </div>
            <div className='col no-gutter' onClick={() => onClickIntrction(`${pembayaran.slice(0,3)} Klik`)}>
                <p className={onIntruction === `${pembayaran.slice(0,3)} Klik` ? boldName : 'default-name-intruction'}>{pembayaran.slice(0,3)} Klik</p>
                <div className={onIntruction === `${pembayaran.slice(0,3)} Klik` ? greenLine : 'default-line'}></div>
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
