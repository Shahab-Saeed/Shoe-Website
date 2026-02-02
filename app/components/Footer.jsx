import React from "react";
import "@/app/components/Footer.css";
import {
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaHome,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { FaFacebook, FaTwitterSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="child1 child12">
        <div className="mainh">
           Contact
         
        </div>
         <div className="iconsContainer">
            <div className="icon iconss">
              <FaHome />
              <span>Home</span>
            </div>
            <div className="icon iconss">
              <FaPhone />
              <span>+92 123 456 789</span>
            </div>
            <div className="icon iconss">
              <FaEnvelope />
              <span>info@example.com</span>
            </div>
          </div>
      </div>

      <div className="child1 child13">
        <div className="mainh">
           Get Help
         
        </div>
         <div className="iconsContainer">
            <div className="icon">
              <span>FAQ</span>
            </div>
            <div className="icon">
              <span>Shipping</span>
            </div>
            <div className="icon">
              <span>Returns</span>
            </div>
            <div className="icon">
              <span>Payment Options</span>
            </div>
          </div>
      </div>

      <div className="child1    ">
        <div className="mainh">
          Our Stores
         
        </div>
         <div className="iconsContainer">
            <div className="icon">
              <span>Sri Lanka</span>
            </div>
            <div className="icon">
              <span>USA</span>
            </div>
            <div className="icon">
              <span>India</span>
            </div>
            <div className="icon">
              <span>Japan</span>
            </div>
          </div>
      </div>

       <div className="child1 child11">
        <div className="mainh">
          Follow Us
         
        </div>
         <div className="iconsContainer1">
            <div className="icon">
                  <FaFacebookF />
            </div>
            <div className="icon">
                <FaTwitterSquare />
            </div>
            <div className="icon">
                <FaInstagram />
            </div>
            <div className="icon">
                <FaLinkedin />
            </div>
          </div>
      </div>

      <div className="child1 child11">
        <div className="mainh">
            NewsLetter
        </div>
        <div className="input">
            <input type="text" placeholder="Your Email Address" />
        </div>
        <div className="btn">
            Subscribe
        </div>
      </div>
    </div>
  );
};

export default Footer;
