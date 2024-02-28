import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { B as Banner } from "./Banner-BtenGAYF.js";
import { S as SectionHeading } from "./SectionHeading-CTRp9cPu.js";
import { C as Contact } from "./Contact-CZdqg2ZK.js";
import { u as useWebContext } from "../entry-server.js";
import { Helmet } from "react-helmet";
import "framer-motion";
import "react-router-dom";
import "react-dom/server";
import "axios";
import "react-icons/ai";
import "react-icons/io5";
import "react-icons/fa";
import "react-icons/ci";
import "react-icons/lia";
import "react-icons/md";
import "react-router-dom/server.mjs";
const img = "/assets/image2-DRI7QLtb.png";
const MeetingEvents = ({ SeoMetaData }) => {
  var _a;
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
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("title", { children: SeoMetaData == null ? void 0 : SeoMetaData.Title })
    ] }),
    /* @__PURE__ */ jsx(
      Banner,
      {
        img,
        heading: "Meeting & Events"
      }
    ),
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
      /* @__PURE__ */ jsx("div", { className: "max-width md:mt-20 mt-6", children: /* @__PURE__ */ jsx(
        Contact,
        {
          details: {
            heading: webSiteData == null ? void 0 : webSiteData.DataToarrange[1].Images[0].Heading,
            para: webSiteData == null ? void 0 : webSiteData.DataToarrange[1].Images[0].Text,
            Image: webSiteData == null ? void 0 : webSiteData.DataToarrange[1].Images[0].Image
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "layout-section", children: /* @__PURE__ */ jsx("div", { className: "max-width md:mt-20", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "md:text-[3.2rem] text-[1.8rem] uppercase font-medium", children: "EXPERIENCE THE GRAND HOTEL D'EUROPE - WHERE HERITAGE AND CELEBRATIONS UNITE" }),
        /* @__PURE__ */ jsxs("p", { className: "section-para !text-start mt-5", children: [
          " ",
          "Our dedicated team is here to assist you in creating an unforgettable event tailored to your unique vision. Reach out today to explore our venue options, customizable packages, and exceptional services, and let us bring your special day to life in the grandeur of heritage and celebration."
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "px-10 py-12 bg-[#37323E]", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-[1.8rem] font-medium uppercase text-white", children: "Contact Form" }),
        /* @__PURE__ */ jsxs("form", { onSubmit: (e) => handleSubmitForm(e), className: "mt-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: "bg-transparent outline-none border border-gray-400 px-6 py-3 text-white text-[1.8rem]",
                placeholder: "Name*",
                required: true,
                value: userName,
                onChange: (e) => {
                  setUserName(e.target.value);
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: "bg-transparent outline-none border border-gray-400 px-6 py-3 text-white text-[1.8rem]",
                placeholder: "Phone Number*",
                required: true,
                value: userPhone,
                onChange: (e) => {
                  setUserPhone(e.target.value);
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: "bg-transparent outline-none border border-gray-400 px-6 py-3 text-white text-[1.8rem]",
                placeholder: "Email Adderss*",
                required: true,
                value: userEmail,
                onChange: (e) => {
                  setUserEmail(e.target.value);
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: "bg-transparent outline-none border border-gray-400 px-6 py-3 text-white text-[1.8rem]",
                placeholder: "Email Subject*",
                required: true,
                value: userSubject,
                onChange: (e) => {
                  setUserSubject(e.target.value);
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                type: "text",
                rows: 4,
                className: "bg-transparent outline-none border border-gray-400 px-6 py-3 text-white text-[1.8rem] resize-none",
                placeholder: "Leave a comment here*",
                value: userMessage,
                required: true,
                onChange: (e) => {
                  setUserMessage(e.target.value);
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            "button",
            {
              className: "common-btn mt-8 rounded-full",
              disabled: !formRes,
              children: formRes ? "Submit" : "Loading...."
            }
          ) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "layout-section", children: /* @__PURE__ */ jsx("div", { className: "max-width md:mt-20", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-16", children: (_a = webSiteData == null ? void 0 : webSiteData.DataToarrange[1].Images) == null ? void 0 : _a.slice(1).map((list, i) => {
      return /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "uppercase md:text-[2.4rem] text-[1.8rem] font-medium", children: list.Heading }),
        /* @__PURE__ */ jsx("p", { className: "section-para !text-start", children: list.Text })
      ] }, i);
    }) }) }) })
  ] });
};
export {
  MeetingEvents as default
};
