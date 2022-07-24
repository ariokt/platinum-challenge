import React from "react";
import { Button, Card } from "react-bootstrap";
import { IntlProvider, FormattedNumber } from "react-intl";
const HasilCari = (props) => {
  return (
    <div>
      <Card key={props.result.id} style={{ width: "18rem", margin: "1rem" }}>
        <Card.Img variant="top" src={props.result.image} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{props.result.name}</Card.Title>
          <IntlProvider locale="id">
            <FormattedNumber
              value={props.result.price}
              style="currency"
              currency="IDR"
            />{" "}
            / hari
          </IntlProvider>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="d-grid mt-auto">
            <Button variant="success">Pilih Mobil</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HasilCari;
