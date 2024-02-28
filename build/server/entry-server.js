import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect, lazy, Suspense } from "react";
import ReactDOMServer from "react-dom/server";
import { NavLink, Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import { AiOutlineMenu, AiOutlineWhatsApp } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { LiaTripadvisor } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { StaticRouter } from "react-router-dom/server.mjs";
const ContextProvider = createContext();
const WebContextProvider = ({ children }) => {
  const [webSiteData, setwebsiteData] = useState();
  const [slugs, setSlugs] = useState({});
  const [SeoData, setSeoData] = useState([]);
  const [IsNavBar, setIsNavBar] = useState({});
  const [pageTitles, setPageTitles] = useState({});
  const [sectionTitles, setSectionTitles] = useState([]);
  const [dataToArrange, setDataToArrange] = useState([]);
  const [menu, setMenu] = useState([]);
  const [services, setServices] = useState([]);
  const [roomsDetails, setRoomsDetails] = useState([]);
  const [reviewsArr, setReviewsArr] = useState([]);
  const [banner, setBanner] = useState([]);
  const [domain, setDomain] = useState("gde22606912");
  const [ndid, setNdid] = useState("527a3ab5-3f70-437c-b6f7-9a7a26251dbf");
  const ContactAPI = async (userEmail, userName, userPhone, userMessage, Description) => {
    try {
      const { data } = await axios.post(
        `https://eazotel.eazotel.com/api/dashboard/editcontact`,
        {
          Domain: domain,
          // Replace with your actual domain value
          email: userEmail,
          Name: userName,
          Contact: userPhone,
          Subject: userMessage,
          Description
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      if (data.Status) {
        alert("message sended");
        return true;
      } else {
        alert("somethin wrong!");
      }
    } catch (error) {
    }
  };
  const fetchWebSiteDatas = async () => {
    const { data } = await axios.get(
      `https://nexon.eazotel.com/cms/get/website/${domain}`
    );
    if (data.Status) {
      setwebsiteData({ ...data.WebsiteData });
      setSlugs({ ...data.WebsiteData.Slugs });
      setSeoData([...data.WebsiteData.SeoOptimisation]);
      setIsNavBar({ ...data.WebsiteData.Navbar });
      setPageTitles({ ...data.WebsiteData.PagesTitles });
      setSectionTitles({ ...data.WebsiteData.SectionTitles });
      setServices([...data.WebsiteData.Services]);
      setBanner([...data.WebsiteData.Banner]);
      setDataToArrange([...data.WebsiteData.DataToarrange]);
      setMenu([...data.WebsiteData.Menu]);
    }
  };
  const fetchRooms = async () => {
    try {
      const { data } = await axios.get(
        `https://nexon.eazotel.com/room/get/room/website/${domain}`
      );
      setRoomsDetails([...data.data]);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(
        `https://nexon.eazotel.com/google/reviews/website/eb112233`
      );
      setReviewsArr([...data.Reviews]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchWebSiteDatas();
    fetchRooms();
    fetchReviews();
  }, []);
  return /* @__PURE__ */ jsx(
    ContextProvider.Provider,
    {
      value: {
        webSiteData,
        slugs,
        SeoData,
        IsNavBar,
        pageTitles,
        sectionTitles,
        services,
        domain,
        ndid,
        roomsDetails,
        reviewsArr,
        banner,
        dataToArrange,
        menu,
        ContactAPI
      },
      children
    }
  );
};
const useWebContext = () => {
  return useContext(ContextProvider);
};
const Nav_Links = () => {
  var _a, _b, _c, _d;
  const { webSiteData, slugs } = useWebContext();
  const slug = Object.values(slugs).map((page) => page.Slug);
  const Links = [
    {
      linkName: " Home",
      isNavBar: true,
      src: "/"
    },
    {
      linkName: "About",
      src: slug[0],
      isNavBar: (_a = webSiteData == null ? void 0 : webSiteData.Navbar) == null ? void 0 : _a.About
    },
    {
      linkName: "Room",
      src: slug[11],
      isNavBar: (_b = webSiteData == null ? void 0 : webSiteData.Navbar) == null ? void 0 : _b.Room
    },
    // {
    //   linkName: "facilities",
    //   src: `/${slug[4]}`,
    //   isNavBar: true,
    // },
    {
      linkName: " Meeting & Event",
      src: "/meeting-events",
      isNavBar: true
    },
    {
      linkName: " Restaurant",
      src: slug[10],
      isNavBar: (_c = webSiteData == null ? void 0 : webSiteData.Navbar) == null ? void 0 : _c.Restaurant
    },
    {
      linkName: "Gallery",
      src: slug[6],
      // isNavBar: webSiteData?.Navbar?.Gallery,
      isNavBar: true
    },
    {
      linkName: "Contact",
      src: slug[3],
      isNavBar: (_d = webSiteData == null ? void 0 : webSiteData.Navbar) == null ? void 0 : _d.Contact
    }
  ];
  return Links;
};
const MobileNav = ({ props, Engine, menuOpen, setMenuOpen }) => {
  const Nav_Links_Arr = Nav_Links();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "mobile-nav fixed top-0 right-0 w-[100vw] h-[100vh] bg-gray-300 z-[999] ",
      style: {
        maxHeight: menuOpen ? "1200px" : "0",
        overflow: "hidden",
        transition: "all 0.8s linear"
      },
      children: [
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-end text-[2rem] font-extrabold px-6 py-2",
            onClick: () => setMenuOpen(!menuOpen),
            children: "X"
          }
        ),
        /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-8 px-8 py-4", children: [
          Nav_Links_Arr.map((links, i) => {
            return links.isNavBar && /* @__PURE__ */ jsx(
              "li",
              {
                className: "text-[1.6rem] font-medium text-[#343434] uppercase",
                onClick: () => setMenuOpen(!menuOpen),
                children: /* @__PURE__ */ jsx(NavLink, { to: links.src, children: links.linkName })
              },
              i
            );
          }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "https://engine.eazotel.com/?id=220982cf-c23d-4ab0-95a4-14923c058394&hid=29641044",
              target: "_blank",
              className: "common-btn",
              children: "Book Now"
            }
          ) })
        ] })
      ]
    }
  );
};
const Header = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
  const { webSiteData } = useWebContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const Nav_Links_Arr = Nav_Links();
  return /* @__PURE__ */ jsxs("header", { className: "bg-white py-2", children: [
    /* @__PURE__ */ jsxs("nav", { className: "max-width flex items-center", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "ham-menu flex justify-end",
          onClick: () => setMenuOpen(!menuOpen),
          children: /* @__PURE__ */ jsx(AiOutlineMenu, { size: 35 })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "left-logo-conatiner lg:w-[170px] sm:h-[115px] flex items-center", children: /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx(
        "img",
        {
          className: "w-[12rem]",
          src: (_a = webSiteData == null ? void 0 : webSiteData.Footer) == null ? void 0 : _a.Logo,
          alt: "Nav Logo",
          width: 70,
          height: 65
        }
      ) }) }),
      /* @__PURE__ */ jsxs("div", { className: " mid-nav-links-container w-[100%]", children: [
        /* @__PURE__ */ jsx("div", { className: "upper-container flex items-center justify-end gap-8 py-8 border-b border-b-gray-400", children: /* @__PURE__ */ jsxs("div", { className: "contact-container flex items-center gap-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "contact-details flex gap-5", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: `tel: ${(_b = webSiteData == null ? void 0 : webSiteData.Footer) == null ? void 0 : _b.Phone}`,
                className: "flex gap-2 items-center text-[1.8rem] text-[#1b1b1b]",
                target: "_blank",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "icon" }),
                  /* @__PURE__ */ jsx(IoCall, { className: "text-[2rem]" }),
                  " ",
                  (_c = webSiteData == null ? void 0 : webSiteData.Footer) == null ? void 0 : _c.Phone
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: `mailto:${(_d = webSiteData == null ? void 0 : webSiteData.Footer) == null ? void 0 : _d.Email}`,
                className: "flex gap-2 items-center   lowercase text-[1.8rem] text-[#1C1C1C]",
                target: "_blank",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "icon" }),
                  /* @__PURE__ */ jsx(MdOutlineEmail, { className: "text-[2rem] mt-1" }),
                  (_e = webSiteData == null ? void 0 : webSiteData.Footer) == null ? void 0 : _e.Email
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4 text-[2rem]", children: [
            ((_f = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _f.FacebookRequired) && /* @__PURE__ */ jsxs(
              Link,
              {
                to: (_g = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _g.Facebook,
                className: " border border-[#288173] rounded-full w-[35px] h-[35px] flex items-center justify-center",
                "aria-label": "Facebook",
                target: "_blank",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sr-only" }),
                  " ",
                  /* @__PURE__ */ jsx(FaFacebookF, {})
                ]
              }
            ),
            ((_h = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _h.InstagramRequired) && /* @__PURE__ */ jsxs(
              Link,
              {
                to: (_i = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _i.Instagram,
                className: " border border-[#288173] rounded-full w-[35px] h-[35px] flex items-center justify-center",
                "aria-label": "Instagram",
                target: "_blank",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sr-only" }),
                  " ",
                  /* @__PURE__ */ jsx(CiInstagram, {})
                ]
              }
            ),
            ((_j = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _j.TripadvisorsRequired) && /* @__PURE__ */ jsxs(
              Link,
              {
                to: (_k = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _k.Tripadvisors,
                className: " border border-[#288173] rounded-full w-[35px] h-[35px] flex items-center justify-center",
                "aria-label": "Tripadvisor",
                target: "_blank",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sr-only" }),
                  " ",
                  /* @__PURE__ */ jsx(LiaTripadvisor, {})
                ]
              }
            ),
            ((_l = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _l.LinkedinRequired) && /* @__PURE__ */ jsxs(
              Link,
              {
                to: (_m = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _m.Linkedin,
                className: "border border-[#288173] rounded-full w-[35px] h-[35px] flex items-center justify-center",
                "aria-label": "LinkedIn",
                target: "_blank",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "icon" }),
                  " ",
                  /* @__PURE__ */ jsx(FaLinkedinIn, {})
                ]
              }
            ),
            ((_n = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _n.TwitterRequired) && /* @__PURE__ */ jsx(
              Link,
              {
                to: (_o = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _o.Twitter,
                className: " border border-[#288173] rounded-full text-black w-[35px] h-[35px] flex justify-center items-center",
                "aria-label": "Instagram",
                target: "_blank",
                children: /* @__PURE__ */ jsx(CiTwitter, {})
              }
            ),
            ((_p = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _p.YoutubeRequired) && /* @__PURE__ */ jsx(
              Link,
              {
                to: (_q = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _q.Youtube,
                className: " border border-[#288173] rounded-full text-black w-[35px] h-[35px] flex justify-center items-center",
                "aria-label": "Instagram",
                target: "_blank",
                children: /* @__PURE__ */ jsx(CiYoutube, { className: "text-[1.8rem]" })
              }
            )
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "lower-container mt-6 py-4", children: /* @__PURE__ */ jsxs("ul", { className: "flex items-center justify-end gap-10", children: [
          Nav_Links_Arr.map((links, i) => {
            return links.isNavBar && /* @__PURE__ */ jsx("li", { className: "nav-links-li", children: /* @__PURE__ */ jsx(NavLink, { to: links.src, children: links.linkName }) }, i);
          }),
          /* @__PURE__ */ jsx("li", { className: "nav-links-li", children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: webSiteData == null ? void 0 : webSiteData.Engine,
              target: "_blank",
              className: "rounded-[100dvh] bg-[#288173] text-white px-8 py-3 text-[1.5rem] font-medium",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Book Now Button" }),
                "Book Now"
              ]
            }
          ) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mobile-phone-icon w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxs(Link, { to: `tel:${(_r = webSiteData == null ? void 0 : webSiteData.Footer) == null ? void 0 : _r.Phone}`, children: [
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "icon" }),
        /* @__PURE__ */ jsx(IoCall, { className: "text-[#288173] text-[1.5rem]" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(MobileNav, { menuOpen, setMenuOpen })
  ] });
};
const featuresLinks = [
  {
    linkName: "Press Room",
    src: "/press-room"
  },
  {
    linkName: "News & Notes",
    src: "/news-notes"
  },
  {
    linkName: "News Letter",
    src: "/newsletter"
  }
];
const exploreLinks = [
  {
    linkName: "Awards",
    src: "/awards"
  },
  {
    linkName: "Careers",
    src: "/careers"
  },
  {
    linkName: "Experience & Offers",
    src: "/experience"
  }
];
const Footer = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
  const { webSiteData, slugs } = useWebContext();
  const slug = Object.values(slugs).map((page) => page.Slug);
  Nav_Links();
  return /* @__PURE__ */ jsxs("footer", { children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "max-width flex gap-12 lg:flex-row flex-col lg:items-center justify-between rounded-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:items-start items-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "md:text-[3.2rem] text-[1.8rem] uppercase font-medium", children: "Subscribe Our Newsletter" }),
        /* @__PURE__ */ jsx("p", { className: "md:text-[1.6rem] text-[1.2rem] text-center font-normal", children: (_a = webSiteData == null ? void 0 : webSiteData.Footer) == null ? void 0 : _a.NewsLetterText })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border border-gray-500 rounded-full flex lg:w-[40%]  w-[100%] h-[45px]", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            "aria-label": "news-letter",
            placeholder: "Your Email Address*",
            className: "w-[100%] rounded-full bg-transparent outline-none border-none px-6 text-[1.4rem]"
          }
        ),
        /* @__PURE__ */ jsx("button", { className: "common-btn rounded-full", children: "Submit" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("hr", { className: "mt-16 h-[1px] bg-gray-400" }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "max-width grid lg:grid-cols-4 gap-10 mt-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "w-[15rem] h-auto",
            width: 100,
            height: 100,
            src: webSiteData == null ? void 0 : webSiteData.Footer.Logo,
            alt: "FooterImage"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-[4d4d4d] text-justify my-3 font-normal md:text-[1.6rem] text-[1.2rem]", children: (_b = webSiteData == null ? void 0 : webSiteData.Footer) == null ? void 0 : _b.AboutText })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx("h3", { className: "md:text-[2.4rem] text-[1.8rem] font-semibold uppercase text-[#000000]", children: "Our Features" }),
        /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-4", children: featuresLinks.map((links, i) => {
          return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: links.src,
              className: "text-[1.7rem] font-medium capitalize text-[#4d4d4d]",
              children: links.linkName
            },
            i
          ) }, i);
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx("h3", { className: "md:text-[2.4rem] text-[1.8rem] font-semibold uppercase text-[#000000]", children: "Explore" }),
        /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-4", children: exploreLinks.map((links, i) => {
          return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: links.src,
              className: "text-[1.7rem] capitalize text-[#4d4d4d] font-medium",
              children: links.linkName
            },
            i
          ) }, i);
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "md:text-[2.4rem] text-[1.8rem] font-semibold uppercase text-[#1C1C1C]", children: "Get In Touch" }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: `tel: ${(_c = webSiteData == null ? void 0 : webSiteData.Footer) == null ? void 0 : _c.Phone}`,
            className: "flex gap-2 items-center text-[1.8rem] text-[#1b1b1b]",
            target: "_blank",
            children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "icon" }),
              /* @__PURE__ */ jsx(IoCall, { className: "text-[2rem]" }),
              " ",
              (_d = webSiteData == null ? void 0 : webSiteData.Footer) == null ? void 0 : _d.Phone
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: `mailto:${(_e = webSiteData == null ? void 0 : webSiteData.Footer) == null ? void 0 : _e.Email}`,
            className: "flex gap-2 items-center   lowercase text-[1.8rem] text-[#1C1C1C]",
            target: "_blank",
            children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "icon" }),
              /* @__PURE__ */ jsx(MdOutlineEmail, { className: "text-[2rem] mt-1" }),
              (_f = webSiteData == null ? void 0 : webSiteData.Footer) == null ? void 0 : _f.Email
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 my-2 py-2", children: [
          ((_g = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _g.FacebookRequired) && /* @__PURE__ */ jsxs(
            Link,
            {
              to: (_h = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _h.Facebook,
              className: "p-2  border border-[#288173] rounded-full text-black w-[35px] h-[35px] flex justify-center items-center",
              "aria-label": "Facebook",
              target: "_blank",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "icon" }),
                /* @__PURE__ */ jsx(FaFacebookF, { className: "text-[2rem]" })
              ]
            }
          ),
          ((_i = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _i.InstagramRequired) && /* @__PURE__ */ jsxs(
            Link,
            {
              to: (_j = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _j.Instagram,
              className: "p-2  border border-[#288173] rounded-full text-black w-[35px] h-[35px] flex justify-center items-center",
              "aria-label": "Instagram",
              target: "_blank",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "icon" }),
                /* @__PURE__ */ jsx(CiInstagram, { className: "text-[2rem]" })
              ]
            }
          ),
          ((_k = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _k.TripadvisorsRequired) && /* @__PURE__ */ jsxs(
            Link,
            {
              to: (_l = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _l.Tripadvisors,
              className: "p-2  border border-[#288173] rounded-full text-black w-[35px] h-[35px] flex justify-center items-center",
              "aria-label": "Tripadvisor",
              target: "_blank",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "icon" }),
                /* @__PURE__ */ jsx(LiaTripadvisor, { className: "text-[2rem]" })
              ]
            }
          ),
          ((_m = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _m.LinkedinRequired) && /* @__PURE__ */ jsxs(
            Link,
            {
              to: (_n = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _n.Linkedin,
              className: "p-2  border border-[#288173] rounded-full text-black w-[35px] h-[35px] flex justify-center items-center",
              "aria-label": "LinkedIn",
              target: "_blank",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "icon" }),
                /* @__PURE__ */ jsx(FaLinkedinIn, { className: "text-[2rem]" })
              ]
            }
          ),
          ((_o = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _o.TwitterRequired) && /* @__PURE__ */ jsxs(
            Link,
            {
              to: (_p = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _p.Twitter,
              className: "p-2  border border-[#288173] rounded-full text-black w-[35px] h-[35px] flex justify-center items-center",
              "aria-label": "Instagram",
              target: "_blank",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "icon" }),
                /* @__PURE__ */ jsx(CiTwitter, { className: "text-[2rem]" })
              ]
            }
          ),
          ((_q = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _q.YoutubeRequired) && /* @__PURE__ */ jsxs(
            Link,
            {
              to: (_r = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _r.Youtube,
              className: "p-2  border border-[#288173] rounded-full text-black w-[35px] h-[35px] flex justify-center items-center",
              "aria-label": "Instagram",
              target: "_blank",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "icon" }),
                /* @__PURE__ */ jsx(CiYoutube, { className: "text-[2rem]" })
              ]
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-[#242323] py-8 mt-16", children: /* @__PURE__ */ jsx("div", { className: "max-width", children: /* @__PURE__ */ jsxs("div", { className: "flex md:flex-row flex-col justify-between gap-6", children: [
      /* @__PURE__ */ jsxs("p", { className: "md:order-1 order-2 text-[1.5rem] flex gap-3 text-white", children: [
        "© Copyright",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "https://www.eazotel.com", target: "_blank", children: "Eazotel" }),
        " ",
        "All Right Reserved"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex md:flex-row flex-col mdd:gap-7 gap-4 order-1 text-[1.5rem] text-white", children: [
        /* @__PURE__ */ jsx(Link, { to: slug[8], children: "Privacy Policy" }),
        /* @__PURE__ */ jsx(Link, { to: slug[14], children: "Terms & Conditions" }),
        /* @__PURE__ */ jsx(Link, { to: slug[2], children: "Cancellation & Refund Policy" }),
        /* @__PURE__ */ jsx(Link, { to: slug[5], children: "FAQ" })
      ] })
    ] }) }) }),
    ((_s = webSiteData == null ? void 0 : webSiteData.Footer) == null ? void 0 : _s.WhatsApp) && /* @__PURE__ */ jsx("div", { className: "fixed sm:bottom-16 bottom-10 sm:right-12 right-4 sm:w-[60px] w-[45px] sm:h-[60px] h-[45px] bg-green-600 flex items-center justify-center rounded-full z-30 text-white", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: `https://web.whatsapp.com/send?phone=${(_t = webSiteData == null ? void 0 : webSiteData.Footer) == null ? void 0 : _t.WhatsApp}&text=Hello!%20I%20have%20visited%20your%20site%20https://hotelawadhvilasayodhya.com/.%20I%20want%20to%20book%20a%20room.`,
        target: "_blank",
        "aria-label": "whats-app",
        children: /* @__PURE__ */ jsx(AiOutlineWhatsApp, { className: "sm:text-[3.2rem] text-[2.6rem]" })
      }
    ) })
  ] });
};
const Home = lazy(() => import("./assets/Home-CMgFX3RY.js"));
const About = lazy(() => import("./assets/About-Bvq2mt0a.js"));
const Rooms = lazy(() => import("./assets/Rooms-7aKNw21x.js"));
const Contact = lazy(() => import("./assets/Contact-DCnTkOzr.js"));
const Gallery = lazy(() => import("./assets/Gallery-1vDKU8Bg.js"));
const Restaurant = lazy(() => import("./assets/Restaurant-BsHByhAo.js"));
const Cancellation = lazy(() => import("./assets/Cancellation-CGvdwx2a.js"));
const TermsCondition = lazy(
  () => import("./assets/TermsCondition-DgSn2Dc-.js")
);
const PrivacyPolicy = lazy(
  () => import("./assets/PrivacyPolicy-DOOJNwL4.js")
);
const MeetingEvents = lazy(
  () => import("./assets/MeetingEvents-CwOb6ouz.js")
);
const Faq = lazy(() => import("./assets/Faq-6wQX8Q4t.js"));
lazy(() => import("./assets/Awards-DWokObHL.js"));
lazy(() => import("./assets/NewsLetter-C3oOPJHA.js"));
lazy(() => import("./assets/Careers-BTnMPZyR.js"));
lazy(() => import("./assets/Experience-oqDLq6fT.js"));
lazy(() => import("./assets/PressRoom-UTgdueO-.js"));
lazy(() => import("./assets/NewsNotes-Dl5luZUH.js"));
function App() {
  const { slugs, SeoData } = useWebContext();
  const slug = Object.values(slugs).map((page) => page.Slug);
  const slugToPageName = Object.fromEntries(
    Object.values(slugs).map((slg) => {
      return [slg.Slug, slg.PageName];
    })
  );
  const transformedData = Object.fromEntries(
    SeoData.map((result) => {
      return [result.PageName, result.Data];
    })
  );
  const PageToComponent = {
    "about.html": /* @__PURE__ */ jsx(About, { SeoMetaData: transformedData["About"] }),
    "contact.html": /* @__PURE__ */ jsx(Contact, { SeoMetaData: transformedData["Contact"] }),
    "restaurant.html": /* @__PURE__ */ jsx(Restaurant, { SeoMetaData: transformedData["Restaurants"] }),
    "rooms-category.html": /* @__PURE__ */ jsx(Rooms, { SeoMetaData: transformedData["Rooms"] }),
    "gallery1.html": /* @__PURE__ */ jsx(Gallery, { SeoMetaData: transformedData["Gallery"] }),
    // "service.html": <Services SeoMetaData={transformedData["Services"]} />,
    "terms.html": /* @__PURE__ */ jsx(TermsCondition, { SeoMetaData: transformedData["Terms and condition"] }),
    "privacy.html": /* @__PURE__ */ jsx(PrivacyPolicy, { SeoMetaData: transformedData["Privacy"] }),
    "cancellation.html": /* @__PURE__ */ jsx(Cancellation, { SeoMetaData: transformedData["Cancellation"] }),
    "faq.html": /* @__PURE__ */ jsx(Faq, { SeoMetaData: transformedData["Faq"] })
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Suspense, { fallback: "", children: /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(
        Route,
        {
          path: "/",
          element: /* @__PURE__ */ jsx(Home, { SeoMetaData: transformedData["Home"] })
        }
      ),
      /* @__PURE__ */ jsx(
        Route,
        {
          path: "/meeting-events",
          element: /* @__PURE__ */ jsx(MeetingEvents, { SeoMetaData: { Title: "Meeting and Events" } })
        }
      ),
      slug.map((slug2) => {
        return /* @__PURE__ */ jsx(
          Route,
          {
            path: `/${slug2}`,
            element: PageToComponent[slugToPageName[slug2]]
          },
          slug2
        );
      })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function render({ path }) {
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: path, children: /* @__PURE__ */ jsx(WebContextProvider, { children: /* @__PURE__ */ jsx(App, {}) }) })
  );
  return { html };
}
export {
  render,
  useWebContext as u
};
