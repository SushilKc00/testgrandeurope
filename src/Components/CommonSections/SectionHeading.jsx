import React from "react";
import { motion } from "framer-motion";

const SectionHeading = ({ sectionHeadingDetails }) => {
  return (
    <div className="max-width">
      <div className="flex flex-col justify-center">
        <div>
          {sectionHeadingDetails.heading2 && (
            <motion.h2
              initial={{
                y: 100,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="section-heading-h2 text-center py-3"
            >
              {sectionHeadingDetails.heading2}
            </motion.h2>
          )}
          {sectionHeadingDetails.heading3 && (
            <h3 className="section-heading-h3">
              {sectionHeadingDetails.heading3}
            </h3>
          )}
          {sectionHeadingDetails.para && (
            <motion.p
              initial={{
                y: 100,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="section-para"
            >
              {sectionHeadingDetails.para}
            </motion.p>
          )}
          {sectionHeadingDetails.para2 && (
            <motion.p
              initial={{
                y: 100,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="section-para mt-5" 
            >
              {sectionHeadingDetails.para2}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
