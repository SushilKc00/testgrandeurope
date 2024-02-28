import React from "react";
import img from "../../assets/Images/facilityimg1.png";
import Banner from "../../Components/Banner/Banner";
import SectionHeading from "../../Components/CommonSections/SectionHeading";
import Accordion from "../../Components/Accodion/Accordion";
import useScrollTop from "../../Components/useScrollTop";

const newsDetails = [
  {
    title: "PROFESSIONAL TRAVEL",
    content:
      "Explore our press releases to stay updated on our special events, seasonal promotions, and exclusive offers. From unique themed experiences to limited-time packages, we strive to provide our guests with unforgettable moments.",
  },
  {
    title: "CULINARY DELIGHTS",
    content: `Join us on a gastronomic adventure as we explore the culinary wonders offered at Grand Hotel D'Europe. From highlighting our renowned restaurants and bars to featuring signature dishes and delectable recipes, we share insider secrets and celebrate the art of fine dining. Discover the flavors that make Grand Hotel D'Europe a culinary destination.`,
  },
  {
    title: "HOSPITALITY INSIGHTS",
    content:
      "Explore our press releases to stay updated on our special events, seasonal promotions, and exclusive offers. From unique themed experiences to limited-time packages, we strive to provide our guests with unforgettable moments.",
  },
  {
    title: "UNFORGETTABLE EXPERIENCES",
    content: `Immerse yourself in a world of unforgettable experiences at Grand Hotel D'Europe. Discover the hidden gems of our location, recommended attractions, and off-the-beaten-path adventures. Whether you're seeking cultural encounters, outdoor activities, or serene retreats, we share recommendations to make your stay truly remarkable.`,
  },
  {
    title: "TIPS AND GUIDESs",
    content: `Our blog also features practical tips and guides to help you make the most of your stay at Grand Hotel D'Europe. From insider recommendations on local transportation and etiquette to packing lists and exclusive offers, we provide valuable resources to ensure a seamless and memorable experience.`,
  },
];

const NewsNotes = () => {
  useScrollTop();
  return (
    <>
      <Banner
        // img={webSiteData?.PagesTitles?.About?.Image}
        // heading={webSiteData?.PagesTitles?.About?.Title}
        img={img}
        // heading={"this is me"}
      />
      <section className="layout-section">
        <SectionHeading
          sectionHeadingDetails={{
            heading2: "NEWS & NOTES",
            para: "Welcome to News & Notes, your go-to source for professional travel tips, culinary delights, hospitality insights, and recommendations for unforgettable experiences at Grand Hotel D'Europe. As a prestigious hotel dedicated to providing exceptional service and creating memorable moments, we are excited to share valuable information and insider knowledge with you. Whether you're a business traveler, a food enthusiast, or seeking the best of hospitality, this blog is your gateway to discovering the essence of Grand Hotel D'Europe.",
          }}
        />
        <div className="max-width mt-20">
          <div>
            <SectionHeading
              sectionHeadingDetails={{
                heading2: "PRESS RELEASES",
                para: "In our Press Room, we share official press releases that highlight noteworthy events, milestones, and announcements related to Grand Hotel D'Europe. Our press releases cover a wide range of topics, including:",
              }}
            />

            <div className="mt-8">
              <Accordion
                items={newsDetails}
                accordionContainerClass={"flex flex-col gap-4"}
                accordionContentClass={"border border-gray-400 px-6 py-5"}
                contentClass={"mt-6 text-[1.4rem] text-gray-600"}
                h3Class={
                  "flex justify-between items-center md:text-[1.8rem] text-[1.2rem] font-medium"
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsNotes;
