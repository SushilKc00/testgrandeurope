import React from "react";
import Banner from "../../Components/Banner/Banner";
import { useWebContext } from "../../Context/ContextProvider";
import SectionHeading from "../../Components/CommonSections/SectionHeading";
import parse from "html-react-parser";
import useScrollTop from "../../Components/useScrollTop";
import { Helmet } from "react-helmet";

function Cancellation({ SeoMetaData }) {
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
        img={webSiteData?.PagesTitles?.Cancellation?.Image}
        heading={webSiteData?.PagesTitles?.Cancellation?.Title}
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
              heading2: webSiteData?.SectionsTitles?.Cancellation?.Heading,
              para: webSiteData?.SectionTitles?.Cancellation?.Description,
            }}
         
        />
        <div className="max-width px-8 text-[1.6rem] mt-10 tsc">
          {webSiteData?.TermsConditions[1]?.Cancellation &&
            HTMLReactParser(webSiteData?.TermsConditions[1]?.Cancellation)}
        </div>
       
      </section> */}
    </>
  );
}

export default Cancellation;
