import React from 'react'
import CopyIcon from '../../assets/image/copy-icon.svg'
import './index.css'

function TujuanPembayaran() {
  return (
    <div className='tujuan-pembayaran-section'>
      <p className='head-tujuan-pembayaran'>Lakukan Transfer Ke</p>
      <div className='nama-bank'>
        <div className='bank-Logo'><p>BCA</p></div>
        <div className='bank-tujuan-logo'>
            <p>BCA Transfer</p>
            <p>a.n Binar Car Rental</p>
        </div>
      </div>
      <div>
        <p className='tujuan-detail'>Nomor Rekening</p>
        <div className='box-tujuan-detail' > 
            <span>54104257877</span>
            <span><img src={CopyIcon} onClick={() =>  navigator.clipboard.writeText('54104257877')}></img></span>
        </div>
      </div>
      <div>
        <p className='tujuan-detail' >Total Bayar</p>
        <div className='box-tujuan-detail'>
            <span>Rp 3.500.000</span>
            <span><img src={CopyIcon} onClick={() =>  navigator.clipboard.writeText('3500000')}></img></span>
        </div>
      </div>
    </div>
  )
}

export default TujuanPembayaran
