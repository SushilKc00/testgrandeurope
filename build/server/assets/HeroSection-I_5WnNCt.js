import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import "react";
import { Swiper, SwiperSlide } from "swiper/react";
/* empty css                    */
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { u as useWebContext } from "../entry-server.js";
const HeroSection = ({ details, index, Button }) => {
  var _a;
  const { webSiteData } = useWebContext();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "hero-section", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        Swiper,
        {
          spaceBetween: 20,
          loop: true,
          autoplay: {
            delay: `4000`,
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
          className: "h-[100%] relative",
          children: (_a = details == null ? void 0 : details.roomImage) == null ? void 0 : _a.map((Image, index2) => {
            return /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("div", { className: "w-[100%] md:h-[600px] h-[300px]", children: /* @__PURE__ */ jsx(
              "img",
              {
                decoding: "async",
                loading: "lazy",
                src: Image,
                className: "w-[100%] h-[100%]",
                alt: ""
              }
            ) }) }, index2);
          })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "w-[100%] absolute md:bottom-[-10%] bottom-[-50%] left-0 z-10", children: /* @__PURE__ */ jsxs("div", { className: "flex md:flex-row flex-col md:items-center px-6 py-8 gap-6 bg-[#37323E] w-[90%] mx-auto ", children: [
        /* @__PURE__ */ jsx("div", { className: "md:w-[10%] flex justify-center", children: /* @__PURE__ */ jsxs("span", { className: "text-white text-[3.2rem]", children: [
          "0",
          index + 1
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "md:w-[60%]", children: [
          /* @__PURE__ */ jsx("h2", { className: "md:text-[3.2rem] text-[2rem] text-white font-medium", children: details.roomName }),
          details.roomSubheading && /* @__PURE__ */ jsx("p", { className: "text-[1.2rem] text-white", children: details.roomSubheading })
        ] }),
        Button ? /* @__PURE__ */ jsx("div", { className: "md:w-[30%] flex md:justify-center ", children: /* @__PURE__ */ jsx(
          Link,
          {
            to: webSiteData == null ? void 0 : webSiteData.Engine,
            target: "_blank",
            className: "common-btn rounded-full",
            children: "Book Your Table"
          }
        ) }) : /* @__PURE__ */ jsx("div", { className: "md:w-[30%] flex md:justify-center ", children: /* @__PURE__ */ jsx(
          Link,
          {
            to: webSiteData == null ? void 0 : webSiteData.Engine,
            target: "_blank",
            className: "common-btn rounded-full",
            children: "Book Now"
          }
        ) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "md:mt-[4rem] mt-[12rem]", children: /* @__PURE__ */ jsx("p", { className: "section-para", children: details.roomDescription }) })
  ] });
};
export {
  HeroSection as H
};
