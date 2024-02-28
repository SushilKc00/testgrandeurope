import React from "react";
import contactimg from "../../../assets/Images/contactimg.png";
import { Link } from "react-router-dom";

export const Contact = ({ details, Button }) => {
  return (
    <div className="max-w-[1024px] mx-auto">
      {details.heading && (
        <h2 className="py-8 text-center md:text-[3.2rem] text-[1.8rem] font-medium uppercase">
          {details.heading}
        </h2>
      )}
      <div className="sm:h-[430px] h-[200px]">
        <img
          src={details.Image}
          alt="contact-image"
          width={450}
          height={430}
          className="w-[100%] h-[100%]"
        />
      </div>
      <div className="mt-12 flex flex-col gap-8">
        {details.para && (
          <p className="text-center text-[1.4rem]">{details.para}</p>
        )}

        {Button && (
          <div className="flex justify-center items-center">
            <Link to="/Contact" className="common-btn rounded-full">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
