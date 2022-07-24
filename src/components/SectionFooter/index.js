import React from 'react'
import "./index.css"
// import IconFacebook from "../assets/image/icon_facebook.png";
// import IconInstagram from "../assets/image/icon_instagram.png";
// import IconTwitter from "../assets/image/icon_twitter.png";
// import IconMail from "../assets/image/icon_mail.png";
// import IconTwitch from "../assets/image/icon_twitch.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-detail">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo, 67213</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="footer-list">
          <ul className="menu-list">
            <li>
              <a href="#services">Our Services</a>
            </li>
            <li>
              <a href="#products">Why Us</a>
            </li>
            <li>
              <a href="#testi">Testimonial</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-connect">
          <p>Connect with us</p>
          <div className="connect-icon">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="2x"
              className="connect"
            />
            <FontAwesomeIcon icon={faInstagram} size="2x" className="connect" />
            <FontAwesomeIcon icon={faTwitter} size="2x" className="connect" />
            <FontAwesomeIcon icon={faCoffee} size="2x" className="connect" />
            <FontAwesomeIcon icon={faTwitch} size="2x" className="connect" />
            {/* <img src={IconFacebook} alt="" />
            <img src={IconInstagram} alt="" />
            <img src={IconTwitter} alt="" />
            <img src={IconMail} alt="" />
            <img src={IconTwitch} alt="" /> */}
          </div>
        </div>
        <div className="footer-copyright">
          <p>Copyright &copy; 2022 Binar Car Rental</p>
          <div className="square"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer