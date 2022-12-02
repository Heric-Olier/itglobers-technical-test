import pufficartimage from "../assets/pufi-cart-image.jpg";
import pufficartthumbnail from "../assets/pufi-cart-thumbnail.jpg";

export const PuffiCartSection = () => {
  return (
    <section id="puffi-cart-section">
      <div className="puffi-cart-section__container">
        <div className="puffi-cart-section__container--image">
          <img
          className="puffi-cart__image"
          src={pufficartimage} alt="puffi cart" />
          <button>Shop Now</button>
        </div>
        <div className="puffi-cart-section__container--text">
          <img
            className="puffi-cart__thumbnail"
            src={pufficartthumbnail}
            alt="puffi cart"
          />
          <h1> Pufi CART </h1>
          <p>
            Pufi Cart is a new product that will change <br />
            the way you see the shopping.
          </p>
          <div className="puffi-cart-section__container--button">
            <button>{`>`} See More</button>
          </div>
        </div>
      </div>
    </section>
  );
};
