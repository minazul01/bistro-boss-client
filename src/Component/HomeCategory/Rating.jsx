import Title from "../ShareTitle/Title";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import "./Rating.css";


// react rating
import { Rating as StarRating } from "@smastrom/react-rating";

import '@smastrom/react-rating/style.css'

import { FaQuoteLeft } from "react-icons/fa";

const Rating = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return (
    <section>
      <div>
        <Title
          heading={"---What Our Clients Say---"}
          subheading={"TESTIMONIALS"}
        ></Title>
      </div>
      <div className="my-20 text-black">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center m-20 gap-3">
                <StarRating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <span className="text-5xl font-bold my-3"><FaQuoteLeft /></span>
                <p className="text-lg">{review.details}</p>
                <h3 className="text-xl text-amber-300 uppercase">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Rating;
