import React from "react";
import { Link } from "react-router-dom";
import { useWebContext } from "../../../Context/ContextProvider";
import { IoIosArrowForward } from "react-icons/io";

export const PhotoGallery = () => {
  const { webSiteData } = useWebContext();

  const imgGallery = [
    webSiteData?.Banner[0]?.url,
    webSiteData?.Banner[1]?.url,
    webSiteData?.Banner[2]?.url,
    webSiteData?.Banner[3]?.url,
    webSiteData?.Banner[4]?.url,
    webSiteData?.Banner[5]?.url,
    webSiteData?.Banner[6]?.url,
    webSiteData?.Banner[7]?.url,
    webSiteData?.Banner[8]?.url,
  ];

  return (
    <div className="max-width min-h-[725px] flex flex-col gap-5 photo-gallery">
      {/* Upper Photo Gallery************   */}
      <div className="grid-upper-gallery">
        <div className="wide-grid overflow-hidden">
          <img
            decoding="async"
            loading="lazy"
            src={imgGallery[0]}
            className="w-[100%] h-[100%]"
            alt="gallery-img"
          />
        </div>
        <div className="overflow-hidden">
          <img
            decoding="async"
            loading="lazy"
            src={imgGallery[1]}
            alt="gallery-img"
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <div className="h-[100%] overflow-hidden">
              <img
                decoding="async"
                loading="lazy"
                src={imgGallery[2]}
                alt="gallery-img"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="h-[100%] overflow-hidden">
              <img
                decoding="async"
                loading="lazy"
                src={imgGallery[3]}
                alt="gallery-img"
                className="w-[100%] h-[100%]"
              />
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              decoding="async"
              loading="lazy"
              src={imgGallery[4]}
              alt="gallery-img"
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>
      </div>

      {/* Lower Photo Gallery********** */}
      <div className="grid-lower-gallery">
        <div className="overflow-hidden">
          <img
            decoding="async"
            loading="lazy"
            src={imgGallery[5]}
            alt="gallery-img"
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <div className="h-[100%] overflow-hidden">
              <img
                decoding="async"
                loading="lazy"
                src={imgGallery[6]}
                alt="gallery-img"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="h-[100%] overflow-hidden">
              <img
                decoding="async"
                loading="lazy"
                src={imgGallery[7]}
                alt="gallery-img"
                className="w-[100%] h-[100%]"
              />
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              decoding="async"
              loading="lazy"
              src={imgGallery[8]}
              alt="gallery-img"
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>
        <div className="bg-[#F4F4F4] px-10 py-20 flex flex-col gap-10">
          <h2 className="text-[#1C1C1C] text-[4.2rem] uppercase leading-[5rem] font-medium">
            {webSiteData?.SectionTitles?.About.Title}
          </h2>
          <p className="text-[#1f1f1f] text-[1.7rem] font-normal">
            {webSiteData?.About.Text.substring(0, 200)}.........
          </p>
          <Link
            to="/About"
            className="text-[#4d4d4d]  uppercase font-bold text-[1.6rem] flex items-center gap-1"
          >
            <span className="border-b-[3px] border-b-[#288173]">ABOUT US</span>
            <span className="sr-only">icon</span>
            <IoIosArrowForward className="text-[1.8rem]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
