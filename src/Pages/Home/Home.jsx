import React, { useState } from "react";
import { PhotoGallery } from "./Components/PhotoGallery";
import SectionHeading from "../../Components/CommonSections/SectionHeading";
import { RoomSection } from "./Components/RoomSection";
import { Checkinout } from "./Components/Checkinout";
import { HotelFacility } from "./Components/HotelFacility";
import { Contact } from "./Components/Contact";
import { Helmet } from "react-helmet";

import { Nearby } from "./Components/Nearby";
import { Testimonal } from "./Components/Testimonal";
import { SliderGallery } from "./Components/SliderGallery";

import { InstagramPost } from "./Components/InstagramPost";
import { useWebContext } from "../../Context/ContextProvider";

const Home = ({ SeoMetaData }) => {
  const { webSiteData } = useWebContext();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={SeoMetaData?.Description} />
        <title>{SeoMetaData?.Title}</title>
      </Helmet>
      {/* GALLERY AND ABOUT US*********** */}
      <section className="layout-section">
        <div className="lg:block hidden">
          <PhotoGallery />
        </div>
        <div className="lg:hidden">
          <SliderGallery />
        </div>
      </section>

      {/* CHECK IN OUT******** */}
      <section className="layout-section lg:block hidden">
        <div className="max-width">
          <Checkinout />
        </div>
      </section>

      {/* ROOMS SECTION********* */}
      {webSiteData?.SectionsVisible?.Home?.Rooms && (
        <section className="layout-section">
          <SectionHeading
            sectionHeadingDetails={{
              heading2: webSiteData?.SectionTitles?.Rooms?.Title,
              para: webSiteData?.SectionTitles?.Rooms?.Description,
            }}
          />
          <div className="max-width mt-12">
            <RoomSection />
          </div>
        </section>
      )}

      {/* HOTEL FACILITIES************ */}
      {webSiteData?.SectionsVisible?.Home?.Facilities && (
        <section className="layout-section md:mt-12">
          <SectionHeading
            sectionHeadingDetails={{
              heading2: webSiteData?.SectionTitles?.Services?.Title,
              para: webSiteData?.SectionTitles?.Services?.Description,
            }}
          />
          <div className="max-width bg-[#37323E]">
            <HotelFacility />
          </div>
        </section>
      )}

      {/* CONTACT US********** */}
      <section className="layout-section">
        <SectionHeading
          sectionHeadingDetails={{
            heading2: webSiteData?.DataToarrange[1].Heading,
            para: webSiteData?.DataToarrange[1].Text,
          }}
        />
        <div className="max-width mt-12">
          <Contact
            details={{
              heading: webSiteData?.DataToarrange[1].Images[0].Heading,
              para: webSiteData?.DataToarrange[1].Images[0].Text,
              Image: webSiteData?.DataToarrange[1].Images[0].Image,
            }}
            Button={true}
          />
        </div>
      </section>

      {/* INSTAGRAM SECTION************ */}
      {webSiteData?.SectionsVisible?.Home?.Insta && (
        <section className="layout-section">
          <InstagramPost />
        </section>
      )}

      {/* NEARBY PLACES SECTION************** */}
      {webSiteData?.SectionsVisible?.Home?.Nearby && (
        <section className="layout-section">
          <SectionHeading
            sectionHeadingDetails={{
              heading2: webSiteData?.SectionTitles?.Nearby.Title,
              para: webSiteData?.SectionTitles?.Nearby.Description,
            }}
          />
          <div className="max-width mt-12">
            <Nearby isButton={false} />
          </div>
        </section>
      )}

      {/* CUSTOMER REVIEWS**************** */}
      {webSiteData?.SectionsVisible?.Home?.Testimonials && (
        <section className="layout-section">
          <SectionHeading
            sectionHeadingDetails={{
              heading2: webSiteData?.SectionTitles?.Testimonial?.Title,
              para: webSiteData?.SectionTitles?.Testimonial?.Description,
            }}
          />
          <div className="max-width mt-12">
            <Testimonal />
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
