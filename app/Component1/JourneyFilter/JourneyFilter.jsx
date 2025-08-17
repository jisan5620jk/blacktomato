"use client";

import { useState } from "react";
import TravelCard from "./TravelCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./journey-filter.css";
import PopularCard from "./PopularCard";
import MonthCard from "./MonthCard";
import SpotLightCard from "./SpotLightCard";

const travelData = [
  {
    travelUrl: "/",
    travelImg: "/images/family-trips.avif",
    travelTitle: "Family",
  },
  {
    travelUrl: "/",
    travelImg: "/images/couples-trips.avif",
    travelTitle: "Family",
  },
  {
    travelUrl: "/",
    travelImg: "/images/group-trips.avif",
    travelTitle: "Family",
  },
  {
    travelUrl: "/",
    travelImg: "/images/honeymoon-trips.avif",
    travelTitle: "Family",
  },
  {
    travelUrl: "/",
    travelImg: "/images/solo-trips-2.avif",
    travelTitle: "Family",
  },
];

const popularData = [
  {
    popularUrl: "/",
    popularImg: "/images/hyena-tanzania.avif",
    popularTitle: "Family",
  },
  {
    popularUrl: "/",
    popularImg: "/images/Italy-2.avif",
    popularTitle: "Family",
  },
  {
    popularUrl: "/",
    popularImg: "/images/Bordeaux-in-France.avif",
    popularTitle: "Family",
  },
  {
    popularUrl: "/",
    popularImg: "/images/South-Africa-ocean-from-above.avif",
    popularTitle: "Family",
  },
  {
    popularUrl: "/",
    popularImg: "/images/uk-ireland.avif",
    popularTitle: "Family",
  },
  {
    popularUrl: "/",
    popularImg: "/images/Baobab-trees-in-Madagascar.avif",
    popularTitle: "Family",
  },
  {
    popularUrl: "/",
    popularImg: "/images/Baobab-trees-in-Madagascar.avif",
    popularTitle: "Family",
  },
  {
    popularUrl: "/",
    popularImg: "/images/navigation-kenya.avif",
    popularTitle: "Family",
  },
  {
    popularUrl: "/",
    popularImg: "/images/houses-in-bryggen-in-norway.avif",
    popularTitle: "Family",
  },
];

const monthData = [
  {
    monthUrl: "/january",
    monthImg: "/images/Months_january.avif",
    monthTitle: "January",
  },
  {
    monthUrl: "/february",
    monthImg: "/images/Months_february.avif",
    monthTitle: "February",
  },
  {
    monthUrl: "/march",
    monthImg: "/images/Months_march.avif",
    monthTitle: "March",
  },
  {
    monthUrl: "/april",
    monthImg: "/images/Months_april.avif",
    monthTitle: "April",
  },
  {
    monthUrl: "/may",
    monthImg: "/images/Months_august.avif",
    monthTitle: "May",
  },
  {
    monthUrl: "/june",
    monthImg: "/images/Months_june.avif",
    monthTitle: "June",
  },
  {
    monthUrl: "/july",
    monthImg: "/images/Months_may.avif",
    monthTitle: "July",
  },
  {
    monthUrl: "/august",
    monthImg: "/images/Months_june.avif",
    monthTitle: "August",
  },
  {
    monthUrl: "/september",
    monthImg: "/images/Months_july.avif",
    monthTitle: "September",
  },
  {
    monthUrl: "/october",
    monthImg: "/images/Months_august.avif",
    monthTitle: "October",
  },
  {
    monthUrl: "/november",
    monthImg: "/images/Months_november.avif",
    monthTitle: "November",
  },
  {
    monthUrl: "/december",
    monthImg: "/images/Months_december.avif",
    monthTitle: "December",
  },
];

const spotLightData = [
  {
    spotLightUrl: "/",
    spotLightImg: "/images/dkbHf4Uv-Turkey-James-Bond-thumbnail.avif",
    spotLightTitle: "Family",
  },
  {
    spotLightUrl: "/",
    spotLightImg: "/images/Hawaii-luxury-travel.avif",
    spotLightTitle: "Family",
  },
  {
    spotLightUrl: "/",
    spotLightImg: "/images/Westworld-Utah.avif",
    spotLightTitle: "Family",
  },
];

const JourneyFilter = () => {
  /* Tab Activation */
  const [activeTab, setActiveTab] = useState("traveller");

  /* Swiper Js */

  const settings = {
    modules: [Autoplay, Pagination],
    loop: true,
    speed: 3000,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 26,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
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
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  };

  return (
    <section className="journey-filter bg-BodyBg-0 pt-[38px] pb-10 relative z-20">
      <div className="Container">
        {/* Section Title */}
        <h2 className="font-Alternate text-[45px] font-medium text-black tracking-[2.25px] text-center uppercase">
          Start your Journey
        </h2>

        {/* Tab Buttons */}
        <ul className="flex items-center justify-center gap-10 pb-3 mt-2.5">
          <li
            className={`font-Brandon text-xs font-normal tracking-[0.6px] text-black uppercase transition-all duration-500 hover:text-PrimaryColor-0 cursor-pointer relative z-10 before:absolute before:-bottom-[2px] before:right-0 before:h-full before:w-0 before:border-b-2 before:border-PrimaryColor-0 before:transition-all before:duration-500 before:ease-in-out ${
              activeTab === "traveller" ? "before:left-0 before:w-full" : ""
            }`}
            onClick={() => setActiveTab("traveller")}
          >
            By Traveller
          </li>
          <li
            className={`font-Brandon text-xs font-normal tracking-[0.6px] text-black uppercase transition-all duration-500 hover:text-PrimaryColor-0 cursor-pointer relative z-10 before:absolute before:-bottom-[2px] before:right-0 before:h-full before:w-0 before:border-b-2 before:border-PrimaryColor-0 before:transition-all before:duration-500 before:ease-in-out ${
              activeTab === "popular" ? "before:left-0 before:w-full" : ""
            }`}
            onClick={() => setActiveTab("popular")}
          >
            Most Popular
          </li>
          <li
            className={`font-Brandon text-xs font-normal tracking-[0.6px] text-black uppercase transition-all duration-500 hover:text-PrimaryColor-0 cursor-pointer relative z-10 before:absolute before:-bottom-[2px] before:right-0 before:h-full before:w-0 before:border-b-2 before:border-PrimaryColor-0 before:transition-all before:duration-500 before:ease-in-out ${
              activeTab === "month" ? "before:left-0 before:w-full" : ""
            }`}
            onClick={() => setActiveTab("month")}
          >
            By month
          </li>
          <li
            className={`font-Brandon text-xs font-normal tracking-[0.6px] text-black uppercase transition-all duration-500 hover:text-PrimaryColor-0 cursor-pointer relative z-10 before:absolute before:-bottom-[2px] before:right-0 before:h-full before:w-0 before:border-b-2 before:border-PrimaryColor-0 before:transition-all before:duration-500 before:ease-in-out ${
              activeTab === "spotlight" ? "before:left-0 before:w-full" : ""
            }`}
            onClick={() => setActiveTab("spotlight")}
          >
            In the Spotlight
          </li>
        </ul>

        {/* Tab Content with fade effect */}
        <div className="relative h-full">
          <div
            className={`relative transition-all duration-500 ease-in-out ${
              activeTab === "traveller"
                ? "opacity-100 block"
                : "opacity-0 hidden pointer-events-none"
            }`}
          >
            <div className="flex justify-between gap-[25.5px] pt-[30px]">
              {travelData.map((travel, index) => (
                <TravelCard key={index} {...travel} />
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-500 ease-in-out ${
              activeTab === "popular"
                ? "opacity-100 block"
                : "opacity-0 hidden pointer-events-none"
            }`}
          >
            <div className="">
              {/* Swiper with default bullet pagination */}
              <Swiper {...settings}>
                {popularData.map((popular, index) => (
                  <SwiperSlide key={index}>
                    <div className="pt-[30px]">
                      <PopularCard {...popular} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div
            className={`relative transition-all duration-500 ease-in-out ${
              activeTab === "month"
                ? "opacity-100 block"
                : "opacity-0 hidden pointer-events-none"
            }`}
          >
            <div className="grid grid-cols-6 gap-[25.5px] pt-[30px]">
              {monthData.map((month, index) => (
                <MonthCard key={index} {...month} />
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-500 ease-in-out ${
              activeTab === "spotlight"
                ? "opacity-100 block"
                : "opacity-0 hidden pointer-events-none"
            }`}
          >
            <div className="grid grid-cols-3 gap-[25.5px] pt-[30px]">
              {spotLightData.map((spotLight, index) => (
                <SpotLightCard key={index} {...spotLight} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyFilter;
