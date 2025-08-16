import Image from "next/image";
import Link from "next/link";

const TravelCard = ({ travelUrl, travelImg, travelTitle }) => {
  return (
    <Link href={travelUrl} className="travel-box group relative w-full h-full">
      <Image
        src={travelImg}
        alt={travelTitle}
        fill
        priority
        className="object-cover"
      />
      <h4 className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-medium">
        {travelTitle}
      </h4>
      <span className="absolute z-10 top-0 left-0 w-full h-full bg-black/20 inline-block transition-all duration-500 opacity-0 group-hover:opacity-100"></span>
    </Link>
  );
};

export default TravelCard;
