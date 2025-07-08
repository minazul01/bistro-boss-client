import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Category.css";

import { FreeMode, Pagination } from "swiper/modules";

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import Title from "../ShareTitle/Title";

const Category = () => {
  return (
    <section>
        <div>
            <Title heading={'---From 11:00am to 10:00pm---'} subheading={'ORDER ONLINE'}>

            </Title>
        </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper my-20"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src={img1}
                alt="slider"
                className="w-full h-full object-cover"
              />
              <h3 className="absolute uppercase bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl lg:text-2xl bg-black lg:bg-opacity-50 px-2 py-1 lg:px-4 lg:py-2 rounded">
                Salads
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src={img2}
                alt="slider"
                className="w-full h-full object-cover"
              />
              <h3 className="absolute uppercase bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl lg:text-2xl bg-black lg:bg-opacity-50 px-2 py-1 lg:px-4 lg:py-2 rounded">
                pizza
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src={img3}
                alt="slider"
                className="w-full h-full object-cover"
              />
              <h3 className="absolute uppercase bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl lg:text-2xl bg-black lg:bg-opacity-50 px-2 py-1 lg:px-4 lg:py-2 rounded">
                soup
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src={img4}
                alt="slider"
                className="w-full h-full object-cover"
              />
              <h3 className="absolute uppercase bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl lg:text-2xl bg-black lg:bg-opacity-50 px-2 py-1 lg:px-4 lg:py-2 rounded">
                Dessert
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src={img5}
                alt="slider"
                className="w-full h-full object-cover"
              />
              <h3 className="absolute uppercase bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl lg:text-2xl bg-black lg:bg-opacity-50 px-2 py-1 lg:px-4 lg:py-2 rounded">
                salads
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
