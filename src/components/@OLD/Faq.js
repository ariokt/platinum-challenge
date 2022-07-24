import React from 'react'
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <div>
      <section id="faq" className="faq-section">
        <div className="faq-title">
          <h1>Frequently Asked Question</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="faq-content">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Apa saja syarat yang dibutuhkan?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Berapa hari minimal sewa mobil lepas kunci?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Berapa hari sebelumnya sabaiknya booking sewa mobil?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Apakah Ada biaya antar-jemput?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Bagaimana jika terjadi kecelakaan?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* <div className="faq-card">
            <h1>Apa saja syarat yang dibutuhkan?</h1>
            <i className="fa fa-chevron-down"></i>
          </div>
          <div className="faq-card">
            <h1>Berapa hari minimal sewa mobil lepas kunci?</h1>
            <i className="fa fa-chevron-down"></i>
          </div>
          <div className="faq-card">
            <h1>Berapa hari sebelumnya sabaiknya booking sewa mobil?</h1>
            <i className="fa fa-chevron-down"></i>
          </div>
          <div className="faq-card">
            <h1>Apakah Ada biaya antar-jemput?</h1>
            <i className="fa fa-chevron-down"></i>
          </div>
          <div className="faq-card">
            <h1>Bagaimana jika terjadi kecelakaan</h1>
            <i className="fa fa-chevron-down"></i>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Faq