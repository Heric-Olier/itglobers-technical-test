import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../store/email/emailSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const SubscribeSection = () => {
  const onChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.email); // useSelector es un hook de react-redux que nos permite acceder al estado de la store

  return (
    <div className="subscribe-section">
      <div className="subscribe-section__container">
        <h1>Subscribe to our newsletter</h1>
        <p>Get the latest news and offers</p>
        <div className="subscribe-section__container--input">
          <input
            type="text"
            placeholder="Your email"
            value={value}
            onChange={onChange}
          />
          <button>
            <FontAwesomeIcon icon={faArrowRight}/>
          </button>
        </div>
      </div>
    </div>
  );
};
