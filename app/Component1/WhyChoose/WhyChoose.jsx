const whyChooseData = [
  {
    id: 1,
    boxUrl: "/",
    icon: "/images/UHVNpPRV-award-icon.svg",
    title: "Award-winning planners",
  },
  {
    id: 2,
    boxUrl: "/",
    icon: "/images/ZU5wSQfD-quotes-icon.svg",
    title: "No-obligation quotes",
  },
  {
    id: 3,
    boxUrl: "/",
    icon: "/images/0aIFRleC-guides.svg",
    title: "No planning fees",
  },
  {
    id: 4,
    boxUrl: "/",
    icon: "/images/MSa4gZI8-support.svg",
    title: "24/7 on the ground support",
  },
  {
    id: 5,
    boxUrl: "/",
    icon: "/images/EDd1MoUo-planning-2.svg",
    title: "Expert private guides",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-16">
      <div className="Container">
        <div>
          <h2 className="font-Alternate text-[45px] text-HeadingColor-0 tracking-[2.25px] uppercase text-center">
            Why Black Tomato?
          </h2>
        </div>
        <hr className="w-[60px] bg-borderColor-0 mx-auto mt-[18px] mb-8" />
        <div className="flex justify-between text-center">
          {whyChooseData.map((item) => (
            <div key={item.id} className="">
              <a href={item.boxUrl}>
                <picture>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mx-auto mb-3"
                  />
                </picture>
              </a>
              <a
                href={item.boxUrl}
                className="font-Brandon text-xl text-TextColor-0 tracking-[0.85px] leading-[1.2em] inline-block mx-auto max-w-[80%]"
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default WhyChoose;
