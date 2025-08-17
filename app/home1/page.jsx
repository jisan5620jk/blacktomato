import About from "../Component1/About/About";
import Banner from "../Component1/Banner/Banner";
import ImageBanner from "../Component1/ImageBanner/ImageBanner";
import JourneyFilter from "../Component1/JourneyFilter/JourneyFilter";
import OurTrip from "../Component1/OurTrip/OurTrip";
import Testimonial from "../Component1/Testimonial/Testimonial";
import TrustedBrand from "../Component1/TrustedBrand/TrustedBrand";

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
      <Footer />
    </>
  );
};

export default Page;
