import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Accordion = ({
  items,
  accordionContainerClass,
  headingDivClass,
  h3Class,
  contentClass,
  accordionContentClass
}) => {
  console.log(accordionContainerClass);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return /* @__PURE__ */ jsx("div", { className: accordionContainerClass, children: items.map((item, index) => /* @__PURE__ */ jsxs("div", { className: accordionContentClass, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        style: { cursor: "pointer" },
        onClick: () => handleItemClick(index),
        className: `${headingDivClass} ${activeIndex === index ? "open" : "closed"}`,
        children: /* @__PURE__ */ jsxs("h3", { className: `${h3Class} ${activeIndex === index ? "" : ""}`, children: [
          item.title,
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                rotate: activeIndex === index ? "180deg" : "0deg"
              },
              children: /* @__PURE__ */ jsx(MdOutlineKeyboardArrowDown, { className: "text-[3rem] text-[#288173]" })
            }
          )
        ] })
      }
    ),
    activeIndex === index && /* @__PURE__ */ jsx(
      "div",
      {
        className: contentClass,
        dangerouslySetInnerHTML: { __html: item.content }
      }
    )
  ] }, index)) });
};
export {
  Accordion as A
};
