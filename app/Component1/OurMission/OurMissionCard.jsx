import Link from "next/link";

const OurMissionCard = ({
  missionTitle,
  missionSubTitle,
  missionDesc, // এখন এটা array হতে পারে
  missionUrl,
  misionBtn,
  missionReverse,
  missionImg,
}) => {
  return (
    <div className="relative">
      {/* Content Section */}
      <div className="Container absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={`mission-content ${missionReverse ? "ml-0" : "ml-auto"}`}
        >
          <h2 className="font-Alternate text-[45px] text-HeadingColor-0 tracking-[2.25px] uppercase">
            {missionTitle}
          </h2>

          {missionSubTitle && (
            <h3 className="font-Brandon text-black tracking-[1.6px] uppercase -mt-2.5">
              {missionSubTitle}
            </h3>
          )}

          <div className={` ${missionSubTitle ? "mt-14" : "mt-8"} mb-[62px]`}>
            {Array.isArray(missionDesc) ? (
              missionDesc.map((desc, idx) => (
                <p
                  key={idx}
                  className="font-Brandon text-[17px] text-TextColor-0 tracking-[0.85px] mb-4"
                >
                  {desc}
                </p>
              ))
            ) : (
              <p className="font-Brandon text-[17px] text-TextColor-0 tracking-[0.85px]">
                {missionDesc}
              </p>
            )}
          </div>

          <Link
            href={missionUrl}
            className="font-Brandon text-xs tracking-[1.2px] font-medium bg-black border border-black rounded px-5 py-2.5 text-white uppercase transition-all duration-500 hover:bg-white hover:text-black"
          >
            {misionBtn}
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div
        className={`flex ${
          missionReverse
            ? "flex-row-reverse pl-[25.5px]"
            : "flex-row pr-[25.5px]"
        }`}
      >
        <picture className="basis-1/2">
          <img
            src={missionImg}
            alt={missionTitle}
            className="mission-img object-cover"
          />
        </picture>
      </div>
    </div>
  );
};

export default OurMissionCard;
