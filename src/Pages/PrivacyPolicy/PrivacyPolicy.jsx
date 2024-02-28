import React from "react";
import Banner from "../../Components/Banner/Banner";
import { useWebContext } from "../../Context/ContextProvider";
import SectionHeading from "../../Components/CommonSections/SectionHeading";
import parse from "html-react-parser";
import useScrollTop from "../../Components/useScrollTop";
import { Helmet } from "react-helmet";

function PrivacyPolicy({ SeoMetaData }) {
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
        img={webSiteData?.PagesTitles?.Privacy?.Image}
        heading={webSiteData?.PagesTitles?.Privacy?.Title}
        // img={img}
        // heading={"this is me"}
      />
      <section className="layout-section">
        <SectionHeading
          //   sectionHeadingDetails={{
          //     heading2: webSiteData?.SectionsTitles?.Privacy?.Heading,
          //     para: webSiteData?.SectionTitles?.Privacy?.Description,
          //   }}
          sectionHeadingDetails={{
            heading2: "PRIVACY POLICY",
            para: `Welcome to Grand Hotel D’Europe Pondicherry! We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us. By accessing our website at www.anandhwww.granddeeurope.comainn.com or contacting us via email at enquiry@granddeeurope.com, you consent to the terms and practices described in this policy.`,
          }}
        />
        <div className="max-width px-8 text-[1.6rem] mt-10 tsc">
          {webSiteData?.TermsConditions[0]?.Privacy &&
            parse(webSiteData?.TermsConditions[0]?.Privacy)}
        </div>
        {/* <div className="max-width px-8 text-[1.6rem] mt-10 tsc">
          <div>
            {data.map((item, i) => (
              <div key={i}>
                <h2 className="content_heading font-medium text_dark">
                  {item.heading2}
                </h2>
                <p className="content_description font-normal text_normal">
                  {item.desc}
                </p>
                {item.desc2 && (
                  <p className="content_description font-normal text_normal">
                    {item.desc2}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div> */}
      </section>
    </>
  );
}

export default PrivacyPolicy;

const data = [
  {
    heading2: `Collection and Use of Personal Information :`,
    desc: `We may collect personal information from you, such as your name, date of birth, address, marital status, telephone number, and credit card details, in order to facilitate business transactions and provide you with the services you request. We assure you that your personal information will be treated with the utmost confidentiality and will only be used for the intended purposes, unless required by law.`,
  },
  {
    heading2: `Sharing of Personal Information :`,
    desc: `We may share your personal information with our holding company or authorized third Parties solely for the purpose of executing business transactions and enhancing our Services. However, we will not sell or distribute your personal information to any other Third parties without your consent, unless required by law.`,
  },
  {
    heading2: `Aggregate Site Usage Patterns :`,
    desc: `To improve our services, we may collect and analyze aggregate site usage patterns of our visitors. This information may be shared with our holding company as a general business practice, but it will not include any personally identifiable information.`,
  },
  {
    heading2: `Online Contests and Surveys :`,
    desc: `As permitted by law, we may conduct online contests and surveys. Any information collected through these activities will be used to enhance our services and may be shared with our holding company as a general business practice. Participation in these activities is voluntary, and you have the choice not to provide any personal information.`,
  },
  {
    heading2: `Security and Limitations :`,
    desc: `While we take reasonable measures to ensure the privacy and security of your personal information, we cannot guarantee the absolute security of data transmitted over the internet. We are not liable for any unauthorized access or misuse of your personal information by third parties.`,
  },
  {
    heading2: `Changes to the Privacy Policy :`,
    desc: `We reserve the right to revise this Privacy Policy at our discretion. Any updates or modifications will be effective upon posting on our website. By continuing to use our services after such changes, you signify your acceptance of the revised policy.`,
  },
  {
    heading2: `Cookies and Tracking :`,
    desc: `Our website may use cookies, which are small text files stored on your device, to enhance your browsing experience and track site usage statistics. These cookies do not reveal personal information or capture private data. You have the option to disable cookies in your internet browser settings, but please note that this may limit certain functionalities on our site.`,
  },
  {
    heading2: `External Links :`,
    desc: `Our website may contain links to external sites operated by our travel partners. Please note that we are not responsible for the privacy practices or content of these sites. We encourage you to review their privacy policies before providing any personal information.`,
  },
  {
    heading2: `Disclaimer :`,
    desc: `Please be aware that electronic transmissions, including the internet, are public media, and any information transmitted through such media is considered public and not private. Information collected during such use is the property of the data collectors and may be public.`,
    desc2: `If you have any questions or concerns regarding your privacy or this Privacy Policy, please contact us at enquiry@granddeeurope.com.`,
  },
];
