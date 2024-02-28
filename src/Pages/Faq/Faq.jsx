import React from "react";
import Banner from "../../Components/Banner/Banner";
import { useWebContext } from "../../Context/ContextProvider";
import SectionHeading from "../../Components/CommonSections/SectionHeading";
import parse from "html-react-parser";
import useScrollTop from "../../Components/useScrollTop";
import { Helmet } from "react-helmet";

function Faq({ SeoMetaData }) {
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
        img={webSiteData?.PagesTitles?.Faq?.Image}
        heading={webSiteData?.PagesTitles?.Faq?.Title}
        // img={img}
        // heading={"this is me"}
      />
      <section className="layout-section">
        <SectionHeading
          //   sectionHeadingDetails={{
          //     heading2: webSiteData?.SectionsTitles?.Faq?.Heading,
          //     para: webSiteData?.SectionTitles?.Faq?.Description,
          //   }}
          sectionHeadingDetails={{
            heading2: "FREQUENTLY ASKED QUESTION",
          }}
        />

        <div className="max-width px-8 text-[1.6rem] mt-10 tsc">
          {webSiteData?.Faq?.map((item, i) => (
            <div key={i}>
              <div>
                <h2>{item.Question}</h2>
                <p>{item.Answer}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="max-width lg:px-8 lg:mt-10 tsc">
          <div>
            {data.map((item, i) => (
              <div key={i}>
                <h2 className="content_heading font-medium text_dark">
                  {item.heading}
                </h2>
                <p className="content_description font-normal text_normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </section>
    </>
  );
}

export default Faq;

const data = [
  {
    heading: `What are the check-in and check-out times at Grand Hotel D'Europe?`,
    desc: `Our standard check-in time is 14:00 PM, and check-out time is
    12:00 PM (noon). However, we understand that travel plans can
    vary, so we strive to accommodate early check-ins and late
    check-outs based on availability. Please contact our front desk
    for any special requests.`,
  },
  {
    heading: `Is parking available at the hotel?`,
    desc: ` Yes, we provide complimentary on-site parking for our hotel
    guests. Our parking area is easily accessible. Please note that
    parking availability is subject to availability, so we recommend
    contacting us in advance to ensure a spot.`,
  },
  {
    heading: `Are pets allowed in the hotel?`,
    desc: `Unfortunately, we do not allow pets at Grand Hotel D'Europe, with
    the exception of service animals as required by law. We appreciate
    your understanding in this matter.`,
  },
  {
    heading: `Do you offer airport shuttle service?`,
    desc: ` Unfortunately, we do not provide airport shuttle service for our
    guests. To arrange for an airport transfer, please contact our
    concierge or mention your requirement while making a reservation.
    Additional charges may apply, and advance notice is appreciated to
    ensure availability.`,
  },
  {
    heading: `Can I make changes or cancel my reservation?`,
    desc: `Yes, you can make changes or cancel your reservation, subject to
    our cancellation policy. Please refer to the specific terms and
    conditions provided at the time of booking. For assistance with
    modifying or canceling your reservation, please contact our
    booking support team at +91-75503 04222 | +91-413 226 9999 or via
    email at enquiry@granddeeurope.com`,
  },
  {
    heading: `Are there any dining options available at the hotel?`,
    desc: `Grand Hotel D'Europe offers a variety of dining options, including
    MIRA, which serves Pan Asian, European Cuisine, North Indian &
    Tandoor Cuisine and MIRA Bar, known for its delicious pastries and
    beverages. We also provide room service for guests who prefer to
    dine in the comfort of their rooms.`,
  },
  {
    heading: `Do you have facilities for hosting events or meetings?`,
    desc: ` Yes, we have well-equipped event spaces and meeting courtyard
    available for various occasions. Whether it's a corporate meeting,
    wedding reception, or social gathering, our dedicated events team
    can assist in planning and organizing your event. Please contact
    our reservation department for more information.`,
  },
  {
    heading: `How can I provide feedback or share my experience at Grand Hotel
    D'Europe?`,
    desc: `We appreciate your feedback and value your experience with us. You
    can share your feedback by contacting our customer support team
    at +91-75503 04222 or by sending an email
    to enquiry@granddeeurope.com. We also encourage you to leave
    reviews on popular travel platforms and our social media channels.`,
  },
];
