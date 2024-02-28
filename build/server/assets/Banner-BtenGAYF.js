import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { motion } from "framer-motion";
const Banner = ({ img, heading, desc }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "section-banner",
      style: {
        backgroundImage: `url(${img})`
      },
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1024px] mx-auto", children: [
        /* @__PURE__ */ jsx(
          motion.h1,
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
              delay: 0.2,
              duration: 0.8
            },
            className: "section-banner-h1 text-center",
            children: heading
          }
        ),
        desc && /* @__PURE__ */ jsx("p", { className: "text-white", children: desc })
      ] })
    }
  );
};
export {
  Banner as B
};
