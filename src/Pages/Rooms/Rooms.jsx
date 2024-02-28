import React from "react";
import img from "../../assets/Images/image2.png";
import Banner from "../../Components/Banner/Banner";
import SectionHeading from "../../Components/CommonSections/SectionHeading";
import { HeroSection } from "../../Components/CommonSections/HeroSection";
import room1 from "../../assets/Images/room1.png";
import { Amenities } from "../../Components/ModernAmenities/Amenities";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useWebContext } from "../../Context/ContextProvider";
import { Helmet } from "react-helmet";

// const roomDetailss = {
//   Image: [room1, room1, room1],
//   Title: "HERITAGE KING",
//   Description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enimhghh adminim veniam, quis nostrud exercitation ullamd laboris nisi ut aliquip ex ea commodo  aliquip consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enimhghh adminim veniam, quis nostrud exercitation ullamd laboris nisi ut aliquip ex ea commodo  aliquip consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu ut labore et ",
//   para: "Step into the luxurious world of the Heritage King Room at Grand Hotel D’Europe, where classic elegance meets modern comfort. ",
// };

const Rooms = ({ SeoMetaData }) => {
  const { webSiteData, roomsDetails } = useWebContext();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={SeoMetaData?.Description} />
        <title>{SeoMetaData?.Title}</title>
      </Helmet>
      <Banner
        img={webSiteData?.PagesTitles?.Rooms?.Image}
        heading={webSiteData?.PagesTitles.Rooms?.Title}
        // img={img}
        // heading={"this is Rooms"}
      />
      {/* ALL ROOMS *********** */}
      <section className="layout-section">
        <SectionHeading
          sectionHeadingDetails={{
            heading2: webSiteData?.SectionTitles?.Rooms?.Title,
            para: webSiteData?.SectionTitles?.Rooms?.Description,
          }}
        />
        <div className="max-width mt-12 flex flex-col gap-24">
          {roomsDetails?.map((det, index) => {
            return <HeroSection key={index} details={det} index={index} />;
          })}
        </div>
      </section>

      {/* MODERN AMENITIES********** */}
      <section className="layout-section hidden md:block">
        <SectionHeading
          sectionHeadingDetails={{
            heading2: webSiteData?.SectionTitles?.Facilities?.Title,
            para: webSiteData?.SectionTitles?.Facilities?.Description,
          }}
        />
        <div className="max-width mt-20">
          <Amenities />
        </div>
      </section>
    </>
  );
};

export default Rooms;
