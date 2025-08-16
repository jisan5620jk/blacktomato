const TestimonialCard = ({
  testiQuote,
  testiUser,
  userFrom,
  testiDesc,
}) => {
  return (
    <div className="relative text-center mx-[25.5px]">
      <div className="flex items-center justify-center text-lg text-SecondaryColor-0">{testiQuote}</div>
      <p className="font-Brandon text-[13px] tracking-[1.5px] text-TextColor-0 font-bold mt-7 mb-3.5">
        {testiDesc}
      </p>
      <h5 className="font-Brandon text-[13px] tracking-[1.5px] text-SecondaryColor-0 font-bold italic">
        <span>{testiUser}</span>, <span>{userFrom}</span>
      </h5>
    </div>
  );
};

export default TestimonialCard;
