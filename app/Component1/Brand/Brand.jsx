const brandData = [
  { id: 1, img: "/images/kVZ1z4VT-travelleisure.svg", alt: "Brand 1" },
  { id: 2, img: "/images/vsDPx9UG-virtuoso-member.svg", alt: "Brand 2" },
  { id: 3, img: "/images/8rpGkBLO-conde-nast-traveler.svg", alt: "Brand 3" },
  { id: 4, img: "/images/veWhg0JB-iata.svg", alt: "Brand 4" },
  { id: 5, img: "/images/abta-logo.svg", alt: "Brand 5" },
];

const Brand = () => {
  return (
    <section className="bg-DarkBg-0 py-[25.5px]">
      <div className="Container">
        <ul className="flex flex-wrap items-center justify-center">
          {brandData.map((brand) => (
            <li key={brand.id} className="px-[40.8px]">
              <picture>
                <img src={brand.img} alt={brand.alt} />
              </picture>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Brand;
