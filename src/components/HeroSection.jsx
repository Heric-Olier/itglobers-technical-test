import { NavBar } from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Lazy } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://i.postimg.cc/qq3Mp9VS/hero-Image1.jpg",
    },
    {
      id: 2,
      image:
        "https://i.postimg.cc/RF5KPs0G/hero-Image2.jpg",
    },
    {
      id: 3,
      image:
        "https://i.postimg.cc/cCmsqHB6/hero-Image3.jpg",
    },
  ];

  return (
    <div id="hero-section">
      <NavBar />
      <div className="hero-section__container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Lazy]}
          spaceBetween={50}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          style={{ width: "100%", height: "100%" }}
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="hero-section__container--image">
                <img src={slide.image} alt="hero image" />
              </div>
            </SwiperSlide>
          ))}
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
