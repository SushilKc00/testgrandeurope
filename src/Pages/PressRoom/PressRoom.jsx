import React from "react";
import img from "../../assets/Images/facilityimg1.png";
import Banner from "../../Components/Banner/Banner";
import SectionHeading from "../../Components/CommonSections/SectionHeading";
import Accordion from "../../Components/Accodion/Accordion";
import useScrollTop from "../../Components/useScrollTop";

const pressDetails = [
  {
    title: "GRAND OPENINGS AND RENOVATIONS",
    content:
      "Explore our press releases to stay updated on our special events, seasonal promotions, and exclusive offers. From unique themed experiences to limited-time packages, we strive to provide our guests with unforgettable moments.",
  },
  {
    title: "SPECIAL EVENTS AND PROMOTIONS",
    content:
      "Explore our press releases to stay updated on our special events, seasonal promotions, and exclusive offers. From unique themed experiences to limited-time packages, we strive to provide our guests with unforgettable moments.",
  },
  {
    title: "AWARDS AND RECOGNITIONS",
    content:
      "Explore our press releases to stay updated on our special events, seasonal promotions, and exclusive offers. From unique themed experiences to limited-time packages, we strive to provide our guests with unforgettable moments.",
  },
  {
    title: "SUSTAINABILITY INITIATIVES",
    content:
      "Explore our press releases to stay updated on our special events, seasonal promotions, and exclusive offers. From unique themed experiences to limited-time packages, we strive to provide our guests with unforgettable moments.",
  },
];

const PressRoom = () => {
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
            heading2: "WELCOME TO OUR PRESS ROOM",
            para: "Welcome to the Press Room of Grand Hotel D'Europe. We appreciate your interest in our brand and are thrilled to share the latest news, press releases, and updates about our prestigious hotel. This section of our website is dedicated to keeping you informed about the exciting developments, events, and initiatives taking place at Grand Hotel D'Europe. Stay connected with us to discover the latest news and updates from our esteemed establishment.",
          }}
        />
        <div className="max-width mt-20">
          {/* upper Accordion****** */}
          <div>
            <SectionHeading
              sectionHeadingDetails={{
                heading2: "PRESS RELEASES",
                para: "In our Press Room, we share official press releases that highlight noteworthy events, milestones, and announcements related to Grand Hotel D'Europe. Our press releases cover a wide range of topics, including:",
              }}
            />

            <div className="mt-8">
              <Accordion
                items={pressDetails}
                accordionContainerClass={"flex flex-col gap-4"}
                accordionContentClass={"border border-gray-400 px-6 py-5"}
                contentClass={"mt-6 text-[1.4rem] text-gray-600"}
                h3Class={
                  "flex justify-between items-center md:text-[1.8rem] text-[1.2rem] font-medium"
                }
              />
            </div>
          </div>

          {/* lower accordion******* */}
          <div className="mt-20">
            <SectionHeading
              sectionHeadingDetails={{
                heading2: "HOW TO STAY UPDATED",
                para: "We want to ensure that you never miss an important update from Grand Hotel D'Europe. Here's how you can stay connected with our press releases:",
              }}
            />
            <div className="mt-8">
              <Accordion
                items={pressDetails}
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

export default PressRoom;
