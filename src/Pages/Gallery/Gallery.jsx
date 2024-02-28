import React from "react";
import img from "../../assets/Images/image2.png";
import { useWebContext } from "../../Context/ContextProvider";
import Banner from "../../Components/Banner/Banner";
import SectionHeading from "../../Components/CommonSections/SectionHeading";
import { GallerySlider } from "../../Components/GallerySlide/GallerySlider";
import { Helmet } from "react-helmet";

const sectionHeadingDetails = {
  heading2: `ABOUT GRAND HOTEL D’EUROPE`,
  para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
};
const Gallery = ({ SeoMetaData }) => {
  const { webSiteData } = useWebContext();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={SeoMetaData?.Description} />
        <title>{SeoMetaData?.Title}</title>
      </Helmet>
      <Banner
        img={webSiteData?.PagesTitles?.Gallery?.Image}
        heading={webSiteData?.PagesTitles?.Gallery.Title}
        // img={img}
        // heading={"this is me"}
      />
      <section className="layout-section">
        <SectionHeading
          sectionHeadingDetails={{
            heading2: webSiteData?.SectionTitles?.Gallery.Title,
            para: webSiteData?.SectionTitles?.Gallery.Description,
          }}
        />
        <div className="gallery-container md:mt-24 mt-8">
          {webSiteData?.Gallery.map((d, i) => (
            <GallerySlider details={d} index={i} key={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
