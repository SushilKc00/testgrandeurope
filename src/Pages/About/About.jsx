import React, { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import { useWebContext } from "../../Context/ContextProvider";
import aboutimg2 from "../../assets/Images/aboutimg2.png";
import { Helmet } from "react-helmet";

// import aboutimg1 from "../../assets/Images/aboutimg1.png";
// import chooseusimg from "../../assets/Images/chooseusimg.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";

import SectionHeading from "../../Components/CommonSections/SectionHeading";
import { Nearby } from "../Home/Components/Nearby";
import useScrollTop from "../../Components/useScrollTop";

const sectionHeadingDetails = {
  heading2: `ABOUT GRAND HOTEL D’EUROPE`,
  para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
};

const About = ({ SeoMetaData }) => {
  const [slideIndexValue, setSlideIndexValue] = useState(0);
  const { services } = useWebContext();
  const { webSiteData } = useWebContext();

  useScrollTop();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={SeoMetaData?.Description} />
        <title>{SeoMetaData?.Title}</title>
      </Helmet>
      <Banner
        img={webSiteData?.PagesTitles?.About?.Image}
        heading={webSiteData?.PagesTitles?.About?.Title}
        // img={img}
        // heading={"this is me"}
      />
      <section className="layout-section">
        <SectionHeading
          sectionHeadingDetails={{
            heading2: webSiteData?.About?.Heading,
            // para: webSiteData?.SectionTitles?.About?.Description,
          }}
        />
        <div className="max-width">
          <div className="mt-12">
            <p className="section-para">{webSiteData?.About?.Text}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            <div className="md:h-[400px] h-[200px]">
              <img
                src={webSiteData?.About?.url}
                alt=""
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="md:h-[400px] h-[200px]">
              <img
                decoding="async"
                loading="lazy"
                src={webSiteData?.Images[0]?.Image}
                alt=""
                className="w-[100%] h-[100%]"
              />
            </div>
          </div>
          <div className="mt-12">
            <p className="section-para">
              Today Grand Hotel D’Europe continues to proudly stand at its
              original address. The 18th-century hotel located in the old French
              town now has a new wing built in Art Décor design/architecture
              with a Chettinad touch to it. The heritage hotel’s serene
              atmosphere makes it the perfect base for discovering the unique
              charms of the French quarters and the Indian town at a laggard
              pace. Neatly placed spacious rooms, a restaurant serving
              continental & north Indian cuisines, exotic chic bar and a casual
              but elegant courtyard, retains the glorious past of the Grand
              Hotel D’Europe.
            </p>
            <p className="section-para mt-8">
              Today Grand Hotel D’Europe continues to proudly stand at its
              original address. The 18th-century hotel located in the old French
              town now has a new wing built in Art Décor design/architecture
              with a Chettinad touch to it. The heritage hotel’s serene
              atmosphere makes it the perfect base for discovering the unique
              charms of the French quarters and the Indian town at a laggard
              pace. Neatly placed spacious rooms, a restaurant serving
              continental & north Indian cuisines, exotic chic bar and a casual
              but elegant courtyard, retains the glorious past of the Grand
              Hotel D’Europe.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US************ */}
      {webSiteData?.SectionsVisible?.About?.Facilities && (
        <section className="layout-section">
          <SectionHeading
            sectionHeadingDetails={{
              heading2: "WHY CHOOSE US",
            }}
          />
          <div className="max-width mt-12">
            <div className="flex lg:flex-row flex-col items-center">
              <div className="sm:max-w-[900px] w-[100%] md:h-[600px] h-[200px] md:order-1 order-2">
                <Swiper
                  // effect={"cube"}
                  loop={true}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                  grabCursor={true}
                  modules={[EffectCube, Pagination, Autoplay]}
                  onSlideChange={(i) => {
                    setSlideIndexValue(i.realIndex);
                  }}
                  className="h-[100%] w-[100%]"
                >
                  {services?.map((i, index) => (
                    <SwiperSlide key={index}>
                      <div className="h-[100%]">
                        <img
                          src={i.Image}
                          loading="lazy"
                          decoding="async"
                          alt={i.Image}
                          style={{
                            height: "100%",
                            width: "100%",
                          }}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="lg:w-[40%] w-[100%] flex flex-col gap-4 z-[2] lg:ml-[-8rem] md:order-1">
                {webSiteData?.Services?.map((d, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-[#37323E] px-8 py-10"
                      style={{
                        background:
                          slideIndexValue === index ? "#ffffff" : "#37323E",
                        color: slideIndexValue === index ? "black" : "white",
                        transition: "all 0.5s ease-in",
                        boxShadow: "0 0 5px #4b4a4a85",
                      }}
                    >
                      <h2 className="uppercase text-center md:text-[2.4rem] text-[1.5rem] font-medium">
                        {d.Title}
                      </h2>
                    </div>
                  );
                })}

                {/* <div className="bg-[#37323E] px-8 py-10">
                  <h2 className="uppercase text-white  md:text-[2.4rem] text-[1.5rem] font-medium">
                    BEST LOCATION
                  </h2>
                </div>
                <div className="bg-[#37323E] px-8 py-10">
                  <h2 className="uppercase text-white  md:text-[2.4rem] text-[1.5rem] font-medium">
                    BEST LOCATION
                  </h2>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* NEAR BY PLACES********** */}
      {webSiteData?.SectionsVisible?.About?.Nearby && (
        <section className="layout-section">
          <SectionHeading
            sectionHeadingDetails={{
              heading2: webSiteData?.SectionTitles?.Nearby.Title,
              para: webSiteData?.SectionTitles?.Nearby.Description,
            }}
          />
          <div className="max-width mt-12">
            <Nearby isButton={true} />
          </div>
        </section>
      )}
    </>
  );
};

export default About;
