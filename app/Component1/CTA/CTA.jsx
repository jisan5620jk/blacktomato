import Link from "next/link";

const CTA = () => {
  return (
    <div className="bg-[url('/images/BG-1-1.avif')] bg-cover bg-center bg-no-repeat pt-16 pb-20">
      <div className="Container">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-Alternate text-[60px] text-white tracking-[3px] uppercase mb-1">So, Ready to start?</h2>
          <Link
            href={"/"}
            className="font-Brandon text-xs tracking-[1.2px] font-medium bg-black border border-black rounded px-5 py-2.5 text-white uppercase transition-all duration-500 hover:bg-white hover:text-black"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
