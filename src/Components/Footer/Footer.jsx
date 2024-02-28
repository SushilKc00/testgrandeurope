import React from "react";
import { useWebContext } from "../../Context/ContextProvider";
import Nav_Links from "../Header/Nav_Links";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { LiaTripadvisor } from "react-icons/lia";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";

const featuresLinks = [
  {
    linkName: "Press Room",
    src: "/press-room",
  },
  {
    linkName: "News & Notes",
    src: "/news-notes",
  },
  {
    linkName: "News Letter",
    src: "/newsletter",
  },
];
const exploreLinks = [
  {
    linkName: "Awards",
    src: "/awards",
  },
  {
    linkName: "Careers",
    src: "/careers",
  },
  {
    linkName: "Experience & Offers",
    src: "/experience",
  },
];

const Footer = () => {
  const { webSiteData, slugs } = useWebContext();
  const slug = Object.values(slugs).map((page) => page.Slug);
  const Nav_Links_Arr = Nav_Links();

  return (
    <footer>
      {/* NEWSLETTER FOOTER SECTION******** */}
      <div>
        <div className="max-width flex gap-12 lg:flex-row flex-col lg:items-center justify-between rounded-full">
          <div className="flex flex-col md:items-start items-center">
            <h2 className="md:text-[3.2rem] text-[1.8rem] uppercase font-medium">
              Subscribe Our Newsletter
            </h2>
            <p className="md:text-[1.6rem] text-[1.2rem] text-center font-normal">
              {webSiteData?.Footer?.NewsLetterText}
            </p>
          </div>
          <div className="border border-gray-500 rounded-full flex lg:w-[40%]  w-[100%] h-[45px]">
            <input
              type="text"
              aria-label="news-letter"
              placeholder="Your Email Address*"
              className="w-[100%] rounded-full bg-transparent outline-none border-none px-6 text-[1.4rem]"
            />
            <button className="common-btn rounded-full">Submit</button>
          </div>
        </div>
      </div>

      {/* LINE************* */}
      <hr className="mt-16 h-[1px] bg-gray-400" />

      {/* LINKS FOOTER SECTION*************** */}
      <div>
        <div className="max-width grid lg:grid-cols-4 gap-10 mt-10">
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-[15rem] h-auto"
              width={100}
              height={100}
              src={webSiteData?.Footer.Logo}
              // src={logo}
              alt="FooterImage"
            />
            <p className="text-[4d4d4d] text-justify my-3 font-normal md:text-[1.6rem] text-[1.2rem]">
              {webSiteData?.Footer?.AboutText}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="md:text-[2.4rem] text-[1.8rem] font-semibold uppercase text-[#000000]">
              Our Features
            </h3>
            <ul className="flex flex-col gap-4">
              {featuresLinks.map((links, i) => {
                return (
                  <li key={i}>
                    <Link
                      key={i}
                      to={links.src}
                      className="text-[1.7rem] font-medium capitalize text-[#4d4d4d]"
                    >
                      {links.linkName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="md:text-[2.4rem] text-[1.8rem] font-semibold uppercase text-[#000000]">
              Explore
            </h3>
            <ul className="flex flex-col gap-4">
              {exploreLinks.map((links, i) => {
                return (
                  <li key={i}>
                    <Link
                      key={i}
                      to={links.src}
                      className="text-[1.7rem] capitalize text-[#4d4d4d] font-medium"
                    >
                      {links.linkName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="md:text-[2.4rem] text-[1.8rem] font-semibold uppercase text-[#1C1C1C]">
              Get In Touch
            </h3>
            <Link
              to={`tel: ${webSiteData?.Footer?.Phone}`}
              className="flex gap-2 items-center text-[1.8rem] text-[#1b1b1b]"
              target="_blank"
            >
              <span className="sr-only">icon</span>
              <IoCall className="text-[2rem]" /> {webSiteData?.Footer?.Phone}
            </Link>
            <Link
              to={`mailto:${webSiteData?.Footer?.Email}`}
              className="flex gap-2 items-center   lowercase text-[1.8rem] text-[#1C1C1C]"
              target="_blank"
            >
              <span className="sr-only">icon</span>
              <MdOutlineEmail className="text-[2rem] mt-1" />
              {webSiteData?.Footer?.Email}
            </Link>
            <div className="flex gap-4 my-2 py-2">
              {webSiteData?.Links?.FacebookRequired && (
                <Link
                  to={webSiteData?.Links?.Facebook}
                  className="p-2  border border-[#288173] rounded-full text-black w-[35px] h-[35px] flex justify-center items-center"
                  aria-label="Facebook"
                  target="_blank"
                >
                  <span className="sr-only">icon</span>
                  <FaFacebookF className="text-[2rem]" />
                </Link>
              )}
              {webSiteData?.Links?.InstagramRequired && (
                <Link
                  to={webSiteData?.Links?.Instagram}
                  className="p-2  border border-[#288173] rounded-full text-black w-[35px] h-[35px] flex justify-center items-center"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <span className="sr-only">icon</span>

                  <CiInstagram className="text-[2rem]" />
                </Link>
              )}
              {webSiteData?.Links?.TripadvisorsRequired && (
                <Link
                  to={webSiteData?.Links?.Tripadvisors}
                  className="p-2  border border-[#288173] rounded-full text-black w-[35px] h-[35px] flex justify-center items-center"
                  aria-label="Tripadvisor"
                  target="_blank"
                >
                  <span className="sr-only">icon</span>

                  <LiaTripadvisor className="text-[2rem]" />
                </Link>
              )}
              {webSiteData?.Links?.LinkedinRequired && (
                <Link
                  to={webSiteData?.Links?.Linkedin}
                  className="p-2  border border-[#288173] rounded-full text-black w-[35px] h-[35px] flex justify-center items-center"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <span className="sr-only">icon</span>

                  <FaLinkedinIn className="text-[2rem]" />
                </Link>
              )}
              {webSiteData?.Links?.TwitterRequired && (
                <Link
                  to={webSiteData?.Links?.Twitter}
                  className="p-2  border border-[#288173] rounded-full text-black w-[35px] h-[35px] flex justify-center items-center"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <span className="sr-only">icon</span>

                  <CiTwitter className="text-[2rem]" />
                </Link>
              )}
              {webSiteData?.Links?.YoutubeRequired && (
                <Link
                  to={webSiteData?.Links?.Youtube}
                  className="p-2  border border-[#288173] rounded-full text-black w-[35px] h-[35px] flex justify-center items-center"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <span className="sr-only">icon</span>

                  <CiYoutube className="text-[2rem]" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* COPYRIGHT AND POLICY SECTION************** */}
      <div className="bg-[#242323] py-8 mt-16">
        <div className="max-width">
          <div className="flex md:flex-row flex-col justify-between gap-6">
            <p className="md:order-1 order-2 text-[1.5rem] flex gap-3 text-white">
              &copy; Copyright{" "}
              <Link to="https://www.eazotel.com" target="_blank">
                Eazotel
              </Link>{" "}
              All Right Reserved
            </p>
            <div className="flex md:flex-row flex-col mdd:gap-7 gap-4 order-1 text-[1.5rem] text-white">
              <Link to={slug[8]}>Privacy Policy</Link>
              <Link to={slug[14]}>Terms & Conditions</Link>
              <Link to={slug[2]}>Cancellation & Refund Policy</Link>
              <Link to={slug[5]}>FAQ</Link>
            </div>
          </div>
        </div>
      </div>

      {/* WHATS APP********* */}
      {webSiteData?.Footer?.WhatsApp && (
        <div className="fixed sm:bottom-16 bottom-10 sm:right-12 right-4 sm:w-[60px] w-[45px] sm:h-[60px] h-[45px] bg-green-600 flex items-center justify-center rounded-full z-30 text-white">
          <Link
            to={`https://web.whatsapp.com/send?phone=${webSiteData?.Footer?.WhatsApp}&text=Hello!%20I%20have%20visited%20your%20site%20https://hotelawadhvilasayodhya.com/.%20I%20want%20to%20book%20a%20room.`}
            target="_blank"
            aria-label="whats-app"
          >
            <AiOutlineWhatsApp className="sm:text-[3.2rem] text-[2.6rem]" />
          </Link>
        </div>
      )}
    </footer>
  );
};

export default Footer;
