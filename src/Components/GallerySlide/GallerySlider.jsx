import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import { TiArrowRight, TiArrowLeft } from "react-icons/ti";

export const GallerySlider = ({ details, index }) => {
  const [imgSelect, setImgSelect] = useState([]);
  const [imgSelectIndex, setImgSelectIndex] = useState(0);
  const [previewImage, setPreviewImage] = useState(false);

  const slideRight = () => {
    if (imgSelectIndex === imgSelect.length - 1) return setImgSelectIndex(0);
    setImgSelectIndex(imgSelectIndex + 1);
  };

  const slideLeft = () => {
    if (imgSelectIndex <= 0) return setImgSelectIndex(imgSelect.length - 1);
    setImgSelectIndex(imgSelectIndex - 1);
  };

  return (
    <>
      {details.Required && (
        <div>
          <div className="max-w-[790px] mx-auto flex flex-col justify-center">
            <div>
              <h2 className="text-center text-[3rem] font-semibold py-3">
                {details.Category}
              </h2>
            </div>
          </div>
          <div className="bg-[#F7F5F1] py-8">
            <div className="relative z-0">
              <Swiper
                slidesPerView={1}
                effect="coverflow"
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 20,
                  slideShadows: true,
                }}
                loop={true}
                autoplay={{
                  delay: `${index + 3}000`,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: `.next-${index}`,
                  prevEl: `.prev-${index}`,
                }}
                modules={[Navigation, Autoplay, EffectCoverflow]}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
              >
                {details?.Images?.map((i, ind) => {
                  return (
                    <SwiperSlide key={ind}>
                      <div
                        className="md:h-[540px] h-[260px]"
                        onClick={() => {
                          setPreviewImage(true);
                          setImgSelect([...details.Images]);
                          setImgSelectIndex(ind);
                        }}
                      >
                        <img
                          decoding="async"
                          loading="lazy"
                          src={i}
                          alt={i}
                          className="w-[100%] h-[100%]"
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="flex justify-center gap-5 md:mt-20 mt-5">
              <div
                className={`prev-${index} cursor-pointer w-[40px] h-[40px] bg-[#288173] rounded-full  flex items-center justify-center`}
              >
                <TiArrowLeft
                  size={25}
                  style={{
                    color: "white",
                  }}
                />
              </div>
              <div
                className={`next-${index} cursor-pointer  w-[40px] h-[40px] bg-[#288173] rounded-full flex items-center justify-center`}
              >
                <TiArrowRight
                  size={25}
                  style={{
                    color: "white",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {previewImage && (
        <div className="fixed top-0 left-0 w-[100%] h-[100vh] bg-[#000000c6] z-10 flex flex-col justify-center items-center">
          <div className="relative w-[90%] md:h-[640px] h-[300px] m-auto">
            <img
              src={imgSelect[imgSelectIndex]}
              loading="lazy"
              decoding="async"
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <p
              className="text-4xl text-white bg-slate-900 w-20 h-20 flex justify-center items-center rounded-full mb-4 cursor-pointer absolute top-[-4%] right-[-2%]"
              onClick={() => {
                setPreviewImage(false);
                window.document.body.classList.remove("bg_salmon");
              }}
            >
              X
            </p>
          </div>
          <span
            className="fixed top-[50%] md:left-[2rem] left-[4rem] p-4 bg-[#288173]  cursor-pointer rounded-full"
            onClick={() => {
              slideLeft();
            }}
          >
            <TiArrowLeft size={20} className="text-white" />
          </span>
          <span
            className="fixed top-[50%] md:right-[2rem] right-[4rem] p-4 bg-[#288173] rounded-full cursor-pointer"
            onClick={() => {
              slideRight();
            }}
          >
            <TiArrowRight size={20} className="text-white" />
          </span>
        </div>
      )}
    </>
  );
};
