import React, { useState } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap'
import './index.css'
import DropFile from '../DropFile';
import Timer from '../Timer'

function KonfirmasiPembayaran({ carOrder, token, setIdPesanan, setPesananBerhasil, setStepDone }) {
    const [readyConfirm , setReadyConfirm] = useState(false)
    const [image, setImage] = useState(null);
    
    async function sendOrder() {
      const sendData = {start_rent_at: carOrder.start_rent_at,
                        finish_rent_at: carOrder.finish_rent_at,
                        car_id: carOrder.car_id};
      try {
        const res = await axios({
            method:"post",
            url:"https://bootcamp-rent-cars.herokuapp.com/customer/order",
            headers:{'access_token':token},
            data:sendData
        });
        setIdPesanan(res.data.id);
        window.sessionStorage.setItem("idPesanan", res.data.id);
        setReadyConfirm(!readyConfirm); 
      } catch (error) {
        window.alert("Error "+error);
      }
    }

    function changeConfirm() {
        sendOrder();
    }

    const pemesananBerhasil = () => {
        setPesananBerhasil(true);
        window.sessionStorage.setItem("pesananBerhasil", true);
        setStepDone({one: true, two: true, three: false});
        window.location.reload();
    }


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
                <Timer timerType = {false} setPesananBerhasil={setPesananBerhasil}></Timer>
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
            <DropFile setImage={setImage}></DropFile>
            {image ? <div className='d-grid' ><Button variant='success' onClick={() => pemesananBerhasil()}>Upload</Button></div> : 
            <div className='d-grid' ><Button variant='success' disabled>Upload</Button></div>}
        </div>
    }

  return (
    <div className='konfirmasi-section'>
      {readyConfirm ? readyAssign() : notReady()}
    </div>
  )
}

export default KonfirmasiPembayaran
