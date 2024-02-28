import React, { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import img from "../../assets/Images/image2.png";
import SectionHeading from "../../Components/CommonSections/SectionHeading";
import { Contact } from "../Home/Components/Contact";
import axios from "axios";
import { useWebContext } from "../../Context/ContextProvider";
import { Helmet } from "react-helmet";

const List = [
  {
    heading: "UNFORGETTABLE HERITAGE CULTURE WEDDING EXPERIENCE",
    para: "Immerse yourself in the richness of heritage culture as you exchange vows in a truly enchanting setting. At the Grand Hotel D'Europe, we curate unforgettable wedding experiences that pay homage to the timeless traditions and elegance of the past. Our heritage-inspired event spaces provide the perfect backdrop for a celebration that embraces both the cultural heritage of Pondicherry and the joyous union of two souls.",
  },
  {
    heading: "UNFORGETTABLE HERITAGE CULTURE WEDDING EXPERIENCE",
    para: "Immerse yourself in the richness of heritage culture as you exchange vows in a truly enchanting setting. At the Grand Hotel D'Europe, we curate unforgettable wedding experiences that pay homage to the timeless traditions and elegance of the past. Our heritage-inspired event spaces provide the perfect backdrop for a celebration that embraces both the cultural heritage of Pondicherry and the joyous union of two souls.",
  },
  {
    heading: "UNFORGETTABLE HERITAGE CULTURE WEDDING EXPERIENCE",
    para: "Immerse yourself in the richness of heritage culture as you exchange vows in a truly enchanting setting. At the Grand Hotel D'Europe, we curate unforgettable wedding experiences that pay homage to the timeless traditions and elegance of the past. Our heritage-inspired event spaces provide the perfect backdrop for a celebration that embraces both the cultural heritage of Pondicherry and the joyous union of two souls.",
  },
  {
    heading: "UNFORGETTABLE HERITAGE CULTURE WEDDING EXPERIENCE",
    para: "Immerse yourself in the richness of heritage culture as you exchange vows in a truly enchanting setting. At the Grand Hotel D'Europe, we curate unforgettable wedding experiences that pay homage to the timeless traditions and elegance of the past. Our heritage-inspired event spaces provide the perfect backdrop for a celebration that embraces both the cultural heritage of Pondicherry and the joyous union of two souls.",
  },
];

const MeetingEvents = ({ SeoMetaData }) => {
  const { domain, webSiteData, ContactAPI } = useWebContext();
  console.log(webSiteData);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userSubject, setUserSubject] = useState("");

  const [formRes, setFromRes] = useState(true);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const handleSubmitForm = async (e) => {
      e.preventDefault();
      // setFromRes(false);
      const status = await ContactAPI(
        userEmail,
        userName,
        userPhone,
        userSubject,
        userMessage
      );
      if (status) {
        setUserEmail("");
        setUserName("");
        setUserPhone("");
        setUserSubject("");
        setUserMessage("");
      }
    };
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        {/* <meta name="description" content={SeoMetaData?.Description} /> */}
        <title>{SeoMetaData?.Title}</title>
      </Helmet>
      {/* BANNER************ */}
      <Banner
        // img={webSiteData?.PagesTitles?.About?.Image}
        // heading={webSiteData?.About?.Heading}
        img={img}
        heading={"Meeting & Events"}
      />
      {/* CELEBRATING SECTION********* */}
      <section className="layout-section">
        <SectionHeading
          sectionHeadingDetails={{
            heading2: webSiteData?.DataToarrange[1].Heading,
            para: webSiteData?.DataToarrange[1].Text,
          }}
        />
        <div className="max-width md:mt-20 mt-6">
          <Contact
            details={{
              heading: webSiteData?.DataToarrange[1].Images[0].Heading,
              para: webSiteData?.DataToarrange[1].Images[0].Text,
              Image: webSiteData?.DataToarrange[1].Images[0].Image,
            }}
          />
        </div>
      </section>

      {/* CONTACT FORM ************** */}
      <section className="layout-section">
        <div className="max-width md:mt-20">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex items-center">
              <div>
                <h2 className="md:text-[3.2rem] text-[1.8rem] uppercase font-medium">
                  EXPERIENCE THE GRAND HOTEL D'EUROPE - WHERE HERITAGE AND
                  CELEBRATIONS UNITE
                </h2>
                <p className="section-para !text-start mt-5">
                  {" "}
                  Our dedicated team is here to assist you in creating an
                  unforgettable event tailored to your unique vision. Reach out
                  today to explore our venue options, customizable packages, and
                  exceptional services, and let us bring your special day to
                  life in the grandeur of heritage and celebration.
                </p>
              </div>
            </div>
            <div className="px-10 py-12 bg-[#37323E]">
              <h2 className="text-[1.8rem] font-medium uppercase text-white">
                Contact Form
              </h2>
              <form onSubmit={(e) => handleSubmitForm(e)} className="mt-5">
                <div className="flex flex-col gap-5">
                  <input
                    type="text"
                    className="bg-transparent outline-none border border-gray-400 px-6 py-3 text-white text-[1.8rem]"
                    placeholder="Name*"
                    required
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    className="bg-transparent outline-none border border-gray-400 px-6 py-3 text-white text-[1.8rem]"
                    placeholder="Phone Number*"
                    required
                    value={userPhone}
                    onChange={(e) => {
                      setUserPhone(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    className="bg-transparent outline-none border border-gray-400 px-6 py-3 text-white text-[1.8rem]"
                    placeholder="Email Adderss*"
                    required
                    value={userEmail}
                    onChange={(e) => {
                      setUserEmail(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    className="bg-transparent outline-none border border-gray-400 px-6 py-3 text-white text-[1.8rem]"
                    placeholder="Email Subject*"
                    required
                    value={userSubject}
                    onChange={(e) => {
                      setUserSubject(e.target.value);
                    }}
                  />
                  <textarea
                    type="text"
                    rows={4}
                    className="bg-transparent outline-none border border-gray-400 px-6 py-3 text-white text-[1.8rem] resize-none"
                    placeholder="Leave a comment here*"
                    value={userMessage}
                    required
                    onChange={(e) => {
                      setUserMessage(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <button
                    className="common-btn mt-8 rounded-full"
                    disabled={!formRes}
                  >
                    {formRes ? "Submit" : "Loading...."}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* LIST******* */}
      <section className="layout-section">
        <div className="max-width md:mt-20">
          <div className="flex flex-col gap-16">
            {webSiteData?.DataToarrange[1].Images?.slice(1).map((list, i) => {
              return (
                <div key={i}>
                  <h2 className="uppercase md:text-[2.4rem] text-[1.8rem] font-medium">
                    {list.Heading}
                  </h2>
                  <p className="section-para !text-start">{list.Text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetingEvents;
