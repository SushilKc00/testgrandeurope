import React from "react";

import { motion } from "framer-motion";

const Banner = ({ img, heading, desc }) => {
  return (
    <div
      className="section-banner"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="max-w-[1024px] mx-auto">
        <motion.h1
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
            delay: 0.2,
            duration: 0.8,
          }}
          className="section-banner-h1 text-center"
        >
          {heading}
        </motion.h1>
        {desc && <p className="text-white">{desc}</p>}
      </div>
    </div>
  );
};

export default Banner;
