"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import { RiDoubleQuotesL } from "react-icons/ri";
import Image from "next/image";
import "./testimonial.css";

const testiData = [
  {
    testiDesc: `HANDS DOWN IT WAS THE MOST AMAZING EXPERIENCE OUR FAMILY HAS EVER DONE`,
    testiQuote: <RiDoubleQuotesL />,
    testiUser: "Brett",
    userFrom: "Middle East",
  },
  {
    testiDesc: `WE HAVE EXPLORED SOME INCREDIBLE PLACES AND HAD UNIQUE ADVENTURES THAT COULD HAVE ONLY BEEN MADE POSSIBLE WITH BLACK TOMATO’S GUIDANCE`,
    testiQuote: <RiDoubleQuotesL />,
    testiUser: "Ike and Alexa",
    userFrom: "Italy",
  },
  {
    testiDesc: `WONDERFUL, WONDERFUL, WONDERFUL. BLACK TOMATO IS TOP NOTCH – YOU WILL NOT BE DISAPPOINTED`,
    testiQuote: <RiDoubleQuotesL />,
    testiUser: "Wendy",
    userFrom: "Morocco",
  },
  {
    testiDesc: `BLACK TOMATO DELIVERED A ONCE IN A LIFETIME EXPERIENCE THAT MY FAMILY AND I WILL FOREVER CHERISH`,
    testiQuote: <RiDoubleQuotesL />,
    testiUser: "Adrienne",
    userFrom: "Italy",
  },
  {
    testiDesc: `BLACK TOMATO WILL CHANGE THE WAY YOU TRAVEL`,
    testiQuote: <RiDoubleQuotesL />,
    testiUser: "Micah",
    userFrom: "Egypt",
  },
  {
    testiDesc: `GLAMPING, HIKING, ICEBERGS, GOURMET FOOD. NOT SURE HOW MY TRIP COULD HAVE BEEN ANY BETTER`,
    testiQuote: <RiDoubleQuotesL />,
    testiUser: "Jimmy",
    userFrom: "Greenland",
  },
  {
    testiDesc: `A DREAM COME TRUE – FROM SMALL RIADS TO A MOUNTAIN FORTRESS AND A DESERT OASIS. BLACK TOMATO DELIVERED`,
    testiQuote: <RiDoubleQuotesL />,
    testiUser: "Kim",
    userFrom: "Morocco",
  },
  {
    testiDesc: `HIGHLY RECOMMEND BLACK TOMATO’S HELP IN PLANNING AN ADVENTUROUS FAMILY-FRIENDLY HOLIDAY`,
    testiQuote: <RiDoubleQuotesL />,
    testiUser: "Susan",
    userFrom: "Sweden",
  },
];

const Testimonial = () => {
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
                <div className="pb-[134px]">
                  <TestimonialCard {...testimonial} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Trustpilot Logo */}
          <div className="flex items-center justify-center mx-auto -mt-[98px]">
            <Image
              src="/images/trustpilot-logo.svg" // Public folder path or remote URL
              alt="Website Logo"
              width="110"
              height="47"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
