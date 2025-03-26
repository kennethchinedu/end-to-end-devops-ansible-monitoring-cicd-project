import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/Buttons";
import heroBg from "../../public/imgs/heroBg.png";
import heroItemImg from "../../public/imgs/heroItemImg.png";

const HeroSection = () => {
  return (
    <section className="w-full mb-14">
      <div className="flex relative">
        <div className="container flex flex-col items-center gap-[40px] relative mx-auto pt-40 px-5 md:px-10">
          <div className="flex flex-col md:items-center gap-6 z-10 w-full">
            <div className="flex flex-col gap-2 w-full items-center max-w-[1000px]">
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-normal md:text-center md:leading-[60px]">
                Find Your Answers with OnlineAngels - Your Spiritual Guidance,
                Whenever You Need It
              </h1>
              <p className="text-xl font-[350] text-white md:text-center">
                Immerse yourself in the world of OnlineAngels, where you&apos;ll
                find spiritual guidance around the clock. Let experienced Angels
                advise you on dream interpretation, tarot, astrology, and much
                more
              </p>

              {/* Coming soon!!! */}
            </div>
            <Button
              text="Coming soon!!!"
              secondaryCta
              type="submit"
              className="w-fit"
            />
          </div>
          <Image
            src={heroItemImg}
            alt="heroBg"
            width={727.49}
            height={400}
            className="z-10"
          />
        </div>
        <Image src={heroBg} alt="heroBg" fill className=" h-screen max-h-[760px] md:max-h-[727px] "/>
      </div>
    </section>
  );
};

export default HeroSection;
