import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import nearbyimg1 from "../../../assets/Images/nearbyimg1.png";
import nearbyimg2 from "../../../assets/Images/nearbyimg2.png";
import nearbyimg3 from "../../../assets/Images/nearbyimg3.png";

import { Link } from "react-router-dom";
import { useWebContext } from "../../../Context/ContextProvider";

const nearBy = [
  {
    Image: nearbyimg1,
    Heading: "ASHRAM WALK",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enimhghh adminim veniam, quis nostrud exercitation ullamd laboris nisi ut aliquip ex ea commodo  aliquip consequat.",
  },
  {
    Image: nearbyimg2,
    Heading: "ASHRAM WALK",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enimhghh adminim veniam, quis nostrud exercitation ullamd laboris nisi ut aliquip ex ea commodo  aliquip consequat.",
  },
  {
    Image: nearbyimg3,
    Heading: "ASHRAM WALK",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enimhghh adminim veniam, quis nostrud exercitation ullamd laboris nisi ut aliquip ex ea commodo  aliquip consequat.",
  },
  {
    Image: nearbyimg2,
    Heading: "ASHRAM WALK",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enimhghh adminim veniam, quis nostrud exercitation ullamd laboris nisi ut aliquip ex ea commodo  aliquip consequat.",
  },
];

export const Nearby = ({ isButton }) => {
  const { webSiteData } = useWebContext();
  const [viemore, setViewMore] = useState(false);
  const [selectIndex, setSelectIndex] = useState("");

  return (
    <div>
      <Swiper
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: `8000`,
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
        {webSiteData?.Nearby.map((det, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <div className="w-[100%] md:h-[400px] h-[260px]">
                  <img
                    decoding="async"
                    loading="lazy"
                    src={det.Image}
                    className="w-[100%] h-[100%]"
                    alt=""
                  />
                </div>
                <div className="px-6 py-8">
                  <h2 className="text-[2rem] font-medium uppercase">
                    {det.Place}
                  </h2>
                  <div
                    style={{
                      maxHeight:
                        viemore && index === selectIndex ? "1500px" : "60px",
                      overflow: "hidden",
                      transition: "all 1s linear",
                    }}
                  >
                    <p className="mt-2 text-[1.6rem] text-[#4d4d4d] font-normal ">
                      {det.Description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link
                      className="text-[#288173] text-[1.6rem] font-semibold"
                      onClick={() => {
                        setViewMore(!viemore);
                        setSelectIndex(index);
                      }}
                    >
                      View More &gt;
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {isButton && (
        <div className="flex justify-center mt-12">
          <Link to="" className="common-btn rounded-full">
            View All
          </Link>
        </div>
      )}
    </div>
  );
};
