import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import "react";
import { i as img } from "./facilityimg1-DclPtBLl.js";
import { B as Banner } from "./Banner-BtenGAYF.js";
import { S as SectionHeading } from "./SectionHeading-CTRp9cPu.js";
import { A as Accordion } from "./Accordion-Fl_NIydC.js";
import { u as useScrollTop } from "./useScrollTop-DOa0KYcl.js";
import "framer-motion";
import "react-icons/md";
const pressDetails = [
  {
    title: "GRAND OPENINGS AND RENOVATIONS",
    content: "Explore our press releases to stay updated on our special events, seasonal promotions, and exclusive offers. From unique themed experiences to limited-time packages, we strive to provide our guests with unforgettable moments."
  },
  {
    title: "SPECIAL EVENTS AND PROMOTIONS",
    content: "Explore our press releases to stay updated on our special events, seasonal promotions, and exclusive offers. From unique themed experiences to limited-time packages, we strive to provide our guests with unforgettable moments."
  },
  {
    title: "AWARDS AND RECOGNITIONS",
    content: "Explore our press releases to stay updated on our special events, seasonal promotions, and exclusive offers. From unique themed experiences to limited-time packages, we strive to provide our guests with unforgettable moments."
  },
  {
    title: "SUSTAINABILITY INITIATIVES",
    content: "Explore our press releases to stay updated on our special events, seasonal promotions, and exclusive offers. From unique themed experiences to limited-time packages, we strive to provide our guests with unforgettable moments."
  }
];
const PressRoom = () => {
  useScrollTop();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Banner,
      {
        img
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "layout-section", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          sectionHeadingDetails: {
            heading2: "WELCOME TO OUR PRESS ROOM",
            para: "Welcome to the Press Room of Grand Hotel D'Europe. We appreciate your interest in our brand and are thrilled to share the latest news, press releases, and updates about our prestigious hotel. This section of our website is dedicated to keeping you informed about the exciting developments, events, and initiatives taking place at Grand Hotel D'Europe. Stay connected with us to discover the latest news and updates from our esteemed establishment."
          }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "max-width mt-20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            SectionHeading,
            {
              sectionHeadingDetails: {
                heading2: "PRESS RELEASES",
                para: "In our Press Room, we share official press releases that highlight noteworthy events, milestones, and announcements related to Grand Hotel D'Europe. Our press releases cover a wide range of topics, including:"
              }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(
            Accordion,
            {
              items: pressDetails,
              accordionContainerClass: "flex flex-col gap-4",
              accordionContentClass: "border border-gray-400 px-6 py-5",
              contentClass: "mt-6 text-[1.4rem] text-gray-600",
              h3Class: "flex justify-between items-center md:text-[1.8rem] text-[1.2rem] font-medium"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-20", children: [
          /* @__PURE__ */ jsx(
            SectionHeading,
            {
              sectionHeadingDetails: {
                heading2: "HOW TO STAY UPDATED",
                para: "We want to ensure that you never miss an important update from Grand Hotel D'Europe. Here's how you can stay connected with our press releases:"
              }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(
            Accordion,
            {
              items: pressDetails,
              accordionContainerClass: "flex flex-col gap-4",
              accordionContentClass: "border border-gray-400 px-6 py-5",
              contentClass: "mt-6 text-[1.4rem] text-gray-600",
              h3Class: "flex justify-between items-center md:text-[1.8rem] text-[1.2rem] font-medium"
            }
          ) })
        ] })
      ] })
    ] })
  ] });
};
export {
  PressRoom as default
};
