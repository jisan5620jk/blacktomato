const OurTripCard = ({
  cardUrl,
  imageUrl,
  duration,
  title,
  description,
  price,
  buttonText,
}) => {
  return (
    <div className="our-trip-box relative z-10 cursor-pointer overflow-hidden group before:absolute before:size-full before:inset-0 before:bg-gradient-to-t before:to-transparent before:from-black/70 before:opacity-50 before:z-20 before:transition-all before:duration-500 hover:before:opacity-100">
      {/* Image */}
      <picture className="relative z-10">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </picture>

      {/* Static content */}
      <h3 className="absolute z-30 right-6 top-6 font-Brandon text-xs font-bold text-white [text-shadow:1px_1px_1px_rgba(0,_0,_0,_.6)] uppercase">
        {duration}
      </h3>

      {/* Hover overlay */}
      <div className="absolute z-30 left-0 bottom-6 text-left text-white px-[25.5px]">
        <h2 className="font-Brandon font-bold tracking-[1.5px] uppercase mb-1.5">
          {title}
        </h2>
        <div className="max-h-0 transition-all duration-500 group-hover:max-h-[200px] overflow-hidden">
          <p className="font-Brandon text-[17px] tracking-[0.85px] leading-5 mb-1.5">
            {description}
          </p>
          <p className="font-Brandon text-sm tracking-[0.85px] italic pb-1">
            {price}
          </p>
        </div>
        <a
          href={cardUrl}
          className="inline-block font-Brandon font-medium text-xs tracking-[1.2px] border border-white rounded px-5 py-2.5 text-white uppercase transition-all duration-500 hover:bg-hoverBg-0 mt-2.5"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default OurTripCard;
