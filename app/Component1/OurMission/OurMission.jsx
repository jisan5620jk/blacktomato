import OurMissionCard from "./OurMissionCard";
import "./our-mission.css";

const missionData = [
  {
    missionTitle: "What We Do and Why",
    missionDesc:
      "Since our founding in 2005, Black Tomato has always been about crafting remarkable, tailor made trips for clients around the world. Tom and James – our co-founders – know this better than anyone. You can meet them in our new video.",
    missionUrl: "/",
    misionBtn: "Watch the Film",
    missionImg: "/images/Tom-Marchant-Values-Film-scaled-1.avif",
    missionReverse: true,
  },
  {
    missionTitle: "Pursuit of Feeling",
    missionDesc: [
      "Travel has always been about more than just going ‘somewhere else’. For us, travel – breathless and beautiful – is about feeling somewhere else; a kind of emotional high that stays with you for the rest of your life.",
      "The Pursuit of Feeling – our brand-new collection of trips, features, and luxury travel experiences – bottles this soulful, sensual desire, taking us back to one of our founding philosophies:",
      "It’s not where you want to go; it’s how you want to feel.",
    ],
    missionUrl: "/",
    misionBtn: "Find Out More",
    missionImg: "/images/Left-right-Hor.avif",
  },
  {
    missionTitle: "Guide to Luxury Travel",
    missionSubTitle: "The luxury travel experts",
    missionDesc: [
      "Luxury holidays are personal. They mean something different for each and every one of us. For some, luxury is hiking in peaceful solitude through a remote corner of the desert, while for others it’s the indulgence of sipping cocktails aboard a private yacht, sailing gently through the Mediterranean. Whatever floats your boat, so to speak.",
      "Our team of luxury travel advisors are connoisseurs of luxury, curating unparalleled experiences, tailor made tours and bespoke adventures. Whether you seek the opulence of a secluded villa in the Tuscan hills or the thrill of an exclusive safari in the heart of Africa, we’ll craft a journey that exceeds your expectations.",
    ],
    missionUrl: "/",
    misionBtn: "Continue Reading",
    missionImg: "/images/Romania-scaled.avif",
    missionReverse: true,
  },
];

const OurMission = () => {
  return (
    <section>
      <div>
        {missionData.map((mission, index) => (
          <OurMissionCard key={index} {...mission} />
        ))}
      </div>
    </section>
  );
};

export default OurMission;
