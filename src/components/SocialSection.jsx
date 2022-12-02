import socialimage1 from "../assets/social-grid-image-1.jpg";
import socialimage2 from "../assets/social-grid-image-2.jpg";
import socialimage3 from "../assets/social-grid-image-3.jpg";
import socialimage4 from "../assets/social-grid-image-4.jpg";
import socialimage5 from "../assets/social-grid-image-5.jpg";
import socialimage6 from "../assets/social-grid-image-6.jpg";

export const SocialSection = () => {
  return (
    <section className="social-section">
      <div className="social-section__container">
        <div className="social-section__container--text">
          <p>Follow us on Instagram to see our latest products and news.</p>
          <h1>#espufi</h1>
        </div>
        <div className="social-section__container--images">
          <img src={socialimage1} alt="social grid image 1" />
          <img src={socialimage2} alt="social grid image 2" />
          <img src={socialimage3} alt="social grid image 3" />
          <img src={socialimage4} alt="social grid image 4" />
          <img src={socialimage5} alt="social grid image 5" />
          <img src={socialimage6} alt="social grid image 6" />
        </div>
      </div>
    </section>
  );
};
