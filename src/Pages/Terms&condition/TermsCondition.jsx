import React from "react";
import Banner from "../../Components/Banner/Banner";
import { useWebContext } from "../../Context/ContextProvider";
import SectionHeading from "../../Components/CommonSections/SectionHeading";
import parse from "html-react-parser";
import useScrollTop from "../../Components/useScrollTop";
import { Helmet } from "react-helmet";

function TermsCondition({ SeoMetaData }) {
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
        img={webSiteData?.PagesTitles?.Terms?.Image}
        heading={webSiteData?.PagesTitles?.Terms?.Title}
        // img={img}
        // heading={"this is me"}
      />
      <section className="layout-section">
        <SectionHeading
          //   sectionHeadingDetails={{
          //     heading2: webSiteData?.SectionsTitles?.Terms?.Heading,
          //     para: webSiteData?.SectionTitles?.Terms?.Description,
          //   }}
          sectionHeadingDetails={{
            heading2: "TERMS & CONDITIONS",
            para: `The terms and conditions set out below apply to your use of this website ("Site") and related websites, including the use of the information services offered on the Site.`,
            para2: `In accessing and using the Site, you agree to be bound by these conditions, so please read this section carefully before proceeding. If you do not accept these conditions, you must refrain from using the Site. These conditions must be read in conjunction with any other applicable terms and conditions governing the use of the Site.`,
          }}
        />
        <div className="max-width px-8 text-[1.6rem] mt-10 tsc">
          {webSiteData?.TermsConditions[2]?.TermsServices &&
            parse(webSiteData?.TermsConditions[2]?.TermsServices)}
        </div>
        {/* <div className="max-width lg:px-8 lg:mt-10 tsc">
          <div>
            {data.map((item, i) => (
              <div key={i}>
                <h2 className="content_heading font-medium text_dark">
                  {item.h2}
                </h2>
                <p className="content_description font-normal text_normal">
                  {item.desc}
                </p>
                {item.desc2 && (
                  <p className="content_description font-normal text_normal">
                    {item.desc2}
                  </p>
                )}
                {item.desc3 && (
                  <p className="content_description font-normal text_normal">
                    {item.desc3}
                  </p>
                )}
                {item.desc4 && (
                  <p className="content_description font-normal text_normal">
                    {item.desc4}
                  </p>
                )}
                {item.desc5 && (
                  <p className="content_description font-normal text_normal">
                    {item.desc5}
                  </p>
                )}
                {item.desc6 && (
                  <p className="content_description font-normal text_normal">
                    {item.desc6}
                  </p>
                )}
                {item.desc7 && (
                  <p className="content_description font-normal text_normal">
                    {item.desc7}
                  </p>
                )}
                {item.desc8 && (
                  <p className="content_description font-normal text_normal">
                    {item.desc8}
                  </p>
                )}
                {item.desc9 && (
                  <p className="content_description font-normal text_normal">
                    {item.desc3}
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

export default TermsCondition;

const data = [
  {
    h2: `Conditions`,
    desc: `The Site makes available information relating to hotels and
  resorts owned or managed by Ohmsakthihotels, a company operated by
  Ohmsakthihotels and its subsidiaries, controlled entities,
  affiliates, and related parties ("Ohmsakthihotels")`,
  },
  {
    h2: `Trade Marks`,
    desc: ` The Site contains "Ohmsakthihotels" trade and service marks and
  devices (including the words "Grand Hotel D’Europe Pondicherry")
  and other valuable trade or service marks owned by Ohmsakthihotels
  or licensed to Ohmsakthihotels to distinguish its services and
  products. These trade and service marks and related intellectual
  property are protected from copying and simulation under national
  and international laws and may not be reproduced or copied without
  the express prior written consent of Ohmsakthihotels.`,
    desc2: `Without
  limitation, you must not use any of the said trade or service
  marks:`,
    desc3: `In or as the whole or part of your own trade marks.`,
    desc4: `In
  connection with activities, products, or services which are not
  undertaken or provided by Ohmsakthihotels.`,
    desc5: `In a manner which may
  be confusing, misleading, or deceptive or In a manner that
  disparages Ohmsakthihotels or its information, products, or
  services (including this Site).`,
  },
  {
    h2: `Copyright`,
    desc: `The information, text, graphics, images, sounds, links, and all
  other information and software published or otherwise contained on
  the Site are either owned exclusively by Ohmsakthihotels or
  licensed by Ohmsakthihotels. Except as specifically provided in
  these conditions, they may not be copied, distributed, displayed,
  reproduced, or transmitted in any form or by any means, whether
  electronic, mechanical, photocopying, recording or otherwise,
  without the prior written approval of Ohmsakthihotels. Without
  such approval from Ohmsakthihotels, you may not, without
  limitation, create derivative works from any part of the Site or
  commercialize any information, products, or services obtained from
  any part of the Site. Information procured from a third party may
  be the subject of copyright owned by that third party.`,
  },
  {
    h2: `Your Use`,
    desc: `The Site is for your personal, non-commercial use, and the
    information may be downloaded or printed by you solely for that
    purpose.`,
    desc2: `This right to use the information is a license only, not
    a transfer of title, and is subject to the following restrictions:`,
    desc3: `The information may not be used for any commercial purpose or
    public display, performance, sale, or rental.`,
    desc4: `No copyright or
    other proprietary notices may be removed.`,
    desc5: `The information may not
    be transferred to another person.`,
    desc6: `Software may not be interfered
    with in any manner.`,
    desc7: `Every person downloading, reproducing,
    or otherwise using the information must prevent any unauthorized
    copying of the information.`,
  },
  {
    h2: `Information`,
    desc: `You accept that all information provided on the Site or any other
    material accessed through the Site, including via any linked
    website (*Condition 8), is general information and is not in the
    nature of advice.`,

    desc3: `You also
    accept that all of the information is provided on an "as is" basis
    and, to the extent permitted by law, is provided without any
    warranty, representation, or condition of any kind, whether
    express, implied, statutory, or otherwise. You assume all
    responsibility and risk for your use of or reliance upon the
    information and the Site or any other material accessed through
    the Site, including via any linked website.`,
    desc4: `In particular,
    Ohmsakthihotels does not warrant that.`,
    desc5: `The Information or any
    other material accessed through the Site, including via any linked
    website, is reliable, accurate, or complete, including, without
    limitation, information relating to prices and availability; or`,
    desc6: `Your access to information or any other material accessed through
    the Site, including via any linked website, will be uninterrupted,
    timely, or secure.`,
    desc7: `Ohmsakthihotels is not liable for any loss
    (direct or indirect) resulting from any action taken or reliance
    made by you on the information or any other material accessed
    through the Site, including via any linked website. You should
    make your own inquiries and seek independent professional advice
    before acting or relying on any such information or material.`,
    desc8: `Ohmsakthihotels may from time to time update, modify, or add to
    the information, including these conditions, and absolutely
    reserves the right to make such changes without any obligation to
    notify past, current, or prospective users of the Site. Unless
    otherwise specified to the contrary, all new information shall be
    subject to these conditions.`,
    desc9: `Ohmsakthihotels does not guarantee
    that the Site will operate continuously or without interruption or
    be error-free. In addition, Ohmsakthihotels may also suspend or
    discontinue any aspect of the Site at any time without being
    liable for any direct or indirect loss as a result of such action.`,
  },
  {
    h2: `Liability Disclaimer "Exclusion"`,
    desc: `In no event shall Ohmsakthihotels be responsible for any direct,
  indirect, special, incidental, or consequential loss or damage,
  however arising and whether in contract, tort, or otherwise, which
  you may suffer in connection with or arising out of:`,
    desc2: `Your use of
  the Site or any Linked Website; or`,
    desc3: `Your use of or reliance on
  information or any other material accessed through the Site,
  including via any linked website.`,
    desc4: `Including, without limitation,
  loss or damage by way of loss of profits, loss of business
  opportunity, business interruption, or loss of information.`,
    desc5: `These
  conditions do not purport to exclude liability arising by any
  applicable law if, and to the extent, such liability cannot be
  lawfully excluded. However, to the extent permitted by law, all
  warranties, terms, or conditions which would otherwise be implied
  into these conditions are hereby excluded.`,
    desc6: `Where applicable law
  implies any warranty, term, or condition, and that law prohibits
  exclusion or modification of the application of the liability of
  Ohmsakthihotels under any such warranty, term, or condition, then
  the liability of Ohmsakthihotels shall include liability for that
  warranty, term, or condition. But such liability will be limited
  for a breach of that warranty, term, or condition to one or more
  of the following:`,
    desc7: `If the breach relates to services, the supply of
  the services again or payment of the cost of having the services
  supplied again; and`,
    desc8: ` If the breach relates to services, the supply
  of the services again or payment of the cost of having the
  services supplied again.`,
  },
];
