import { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import SectionHeading from "../../Components/CommonSections/SectionHeading";
import { useWebContext } from "../../Context/ContextProvider";
import axios from "axios";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
import useScrollTop from "../../Components/useScrollTop";

const Contact = ({ SeoMetaData }) => {
  const { webSiteData, domain, ContactAPI } = useWebContext();
  console.log(webSiteData);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userSubject, setUserSubject] = useState("");

  const [formRes, setFromRes] = useState(true);

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

  useScrollTop();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={SeoMetaData?.Description} />
        <title>{SeoMetaData?.Title}</title>
      </Helmet>
      <Banner
        img={webSiteData?.PagesTitles?.Contact?.Image}
        heading={webSiteData?.PagesTitles?.Contact?.Title}
        // img={img}
        // heading={"this is me"}
      />
      <section className="layout-section">
        <SectionHeading
          sectionHeadingDetails={{
            heading2: "CONTACT US",
            para: webSiteData?.DataToarrange[4].Text,
          }}
        />
        <div className="max-width mt-20">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex items-center">
              <div className="flex flex-col items-start gap-3">
                <h2 className="uppercase text-[2rem] font-medium py-2">
                  Contact details
                </h2>
                <p className="section-para !font-semibold">
                  General Enquiry :
                  <Link
                    to={`tel:${webSiteData?.Footer?.Phone}`}
                    className="text-[#439184]"
                  >
                    {webSiteData?.Footer?.Phone}{" "}
                  </Link>
                </p>
                <p className="section-para !font-semibold">
                  Reservation :
                  <Link className="text-[#439184]"> +91 41322 69999 </Link>
                </p>
                <p className="section-para !font-semibold">
                  Email :
                  <Link
                    to={`mailto:${webSiteData?.Footer?.Email}`}
                    className="text-[#439184]"
                  >
                    {webSiteData?.Footer?.Email}
                  </Link>
                </p>
                <p className="section-para !font-semibold">
                  Address :<Link>{webSiteData?.Footer?.Address}</Link>
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

      <section className="layout-section">
        <div className="max-width">
          <iframe
            src={webSiteData?.Location}
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.0126090640006!2d72.70789181110968!3d24.588761055984108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395d2bbdf0095abf%3A0xc7b05ff9dd5dfd50!2sHotel%20HG%20Grandiose!5e0!3m2!1sen!2sin!4v1708668145102!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
      </section>
    </>
  );
};

export default Contact;
