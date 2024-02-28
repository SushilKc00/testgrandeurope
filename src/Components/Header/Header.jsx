import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { LiaTripadvisor } from "react-icons/lia";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import logo from "../../assets/Images/logo.png";
import { MobileNav } from "./MobileNav";

import Nav_Links from "./Nav_Links";
import { useWebContext } from "../../Context/ContextProvider";

const Header = () => {
  const { webSiteData } = useWebContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const Nav_Links_Arr = Nav_Links();

  return (
    <header className="bg-white py-2">
      <nav className="max-width flex items-center">
        <div
          className="ham-menu flex justify-end"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <AiOutlineMenu size={35} />
        </div>

        <div className="left-logo-conatiner lg:w-[170px] sm:h-[115px] flex items-center">
          <Link to="/">
            <img
              className="w-[12rem]"
              // src={logo}
              src={webSiteData?.Footer?.Logo}
              alt="Nav Logo"
              width={70}
              height={65}
            />
          </Link>
        </div>

        <div className=" mid-nav-links-container w-[100%]">
          <div className="upper-container flex items-center justify-end gap-8 py-8 border-b border-b-gray-400">
            <div className="contact-container flex items-center gap-5">
              <div className="contact-details flex gap-5">
                <Link
                  to={`tel: ${webSiteData?.Footer?.Phone}`}
                  className="flex gap-2 items-center text-[1.8rem] text-[#1b1b1b]"
                  target="_blank"
                >
                  <span className="sr-only">icon</span>
                  <IoCall className="text-[2rem]" />{" "}
                  {webSiteData?.Footer?.Phone}
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
              </div>
              <div>
                <div className="flex gap-4 text-[2rem]">
                  {webSiteData?.Links?.FacebookRequired && (
                    <Link
                      to={webSiteData?.Links?.Facebook}
                      className=" border border-[#288173] rounded-full w-[35px] h-[35px] flex items-center justify-center"
                      aria-label="Facebook"
                      target="_blank"
                    >
                      <span className="sr-only"></span> <FaFacebookF />
                    </Link>
                  )}
                  {webSiteData?.Links?.InstagramRequired && (
                    <Link
                      to={webSiteData?.Links?.Instagram}
                      className=" border border-[#288173] rounded-full w-[35px] h-[35px] flex items-center justify-center"
                      aria-label="Instagram"
                      target="_blank"
                    >
                      <span className="sr-only"></span> <CiInstagram />
                    </Link>
                  )}
                  {webSiteData?.Links?.TripadvisorsRequired && (
                    <Link
                      to={webSiteData?.Links?.Tripadvisors}
                      className=" border border-[#288173] rounded-full w-[35px] h-[35px] flex items-center justify-center"
                      aria-label="Tripadvisor"
                      target="_blank"
                    >
                      <span className="sr-only"></span> <LiaTripadvisor />
                    </Link>
                  )}
                  {webSiteData?.Links?.LinkedinRequired && (
                    <Link
                      to={webSiteData?.Links?.Linkedin}
                      className="border border-[#288173] rounded-full w-[35px] h-[35px] flex items-center justify-center"
                      aria-label="LinkedIn"
                      target="_blank"
                    >
                      <span className="sr-only">icon</span> <FaLinkedinIn />
                    </Link>
                  )}
                  {webSiteData?.Links?.TwitterRequired && (
                    <Link
                      to={webSiteData?.Links?.Twitter}
                      className=" border border-[#288173] rounded-full text-black w-[35px] h-[35px] flex justify-center items-center"
                      aria-label="Instagram"
                      target="_blank"
                    >
                      <CiTwitter />
                    </Link>
                  )}
                  {webSiteData?.Links?.YoutubeRequired && (
                    <Link
                      to={webSiteData?.Links?.Youtube}
                      className=" border border-[#288173] rounded-full text-black w-[35px] h-[35px] flex justify-center items-center"
                      aria-label="Instagram"
                      target="_blank"
                    >
                      <CiYoutube className="text-[1.8rem]" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lower-container mt-6 py-4">
            <ul className="flex items-center justify-end gap-10">
              {Nav_Links_Arr.map((links, i) => {
                return (
                  links.isNavBar && (
                    <li key={i} className="nav-links-li">
                      <NavLink to={links.src}>{links.linkName}</NavLink>
                    </li>
                  )
                );
              })}
              <li className="nav-links-li">
                <Link
                  to={webSiteData?.Engine}
                  target="_blank"
                  className="rounded-[100dvh] bg-[#288173] text-white px-8 py-3 text-[1.5rem] font-medium"
                >
                  <span className="sr-only">Book Now Button</span>
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mobile-phone-icon w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
          <Link to={`tel:${webSiteData?.Footer?.Phone}`}>
            <span className="sr-only">icon</span>
            <IoCall className="text-[#288173] text-[1.5rem]" />
          </Link>
        </div>
      </nav>

      <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
};

export default Header;
