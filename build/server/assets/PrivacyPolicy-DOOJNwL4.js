import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import "react";
import { B as Banner } from "./Banner-BtenGAYF.js";
import { u as useWebContext } from "../entry-server.js";
import { S as SectionHeading } from "./SectionHeading-CTRp9cPu.js";
import parse from "html-react-parser";
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
function PrivacyPolicy({ SeoMetaData }) {
  var _a, _b, _c, _d, _e, _f;
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
        img: (_b = (_a = webSiteData == null ? void 0 : webSiteData.PagesTitles) == null ? void 0 : _a.Privacy) == null ? void 0 : _b.Image,
        heading: (_d = (_c = webSiteData == null ? void 0 : webSiteData.PagesTitles) == null ? void 0 : _c.Privacy) == null ? void 0 : _d.Title
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "layout-section", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          sectionHeadingDetails: {
            heading2: "PRIVACY POLICY",
            para: `Welcome to Grand Hotel D’Europe Pondicherry! We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us. By accessing our website at www.anandhwww.granddeeurope.comainn.com or contacting us via email at enquiry@granddeeurope.com, you consent to the terms and practices described in this policy.`
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "max-width px-8 text-[1.6rem] mt-10 tsc", children: ((_e = webSiteData == null ? void 0 : webSiteData.TermsConditions[0]) == null ? void 0 : _e.Privacy) && parse((_f = webSiteData == null ? void 0 : webSiteData.TermsConditions[0]) == null ? void 0 : _f.Privacy) })
    ] })
  ] });
}
export {
  PrivacyPolicy as default
};
