"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import OurTripCard from "./OurTripCard";
import "./our-trip.css";

const ourTripData = [
  {
    imageUrl: "/images/Selous-game-drive.avif",
    duration: "8 NIGHTS",
    title: "Selous to Zanzibar: Escape the Crowds in Tanzania",
    description:
      "Vast and fascinating landscape? Tick. A generous helping of the Big Five? Absolutely.",
    price: "From £7,500 per person excl. flights",
    buttonText: "Explore Trip",
  },
  {
    imageUrl: "/images/Bordeaux-in-France.avif",
    duration: "10 NIGHTS",
    title: "Highlights of France: Classic Charm & Gourmet Indulgence",
    description: "This 10 night trip will take you on a magical tour.",
    price: "From £10,000 per person excl. flights",
    buttonText: "Explore Trip",
  },
  {
    imageUrl: "/images/Highlights-of-Italy-scaled.avif",
    duration: "9 NIGHTS",
    title: "Highlights of Italy: A Luxury Holiday in Rome, Florence & Venice",
    description:
      "This nine-night holiday to Rome, Florence and Venice will see you.",
    price: "From £8,000 per person excl. flights",
    buttonText: "Explore Trip",
  },
  {
    imageUrl: "/images/Family-island-hopping-scaled.avif",
    duration: "11 NIGHTS",
    title: "Athens, Mykonos and Crete: A Luxury Family Discovery in Greece",
    description:
      "Ancient ruins are the backdrop to venturesome days and peaceful evenings.",
    price: "From £8,500 per person excl. flights",
    buttonText: "Explore Trip",
  },
  {
    imageUrl: "/images/Northern-Lights-Iceland-scaled.avif",
    duration: "5 NIGHTS",
    title: "Iceland: A Luxury Trip Chasing the Northern Lights",
    description:
      "Our expert guides are some of Iceland's best Borealis hunters. Come winter...",
    price: "From £8,400 per person excl. flights",
    buttonText: "Explore Trip",
  },
  {
    imageUrl: "/images/Ninja-martial-arts-in-Tokyo.avif",
    duration: "10 NIGHTS",
    title: "Tokyo & Kyoto: A Japan Family Holiday",
    description:
      "The ultimate family tour of Japan! Konnichiwa... Here at Black Tomato our...",
    price: "From £13,750 per person excl. flights",
    buttonText: "Explore Trip",
  },
  {
    imageUrl: "/images/rLPwBc1M-Egypt.avif",
    duration: "6 NIGHTS",
    title: "Ultimate Egypt: Culture on the Nile",
    description: "A new country to uncover is always exciting - but when...",
    price: "From £6,000 per person excl. flights",
    buttonText: "Explore Trip",
  },
  {
    imageUrl: "/images/Atlas-mountains-morocco-landscape.avif",
    duration: "7 NIGHTS",
    title: "A Journey into Morocco",
    description: "At the gateway to Africa, Morocco bears all the marks of...",
    price: "From £6,000 per person excl. flights",
    buttonText: "Explore Trip",
  },
  {
    imageUrl: "/images/Borana-Lodge-Location-Setting-Pride-Rock.avif",
    duration: "8 NIGHTS",
    title: "Kenya: The Ultimate Family Safari",
    description:
      "The first safari is one of those long anticipated moments in...",
    price: "From £8,000 per person excl. flights",
    buttonText: "Explore Trip",
  },
  {
    imageUrl: "/images/3OxkpiGQ-FeeKbyBI-freepik__upload__60443-resized.jpg",
    duration: "Custom trips",
    title: "Create Your Own Itinerary",
    description:
      "Our Travel Experts will help you create a completely bespoke itinerary. Just tell us what you want. We'll make it happen.",
    buttonText: "Create Trip",
  },
];

const OurTrip = () => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;

    const onMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX - el.offsetLeft;
      scrollLeft.current = el.scrollLeft;
      el.classList.add("grabbing");
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      const x = e.pageX - el.offsetLeft;
      const walk = x - startX.current;
      el.scrollLeft = scrollLeft.current - walk;
    };

    const stopDragging = () => {
      isDragging.current = false;
      el.classList.remove("grabbing");
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseup", stopDragging);
    el.addEventListener("mouseleave", stopDragging);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseup", stopDragging);
      el.removeEventListener("mouseleave", stopDragging);
    };
  }, []);

  return (
    <section
      ref={scrollRef}
      className="our-trip bg-[url('/images/Itineraries-Home-scaled.avif')] bg-cover bg-no-repeat bg-center py-[60px] overflow-x-auto overflow-y-hidden scrollbar-none"
    >
      <div className="Container">
        <div className="overflow-visible">
          <div className="flex w-max gap-[25.5px]">
            <div className="pr-[25.5px]">
              <h2 className="font-medium font-Alternate text-[45px] text-white tracking-[2.25px] uppercase">
                Explore our trips
              </h2>
              <p className="font-Brandon text-[17px] font-medium italic text-white tracking-[0.85px] w-full max-w-[250px]">
                Remarkable experiences to inspire the mind
              </p>
            </div>
            <div className="flex-1">
              <div className="flex gap-[25.5px]">
                {ourTripData.map((ourTrip, index) => (
                  <OurTripCard key={index} {...ourTrip} />
                ))}
                <div>
                  <Link
                    href={"/"}
                    className="font-Brandon text-xs tracking-[1.2px] border border-white rounded px-5 py-2.5 text-white uppercase transition-all duration-500 hover:bg-[#444]"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTrip;
