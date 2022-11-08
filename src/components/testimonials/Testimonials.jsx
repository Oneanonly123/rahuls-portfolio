import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Pagination, Navigation, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Sara Fernandes",
    review: "Working along with Rahul is such a wondurful experience",
  },
  {
    avatar: AVTR2,
    name: "Jack Fernandes",
    review: "What a brilliant mind he has . Hope will collaborate soon",
  },
  {
    avatar: AVTR3,
    name: "Jack Ray",
    review: "Punctual and calm guy. Loved working with him",
  },
  {
    avatar: AVTR4,
    name: "Bhawani Singh",
    review:
      "Lorem Epsum  dolor sit consr Lorem Epsum  dolor sit consr Lorem Epsum",
  },
];
const Testimonials = () => {
  return (
    <section>
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }) => {
          return (
            <>
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One"></img>
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
