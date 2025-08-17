import About from "../Component1/About/About";
import Banner from "../Component1/Banner/Banner";
import Brand from "../Component1/Brand/Brand";
import CTA from "../Component1/CTA/CTA";
import ImageBanner from "../Component1/ImageBanner/ImageBanner";
import JourneyFilter from "../Component1/JourneyFilter/JourneyFilter";
import OurMission from "../Component1/OurMission/OurMission";
import OurTrip from "../Component1/OurTrip/OurTrip";
import Testimonial from "../Component1/Testimonial/Testimonial";
import TrustedBrand from "../Component1/TrustedBrand/TrustedBrand";
import WhyChoose from "../Component1/WhyChoose/WhyChoose";

import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Page = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Testimonial />
      <JourneyFilter />
      <OurTrip />
      <TrustedBrand />
      <ImageBanner />
      <OurMission />
      <WhyChoose />
      <CTA />
      <Brand />
      <Footer />
    </>
  );
};

export default Page;
