import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
/* empty css                    */
import { Link } from "react-router-dom";
import { u as useWebContext } from "../entry-server.js";
const Nearby = ({ isButton }) => {
  const { webSiteData } = useWebContext();
  const [viemore, setViewMore] = useState(false);
  const [selectIndex, setSelectIndex] = useState("");
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      Swiper,
      {
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: `8000`,
          disableOnInteraction: false
        },
        pagination: {
          el: "#swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: `.next`,
          prevEl: `.prev`
        },
        modules: [Pagination, Navigation, Autoplay],
        breakpoints: {
          768: {
            slidesPerView: 3
          }
        },
        className: "h-[100%]",
        children: webSiteData == null ? void 0 : webSiteData.Nearby.map((det, index) => {
          return /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "w-[100%] md:h-[400px] h-[260px]", children: /* @__PURE__ */ jsx(
              "img",
              {
                decoding: "async",
                loading: "lazy",
                src: det.Image,
                className: "w-[100%] h-[100%]",
                alt: ""
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "px-6 py-8", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-[2rem] font-medium uppercase", children: det.Place }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  style: {
                    maxHeight: viemore && index === selectIndex ? "1500px" : "60px",
                    overflow: "hidden",
                    transition: "all 1s linear"
                  },
                  children: /* @__PURE__ */ jsx("p", { className: "mt-2 text-[1.6rem] text-[#4d4d4d] font-normal ", children: det.Description })
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
                Link,
                {
                  className: "text-[#288173] text-[1.6rem] font-semibold",
                  onClick: () => {
                    setViewMore(!viemore);
                    setSelectIndex(index);
                  },
                  children: "View More >"
                }
              ) })
            ] })
          ] }) }, index);
        })
      }
    ),
    isButton && /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-12", children: /* @__PURE__ */ jsx(Link, { to: "", className: "common-btn rounded-full", children: "View All" }) })
  ] });
};
export {
  Nearby as N
};
