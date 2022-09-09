import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './index.css'
import DropFile from '../DropFile';
import Timer from '../Timer'

function KonfirmasiPembayaran() {
    const [readyConfirm , setReadyConfirm] = useState(false)

    const notReady = () => {
        return <div className='not-ready-box'>
            <p>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
            <div className='d-grid'><Button variant='success' onClick={() => changeConfirm()}>Konfirmasi Pembayaran</Button></div>
        </div>
    }

    const readyAssign = () => {
        return <div>
            <span className='head-confirm'>
                <p>Konfirmasi Pembayaran</p>
                <Timer timerType = {false}></Timer>
            </span>
            <p className='decs-confirm'>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
            <div>
                <p>
                Upload Bukti Pembayaran
                </p>
                <p className='decs-confirm'>
                Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu    
                </p>
            </div>
            <DropFile></DropFile>
            <div className='d-grid' ><Button variant='success'>Konfirmasi</Button></div>
        </div>
    }

    function changeConfirm() {
        setReadyConfirm(!readyConfirm);
    }
  return (
    <div className='konfirmasi-section'>
      {readyConfirm ? readyAssign() : notReady()}
    </div>
  )
}

export default KonfirmasiPembayaran
