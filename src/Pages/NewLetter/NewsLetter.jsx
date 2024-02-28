import React from "react";

import Banner from "../../Components/Banner/Banner";
import SectionHeading from "../../Components/CommonSections/SectionHeading";
import img from "../../assets/Images/facilityimg1.png";
import useScrollTop from "../../Components/useScrollTop";

function NewsLetter() {
  useScrollTop();
  return (
    <>
      <Banner
        img={img}
        heading={""}
        // img={img}
        // heading={"this is me"}
      />

      <div className="bg-[#37323E] md:min-h-[530px] h-[200px] flex flex-col items-center justify-center">
        <h2 className="md:text-[4.2rem] text-[1.8rem] uppercase text-white">
          comming soon
        </h2>
        <div className="">
          <button className="common-btn rounded-full mt-10">Contact us</button>
        </div>
      </div>

      {/* <section className="layout-section">
        <SectionHeading
          sectionHeadingDetails={{
            heading2: "EXPERIENCE AND OFFERS",
            para: "Welcome to the Experience and Offers section of Grand Hotel D'Europe, your gateway to exceptional moments and enticing deals. We are delighted to have you here and invite you to explore the myriad of experiences and exclusive offers available at our prestigious establishment. Whether you're seeking a luxurious escape, a gastronomic adventure, or a memorable event, our team is dedicated to creating cherished memories for every guest. Discover our experiences and offers below and get ready to indulge in the best of Grand Hotel D'Europe.",
          }}
        />
        <div className="max-width">
          <SectionHeading
            sectionHeadingDetails={{
              heading2: "EXPERIENCES",
              para: "At Grand Hotel D'Europe, we curate a range of experiences designed to cater to diverse interests and preferences. Immerse yourself in the following exceptional offerings :",
            }}
          />
        </div>
        {data1.map((item, i) => (
          <div className="max-width" key={i}>
            <h2>{item.h2}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
        <div className="max-width">
          <SectionHeading
            sectionHeadingDetails={{
              heading2: "OFFERS",
              para: "Take advantage of our enticing offers, designed to enhance your stay and provide exceptional value :",
            }}
          />
        </div>
        {data2.map((item, i) => (
          <div className="max-width" key={i}>
            <h2>{item.h2}</h2>
            <p>{item.desc}</p>
            {item.desc2 && <p>{item.desc2}</p>}
          </div>
        ))}
      </section> */}
    </>
  );
}

export default NewsLetter;
