import React, { useEffect, useState } from "react";
import axios from "axios";
import PdfUnduh, { PdfView } from "../PdfView";
import { PDFViewer, StyleSheet } from '@react-pdf/renderer';
import { Card } from "react-bootstrap";
import TicketSuccess from "../../assets/image/track-payment/success.svg"
import './index.css'

const styles = StyleSheet.create({
  viewer: {
    width: "100%", //the pdf viewer will take up all of the width and height
    height: "100%",
  }
});



export default function Invoice({ idPesanan, token }) {
  const [dataPesanan, setDataPesanan] = useState(false);

  useEffect(() => {
    async function getOrder(){
      try {
        const res = await axios({
          method:"get",
          url:`https://bootcamp-rent-car.herokuapp.com/customer/order/${idPesanan}`,
          headers:{'access_token':token},
        });
        setDataPesanan(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrder();
  }, []);

  if (dataPesanan) {
    return (
      <div className='ticket__container'>
        <div className='ticket__orderid'>
          <p>Order ID: {idPesanan}</p>
        </div>
        <div className='ticket--success'>
          <img src={TicketSuccess} alt='' />
          <h2>Pembayaran Berhasil!</h2>
          <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
        </div>
        <Card className='ticket--invoice'>
          <div className='ticket--invoice-h'>
            <div className='ticket--invoive-hl'>
              <h3>Invoice</h3>
            </div>
            <PdfUnduh dataPesanan={dataPesanan}/>
          </div>
            <div style={{width:"100%", height:"100%"}}>
              {dataPesanan && (
                <PDFViewer style={styles.viewer}>
                  <PdfView dataPesanan={dataPesanan}/>
                </PDFViewer>
              )}
            </div>
        </Card>
      </div>
    );
  };  
}

