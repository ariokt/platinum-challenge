import React, { Component } from "react";
import "./index.css"
import Icon1 from "../../assets/image/img_photo-1.png";
import Icon2 from "../../assets/image/img_photo-2.png";
import Slider from "react-slick";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinesEllipsis from "react-lines-ellipsis";

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
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <section id="testi" className="testi-section">
          <div className="testi-title">
            <h1>Testimonial</h1>
            <p>Berbagai review positif dari para pelanggan kami</p>
          </div>
          <div className="testi-card-container">
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div key={1}>
                <div className="testi-card-content">
                  <div className="testi-image">
                    <img src={Icon1} alt="" />
                  </div>
                  <div className="testi-text">
                    <div className="testi-star">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <LinesEllipsis
                      text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur aliquam animi est debitis? Culpa laborum omnis
                      beatae consequatur sapiente placeat. Perspiciatis ut amet
                      nam maxime esse tempora placeat autem facilis."
                      maxLine="3"
                      ellipsis="..."
                      trimRight
                      basedOn="letters"
                      className="ellipsis"
                    />
                    <p>Siti Budiman 22, Riau</p>
                  </div>
                </div>
              </div>
              <div key={2}>
                <div className="testi-card-content">
                  <div className="testi-image">
                    <img src={Icon2} alt="" />
                  </div>
                  <div className="testi-text">
                    <div className="testi-star">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <LinesEllipsis
                      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Voluptatibus aperiam esse velit deleniti laborum eius
                      vitae repudiandae accusamus nostrum!"
                      maxLine="3"
                      ellipsis="..."
                      trimRight
                      basedOn="letters"
                      className="ellipsis"
                    />
                    <p>Budi Budiman 26, Bromo</p>
                  </div>
                </div>
              </div>
              <div key={3}>
                <div className="testi-card-content">
                  <div className="testi-image">
                    <img src={Icon1} alt="" />
                  </div>
                  <div className="testi-text">
                    <div className="testi-star">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <LinesEllipsis
                      text="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Corporis iusto obcaecati esse. Doloribus eaque illo quia
                      quod ad cumque, ut, eligendi ipsam ex, tenetur voluptatem.
                      Dignissimos quidem nostrum iste architecto?"
                      maxLine="3"
                      ellipsis="..."
                      trimRight
                      basedOn="letters"
                      className="ellipsis"
                    />
                    <p>Ani Budiman 45, Prancis</p>
                  </div>
                </div>
              </div>
              <div key={4}>
                <div className="testi-card-content">
                  <div className="testi-image">
                    <img src={Icon2} alt="" />
                  </div>
                  <div className="testi-text">
                    <div className="testi-star">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <LinesEllipsis
                      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eos facere natus explicabo beatae illum. Ea dolorem
                      excepturi quam. Sequi laudantium fugiat quos nesciunt
                      deleniti, assumenda totam enim temporibus modi fugit."
                      maxLine="3"
                      ellipsis="..."
                      trimRight
                      basedOn="letters"
                      className="ellipsis"
                    />
                    <p>Frank Budiman 31, Bali</p>
                  </div>
                </div>
              </div>
              <div key={5}>
                <div className="testi-card-content">
                  <div className="testi-image">
                    <img src={Icon1} alt="" />
                  </div>
                  <div className="testi-text">
                    <div className="testi-star">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <LinesEllipsis
                      text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                      maxLine="3"
                      ellipsis="..."
                      trimRight
                      basedOn="letters"
                      className="ellipsis"
                    />
                    <p>Sandra Budiman 57, Guatemala</p>
                  </div>
                </div>
              </div>
              <div key={6}>
                <div className="testi-card-content">
                  <div className="testi-image">
                    <img src={Icon2} alt="" />
                  </div>
                  <div className="testi-text">
                    <div className="testi-star">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <LinesEllipsis
                      text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur aliquam animi est debitis? Culpa laborum omnis
                      beatae consequatur sapiente placeat. Perspiciatis ut amet
                      nam maxime esse tempora placeat autem facilis."
                      maxLine="3"
                      ellipsis="..."
                      trimRight
                      basedOn="letters"
                      className="ellipsis"
                    />
                    <p>Roger Budiman 23, Brazil</p>
                  </div>
                </div>
              </div>
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
            {/* <a className="btn" onClick={this.previous} >
              <img src={Left1} alt="" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a className="btn" onClick={this.next}>
              <img src={Right1} alt="" />
            </a> */}
          </div>
        </section>
      </div>
    );
  }
}
