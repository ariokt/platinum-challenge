import React, { Component } from "react";
import "./index.css";
import Icon1 from "../../assets/image/img_photo-1.png";
import Icon2 from "../../assets/image/img_photo-2.png";
import Slider from "react-slick";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Card, Col } from "react-bootstrap";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const data = [
      {
        icon: Icon1,
        name: "Siti Budomon",
        age: "21",
        location: "Jakarta",
        text: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus explicabo reprehenderit quisquam neque ducimus laborum architecto sit, repellat saepe, at consequuntur deleniti facere unde cumque alias quaerat beatae fugiat accusantium."`,
      },
      {
        icon: Icon2,
        name: "Sita Budeman",
        age: "27",
        location: "Bandung",
        text: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus explicabo reprehenderit quisquam neque ducimus laborum architecto sit, repellat saepe, at consequuntur deleniti facere unde cumque alias quaerat beatae fugiat accusantium."`,
      },
      {
        icon: Icon1,
        name: "Siki Budimun",
        age: "28",
        location: "Surabaya",
        text: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus explicabo reprehenderit quisquam neque ducimus laborum architecto sit, repellat saepe, at consequuntur deleniti facere unde cumque alias quaerat beatae fugiat accusantium."`,
      },
      {
        icon: Icon2,
        name: "Sidi Budimin",
        age: "24",
        location: "Riau",
        text: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus explicabo reprehenderit quisquam neque ducimus laborum architecto sit, repellat saepe, at consequuntur deleniti facere unde cumque alias quaerat beatae fugiat accusantium."`,
      },
      {
        icon: Icon1,
        name: "Siri Budimon",
        age: "23",
        location: "Balikpapan",
        text: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus explicabo reprehenderit quisquam neque ducimus laborum architecto sit, repellat saepe, at consequuntur deleniti facere unde cumque alias quaerat beatae fugiat accusantium."`,
      },
      {
        icon: Icon2,
        name: "Simi Budimen",
        age: "34",
        location: "Bali",
        text: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus explicabo reprehenderit quisquam neque ducimus laborum architecto sit, repellat saepe, at consequuntur deleniti facere unde cumque alias quaerat beatae fugiat accusantium."`,
      },
    ];

    return (
      <div>
        <section id="testi" className="testi-section">
          <div className="testi-title">
            <h1>Testimonial</h1>
            <p>Berbagai review positif dari para pelanggan kami</p>
          </div>
          <div className="testi-card-container">
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {data.map((item, index) => {
                return (
                  <div key={index}>
                    <Row>
                      <Col className="p-2">
                        <Card className="testi-card-content">
                          <div className="testi-image">
                            <img src={item.icon} alt="icon" />
                          </div>
                          <div>
                            <div className="testi-star">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <div className="testi-text">
                              <p>{item.text}</p>
                              <p style={{ fontWeight: "600" }}>
                                {item.name} {item.age}, {item.location}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </Slider>
          </div>

          <div style={{ textAlign: "center" }}>
            <a
              className="btn"
              onClick={this.previous}
              style={{ padding: "0", marginTop: "1.5rem" }}
            >
              <FontAwesomeIcon
                icon={faChevronCircleLeft}
                size="2x"
                className="ikon"
              />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              className="btn"
              onClick={this.next}
              style={{ padding: "0", marginTop: "1.5rem" }}
            >
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                size="2x"
                className="ikon"
              />
            </a>
          </div>
        </section>
      </div>
    );
  }
}
