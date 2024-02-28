import React from "react";

import Banner from "../../Components/Banner/Banner";
import SectionHeading from "../../Components/CommonSections/SectionHeading";
import img from "../../assets/Images/facilityimg1.png";
import useScrollTop from "../../Components/useScrollTop";

function Careers() {
  useScrollTop();
  return (
    <>
      <Banner
        img={img}
        heading={""}
        // img={img}
        // heading={"this is me"}
      />

      <section className="layout-section">
        <SectionHeading
          sectionHeadingDetails={{
            heading2: "JOIN OUR TEAM",
            para: "Thank you for your interest in joining our team at Grand Hotel D'Europe. We value your enthusiasm and look forward to the possibility of having you as part of our dedicated workforce. This page is dedicated to sharing future job opportunities, and we encourage you to check back regularly for updates.",
          }}
        />
        <div className="max-width mt-20">
          <SectionHeading
            sectionHeadingDetails={{
              heading2: "How to Stay Updated",
              para: "To ensure you don't miss out on any future job opportunities at Grand Hotel D'Europe, we recommend the following steps:",
            }}
          />
          <div className="mt-10 flex flex-col gap-8">
            {data1.map((item, i) => (
              <div key={i}>
                <h2 className="content_heading font-medium text_dark">
                  {item.h2}
                </h2>
                <p className="content_description font-normal text_normal">
                  {item.desc}
                </p>
                {item.desc2 && (
                  <p className="content_description font-normal text_normal">
                    {item.desc2}
                  </p>
                )}
                {item.desc3 && (
                  <p className="content_description font-normal text_normal">
                    {item.desc3}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;

const data1 = [
  {
    h2: `Bookmark this page :`,
    desc: "Save this Careers page in your browser bookmarks for quick and easy access. This way, you can return to check for new vacancies conveniently.",
  },
  {
    h2: `Subscribe to our newsletter :`,
    desc: "Sign up for our newsletter to receive regular updates about new job openings, company news, and exciting developments at Grand Hotel",
  },
  {
    h2: `Follow us on social media :`,
    desc: "Connect with us on our official social media platforms, including LinkedIn, Twitter, and Facebook. By following our accounts, you'll stay updated on the latest news, job postings, and happenings at Grand Hotel D'Europe.",
    desc2: `We appreciate your interest and the time you've taken to explore potential career opportunities with us. We value your skills and contributions and will notify you about future vacancies shortly. Stay tuned for exciting opportunities as we continue to grow and provide exceptional experiences for our guests.`,
    desc3: `Thank you for considering a career with Grand Hotel D'Europe. Although we don't have any immediate vacancies to announce, we encourage you to stay connected with us through this Careers page, our newsletter, and our social media channels. We appreciate your enthusiasm and eagerly anticipate notifying you about future job opportunities that match your skills and aspirations. Together, let's contribute to the legacy of Grand Hotel D'Europe and create unforgettable moments for our guests.`,
  },
];
