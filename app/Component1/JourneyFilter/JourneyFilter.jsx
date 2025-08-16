"use client";

import { useState } from "react";
import TravelCard from "./TravelCard";
import "./journey-filter.css";

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

const JourneyFilter = () => {
  const [activeTab, setActiveTab] = useState("traveller");

  return (
    <section className="py-20">
      <div className="Container">
        {/* Section Title */}
        <h2 className="font-Alternate text-[45px] font-medium text-black tracking-[2.25px] text-center uppercase">
          Start your Journey
        </h2>

        {/* Tab Buttons */}
        <ul className="flex items-center justify-center gap-10 pb-3 mb-8">
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
            <div className="flex justify-between gap-[26px]">
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
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="font-Nunito text-TextColor2-0">
                🌍 Our <span className="font-bold">popular</span> is to be a
                global leader in sustainable technology.
              </p>
            </div>
          </div>

          <div
            className={`relative transition-all duration-500 ease-in-out ${
              activeTab === "month"
                ? "opacity-100 block"
                : "opacity-0 hidden pointer-events-none"
            }`}
          >
            <div className="bg-yellow-50 p-6 rounded-lg">
              <p className="font-Nunito text-TextColor2-0">
                🎯 Our <span className="font-bold">month</span> include
                innovation, customer satisfaction, and long-term partnerships.
              </p>
            </div>
          </div>

          <div
            className={`relative transition-all duration-500 ease-in-out ${
              activeTab === "spotlight"
                ? "opacity-100 block"
                : "opacity-0 hidden pointer-events-none"
            }`}
          >
            <div className="bg-yellow-50 p-6 rounded-lg">
              <p className="font-Nunito text-TextColor2-0">
                🎯 Our <span className="font-bold">spotlight</span> include
                innovation, customer satisfaction, and long-term partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyFilter;
