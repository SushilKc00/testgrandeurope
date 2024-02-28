import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import "react";
import { B as Banner } from "./Banner-BtenGAYF.js";
import { u as useWebContext } from "../entry-server.js";
import "html-react-parser";
import { u as useScrollTop } from "./useScrollTop-DOa0KYcl.js";
import { Helmet } from "react-helmet";
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
function Cancellation({ SeoMetaData }) {
  var _a, _b, _c, _d;
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
        img: (_b = (_a = webSiteData == null ? void 0 : webSiteData.PagesTitles) == null ? void 0 : _a.Cancellation) == null ? void 0 : _b.Image,
        heading: (_d = (_c = webSiteData == null ? void 0 : webSiteData.PagesTitles) == null ? void 0 : _c.Cancellation) == null ? void 0 : _d.Title
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#37323E] md:min-h-[530px] h-[200px] flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "md:text-[4.2rem] text-[1.8rem] uppercase text-white", children: "comming soon" }),
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("button", { className: "common-btn rounded-full mt-10", children: "Contact us" }) })
    ] })
  ] });
}
export {
  Cancellation as default
};
