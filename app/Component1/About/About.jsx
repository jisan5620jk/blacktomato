import Link from "next/link";

const About = () => {
  return (
    <section className="bg-[url('/images/about-bg.avif')] bg-cover bg-center bg-no-repeat pt-[76px] pb-12" id="about">
      <div className="Container">
        <div className="text-center">
          <h3 className="font-Brandon text-lg font-bold text-black uppercase tracking-[1.8px]">
            The luxury travel experts
          </h3>
          <p className="max-w-[875px] w-full mx-auto font-Brandon text-[17px] tracking-[0.85px] text-TextColor-0 mt-4">
            The world is vast, full of wonders. But information engulfs us. See
            this, do that, don’t miss this. It seems the more choice there is,
            the more overwhelmed we feel. What’s more, you’re never asked how
            you want to feel. In fact, you’re rarely asked anything. That’s not
            us. We are people. People who value human connection and thrive on
            connecting you to our vast world. A company of people renowned for
            planning remarkable and luxurious travel experiences.
          </p>
          <p className="font-Brandon text-[17px] tracking-[0.85px] text-TextColor-0 mt-4">
            So let’s begin. Let’s do something remarkable.
          </p>
          <div className="mt-[24px]">
            <Link
              href={"/"}
              className="font-Brandon text-xs tracking-[1.2px] bg-black border border-black rounded px-5 py-2.5 text-white uppercase transition-all duration-500 hover:bg-white hover:text-black"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
