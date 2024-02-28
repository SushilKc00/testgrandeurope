import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav_Links from "./Nav_Links";

export const MobileNav = ({ props, Engine, menuOpen, setMenuOpen }) => {
  const Nav_Links_Arr = Nav_Links();
  return (
    <div
      className="mobile-nav fixed top-0 right-0 w-[100vw] h-[100vh] bg-gray-300 z-[999] "
      style={{
        maxHeight: menuOpen ? "1200px" : "0",
        overflow: "hidden",
        transition: "all 0.8s linear",
      }}
    >
      <p
        className="text-end text-[2rem] font-extrabold px-6 py-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        X
      </p>
      <ul className="flex flex-col gap-8 px-8 py-4">
        {Nav_Links_Arr.map((links, i) => {
          return (
            links.isNavBar && (
              <li
                key={i}
                className="text-[1.6rem] font-medium text-[#343434] uppercase"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <NavLink to={links.src}>{links.linkName}</NavLink>
              </li>
            )
          );
        })}
        <li>
          <Link
            to="https://engine.eazotel.com/?id=220982cf-c23d-4ab0-95a4-14923c058394&hid=29641044"
            target="_blank"
            className="common-btn"
          >
            Book Now
          </Link>
        </li>
      </ul>
    </div>
  );
};
