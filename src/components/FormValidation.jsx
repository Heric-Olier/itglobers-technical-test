import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../store/email/emailSlice";
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

export const FormValidation = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.email);
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const [state, handleSubmit] = useForm("mgeqjjbe");

  if (state.succeeded) {
    Swal.fire({
      icon: "success",
      title: "Thank you for subscribing!",
      showConfirmButton: false,
      timer: 1500,
    });

    return <p>Thanks for joining!</p>;
  }

  const onChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!value.match(regexEmail)) {
      Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      }).fire({
        icon: "error",
        title: "Please enter a valid email",
      });
    } else {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={onSubmit} className="subscribe-section__container--form">
      <input
        id="email"
        type="email"
        name="email"
        value={value}
        onChange={onChange}
        placeholder="Enter your email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </form>
  );
};
