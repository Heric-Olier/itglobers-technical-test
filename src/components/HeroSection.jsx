import { NavBar } from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import heroimage1 from "../assets/heroimage1.jpg";
import heroimage2 from "../assets/heroimage2.jpg";
import heroimage3 from "../assets/heroimage3.jpg";


export const HeroSection = () => {
  return (
    <div id="hero-section">
      <NavBar />
      <div className="hero-section__container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          style={{ width: "100%", height: "100%" }}
        >
          {/* <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
            <div className="hero-section__container--image">
              <img src={heroimage1} alt="heroimage1" />
            </div>
          </SwiperSlide> */}
          <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
            <div className="hero-section__container--image">
              <img src={heroimage2} alt="heroimage2" />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
            <div className="hero-section__container--image">
              <img src={heroimage3} alt="heroimage3" />
            </div>
          </SwiperSlide>
        </Swiper>
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
