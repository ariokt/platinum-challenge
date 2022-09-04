import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./index.css";

const Faq = () => {
  const data = [
    {
      question: "Apa saja syarat yang dibutuhkan?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ullam fugiat enim et molestias nobis commodi recusandae vero, fugit sint voluptas, temporibus quo ipsa. Fugit velit perferendis nobis explicabo earum.",
    },
    {
      question: "Berapa hari minimal sewa mobil lepas kunci?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium alias sint officia maxime officiis cumque tempora dolore et fugiat, itaque est maiores aliquam, perspiciatis obcaecati vel veniam nisi? Incidunt, quam!",
    },
    {
      question: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem quis, repellendus odit nobis consequuntur nemo magnam amet quibusdam, ipsa ipsum, temporibus aut nisi voluptas libero non ipsam quos perferendis.",
    },
    {
      question: "Apakah Ada biaya antar-jemput?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, molestias harum vero aliquam architecto, explicabo a ipsa nihil quas obcaecati, fugiat numquam aut veniam doloremque fugit quidem vitae eos! Aliquid!",
    },
    {
      question: "Bagaimana jika terjadi kecelakaan?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus magni, fuga, omnis provident obcaecati optio velit ab id atque alias corrupti! Eveniet facilis voluptatem, ut dolore suscipit magni aut veniam.",
    },
  ];
  return (
    <div>
      <section id="faq" className="faq-section">
        <div className="faq-title">
          <h1>Frequently Asked Question</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="faq-content">
          <Accordion>
            {data.map((item, index) => {
              return (
                <Accordion.Item eventKey={index} key={index}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Faq;
