import React from 'react'
import "./index.css"
import IconFacebook from "../../assets/image/icon_facebook.png";
import IconInstagram from "../../assets/image/icon_instagram.png";
import IconTwitter from "../../assets/image/icon_twitter.png";
import IconMail from "../../assets/image/icon_mail.png";
import IconTwitch from "../../assets/image/icon_twitch.png";

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
          <div>
            <img src={IconFacebook} alt="" className="connect" />
            <img src={IconInstagram} alt="" className="connect" />
            <img src={IconTwitter} alt="" className="connect" />
            <img src={IconMail} alt="" className="connect" />
            <img src={IconTwitch} alt="" className="connect" />
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