import Link from "next/link";

const ImageBanner = () => {
  return (
    <section className="bg-[url('/images/kPzw0Kjw-POF-Shallow-Banner-Feeling-Engine.avif')] bg-cover bg-no-repeat bg-center py-[166px]">
      <div className="Container">
        <div className="">
          <picture className="flex items-center justify-center">
            <img src="/images/title-image.avif" alt="Image Banner Title" />
          </picture>
          <h3 className="font-Brandon text-lg font-medium text-white tracking-[1.8px] text-center uppercase mt-3">
            Feel the world with our AI-enhanced tool
          </h3>
          <div className="mt-1 flex justify-center items-center">
            <Link
              href={"/"}
              className="font-Brandon text-xs tracking-[1.2px] border border-white rounded px-5 py-2.5 text-white uppercase transition-all duration-500 hover:bg-hoverBg-0"
            >
              try the feelings engine
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageBanner;
