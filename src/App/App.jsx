import { Routes, Route } from "react-router-dom";
import { useWebContext } from "../Context/ContextProvider";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../Pages/Home/Home"));
const About = lazy(() => import("../Pages/About/About"));
const Rooms = lazy(() => import("../Pages/Rooms/Rooms"));
const Contact = lazy(() => import("../Pages/Contact/Contact"));

const Gallery = lazy(() => import("../Pages/Gallery/Gallery"));
const Restaurant = lazy(() => import("../Pages/Restaurant/Restaurant"));

const Cancellation = lazy(() => import("../Pages/Cancellation/Cancellation"));
const TermsCondition = lazy(() =>
  import("../Pages/Terms&condition/TermsCondition")
);
const PrivacyPolicy = lazy(() =>
  import("../Pages/PrivacyPolicy/PrivacyPolicy")
);

const MeetingEvents = lazy(() =>
  import("../Pages/MeetingEvents/MeetingEvents")
);

const Faq = lazy(() => import("../Pages/Faq/Faq"));
const Awards = lazy(() => import("../Pages/Awards/Awards"));
const NewsLetter = lazy(() => import("../Pages/NewLetter/NewsLetter"));
const Careers = lazy(() => import("../Pages/Careers/Careers"));
const Experience = lazy(() => import("../Pages/Expierence/Experience"));
const PressRoom = lazy(() => import("../Pages/PressRoom/PressRoom"));
const NewsNotes = lazy(() => import("../Pages/NewsNotes/NewsNotes"));

// const OurService = lazy(() => import("../Pages/"));

// import { About } from "../Pages/About/About";
// import { Rooms } from "../Pages/Rooms/Rooms";
// import { Contact } from "../Pages/Contact/Contact";
// import { Gallery } from "../Pages/Gallery/Gallery";
// import { Restaurant } from "../Pages/Restaurant/Restaurant";
// import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
// import TermsCondition from "../Pages/Terms&condition/TermsCondition";
// import Cancellation from "../Pages/Cancellation/Cancellation";

// import { MeetingEvents } from "../Pages/MeetingEvents/MeetingEvents";
// import Faq from "../Pages/Faq/Faq";
// import Awards from "../Pages/Awards/Awards";
// import NewsLetter from "../Pages/NewLetter/NewsLetter";
// import Careers from "../Pages/Careers/Careers";
// import { Experience } from "../Pages/Expierence/Experience";
// import { PressRoom } from "../Pages/PressRoom/PressRoom";
// import { NewsNotes } from "../Pages/NewsNotes/NewsNotes";

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
    "about.html": <About SeoMetaData={transformedData["About"]} />,
    "contact.html": <Contact SeoMetaData={transformedData["Contact"]} />,
    "restaurant.html": (
      <Restaurant SeoMetaData={transformedData["Restaurants"]} />
    ),

    "rooms-category.html": <Rooms SeoMetaData={transformedData["Rooms"]} />,
    "gallery1.html": <Gallery SeoMetaData={transformedData["Gallery"]} />,

    // "service.html": <Services SeoMetaData={transformedData["Services"]} />,

    "terms.html": (
      <TermsCondition SeoMetaData={transformedData["Terms and condition"]} />
    ),
    "privacy.html": <PrivacyPolicy SeoMetaData={transformedData["Privacy"]} />,
    "cancellation.html": (
      <Cancellation SeoMetaData={transformedData["Cancellation"]} />
    ),
    "faq.html": <Faq SeoMetaData={transformedData["Faq"]} />,
  };

  return (
    <>
      <Header />
      <Suspense fallback={""}>
        <Routes>
          <Route
            path="/"
            element={<Home SeoMetaData={transformedData["Home"]} />}
          />
          <Route
            path="/meeting-events"
            element={
              <MeetingEvents SeoMetaData={{ Title: "Meeting and Events" }} />
            }
          />

          {/* <Route path="/awards" element={<Awards />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/newsletter" element={<NewsLetter />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/press-room" element={<PressRoom />} />
              <Route path="/news-notes" element={<NewsNotes />} /> */}

          {slug.map((slug) => {
            return (
              <Route
                path={`/${slug}`}
                element={PageToComponent[slugToPageName[slug]]}
                key={slug}
              />
            );
          })}
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
