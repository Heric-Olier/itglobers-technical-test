import { NavBar } from "../components";

export const HeroSection = () => {
  return (
    <div className="hero-section">
      <NavBar />
      <div className="hero-section__container">
        <div className="hero-section__container--text">
          <h4>
            Being comfortable,
            <br />
            it was never so easy.
          </h4>
        </div>
        <div className="hero-section__container--button">
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};
