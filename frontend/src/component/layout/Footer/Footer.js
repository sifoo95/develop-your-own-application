import React from "react";
import playStore from "../../../images/playStore.png";
import appStore from "../../../images/appStore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and Ios mobile phone</p>
        <img src={playStore} alt="playStore"></img>
        <img src={appStore} alt="appStore"></img>
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p>Hight Quality is our first pripority</p>

        <p>Copyrights2021 &copy; SeyfeddineGhrimil</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/sifooo__95/">Instagram</a>
        <a href="https://www.facebook.com/seyfeddine.ghrimil.9/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
