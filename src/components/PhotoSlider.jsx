import React from "react";
import "../styles/PhotoSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";
import photo6 from "../assets/images/photo6.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

function PhotoSlider() {
  return (
    <section className="gallery-section" id="gallery">
      <h1>Beautiful Memories ❤️</h1>

      <Swiper
        modules={[Autoplay]}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        speed={900}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 15,
          },

          480: {
            slidesPerView: 1.2,
            spaceBetween: 18,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <div className="photo-card">
              <img src={photo} alt={`Memory ${index + 1}`} loading="lazy" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default PhotoSlider;
