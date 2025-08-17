"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./trusted-brand.css";
import TrustedBrandCard from "./TrustedBrandCard";

const testiData = [
  {
    testiDesc: `BESPOKE LUXURY TRAVEL OUTFITTER BLACK TOMATO'S NEW TOOL MAY REINVENT HOW YOU BOOK`,
    brandLogo: "/images/Forbes-193x40-1.svg",
  },
  {
    testiDesc: `MANY TRAVEL COMPANIES BRAG ABOUT ONCE-IN-A-LIFETIME EXPERIENCES BUT WITH BLACK TOMATO, IT'S NOT HYPERBOLE`,
    brandLogo: "/images/CNBC-193x40-1.svg",
  },
  {
    testiDesc: `BLACK TOMATO HAVE BUILT SOMETHING OF A NAME FOR THEMSELVES AS THOUGHT LEADERS IN THE TRAVEL BUSINESS`,
    brandLogo: "/images/Inc-193x40-1.svg",
  },
  {
    testiDesc: `BLACK TOMATO PRIDES ITSELF ON MEETING CUSTOMERS EVERY MINOR NEED OR DESIRES`,
    brandLogo: "/images/Conde-naste-Traveler-193x40-1.svg",
  },
  {
    testiDesc: `HANDS DOWN IT WAS THE MOST AMAZING EXPERIENCE OUR FAMILY HAS EVER DONE`,
    brandLogo: "/images/Robb-report-193x40-1.svg",
  },
  {
    testiDesc: `WE HAVE EXPLORED SOME INCREDIBLE PLACES AND HAD UNIQUE ADVENTURES THAT COULD HAVE ONLY BEEN MADE POSSIBLE WITH BLACK TOMATO’S GUIDANCE`,
    brandLogo: "/images/TravelLeisure-193x40-1.svg",
  },
  {
    testiDesc: `BLACK TOMATO DELIVERED A ONCE IN A LIFETIME EXPERIENCE THAT MY FAMILY AND I WILL FOREVER CHERISH`,
    brandLogo: "/images/pI6G0rcS-Conde-Nast-Traveler-UK-US.svg",
  },
  {
    testiDesc: `GLAMPING, HIKING, ICEBERGS, GOURMET FOOD. NOT SURE HOW MY TRIP COULD HAVE BEEN ANY BETTER`,
    brandLogo: "/images/mens-journal-193-x-40.svg",
  },
];



const TrustedBrand = () => {
  const settings = {
    modules: [Autoplay, Pagination],
    loop: true,
    speed: 3000,
    slidesPerView: 4, // ekhon ek sathe koyta slide dekhabe
    slidesPerGroup: 4, // ek sathe koyta slide move korbe
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true, // default dot pagination
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  };

  return (
    <section className="testimonial pt-[58px] pb-12 bg-[url(/images/testi-bg.jpg)] bg-no-repeat bg-cover bg-center relative z-10 overflow-hidden">
      <div className="Container">
        <div className="mt-[46px] relative z-10">
          {/* Swiper with default bullet pagination */}
          <Swiper {...settings}>
            {testiData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="pb-[80px]">
                  <TrustedBrandCard {...testimonial} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrand;
