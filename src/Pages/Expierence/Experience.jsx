import React from "react";
import Banner from "../../Components/Banner/Banner";
import SectionHeading from "../../Components/CommonSections/SectionHeading";
import img from "../../assets/Images/facilityimg1.png";
import useScrollTop from "../../Components/useScrollTop";

const Experience = () => {
  useScrollTop();
  return (
    <>
      <Banner
        img={img}
        heading={""}
        // img={img}
        // heading={"this is me"}
      />

      <section className="layout-section">
        <SectionHeading
          sectionHeadingDetails={{
            heading2: "EXPERIENCE AND OFFERS",
            para: "Welcome to the Experience and Offers section of Grand Hotel D'Europe, your gateway to exceptional moments and enticing deals. We are delighted to have you here and invite you to explore the myriad of experiences and exclusive offers available at our prestigious establishment. Whether you're seeking a luxurious escape, a gastronomic adventure, or a memorable event, our team is dedicated to creating cherished memories for every guest. Discover our experiences and offers below and get ready to indulge in the best of Grand Hotel D'Europe.",
          }}
        />
        <div className="max-width mt-20">
          <SectionHeading
            sectionHeadingDetails={{
              heading2: "EXPERIENCES",
              para: "At Grand Hotel D'Europe, we curate a range of experiences designed to cater to diverse interests and preferences. Immerse yourself in the following exceptional offerings :",
            }}
          />
          <div className="flex flex-col gap-8 mt-8">
            {data1.map((item, i) => (
              <div className="max-width" key={i}>
                <h2 className="content_heading font-medium text_dark">
                  {item.h2}
                </h2>
                <p className="content_description font-normal text_normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-width mt-20">
          <SectionHeading
            sectionHeadingDetails={{
              heading2: "OFFERS",
              para: "Take advantage of our enticing offers, designed to enhance your stay and provide exceptional value :",
            }}
          />
          <div className="flex flex-col gap-8 mt-8">
            {data2.map((item, i) => (
              <div className="max-width" key={i}>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;

const data1 = [
  {
    h2: `Luxurious Accommodations :`,
    desc: "Experience the epitome of luxury and comfort in our well-appointed rooms and suites. Each accommodation option at Grand Hotel D'Europe is designed to provide a serene sanctuary, complete with modern amenities and personalized service.",
  },
  {
    h2: `Gastronomic Delights :`,
    desc: "Embark on a culinary journey at our MIRA on-site restaurant. Delight your taste buds with a diverse selection of cuisines, ranging from authentic local specialties to international flavors, all prepared by our talented chefs using the finest ingredients.",
  },
  {
    h2: `Wellness and Relaxation :`,
    desc: "Rejuvenate your mind, body, and soul at our spa and wellness facilities. Treat yourself to revitalizing treatments, therapeutic massages, and wellness experiences tailored to promote.",
  },
  {
    h2: `Memorable Events and Celebrations :`,
    desc: "Celebrate life's special moments in our elegant event spaces. From weddings and anniversaries to corporate gatherings and social events, our experienced team will ensure that every detail is taken care of, creating lasting memories for you and your guests.",
  },
];

const data2 = [
  {
    h2: "Seasonal Getaways :",
    desc: `Explore our seasonal offers and packages that allow you to experience Grand Hotel D'Europe at its finest. Enjoy discounted rates, exclusive amenities, and customized experiences that reflect the beauty of each season.`,
  },
  {
    h2: "Dining Promotions :",
    desc: "Indulge in our dining promotions that showcase the culinary expertise of our chefs. From themed dinners to special discounts, savor exceptional meals and create memorable dining experiences at our esteemed restaurants.",
  },
  {
    h2: "Wellness Packages :",
    desc: "Pamper yourself with our wellness packages, offering a combination of rejuvenating treatments, spa access, and wellness amenities. Immerse yourself in a world of relaxation and serenity during your stay.",
  },
  {
    h2: "Event Packages :",
    desc: `Discover our event packages tailored to cater to your specific needs. Whether you're planning a corporate event, a wedding, or a social gathering, our packages provide comprehensive solutions to ensure a seamless and memorable occasion.`,
    desc2: `At Grand Hotel D'Europe, we invite you to indulge in a world of exceptional experiences and enticing offers. Immerse yourself in luxurious accommodations, savor delectable culinary creations, find serenity and well-being, and celebrate special moments with us. Explore our website regularly to stay updated on the latest experiences and offers available at Grand Hotel D'Europe. Let us create unforgettable memories and elevate your stay, making every moment with us truly remarkable. Welcome to Grand Hotel D'Europe, where exceptional experiences await.`,
  },
];
