import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import "react";
import { B as Banner } from "./Banner-BtenGAYF.js";
import { S as SectionHeading } from "./SectionHeading-CTRp9cPu.js";
import { i as img } from "./facilityimg1-DclPtBLl.js";
import { u as useScrollTop } from "./useScrollTop-DOa0KYcl.js";
import "framer-motion";
function Careers() {
  useScrollTop();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Banner,
      {
        img,
        heading: ""
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "layout-section", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          sectionHeadingDetails: {
            heading2: "JOIN OUR TEAM",
            para: "Thank you for your interest in joining our team at Grand Hotel D'Europe. We value your enthusiasm and look forward to the possibility of having you as part of our dedicated workforce. This page is dedicated to sharing future job opportunities, and we encourage you to check back regularly for updates."
          }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "max-width mt-20", children: [
        /* @__PURE__ */ jsx(
          SectionHeading,
          {
            sectionHeadingDetails: {
              heading2: "How to Stay Updated",
              para: "To ensure you don't miss out on any future job opportunities at Grand Hotel D'Europe, we recommend the following steps:"
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "mt-10 flex flex-col gap-8", children: data1.map((item, i) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "content_heading font-medium text_dark", children: item.h2 }),
          /* @__PURE__ */ jsx("p", { className: "content_description font-normal text_normal", children: item.desc }),
          item.desc2 && /* @__PURE__ */ jsx("p", { className: "content_description font-normal text_normal", children: item.desc2 }),
          item.desc3 && /* @__PURE__ */ jsx("p", { className: "content_description font-normal text_normal", children: item.desc3 })
        ] }, i)) })
      ] })
    ] })
  ] });
}
const data1 = [
  {
    h2: `Bookmark this page :`,
    desc: "Save this Careers page in your browser bookmarks for quick and easy access. This way, you can return to check for new vacancies conveniently."
  },
  {
    h2: `Subscribe to our newsletter :`,
    desc: "Sign up for our newsletter to receive regular updates about new job openings, company news, and exciting developments at Grand Hotel"
  },
  {
    h2: `Follow us on social media :`,
    desc: "Connect with us on our official social media platforms, including LinkedIn, Twitter, and Facebook. By following our accounts, you'll stay updated on the latest news, job postings, and happenings at Grand Hotel D'Europe.",
    desc2: `We appreciate your interest and the time you've taken to explore potential career opportunities with us. We value your skills and contributions and will notify you about future vacancies shortly. Stay tuned for exciting opportunities as we continue to grow and provide exceptional experiences for our guests.`,
    desc3: `Thank you for considering a career with Grand Hotel D'Europe. Although we don't have any immediate vacancies to announce, we encourage you to stay connected with us through this Careers page, our newsletter, and our social media channels. We appreciate your enthusiasm and eagerly anticipate notifying you about future job opportunities that match your skills and aspirations. Together, let's contribute to the legacy of Grand Hotel D'Europe and create unforgettable moments for our guests.`
  }
];
export {
  Careers as default
};
