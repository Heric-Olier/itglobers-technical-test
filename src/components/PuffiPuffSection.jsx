import puffipuffimage from "../assets/pufi-puff-image.jpg";
import puffipuffthumbnail from "../assets/pufi-puff-thumbnail.jpg";

export const PuffiPuffSection = () => {
  return (
    <div id="puffi-puff-section">
      <div className="puffi-puff-section__container">
        <div className="puffi-puff-section__container--text">
          <img
            className="puffi-puff__thumbnail"
            src={puffipuffthumbnail}
            alt="puffi puff"
          />
          <h1> Pufi PUFF </h1>
          <p>
            Pufi Puff is a new product that will change <br />
            the way you see the puff.
          </p>
          <div className="puffi-puff-section__container--button">
            <button>{`>`} See More</button>
          </div>
        </div>
        <div className="puffi-puff-section__container--image">
          <img
            className="puffi-puff__image"
            src={puffipuffimage}
            alt="puffi puff"
          />
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};
