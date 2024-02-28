import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Accordion = ({
  items,
  accordionContainerClass,
  headingDivClass,
  h3Class,
  contentClass,
  accordionContentClass,
}) => {
  console.log(accordionContainerClass);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={accordionContainerClass}>
      {items.map((item, index) => (
        <div key={index} className={accordionContentClass}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => handleItemClick(index)}
            className={`${headingDivClass} ${
              activeIndex === index ? "open" : "closed"
            }`}
          >
            <h3 className={`${h3Class} ${activeIndex === index ? "" : ""}`}>
              {item.title}
              <div
                style={{
                  rotate: activeIndex === index ? "180deg" : "0deg",
                }}
              >
                <MdOutlineKeyboardArrowDown className="text-[3rem] text-[#288173]" />
              </div>
            </h3>
          </div>
          {activeIndex === index && (
            <div
              className={contentClass}
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
