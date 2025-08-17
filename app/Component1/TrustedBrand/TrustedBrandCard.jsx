const TrustedBrandCard = ({ testiDesc, brandLogo }) => {
  return (
    <div className="relative text-center mx-[25.5px]">
      <p className="font-Brandon text-[13px] tracking-[1.5px] text-TextColor-0 font-bold mt-7 mb-3.5">
        {testiDesc}
      </p>

      <div className="flex justify-center items-center">
        <picture>
          <img
            src={brandLogo} // Public folder path or remote URL
            alt="Trusted Brand"
          />
        </picture>
      </div>
    </div>
  );
};

export default TrustedBrandCard;
