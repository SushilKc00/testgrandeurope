import React from "react";
import Banner from "../../Components/Banner/Banner";
import img from "../../assets/Images/image2.png";
import SectionHeading from "../../Components/CommonSections/SectionHeading";
import restimg1 from "../../assets/Images/resimg1.png";
import restimg2 from "../../assets/Images/restimg2.png";
import { HeroSection } from "../../Components/CommonSections/HeroSection";
import { useWebContext } from "../../Context/ContextProvider";
import { Helmet } from "react-helmet";
import { HeroSectionRes } from "../../Components/CommonSections/HeroSectionRes";

const resDet = [
  {
    roomName: "MIRA CAFE RESTAURANT",
    roomDescription: `Experience the alluring aura of MIRA Cafe Restaurant, where culinary delights from around the world converge to tantalize your taste buds. Our expert chefs have meticulously curated a menu featuring a fusion of Pan Asian, European, North Indian, and Tandoor cuisines, offering a wide selection to satisfy all palates. 
    From fragrant curries to juicy kebabs, from stir-fried noodles to succulent steaks, each dish is crafted with utmost care and expertise. With impeccable service and sophisticated surroundings, dining at MIRA Cafe Restaurant promises to be a memorable and extraordinary experience.`,
    roomImage: [restimg1],
  },
  {
    roomName: "MIRA CAFE RESTAURANT",
    roomDescription: `Experience the alluring aura of MIRA Cafe Restaurant, where culinary delights from around the world converge to tantalize your taste buds. Our expert chefs have meticulously curated a menu featuring a fusion of Pan Asian, European, North Indian, and Tandoor cuisines, offering a wide selection to satisfy all palates. 
    From fragrant curries to juicy kebabs, from stir-fried noodles to succulent steaks, each dish is crafted with utmost care and expertise. With impeccable service and sophisticated surroundings, dining at MIRA Cafe Restaurant promises to be a memorable and extraordinary experience.`,
    roomImage: [restimg2],
  },
];

const Restaurant = ({ SeoMetaData }) => {
  const { webSiteData } = useWebContext();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={SeoMetaData?.Description} />
        <title>{SeoMetaData?.Title}</title>
      </Helmet>
      <Banner
        img={webSiteData?.PagesTitles?.Restaurant?.Image}
        heading={webSiteData?.PagesTitles?.Restaurant.Title}
        // img={img}
        // heading={"this is me"}
      />

      <section className="layout-section">
        <SectionHeading
          sectionHeadingDetails={{
            heading2: webSiteData?.DataToarrange[0].Heading,
            para: webSiteData?.DataToarrange[0].Text,
          }}
        />
        <div className="max-width mt-20 flex flex-col gap-20 md:!pb-28 !pb-52">
          {webSiteData?.DataToarrange[0]?.Images.map((d, index) => {
            return (
              <HeroSectionRes
                details={d}
                index={index}
                Button={true}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Restaurant;
