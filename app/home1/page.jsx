import About from "../Component1/About/About";
import Banner from "../Component1/Banner/Banner";
import JourneyFilter from "../Component1/JourneyFilter/JourneyFilter";
import Testimonial from "../Component1/Testimonial/Testimonial";

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
        <Footer />
    </>
  );
};

export default Page;
