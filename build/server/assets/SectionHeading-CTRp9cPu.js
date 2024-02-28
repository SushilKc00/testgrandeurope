import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { motion } from "framer-motion";
const SectionHeading = ({ sectionHeadingDetails }) => {
  return /* @__PURE__ */ jsx("div", { className: "max-width", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ jsxs("div", { children: [
    sectionHeadingDetails.heading2 && /* @__PURE__ */ jsx(
      motion.h2,
      {
        initial: {
          y: 100,
          opacity: 0
        },
        whileInView: {
          y: 0,
          opacity: 1
        },
        viewport: {
          once: true
        },
        transition: {
          duration: 0.8
        },
        className: "section-heading-h2 text-center py-3",
        children: sectionHeadingDetails.heading2
      }
    ),
    sectionHeadingDetails.heading3 && /* @__PURE__ */ jsx("h3", { className: "section-heading-h3", children: sectionHeadingDetails.heading3 }),
    sectionHeadingDetails.para && /* @__PURE__ */ jsx(
      motion.p,
      {
        initial: {
          y: 100,
          opacity: 0
        },
        whileInView: {
          y: 0,
          opacity: 1
        },
        viewport: {
          once: true
        },
        transition: {
          duration: 0.8
        },
        className: "section-para",
        children: sectionHeadingDetails.para
      }
    ),
    sectionHeadingDetails.para2 && /* @__PURE__ */ jsx(
      motion.p,
      {
        initial: {
          y: 100,
          opacity: 0
        },
        whileInView: {
          y: 0,
          opacity: 1
        },
        viewport: {
          once: true
        },
        transition: {
          duration: 0.8
        },
        className: "section-para mt-5",
        children: sectionHeadingDetails.para2
      }
    )
  ] }) }) });
};
export {
  SectionHeading as S
};
