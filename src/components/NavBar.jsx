import navbarlogo from "../assets/nav-bar_logo-3.svg";
import iconpufipuff from "../assets/icon-pufi-puff.svg";
import iconpufirain from "../assets/icon-pufi-rain.svg";
import iconpuficart from "../assets/icon-pufi-cart.svg";
import iconpufinap from "../assets/icon-pufi-nap.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__container">
        <div className="nav-bar__logo">
          <a href="#hero-section">
          <img className="logo-nav" src={navbarlogo} alt="logo" />
          </a>
        </div>
        <div className="nav-bar__menu">
          <ul>
            <li className="nav-bar__menu--rain">
              <a href="#puffi-rain-section">
                <img src={iconpufirain} alt="icon rain" />
                Pufi Rain
              </a>
            </li>

            <li className="nav-bar__menu--puff">
              <a href="#puffi-puff-section">
                <img src={iconpufipuff} alt="icon puff" />
                Pufi Puff
              </a>
            </li>

            <li className="nav-bar__menu--cart">
              <a href="#puffi-cart-section">
                <img src={iconpuficart} alt="icon cart" />
                Pufi Cart
              </a>
            </li>
            <li className="nav-bar__menu--nap">
              <a href="#puffi-nap-section">
                <img src={iconpufinap} alt="icon nap" />
                Pufi Nap
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-bar__user">
          <ul>
            <li className="nav-bar__user--account">
              <a href="#">My Account</a>
              <FontAwesomeIcon icon={faAngleDown}
              style={{ color: "white", marginLeft: "8px", cursor: "pointer" }} />
            </li>
            <li>
              <a href="#">My Purchases</a>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
};
