import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { u as useWebContext } from "../entry-server.js";
import { B as Banner } from "./Banner-BtenGAYF.js";
import { S as SectionHeading } from "./SectionHeading-CTRp9cPu.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import { Helmet } from "react-helmet";
import "react-dom/server";
import "react-router-dom";
import "axios";
import "react-icons/ai";
import "react-icons/io5";
import "react-icons/fa";
import "react-icons/ci";
import "react-icons/lia";
import "react-icons/md";
import "react-router-dom/server.mjs";
import "framer-motion";
const GallerySlider = ({ details, index }) => {
  var _a;
  const [imgSelect, setImgSelect] = useState([]);
  const [imgSelectIndex, setImgSelectIndex] = useState(0);
  const [previewImage, setPreviewImage] = useState(false);
  const slideRight = () => {
    if (imgSelectIndex === imgSelect.length - 1)
      return setImgSelectIndex(0);
    setImgSelectIndex(imgSelectIndex + 1);
  };
  const slideLeft = () => {
    if (imgSelectIndex <= 0)
      return setImgSelectIndex(imgSelect.length - 1);
    setImgSelectIndex(imgSelectIndex - 1);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    details.Required && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-[790px] mx-auto flex flex-col justify-center", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "text-center text-[3rem] font-semibold py-3", children: details.Category }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-[#F7F5F1] py-8", children: [
        /* @__PURE__ */ jsx("div", { className: "relative z-0", children: /* @__PURE__ */ jsx(
          Swiper,
          {
            slidesPerView: 1,
            effect: "coverflow",
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 20,
              slideShadows: true
            },
            loop: true,
            autoplay: {
              delay: `${index + 3}000`,
              disableOnInteraction: false
            },
            navigation: {
              nextEl: `.next-${index}`,
              prevEl: `.prev-${index}`
            },
            modules: [Navigation, Autoplay, EffectCoverflow],
            breakpoints: {
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20
              }
            },
            children: (_a = details == null ? void 0 : details.Images) == null ? void 0 : _a.map((i, ind) => {
              return /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "md:h-[540px] h-[260px]",
                  onClick: () => {
                    setPreviewImage(true);
                    setImgSelect([...details.Images]);
                    setImgSelectIndex(ind);
                  },
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      decoding: "async",
                      loading: "lazy",
                      src: i,
                      alt: i,
                      className: "w-[100%] h-[100%]"
                    }
                  )
                }
              ) }, ind);
            })
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-5 md:mt-20 mt-5", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `prev-${index} cursor-pointer w-[40px] h-[40px] bg-[#288173] rounded-full  flex items-center justify-center`,
              children: /* @__PURE__ */ jsx(
                TiArrowLeft,
                {
                  size: 25,
                  style: {
                    color: "white"
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `next-${index} cursor-pointer  w-[40px] h-[40px] bg-[#288173] rounded-full flex items-center justify-center`,
              children: /* @__PURE__ */ jsx(
                TiArrowRight,
                {
                  size: 25,
                  style: {
                    color: "white"
                  }
                }
              )
            }
          )
        ] })
      ] })
    ] }),
    previewImage && /* @__PURE__ */ jsxs("div", { className: "fixed top-0 left-0 w-[100%] h-[100vh] bg-[#000000c6] z-10 flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-[90%] md:h-[640px] h-[300px] m-auto", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: imgSelect[imgSelectIndex],
            loading: "lazy",
            decoding: "async",
            alt: "",
            style: {
              width: "100%",
              height: "100%"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-4xl text-white bg-slate-900 w-20 h-20 flex justify-center items-center rounded-full mb-4 cursor-pointer absolute top-[-4%] right-[-2%]",
            onClick: () => {
              setPreviewImage(false);
              window.document.body.classList.remove("bg_salmon");
            },
            children: "X"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "fixed top-[50%] md:left-[2rem] left-[4rem] p-4 bg-[#288173]  cursor-pointer rounded-full",
          onClick: () => {
            slideLeft();
          },
          children: /* @__PURE__ */ jsx(TiArrowLeft, { size: 20, className: "text-white" })
        }
      ),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "fixed top-[50%] md:right-[2rem] right-[4rem] p-4 bg-[#288173] rounded-full cursor-pointer",
          onClick: () => {
            slideRight();
          },
          children: /* @__PURE__ */ jsx(TiArrowRight, { size: 20, className: "text-white" })
        }
      )
    ] })
  ] });
};
const Gallery = ({ SeoMetaData }) => {
  var _a, _b, _c, _d, _e;
  const { webSiteData } = useWebContext();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: SeoMetaData == null ? void 0 : SeoMetaData.Description }),
      /* @__PURE__ */ jsx("title", { children: SeoMetaData == null ? void 0 : SeoMetaData.Title })
    ] }),
    /* @__PURE__ */ jsx(
      Banner,
      {
        img: (_b = (_a = webSiteData == null ? void 0 : webSiteData.PagesTitles) == null ? void 0 : _a.Gallery) == null ? void 0 : _b.Image,
        heading: (_c = webSiteData == null ? void 0 : webSiteData.PagesTitles) == null ? void 0 : _c.Gallery.Title
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "layout-section", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          sectionHeadingDetails: {
            heading2: (_d = webSiteData == null ? void 0 : webSiteData.SectionTitles) == null ? void 0 : _d.Gallery.Title,
            para: (_e = webSiteData == null ? void 0 : webSiteData.SectionTitles) == null ? void 0 : _e.Gallery.Description
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "gallery-container md:mt-24 mt-8", children: webSiteData == null ? void 0 : webSiteData.Gallery.map((d, i) => /* @__PURE__ */ jsx(GallerySlider, { details: d, index: i }, i)) })
    ] })
  ] });
};
export {
  Gallery as default
};
