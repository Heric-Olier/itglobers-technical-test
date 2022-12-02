import puffirainimage from "../assets/pufi-rain-image.jpg";
import puffirainthumbnail from "../assets/pufi-rain-thumbnail.jpg";

export const PuffiRainSection = () => {
  return (
    <section id="puffi-rain-section">
      <div className="puffi-rain-section__container">
        <div className="puffi-rain-section__container--image">
          <img
          className="puffi-rain__image"
          src={puffirainimage} alt="puffi rain" />
          <button>Shop Now</button>
        </div>
        <div className="puffi-rain-section__container--text">
          <img
            className="puffi-rain__thumbnail"
            src={puffirainthumbnail}
            alt="puffi rain"
          />
          <h1> Pufi RAIN </h1>
          <p>
            Pufi Rain is a new product that will change <br />
            the way you see the rain.
          </p>
          <div className="puffi-rain-section__container--button">
            <button>{`>`} See More</button>
          </div>
        </div>
      </div>
    </section>
  );
};
