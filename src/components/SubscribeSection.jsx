
import { FormValidation } from "./FormValidation";

export const SubscribeSection = () => {

  return (
    <section className="subscribe-section">
      <div className="subscribe-section__container">
        <h1>Subscribe to our newsletter</h1>
        <p>Get the latest news and offers</p>
        <FormValidation />
      </div>
    </section>
  );
};
