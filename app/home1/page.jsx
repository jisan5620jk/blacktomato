import About from "../Component1/About/About";
import Banner from "../Component1/Banner/Banner";
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
        <Footer />
    </>
  );
};

export default Page;
