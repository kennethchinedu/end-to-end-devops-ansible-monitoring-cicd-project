import React from "react";
import Image from "next/image";
import experieceImg from "../../public/imgs/experiencBg.png";
import Button from "../atoms/Buttons";

const ExperienceSection = () => {
  return (
    <section className="relative w-full">
      <div className="container flex flex-col md:items-center gap-10 w-full mx-auto py-20 px-5 md:px-10">
        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-4 md:items-end md:text-end">
            <span className="w-fit py-[10px] px-[43.5px] text-xl text-purple-200 leading-[30px] font-[350px] border border-purple-200 rounded-[4px]">
              Experience
            </span>
            <div className="flex flex-col gap-2 max-w-[793px]">
              <h2 className="text-4xl font-bold leading-[54px] text-black">
                Your Space of Wisdom - Compassionate and Confidential
              </h2>
              <p className="text-xl font-normal text-gray-100">
                Start your chat and immerse yourself in a spiritual experience.
                Your OnlineAngels are ready to listen, help you find answers,
                and support you on your path.
              </p>
            </div>
          </div>
          <div className="flex w-full items-center">
            <Image
              src={experieceImg}
              alt="heroBg"
              width={1200}
              height={528}
              className="w-full !h-auto"
            />
          </div>
        </div>
        <Button
          text="Start Chat Now"
          primaryCta
          type="submit"
          className="w-fit"
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
