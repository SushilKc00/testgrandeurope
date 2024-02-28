import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { u as useWebContext } from "../entry-server.js";
import { IoIosArrowForward } from "react-icons/io";
import { S as SectionHeading } from "./SectionHeading-CTRp9cPu.js";
import { H as HeroSection } from "./HeroSection-I_5WnNCt.js";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
/* empty css                    */
import { N as Nearby } from "./Nearby-qDHios5P.js";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { C as Contact } from "./Contact-CZdqg2ZK.js";
import { Helmet } from "react-helmet";
import ReactStars from "react-rating-stars-component";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import "react-dom/server";
import "axios";
import "react-icons/ai";
import "react-icons/io5";
import "react-icons/lia";
import "react-router-dom/server.mjs";
import "framer-motion";
const PhotoGallery = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const { webSiteData } = useWebContext();
  const imgGallery = [
    (_a = webSiteData == null ? void 0 : webSiteData.Banner[0]) == null ? void 0 : _a.url,
    (_b = webSiteData == null ? void 0 : webSiteData.Banner[1]) == null ? void 0 : _b.url,
    (_c = webSiteData == null ? void 0 : webSiteData.Banner[2]) == null ? void 0 : _c.url,
    (_d = webSiteData == null ? void 0 : webSiteData.Banner[3]) == null ? void 0 : _d.url,
    (_e = webSiteData == null ? void 0 : webSiteData.Banner[4]) == null ? void 0 : _e.url,
    (_f = webSiteData == null ? void 0 : webSiteData.Banner[5]) == null ? void 0 : _f.url,
    (_g = webSiteData == null ? void 0 : webSiteData.Banner[6]) == null ? void 0 : _g.url,
    (_h = webSiteData == null ? void 0 : webSiteData.Banner[7]) == null ? void 0 : _h.url,
    (_i = webSiteData == null ? void 0 : webSiteData.Banner[8]) == null ? void 0 : _i.url
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-width min-h-[725px] flex flex-col gap-5 photo-gallery", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid-upper-gallery", children: [
      /* @__PURE__ */ jsx("div", { className: "wide-grid overflow-hidden", children: /* @__PURE__ */ jsx(
        "img",
        {
          decoding: "async",
          loading: "lazy",
          src: imgGallery[0],
          className: "w-[100%] h-[100%]",
          alt: "gallery-img"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(
        "img",
        {
          decoding: "async",
          loading: "lazy",
          src: imgGallery[1],
          alt: "gallery-img",
          className: "w-[100%] h-[100%]"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-[100%] overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              decoding: "async",
              loading: "lazy",
              src: imgGallery[2],
              alt: "gallery-img",
              className: "w-[100%] h-[100%]"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "h-[100%] overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              decoding: "async",
              loading: "lazy",
              src: imgGallery[3],
              alt: "gallery-img",
              className: "w-[100%] h-[100%]"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(
          "img",
          {
            decoding: "async",
            loading: "lazy",
            src: imgGallery[4],
            alt: "gallery-img",
            className: "w-[100%] h-[100%]"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid-lower-gallery", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(
        "img",
        {
          decoding: "async",
          loading: "lazy",
          src: imgGallery[5],
          alt: "gallery-img",
          className: "w-[100%] h-[100%]"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-[100%] overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              decoding: "async",
              loading: "lazy",
              src: imgGallery[6],
              alt: "gallery-img",
              className: "w-[100%] h-[100%]"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "h-[100%] overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              decoding: "async",
              loading: "lazy",
              src: imgGallery[7],
              alt: "gallery-img",
              className: "w-[100%] h-[100%]"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(
          "img",
          {
            decoding: "async",
            loading: "lazy",
            src: imgGallery[8],
            alt: "gallery-img",
            className: "w-[100%] h-[100%]"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-[#F4F4F4] px-10 py-20 flex flex-col gap-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-[#1C1C1C] text-[4.2rem] uppercase leading-[5rem] font-medium", children: (_j = webSiteData == null ? void 0 : webSiteData.SectionTitles) == null ? void 0 : _j.About.Title }),
        /* @__PURE__ */ jsxs("p", { className: "text-[#1f1f1f] text-[1.7rem] font-normal", children: [
          webSiteData == null ? void 0 : webSiteData.About.Text.substring(0, 200),
          "........."
        ] }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/About",
            className: "text-[#4d4d4d]  uppercase font-bold text-[1.6rem] flex items-center gap-1",
            children: [
              /* @__PURE__ */ jsx("span", { className: "border-b-[3px] border-b-[#288173]", children: "ABOUT US" }),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "icon" }),
              /* @__PURE__ */ jsx(IoIosArrowForward, { className: "text-[1.8rem]" })
            ]
          }
        )
      ] })
    ] })
  ] });
};
const RoomSection = () => {
  const { roomsDetails } = useWebContext();
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-20", children: roomsDetails[1] && /* @__PURE__ */ jsx(HeroSection, { details: roomsDetails[1], index: 0 }) });
};
const Checkinout = () => {
  const { webSiteData } = useWebContext();
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);
  const [showAdultPopup, setShowAdultPopup] = useState(false);
  const [roomQut, setRoomQut] = useState(0);
  const [adultQut, setAdultQut] = useState(0);
  const [childQut, setChildQut] = useState(0);
  const [checkInOutDate, setCheckInOutDate] = useState("Check-In");
  const [checkOutDate, setCheckOutDate] = useState("Check-Out");
  const [guests, setGuests] = useState("Guests");
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "w-[15%]", children: /* @__PURE__ */ jsx("h2", { className: "text-[2.4rem]", children: "Lorem ipsum dolor" }) }),
    /* @__PURE__ */ jsxs("div", { className: "w-[85%] flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-[85%] flex justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative w-[100%] border border-gray-500", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex justify-between  items-center",
              onClick: () => {
                checkInRef.current.showPicker();
              },
              children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    readOnly: true,
                    value: checkInOutDate,
                    "aria-label": "check-in",
                    placeholder: "checkin",
                    className: "outline-none w-[100%] border  px-2 py-1 text-[1.5rem] cursor-pointer"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "arrow-icon" }),
                /* @__PURE__ */ jsx(MdKeyboardArrowDown, { className: "text-[#288173] text-[2rem]" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "date",
              "aria-label": "check-in-date",
              onChange: (e) => {
                setCheckInOutDate(e.target.value);
              },
              ref: checkInRef,
              className: " absolute bottom-0 left-0 z-[-10]"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative w-[100%]", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex justify-between border border-gray-500 items-center",
              onClick: () => {
                checkOutRef.current.showPicker();
              },
              children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    readOnly: true,
                    value: checkOutDate,
                    "aria-label": "check-out",
                    placeholder: "checkin",
                    className: "outline-none w-[100%] border  px-2 py-1 text-[1.5rem] cursor-pointer"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "check-out-icon" }),
                /* @__PURE__ */ jsx(MdKeyboardArrowDown, { className: "text-[#288173] text-[2rem]" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "date",
              "aria-label": "check-out-date",
              onChange: (e) => {
                setCheckOutDate(e.target.value);
              },
              ref: checkOutRef,
              className: " absolute bottom-0 left-0 z-[-10]"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-[100%] relative", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between border border-gray-500 items-center", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              readOnly: true,
              "aria-label": "guest",
              value: guests,
              placeholder: "guests",
              className: "outline-none w-[100%] border  px-2 py-1 text-[1.5rem] cursor-pointer ",
              onClick: (e) => {
                e.stopPropagation(), setShowAdultPopup(!showAdultPopup);
              }
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "icon" }),
          /* @__PURE__ */ jsx(
            MdKeyboardArrowDown,
            {
              className: "text-[#288173] text-[2rem]",
              onClick: (e) => {
                e.stopPropagation(), setShowAdultPopup(!showAdultPopup);
              }
            }
          ),
          showAdultPopup && /* @__PURE__ */ jsxs("div", { className: "absolute top-[100%] left-0 flex flex-col gap-8 w-[250px] bg-[#f4f3f3] py-4 px-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("p", { className: "text-[1.3rem] font-semibold", children: "Room" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "w-[25px] h-[25px] bg-[#288173] flex items-center justify-center cursor-pointer",
                    onClick: () => {
                      if (roomQut <= 1)
                        return;
                      setRoomQut(roomQut - 1);
                    },
                    children: /* @__PURE__ */ jsx(FaMinus, { className: "text-white text-[1.2rem]" })
                  }
                ),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { children: roomQut }) }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "w-[25px] h-[25px] bg-[#288173] flex items-center justify-center cursor-pointer",
                    onClick: () => {
                      setRoomQut(roomQut + 1);
                    },
                    children: /* @__PURE__ */ jsx(FaPlus, { className: "text-white text-[1.2rem]" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("p", { className: "text-[1.3rem] font-semibold", children: "Adult" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "w-[25px] h-[25px] bg-[#288173] flex items-center justify-center cursor-pointer",
                    onClick: () => {
                      if (adultQut <= 1)
                        return;
                      setAdultQut(adultQut - 1);
                    },
                    children: /* @__PURE__ */ jsx(FaMinus, { className: "text-white text-[1.2rem]" })
                  }
                ),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { children: adultQut }) }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "w-[25px] h-[25px] bg-[#288173] flex items-center justify-center cursor-pointer",
                    onClick: () => {
                      setAdultQut(adultQut + 1);
                    },
                    children: /* @__PURE__ */ jsx(FaPlus, { className: "text-white text-[1.2rem]" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("p", { className: "text-[1.3rem] font-semibold", children: "Child" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "text-white text-[2rem] w-[25px] h-[25px] bg-[#288173] flex items-center justify-center cursor-pointer",
                    onClick: () => {
                      if (childQut <= 1)
                        return;
                      setChildQut(childQut - 1);
                    },
                    children: /* @__PURE__ */ jsx(FaMinus, { className: "text-white text-[1.2rem]" })
                  }
                ),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { children: childQut }) }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "w-[25px] h-[25px] bg-[#288173] flex items-center justify-center cursor-pointer",
                    onClick: () => {
                      setChildQut(childQut + 1);
                    },
                    children: /* @__PURE__ */ jsx(FaPlus, { className: "text-white text-[1.2rem]" })
                  }
                )
              ] })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
        Link,
        {
          to: webSiteData == null ? void 0 : webSiteData.Engine,
          target: "_blank",
          className: "common-btn rounded-full",
          children: "Book Now"
        }
      ) })
    ] })
  ] });
};
new Array(5).fill("");
const HotelFacility = () => {
  var _a;
  const { webSiteData } = useWebContext();
  return /* @__PURE__ */ jsxs("div", { className: "py-16 lg:px-28 mt-16", children: [
    /* @__PURE__ */ jsx(
      Swiper,
      {
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: `4000`,
          disableOnInteraction: false
        },
        pagination: {
          el: "#swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: `.next`,
          prevEl: `.prev`
        },
        modules: [Pagination, Navigation, Autoplay],
        breakpoints: {
          768: {
            slidesPerView: 3
          }
        },
        className: "h-[100%]",
        children: (_a = webSiteData == null ? void 0 : webSiteData.Services) == null ? void 0 : _a.map((d, index) => {
          return /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "bg-white pb-8", children: [
            /* @__PURE__ */ jsx("div", { className: "h-[260px]", children: /* @__PURE__ */ jsx(
              "img",
              {
                decoding: "async",
                loading: "lazy",
                src: d.Image,
                className: "w-[100%] h-[100%]",
                alt: ""
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "px-6 py-4", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-black text-[2.4rem] font-medium uppercase", children: d.Title }),
              /* @__PURE__ */ jsx("p", { className: "text-black mt-2 text-[1.2rem]", children: d.Text })
            ] })
          ] }) }, index);
        })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center mt-12" })
  ] });
};
const reviewsImg = "/assets/reviewsimg-B1w4rwJP.png";
const Testimonal = () => {
  const { reviewsArr } = useWebContext();
  return /* @__PURE__ */ jsxs("div", { className: "flex lg:flex-row flex-col", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:w-[70%] h-auto", children: /* @__PURE__ */ jsx(
      "img",
      {
        decoding: "async",
        loading: "lazy",
        src: reviewsImg,
        alt: "",
        className: "w-[100%] h-[100%]"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "lg:w-[30%] bg-[#37323E] flex justify-center items-center flex-col px-10 py-12", children: /* @__PURE__ */ jsx(
      Swiper,
      {
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: `4000`,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: `.next`,
          prevEl: `.prev`
        },
        modules: [Autoplay, Navigation],
        breakpoints: {
          768: {
            slidesPerView: 1
          }
        },
        className: "w-[100%]",
        children: reviewsArr.map((details, index) => {
          return /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsxs("div", { className: "scroll-auto overflow-y-auto no-scroll", children: [
              /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx(
                ReactStars,
                {
                  count: details == null ? void 0 : details.rating,
                  edit: false,
                  size: 24,
                  color: "#deb666",
                  half: true
                }
              ) }),
              /* @__PURE__ */ jsx("p", { className: "text-[1.3rem] text-justify leading-[2.2rem] mt-4 text-white", children: details == null ? void 0 : details.text })
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "text-[1.6rem] mt-6 text-white font-medium uppercase", children: details == null ? void 0 : details.author_name })
          ] }) }, index);
        })
      }
    ) })
  ] });
};
const SliderGallery = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const { webSiteData } = useWebContext();
  const [imgSelectIndex, setImgSelectIndex] = useState(0);
  const [previewImage, setPreviewImage] = useState(false);
  const slideRight = () => {
    if (imgSelectIndex === (webSiteData == null ? void 0 : webSiteData.Images.length) - 1)
      return setImgSelectIndex(0);
    setImgSelectIndex(imgSelectIndex + 1);
  };
  const slideLeft = () => {
    var _a2;
    if (imgSelectIndex <= 0)
      return setImgSelectIndex(((_a2 = webSiteData == null ? void 0 : webSiteData.Images) == null ? void 0 : _a2.length) - 1);
    setImgSelectIndex(imgSelectIndex - 1);
  };
  const GalleryImages = [
    (_a = webSiteData == null ? void 0 : webSiteData.Banner[0]) == null ? void 0 : _a.url,
    (_b = webSiteData == null ? void 0 : webSiteData.Banner[1]) == null ? void 0 : _b.url,
    (_c = webSiteData == null ? void 0 : webSiteData.Banner[2]) == null ? void 0 : _c.url,
    (_d = webSiteData == null ? void 0 : webSiteData.Banner[3]) == null ? void 0 : _d.url,
    (_e = webSiteData == null ? void 0 : webSiteData.Banner[4]) == null ? void 0 : _e.url,
    (_f = webSiteData == null ? void 0 : webSiteData.Banner[5]) == null ? void 0 : _f.url,
    (_g = webSiteData == null ? void 0 : webSiteData.Banner[6]) == null ? void 0 : _g.url,
    (_h = webSiteData == null ? void 0 : webSiteData.Banner[7]) == null ? void 0 : _h.url,
    (_i = webSiteData == null ? void 0 : webSiteData.Banner[8]) == null ? void 0 : _i.url
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "max-width", children: [
      /* @__PURE__ */ jsx(
        Swiper,
        {
          spaceBetween: 20,
          loop: true,
          autoplay: {
            delay: `8000`,
            disableOnInteraction: false
          },
          pagination: {
            el: "#swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: `.next`,
            prevEl: `.prev`
          },
          modules: [Pagination, Navigation, Autoplay],
          breakpoints: {
            768: {
              slidesPerView: 2
            }
          },
          className: "h-[100%]",
          children: GalleryImages.map((img, index) => {
            return /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-[100%] md:h-[400px] h-[260px]",
                onClick: () => {
                  setPreviewImage(true);
                  setImgSelectIndex(index);
                },
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    decoding: "async",
                    loading: "lazy",
                    src: img,
                    className: "w-[100%] h-[100%]",
                    alt: ""
                  }
                )
              }
            ) }, index);
          })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "bg-[#F4F4F4] flex flex-col gap-3 pb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-[#1C1C1C] text-[2.5rem] uppercase leading-[4rem] font-medium", children: (_j = webSiteData == null ? void 0 : webSiteData.SectionTitles) == null ? void 0 : _j.About.Title }),
        /* @__PURE__ */ jsxs("p", { className: "text-[#4d4d4d] text-[1.6rem] font-normal", children: [
          webSiteData == null ? void 0 : webSiteData.About.Text.substring(0, 200),
          "........."
        ] }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/About",
            className: "text-[#4d4d4d]  uppercase font-bold text-[1.6rem] flex items-center gap-1",
            children: [
              /* @__PURE__ */ jsx("span", { className: "border-b-[3px] border-b-[#288173]", children: "ABOUT US" }),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "icon" }),
              /* @__PURE__ */ jsx(IoIosArrowForward, { className: "text-[1.8rem]" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 border-b border-b-gray-700 pb-6", children: /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
        Link,
        {
          to: webSiteData == null ? void 0 : webSiteData.Engine,
          target: "_blank",
          className: "common-btn rounded-full",
          children: "Check In"
        }
      ) }) })
    ] }),
    previewImage && /* @__PURE__ */ jsxs("div", { className: "fixed top-0 left-0 w-[100%] h-[100vh] bg-[#000000c6] z-10 flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-[90%] md:h-[640px] h-[300px] m-auto", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: webSiteData == null ? void 0 : webSiteData.Images[imgSelectIndex].Image,
            loading: "lazy",
            decoding: "async",
            alt: "",
            style: {
              width: "100%",
              height: "100%"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-4xl text-white bg-slate-900 w-20 h-20 flex justify-center items-center rounded-full mb-4 cursor-pointer absolute top-[-4%] right-[-2%]",
            onClick: () => {
              setPreviewImage(false);
              window.document.body.classList.remove("bg_salmon");
            },
            children: "X"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "fixed top-[50%] md:left-[2rem] left-[4rem] p-4 bg-[#288173]  cursor-pointer rounded-full",
          onClick: () => {
            slideLeft();
          },
          children: /* @__PURE__ */ jsx(TiArrowLeft, { size: 20, className: "text-white" })
        }
      ),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "fixed top-[50%] md:right-[2rem] right-[4rem] p-4 bg-[#288173] rounded-full cursor-pointer",
          onClick: () => {
            slideRight();
          },
          children: /* @__PURE__ */ jsx(TiArrowRight, { size: 20, className: "text-white" })
        }
      )
    ] })
  ] });
};
const InstagramPost = () => {
  var _a, _b;
  const { webSiteData } = useWebContext();
  const [imgSelectIndex, setImgSelectIndex] = useState(0);
  const [previewImage, setPreviewImage] = useState(false);
  const slideRight = () => {
    if (imgSelectIndex === (webSiteData == null ? void 0 : webSiteData.Images.length) - 1)
      return setImgSelectIndex(0);
    setImgSelectIndex(imgSelectIndex + 1);
  };
  const slideLeft = () => {
    var _a2;
    if (imgSelectIndex <= 0)
      return setImgSelectIndex(((_a2 = webSiteData == null ? void 0 : webSiteData.Images) == null ? void 0 : _a2.length) - 1);
    setImgSelectIndex(imgSelectIndex - 1);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-2 gap-3", children: webSiteData.Images.map((ins, ind) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "sm:h-[320px] h-[185px] overflow-hidden",
        onClick: () => {
          setPreviewImage(true);
          setImgSelectIndex(ind);
        },
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: ins.Image,
            alt: "",
            className: "w-[100%] h-[100%] hover:scale-125 transition-all duration-500"
          }
        )
      },
      ind
    )) }),
    ((_a = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _a.InstagramRequired) && /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-12", children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: (_b = webSiteData == null ? void 0 : webSiteData.Links) == null ? void 0 : _b.Instagram,
        target: "_blank",
        className: "common-btn rounded-full flex gap-5 items-center",
        children: [
          "View Instagram ",
          /* @__PURE__ */ jsx(CiInstagram, { size: 20 })
        ]
      }
    ) }),
    previewImage && /* @__PURE__ */ jsxs("div", { className: "fixed top-0 left-0 w-[100%] h-[100vh] bg-[#000000c6] z-10 flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-[90%] md:h-[640px] h-[300px] m-auto", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: webSiteData == null ? void 0 : webSiteData.Images[imgSelectIndex].Image,
            loading: "lazy",
            decoding: "async",
            alt: "",
            style: {
              width: "100%",
              height: "100%"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-4xl text-white bg-slate-900 w-20 h-20 flex justify-center items-center rounded-full mb-4 cursor-pointer absolute top-[-4%] right-[-2%]",
            onClick: () => {
              setPreviewImage(false);
              window.document.body.classList.remove("bg_salmon");
            },
            children: "X"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "fixed top-[50%] md:left-[2rem] left-[4rem] p-4 bg-[#288173]  cursor-pointer rounded-full",
          onClick: () => {
            slideLeft();
          },
          children: /* @__PURE__ */ jsx(TiArrowLeft, { size: 20, className: "text-white" })
        }
      ),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "fixed top-[50%] md:right-[2rem] right-[4rem] p-4 bg-[#288173] rounded-full cursor-pointer",
          onClick: () => {
            slideRight();
          },
          children: /* @__PURE__ */ jsx(TiArrowRight, { size: 20, className: "text-white" })
        }
      )
    ] })
  ] });
};
const Home = ({ SeoMetaData }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
  const { webSiteData } = useWebContext();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: SeoMetaData == null ? void 0 : SeoMetaData.Description }),
      /* @__PURE__ */ jsx("title", { children: SeoMetaData == null ? void 0 : SeoMetaData.Title })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "layout-section", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:block hidden", children: /* @__PURE__ */ jsx(PhotoGallery, {}) }),
      /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsx(SliderGallery, {}) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "layout-section lg:block hidden", children: /* @__PURE__ */ jsx("div", { className: "max-width", children: /* @__PURE__ */ jsx(Checkinout, {}) }) }),
    ((_b = (_a = webSiteData == null ? void 0 : webSiteData.SectionsVisible) == null ? void 0 : _a.Home) == null ? void 0 : _b.Rooms) && /* @__PURE__ */ jsxs("section", { className: "layout-section", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          sectionHeadingDetails: {
            heading2: (_d = (_c = webSiteData == null ? void 0 : webSiteData.SectionTitles) == null ? void 0 : _c.Rooms) == null ? void 0 : _d.Title,
            para: (_f = (_e = webSiteData == null ? void 0 : webSiteData.SectionTitles) == null ? void 0 : _e.Rooms) == null ? void 0 : _f.Description
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "max-width mt-12", children: /* @__PURE__ */ jsx(RoomSection, {}) })
    ] }),
    ((_h = (_g = webSiteData == null ? void 0 : webSiteData.SectionsVisible) == null ? void 0 : _g.Home) == null ? void 0 : _h.Facilities) && /* @__PURE__ */ jsxs("section", { className: "layout-section md:mt-12", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          sectionHeadingDetails: {
            heading2: (_j = (_i = webSiteData == null ? void 0 : webSiteData.SectionTitles) == null ? void 0 : _i.Services) == null ? void 0 : _j.Title,
            para: (_l = (_k = webSiteData == null ? void 0 : webSiteData.SectionTitles) == null ? void 0 : _k.Services) == null ? void 0 : _l.Description
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "max-width bg-[#37323E]", children: /* @__PURE__ */ jsx(HotelFacility, {}) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "layout-section", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          sectionHeadingDetails: {
            heading2: webSiteData == null ? void 0 : webSiteData.DataToarrange[1].Heading,
            para: webSiteData == null ? void 0 : webSiteData.DataToarrange[1].Text
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "max-width mt-12", children: /* @__PURE__ */ jsx(
        Contact,
        {
          details: {
            heading: webSiteData == null ? void 0 : webSiteData.DataToarrange[1].Images[0].Heading,
            para: webSiteData == null ? void 0 : webSiteData.DataToarrange[1].Images[0].Text,
            Image: webSiteData == null ? void 0 : webSiteData.DataToarrange[1].Images[0].Image
          },
          Button: true
        }
      ) })
    ] }),
    ((_n = (_m = webSiteData == null ? void 0 : webSiteData.SectionsVisible) == null ? void 0 : _m.Home) == null ? void 0 : _n.Insta) && /* @__PURE__ */ jsx("section", { className: "layout-section", children: /* @__PURE__ */ jsx(InstagramPost, {}) }),
    ((_p = (_o = webSiteData == null ? void 0 : webSiteData.SectionsVisible) == null ? void 0 : _o.Home) == null ? void 0 : _p.Nearby) && /* @__PURE__ */ jsxs("section", { className: "layout-section", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          sectionHeadingDetails: {
            heading2: (_q = webSiteData == null ? void 0 : webSiteData.SectionTitles) == null ? void 0 : _q.Nearby.Title,
            para: (_r = webSiteData == null ? void 0 : webSiteData.SectionTitles) == null ? void 0 : _r.Nearby.Description
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "max-width mt-12", children: /* @__PURE__ */ jsx(Nearby, { isButton: false }) })
    ] }),
    ((_t = (_s = webSiteData == null ? void 0 : webSiteData.SectionsVisible) == null ? void 0 : _s.Home) == null ? void 0 : _t.Testimonials) && /* @__PURE__ */ jsxs("section", { className: "layout-section", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          sectionHeadingDetails: {
            heading2: (_v = (_u = webSiteData == null ? void 0 : webSiteData.SectionTitles) == null ? void 0 : _u.Testimonial) == null ? void 0 : _v.Title,
            para: (_x = (_w = webSiteData == null ? void 0 : webSiteData.SectionTitles) == null ? void 0 : _w.Testimonial) == null ? void 0 : _x.Description
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "max-width mt-12", children: /* @__PURE__ */ jsx(Testimonal, {}) })
    ] })
  ] });
};
export {
  Home as default
};
