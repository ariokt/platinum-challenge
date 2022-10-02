import React from 'react'
import CopyIcon from '../../assets/image/copy-icon.svg'
import { IntlProvider, FormattedNumber } from "react-intl";
import './index.css'

function TujuanPembayaran({ pembayaran, totalPrice }) {
  pembayaran = pembayaran.replace(' Transfer','');

  return (
    <div className='tujuan-pembayaran-section'>
      <p className='head-tujuan-pembayaran'>Lakukan Transfer Ke</p>
      <div className='nama-bank'>
        <div className='bank-Logo'><p>{pembayaran}</p></div>
        <div className='bank-tujuan-logo'>
            <p>{pembayaran}</p>
            <p>a.n Binar Car Rental</p>
        </div>
      </div>
      <div>
        <p className='tujuan-detail'>Nomor Rekening</p>
        <div className='box-tujuan-detail' > 
            <span>54104257877</span>
            <span><img src={CopyIcon} alt="" onClick={() =>  navigator.clipboard.writeText('54104257877')}></img></span>
        </div>
      </div>
      <div>
        <p className='tujuan-detail' >Total Bayar</p>
        <div className='box-tujuan-detail'>
            <span>
            <IntlProvider locale="id"> Rp. <FormattedNumber value={totalPrice} currency="IDR"/></IntlProvider>
            </span>
            <span><img src={CopyIcon} alt="" onClick={() =>  navigator.clipboard.writeText(totalPrice)}></img></span>
        </div>
      </div>
    </div>
  );
}

export default TujuanPembayaran
