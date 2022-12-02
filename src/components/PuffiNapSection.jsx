import puffinapimage from "../assets/pufi-nap-image.jpg";
import puffinapthumbnail from "../assets/pufi-nap-thumbnail.jpg";

export const PuffiNapSection = () => {
  return (
    <section id="puffi-nap-section">
      <div className="puffi-nap-section__container">
        <div className="puffi-nap-section__container--text">
          <img
            className="puffi-nap__thumbnail"
            src={puffinapthumbnail}
            alt="puffi nap"
          />
          <h1> Pufi NAP </h1>
          <p>
            Pufi Nap is a new product that will change <br />
            the way you see the nap.
          </p>
          <div className="puffi-nap-section__container--button">
            <button>{`>`} See More</button>
          </div>
        </div>
        <div className="puffi-nap-section__container--image">
          <img
            className="puffi-nap__image"
            src={puffinapimage}
            alt="puffi nap"
          />
          <button>Shop Now</button>
        </div>
      </div>
    </section>
  );
};
