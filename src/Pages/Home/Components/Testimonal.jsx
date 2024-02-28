import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useWebContext } from "../../../Context/ContextProvider";
import reviewsImg from "../../../assets/Images/reviewsimg.png";
import ReactStars from "react-rating-stars-component";

export const Testimonal = () => {
  const { reviewsArr } = useWebContext();

  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-[70%] h-auto">
        <img
          decoding="async"
          loading="lazy"
          src={reviewsImg}
          alt=""
          className="w-[100%] h-[100%]"
        />
      </div>
      <div className="lg:w-[30%] bg-[#37323E] flex justify-center items-center flex-col px-10 py-12">
        <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: `4000`,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: `.next`,
            prevEl: `.prev`,
          }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
          }}
          className="w-[100%]"
        >
          {reviewsArr.map((details, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="">
                  <div className="scroll-auto overflow-y-auto no-scroll">
                    <div className="flex">
                      <ReactStars
                        count={details?.rating}
                        edit={false}
                        size={24}
                        color={"#deb666"}
                        half={true}
                      />
                    </div>
                    <p className="text-[1.3rem] text-justify leading-[2.2rem] mt-4 text-white">
                      {details?.text}
                    </p>
                  </div>
                  <h2 className="text-[1.6rem] mt-6 text-white font-medium uppercase">
                    {details?.author_name}
                  </h2>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
