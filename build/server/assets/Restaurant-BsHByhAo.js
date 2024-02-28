import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import "react";
import { B as Banner } from "./Banner-BtenGAYF.js";
import { S as SectionHeading } from "./SectionHeading-CTRp9cPu.js";
import "swiper/react";
/* empty css                    */
import "swiper/modules";
import { u as useWebContext } from "../entry-server.js";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "framer-motion";
import "react-dom/server";
import "axios";
import "react-icons/ai";
import "react-icons/io5";
import "react-icons/fa";
import "react-icons/ci";
import "react-icons/lia";
import "react-icons/md";
import "react-router-dom/server.mjs";
const HeroSectionRes = ({ details, index, Button }) => {
  const { webSiteData } = useWebContext();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "hero-section", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "w-[100%] md:h-[600px] h-[300px]", children: /* @__PURE__ */ jsx(
        "img",
        {
          decoding: "async",
          loading: "lazy",
          src: details.Image,
          className: "w-[100%] h-[100%]",
          alt: ""
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "w-[100%] absolute md:bottom-[-10%] bottom-[-50%] left-0 z-10", children: /* @__PURE__ */ jsxs("div", { className: "flex md:flex-row flex-col md:items-center px-6 py-8 gap-6 bg-[#37323E] w-[90%] mx-auto ", children: [
        /* @__PURE__ */ jsx("div", { className: "md:w-[10%] flex justify-center", children: /* @__PURE__ */ jsxs("span", { className: "text-white text-[3.2rem]", children: [
          "0",
          index + 1
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "md:w-[60%]", children: [
          /* @__PURE__ */ jsx("h2", { className: "md:text-[3.2rem] text-[2rem] text-white font-medium", children: details.Heading }),
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
    /* @__PURE__ */ jsx("div", { className: "md:mt-[4rem] mt-[12rem]", children: /* @__PURE__ */ jsx("p", { className: "section-para", children: details.Text }) })
  ] });
};
const Restaurant = ({ SeoMetaData }) => {
  var _a, _b, _c, _d;
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
        img: (_b = (_a = webSiteData == null ? void 0 : webSiteData.PagesTitles) == null ? void 0 : _a.Restaurant) == null ? void 0 : _b.Image,
        heading: (_c = webSiteData == null ? void 0 : webSiteData.PagesTitles) == null ? void 0 : _c.Restaurant.Title
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "layout-section", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          sectionHeadingDetails: {
            heading2: webSiteData == null ? void 0 : webSiteData.DataToarrange[0].Heading,
            para: webSiteData == null ? void 0 : webSiteData.DataToarrange[0].Text
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "max-width mt-20 flex flex-col gap-20 md:!pb-28 !pb-52", children: (_d = webSiteData == null ? void 0 : webSiteData.DataToarrange[0]) == null ? void 0 : _d.Images.map((d, index) => {
        return /* @__PURE__ */ jsx(
          HeroSectionRes,
          {
            details: d,
            index,
            Button: true
          },
          index
        );
      }) })
    ] })
  ] });
};
export {
  Restaurant as default
};
