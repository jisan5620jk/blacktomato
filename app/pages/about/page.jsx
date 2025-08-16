"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "@/app/Shared/BreadCrumb/BreadCrumb";
import About from "./About/About";

const Page = () => {


  return (
    <>
        <BreadCrumb
          breadCrumbTitle={"About Us 01"}
          breadCrumbIcon={<FaArrowRightLong />}
          breadCrumbLink={"About Us 01"}
        />
        <About />
    </>
  );
};

export default Page;
