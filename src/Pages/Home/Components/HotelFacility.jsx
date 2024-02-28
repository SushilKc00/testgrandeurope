import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import facilityimg1 from "../../../assets/Images/facilityimg1.png";
import { useWebContext } from "../../../Context/ContextProvider";

const details = new Array(5).fill("");

export const HotelFacility = () => {
  const { webSiteData } = useWebContext();
  return (
    <div className="py-16 lg:px-28 mt-16">
      <Swiper
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: `4000`,
          disableOnInteraction: false,
        }}
        pagination={{
          el: "#swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: `.next`,
          prevEl: `.prev`,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        className="h-[100%]"
      >
        {webSiteData?.Services?.map((d, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="bg-white pb-8">
                <div className="h-[260px]">
                  <img
                    decoding="async"
                    loading="lazy"
                    src={d.Image}
                    className="w-[100%] h-[100%]"
                    alt=""
                  />
                </div>

                <div className="px-6 py-4">
                  <h2 className="text-black text-[2.4rem] font-medium uppercase">
                    {d.Title}
                  </h2>
                  <p className="text-black mt-2 text-[1.2rem]">{d.Text}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-center items-center mt-12">
        {/* <Link className="common-btn rounded-full">All Facilities</Link> */}
      </div>
    </div>
  );
};
