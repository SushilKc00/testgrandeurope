import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { useWebContext } from "../../Context/ContextProvider";

export const HeroSectionRes = ({ details, index, Button }) => {
  const { webSiteData } = useWebContext();
  return (
    <>
      <div className="hero-section">
        <div className="relative">
          <div className="w-[100%] md:h-[600px] h-[300px]">
            <img
              decoding="async"
              loading="lazy"
              src={details.Image}
              className="w-[100%] h-[100%]"
              alt=""
            />
          </div>

          <div className="w-[100%] absolute md:bottom-[-10%] bottom-[-50%] left-0 z-10">
            <div className="flex md:flex-row flex-col md:items-center px-6 py-8 gap-6 bg-[#37323E] w-[90%] mx-auto ">
              <div className="md:w-[10%] flex justify-center">
                <span className="text-white text-[3.2rem]">0{index + 1}</span>
              </div>
              <div className="md:w-[60%]">
                <h2 className="md:text-[3.2rem] text-[2rem] text-white font-medium">
                  {details.Heading}
                </h2>
                {details.roomSubheading && (
                  <p className="text-[1.2rem] text-white">
                    {details.roomSubheading}
                  </p>
                )}
              </div>
              {Button ? (
                <div className="md:w-[30%] flex md:justify-center ">
                  <Link
                    to={webSiteData?.Engine}
                    target="_blank"
                    className="common-btn rounded-full"
                  >
                    Book Your Table
                  </Link>
                </div>
              ) : (
                <div className="md:w-[30%] flex md:justify-center ">
                  <Link
                    to={webSiteData?.Engine}
                    target="_blank"
                    className="common-btn rounded-full"
                  >
                    Book Now
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="md:mt-[4rem] mt-[12rem]">
        <p className="section-para">{details.Text}</p>
      </div>
    </>
  );
};
