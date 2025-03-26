import React from "react";
import Image from "next/image";
import ctaSectionBgImg from "../../public/imgs/CTA.png";

const CtaSection = () => {
  return (
    <section className="relative w-full">
      <div className="container flex flex-col items-center gap-10 w-full mx-auto py-20 px-5 md:px-10">
        <Image src={ctaSectionBgImg} alt="ctaSectionBgImg" fill objectFit="cover" objectPosition="center"/>
        <div className="flex flex-col gap-4 w-full md:items-center md:text-center mx-auto z-10 max-w-[901px]">
          <h2 className="text-[32px] font-bold text-white">
            OnlineAngel - Here for You When You Need Answers
          </h2>

          <p className="text-xl font-normal text-white">
            Our mission is to provide spiritual support to people during times
            of uncertainty and change. OnlineAngel connects you with
            compassionate guides who share their wisdom and experiences to
            inspire and uplift you.
          </p>
          <p className="text-xl font-semibold text-white pt-10">Coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
