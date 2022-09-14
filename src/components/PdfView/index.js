import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#EEEEEE',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

export const PdfView = () => (
  <Document>
    <Page size="A4" style={styles.page} className="d-flex flex-row">
      <View style={styles.section} className="d-flex flex-column">
        <Text>Nama mobil: Innova</Text>
        <Text>Harga: Rp</Text>
        <Text>Tanggal mulai sewa: </Text>
        <Text>Tanggal selesai sewa: </Text>
        <Text>Nama peminjam: </Text>
      </View>
      <View style={styles.section}>
        <Text>Status: Paid</Text>
      </View>
    </Page>
  </Document>
);

function PdfUnduh() {
    return (
      <div className="App">
        <PDFDownloadLink document={<PdfView />} fileName="binar-car-invoice.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Unduh!')}
        </PDFDownloadLink>
      </div>
    );
  }

export default PdfUnduh