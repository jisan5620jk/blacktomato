import Image from "next/image";
import Link from "next/link";

const MonthCard = ({ monthUrl, monthImg, monthTitle }) => {
  return (
    <Link
      href={monthUrl}
      className="month-box group relative w-full h-full inline-block"
    >
      <Image
        src={monthImg}
        alt={monthTitle}
        loading="lazy"
        fill
        className="object-cover"
      />
      <h4 className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-Brandon text-white font-semibold tracking-[1.6px] uppercase">
        {monthTitle}
      </h4>
      <span className="absolute z-10 top-0 left-0 w-full h-full bg-black/40 inline-block transition-all duration-500 opacity-60 group-hover:opacity-100"></span>
    </Link>
  );
};

export default MonthCard;
