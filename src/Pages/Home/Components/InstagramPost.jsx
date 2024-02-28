import React, { useState } from "react";
import { useWebContext } from "../../../Context/ContextProvider";
import { TiArrowRight, TiArrowLeft } from "react-icons/ti";
import { Link } from "react-router-dom";
import { CiInstagram } from "react-icons/ci";

export const InstagramPost = () => {
  const { webSiteData } = useWebContext();
  const [imgSelectIndex, setImgSelectIndex] = useState(0);
  const [previewImage, setPreviewImage] = useState(false);

  const slideRight = () => {
    if (imgSelectIndex === webSiteData?.Images.length - 1)
      return setImgSelectIndex(0);
    setImgSelectIndex(imgSelectIndex + 1);
  };

  const slideLeft = () => {
    if (imgSelectIndex <= 0)
      return setImgSelectIndex(webSiteData?.Images?.length - 1);
    setImgSelectIndex(imgSelectIndex - 1);
  };

  return (
    <>
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-2 gap-3">
        {webSiteData.Images.map((ins, ind) => (
          <div
            key={ind}
            className="sm:h-[320px] h-[185px] overflow-hidden"
            onClick={() => {
              setPreviewImage(true);
              setImgSelectIndex(ind);
            }}
          >
            <img
              src={ins.Image}
              alt=""
              className="w-[100%] h-[100%] hover:scale-125 transition-all duration-500"
            />
          </div>
        ))}
      </div>

      {webSiteData?.Links?.InstagramRequired && (
        <div className="flex justify-center mt-12">
          <Link
            to={webSiteData?.Links?.Instagram}
            target="_blank"
            className="common-btn rounded-full flex gap-5 items-center"
          >
            View Instagram <CiInstagram size={20} />
          </Link>
        </div>
      )}

      {previewImage && (
        <div className="fixed top-0 left-0 w-[100%] h-[100vh] bg-[#000000c6] z-10 flex flex-col justify-center items-center">
          <div className="relative w-[90%] md:h-[640px] h-[300px] m-auto">
            <img
              src={webSiteData?.Images[imgSelectIndex].Image}
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
