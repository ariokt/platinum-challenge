import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { IntlProvider, FormattedNumber } from "react-intl";

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#F1F3FF',
  },
  section: {
    marginBottom: "16px",
    padding: 10
  },
  text: {
    fontSize: "14px",
    marginBottom: "8px"
  }
});

export const PdfView = ({ dataPesanan }) => {
  if (dataPesanan) {
    return (
      <Document>
          <Page size="A6" style={styles.page}>
              <View style={styles.section} className="d-flex flex-column">
                  <Text style={styles.text}>Nama mobil: {dataPesanan.Car.name}</Text>
                  <Text style={styles.text}>Total Harga: 
                    <IntlProvider locale="id">Rp <FormattedNumber value={dataPesanan.total_price} currency="IDR"/>{" "} </IntlProvider>
                  </Text>
                  <Text style={styles.text}>Tanggal mulai sewa: {dataPesanan.start_rent_at.slice(0,10)}</Text>
                  <Text style={styles.text}>Tanggal selesai sewa: {dataPesanan.finish_rent_at.slice(0,10)}</Text>
                  <Text style={styles.text}>Email peminjam: {dataPesanan.User.email}</Text>
              </View>
              <View style={styles.section} className="d-flex flex-column">
                  <Text style={styles.text}>Status: Paid</Text>
                  <Text style={styles.text}>Admin: Ario Waskita</Text>
              </View>
          </Page>
      </Document>
    );
  }
};

function PdfUnduh({ dataPesanan }) {
  if (dataPesanan) {
    return (
      <div className="App">
        <PDFDownloadLink document={<PdfView dataPesanan={dataPesanan}/>} fileName="binar-car-invoice.pdf">
        {({ loading }) => (loading ? 'Loading document...' : 'Unduh!')}
        </PDFDownloadLink>
      </div>
    );
  } 
}

export default PdfUnduh