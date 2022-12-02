import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import navbarlogo from "../assets/nav-bar_logo-3.svg";
import logofooter from "../assets/logo-footer.svg";

export const FooterSection = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__content">
        <div className="footer__content-about">
          <h2>About Us</h2>
          <p>
            We are a company dedicated to the sale of quality products, with a
            wide range of products for all tastes and customer needs.
          </p>
          <div className="footer__content-logo">
            <img src={navbarlogo} alt="logo" />
          </div>
        </div>
        <div className="footer__content-menu">
          <ul className="footer__content-menu-list">
            <h2>Menu</h2>
            <li className="footer__content-menu-item">
              <a href="#">Home</a>
            </li>
            <li className="footer__content-menu-item">
              <a href="#">Products</a>
            </li>
            <li className="footer__content-menu-item">
              <a href="#">About Us</a>
            </li>
            <li className="footer__content-menu-item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer__content-information">
          <ul className="footer__content-information-list">
            <h2>Information</h2>
            <li className="footer__content-information-item">
              <a href="#">Terms and Conditions</a>
            </li>
            <li className="footer__content-information-item">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="footer__content-information-item">
              <a href="#">Shipping Policy</a>
            </li>
            <li className="footer__content-information-item">
              <a href="#">Return Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer__content-social">
          <ul className="footer__content-social-list">
            <h2>FOLLOW US</h2>
            <h3>ON SOCIAL MEDIA</h3>
            <li className="footer__content-social-item">
              <a href="#">
                {" "}
                <img src={facebook} alt="facebook" />{" "}
              </a>
            </li>
            <li className="footer__content-social-item">
              <a href="#">
                {" "}
                <img src={instagram} alt="instagram" />{" "}
              </a>
            </li>
            <li className="footer__content-social-item">
              <a href="#">
                {" "}
                <img src={twitter} alt="twitter" />{" "}
              </a>
            </li>
            <li className="footer__content-social-item">
              <a href="#">
                {" "}
                <img src={youtube} alt="youtube" />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__content-copyright">
        <p>PUFI © 2017. All rights reserved.</p>
        <img src={logofooter} alt="logo" />
      </div>
    </footer>
  );
};
