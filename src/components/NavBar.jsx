import navbarlogo from "../assets/nav-bar_logo-3.svg";
import iconpufipuff from "../assets/icon-pufi-puff.svg";
import iconpufirain from "../assets/icon-pufi-rain.svg";
import iconpuficart from "../assets/icon-pufi-cart.svg";
import iconpufinap from "../assets/icon-pufi-nap.svg";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar__container">
        <div className="nav-bar__logo">
          <img className="logo-nav" src={navbarlogo} alt="logo" />
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
              <a href="#">
                <img src={iconpuficart} alt="icon cart" />
                Pufi Cart
              </a>
            </li>
            <li className="nav-bar__menu--nap">
              <a href="#">
                <img src={iconpufinap} alt="icon nap" />
                Pufi Naf
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-bar__user">
          <ul>
            <li className="nav-bar__user--account">
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">My Purchases</a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};
