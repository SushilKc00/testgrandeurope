import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import "react";
import { B as Banner } from "./Banner-BtenGAYF.js";
import { i as img } from "./facilityimg1-DclPtBLl.js";
import { u as useScrollTop } from "./useScrollTop-DOa0KYcl.js";
import "framer-motion";
function NewsLetter() {
  useScrollTop();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Banner,
      {
        img,
        heading: ""
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#37323E] md:min-h-[530px] h-[200px] flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "md:text-[4.2rem] text-[1.8rem] uppercase text-white", children: "comming soon" }),
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("button", { className: "common-btn rounded-full mt-10", children: "Contact us" }) })
    ] })
  ] });
}
export {
  NewsLetter as default
};
