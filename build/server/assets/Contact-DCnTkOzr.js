import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { B as Banner } from "./Banner-BtenGAYF.js";
import { S as SectionHeading } from "./SectionHeading-CTRp9cPu.js";
import { u as useWebContext } from "../entry-server.js";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { u as useScrollTop } from "./useScrollTop-DOa0KYcl.js";
import "framer-motion";
import "react-dom/server";
import "axios";
import "react-icons/ai";
import "react-icons/io5";
import "react-icons/fa";
import "react-icons/ci";
import "react-icons/lia";
import "react-icons/md";
import "react-router-dom/server.mjs";
const Contact = ({ SeoMetaData }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: SeoMetaData == null ? void 0 : SeoMetaData.Description }),
      /* @__PURE__ */ jsx("title", { children: SeoMetaData == null ? void 0 : SeoMetaData.Title })
    ] }),
    /* @__PURE__ */ jsx(
      Banner,
      {
        img: (_b = (_a = webSiteData == null ? void 0 : webSiteData.PagesTitles) == null ? void 0 : _a.Contact) == null ? void 0 : _b.Image,
        heading: (_d = (_c = webSiteData == null ? void 0 : webSiteData.PagesTitles) == null ? void 0 : _c.Contact) == null ? void 0 : _d.Title
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "layout-section", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          sectionHeadingDetails: {
            heading2: "CONTACT US",
            para: webSiteData == null ? void 0 : webSiteData.DataToarrange[4].Text
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "max-width mt-20", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-3", children: [
          /* @__PURE__ */ jsx("h2", { className: "uppercase text-[2rem] font-medium py-2", children: "Contact details" }),
          /* @__PURE__ */ jsxs("p", { className: "section-para !font-semibold", children: [
            "General Enquiry :",
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: `tel:${(_e = webSiteData == null ? void 0 : webSiteData.Footer) == null ? void 0 : _e.Phone}`,
                className: "text-[#439184]",
                children: [
                  (_f = webSiteData == null ? void 0 : webSiteData.Footer) == null ? void 0 : _f.Phone,
                  " "
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "section-para !font-semibold", children: [
            "Reservation :",
            /* @__PURE__ */ jsx(Link, { className: "text-[#439184]", children: " +91 41322 69999 " })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "section-para !font-semibold", children: [
            "Email :",
            /* @__PURE__ */ jsx(
              Link,
              {
                to: `mailto:${(_g = webSiteData == null ? void 0 : webSiteData.Footer) == null ? void 0 : _g.Email}`,
                className: "text-[#439184]",
                children: (_h = webSiteData == null ? void 0 : webSiteData.Footer) == null ? void 0 : _h.Email
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "section-para !font-semibold", children: [
            "Address :",
            /* @__PURE__ */ jsx(Link, { children: (_i = webSiteData == null ? void 0 : webSiteData.Footer) == null ? void 0 : _i.Address })
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
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "layout-section", children: /* @__PURE__ */ jsx("div", { className: "max-width", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: webSiteData == null ? void 0 : webSiteData.Location,
        width: "100%",
        height: "450",
        allowFullScreen: "",
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade"
      }
    ) }) })
  ] });
};
export {
  Contact as default
};
