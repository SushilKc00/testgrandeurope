import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { B as Banner } from "./Banner-BtenGAYF.js";
import { u as useWebContext } from "../entry-server.js";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
/* empty css                    */
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import { S as SectionHeading } from "./SectionHeading-CTRp9cPu.js";
import { N as Nearby } from "./Nearby-qDHios5P.js";
import { u as useScrollTop } from "./useScrollTop-DOa0KYcl.js";
import "framer-motion";
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
const About = ({ SeoMetaData }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  const [slideIndexValue, setSlideIndexValue] = useState(0);
  const { services } = useWebContext();
  const { webSiteData } = useWebContext();
  useScrollTop();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: SeoMetaData == null ? void 0 : SeoMetaData.Description }),
      /* @__PURE__ */ jsx("title", { children: SeoMetaData == null ? void 0 : SeoMetaData.Title })
    ] }),
    /* @__PURE__ */ jsx(
      Banner,
      {
        img: (_b = (_a = webSiteData == null ? void 0 : webSiteData.PagesTitles) == null ? void 0 : _a.About) == null ? void 0 : _b.Image,
        heading: (_d = (_c = webSiteData == null ? void 0 : webSiteData.PagesTitles) == null ? void 0 : _c.About) == null ? void 0 : _d.Title
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "layout-section", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          sectionHeadingDetails: {
            heading2: (_e = webSiteData == null ? void 0 : webSiteData.About) == null ? void 0 : _e.Heading
            // para: webSiteData?.SectionTitles?.About?.Description,
          }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "max-width", children: [
        /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsx("p", { className: "section-para", children: (_f = webSiteData == null ? void 0 : webSiteData.About) == null ? void 0 : _f.Text }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6 mt-12", children: [
          /* @__PURE__ */ jsx("div", { className: "md:h-[400px] h-[200px]", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: (_g = webSiteData == null ? void 0 : webSiteData.About) == null ? void 0 : _g.url,
              alt: "",
              className: "w-[100%] h-[100%]"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "md:h-[400px] h-[200px]", children: /* @__PURE__ */ jsx(
            "img",
            {
              decoding: "async",
              loading: "lazy",
              src: (_h = webSiteData == null ? void 0 : webSiteData.Images[0]) == null ? void 0 : _h.Image,
              alt: "",
              className: "w-[100%] h-[100%]"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12", children: [
          /* @__PURE__ */ jsx("p", { className: "section-para", children: "Today Grand Hotel D’Europe continues to proudly stand at its original address. The 18th-century hotel located in the old French town now has a new wing built in Art Décor design/architecture with a Chettinad touch to it. The heritage hotel’s serene atmosphere makes it the perfect base for discovering the unique charms of the French quarters and the Indian town at a laggard pace. Neatly placed spacious rooms, a restaurant serving continental & north Indian cuisines, exotic chic bar and a casual but elegant courtyard, retains the glorious past of the Grand Hotel D’Europe." }),
          /* @__PURE__ */ jsx("p", { className: "section-para mt-8", children: "Today Grand Hotel D’Europe continues to proudly stand at its original address. The 18th-century hotel located in the old French town now has a new wing built in Art Décor design/architecture with a Chettinad touch to it. The heritage hotel’s serene atmosphere makes it the perfect base for discovering the unique charms of the French quarters and the Indian town at a laggard pace. Neatly placed spacious rooms, a restaurant serving continental & north Indian cuisines, exotic chic bar and a casual but elegant courtyard, retains the glorious past of the Grand Hotel D’Europe." })
        ] })
      ] })
    ] }),
    ((_j = (_i = webSiteData == null ? void 0 : webSiteData.SectionsVisible) == null ? void 0 : _i.About) == null ? void 0 : _j.Facilities) && /* @__PURE__ */ jsxs("section", { className: "layout-section", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          sectionHeadingDetails: {
            heading2: "WHY CHOOSE US"
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "max-width mt-12", children: /* @__PURE__ */ jsxs("div", { className: "flex lg:flex-row flex-col items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "sm:max-w-[900px] w-[100%] md:h-[600px] h-[200px] md:order-1 order-2", children: /* @__PURE__ */ jsx(
          Swiper,
          {
            loop: true,
            autoplay: {
              delay: 6e3,
              disableOnInteraction: false
            },
            grabCursor: true,
            modules: [EffectCube, Pagination, Autoplay],
            onSlideChange: (i) => {
              setSlideIndexValue(i.realIndex);
            },
            className: "h-[100%] w-[100%]",
            children: services == null ? void 0 : services.map((i, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("div", { className: "h-[100%]", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: i.Image,
                loading: "lazy",
                decoding: "async",
                alt: i.Image,
                style: {
                  height: "100%",
                  width: "100%"
                }
              }
            ) }) }, index))
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "lg:w-[40%] w-[100%] flex flex-col gap-4 z-[2] lg:ml-[-8rem] md:order-1", children: (_k = webSiteData == null ? void 0 : webSiteData.Services) == null ? void 0 : _k.map((d, index) => {
          return /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-[#37323E] px-8 py-10",
              style: {
                background: slideIndexValue === index ? "#ffffff" : "#37323E",
                color: slideIndexValue === index ? "black" : "white",
                transition: "all 0.5s ease-in",
                boxShadow: "0 0 5px #4b4a4a85"
              },
              children: /* @__PURE__ */ jsx("h2", { className: "uppercase text-center md:text-[2.4rem] text-[1.5rem] font-medium", children: d.Title })
            },
            index
          );
        }) })
      ] }) })
    ] }),
    ((_m = (_l = webSiteData == null ? void 0 : webSiteData.SectionsVisible) == null ? void 0 : _l.About) == null ? void 0 : _m.Nearby) && /* @__PURE__ */ jsxs("section", { className: "layout-section", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          sectionHeadingDetails: {
            heading2: (_n = webSiteData == null ? void 0 : webSiteData.SectionTitles) == null ? void 0 : _n.Nearby.Title,
            para: (_o = webSiteData == null ? void 0 : webSiteData.SectionTitles) == null ? void 0 : _o.Nearby.Description
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "max-width mt-12", children: /* @__PURE__ */ jsx(Nearby, { isButton: true }) })
    ] })
  ] });
};
export {
  About as default
};
