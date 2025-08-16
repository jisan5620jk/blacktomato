import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/video-poster.avif"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-center">
        <h2 className="font-Alternate text-white text-[60px] leading-[54px] tracking-[3px] font-normal text-center uppercase">
          Put The World
          <br />
          In Your Hands
        </h2>
        <div className="mt-[60px]">
          <Link
            href={"/"}
            className="font-Brandon text-xs tracking-[1.2px] border border-white rounded px-5 py-2.5 text-white uppercase transition-all duration-500 hover:bg-white hover:text-black"
          >
            Inspire Me
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50">
        <div className="relative pb-12">
          <a
            href="#"
            className="font-Brandon text-white text-sm font-semibold uppercase"
          >
            Scroll
          </a>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-10 overflow-hidden">
            <span className="h-10 w-[1px] bg-white animate-scroll inline-block"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
