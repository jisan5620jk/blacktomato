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
      <div className="relative z-10">
        <h2 className="font-Alternate text-white text-[60px] leading-[54px] font-normal text-center uppercase">
          Put The World
          <br />
          In Your Hands
        </h2>
      </div>
    </section>
  );
};

export default Banner;
