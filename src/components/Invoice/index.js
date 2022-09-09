import React from 'react'
import { Button } from 'react-bootstrap';
import SuccessImg from '../../assets/image/success.svg';
import DownloadImg from '../../assets/image/download_icon.svg';
import './index.css'
// import {Worker, Viewer} from '@react-pdf-viewer/core'

function Invoice() {
  return (
    <div className='invoice-section'>
      <div className='logo-invoice'>
        <img src={SuccessImg} className='img-icon-invoice'></img>
        <p className='invoice-head'>Pembayaran Berhasil!</p>
        <p className='invoice-decs'>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
      </div>
      <div className='view-invloice-area'>
        <div className='view-invloice-head'>
          <div className='view-invoice-left'>
              <p className='invoice-bold'>Invoice</p>
              <p>*no invoice</p>
          </div>
          <div className='view-invoice-right'>
              <Button className='outline-primary btn btn-download' variant="outline-primary">
                <i class="fa fa-close"></i> Unduh
              </Button>
          </div>  
        </div>
        <div>pdf view</div>
      </div>
      <div>
        {/* <Worker
            workerUrl='https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js'>
                <Viewer fileUrl={}>

                </Viewer>
        </Worker> */}
      </div>
    </div>
  )
}

export default Invoice
