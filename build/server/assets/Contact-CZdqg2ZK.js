import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { Link } from "react-router-dom";
const Contact = ({ details, Button }) => {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-[1024px] mx-auto", children: [
    details.heading && /* @__PURE__ */ jsx("h2", { className: "py-8 text-center md:text-[3.2rem] text-[1.8rem] font-medium uppercase", children: details.heading }),
    /* @__PURE__ */ jsx("div", { className: "sm:h-[430px] h-[200px]", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: details.Image,
        alt: "contact-image",
        width: 450,
        height: 430,
        className: "w-[100%] h-[100%]"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-col gap-8", children: [
      details.para && /* @__PURE__ */ jsx("p", { className: "text-center text-[1.4rem]", children: details.para }),
      Button && /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ jsx(Link, { to: "/Contact", className: "common-btn rounded-full", children: "Contact Us" }) })
    ] })
  ] });
};
export {
  Contact as C
};
