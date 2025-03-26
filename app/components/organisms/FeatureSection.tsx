import React from "react";
import Image from "next/image";
import feature1 from "../../public/imgs/feature1.png";
import feature2 from "../../public/imgs/feature2.png";
import feature3 from "../../public/imgs/feature3.png";
import Blob2 from "../../public/imgs/Blob2.png";
import Blob3 from "../../public/imgs/Blob3.png";

const FeatureSection = () => {
  return (
    <section className="pt-[90px] pb-20">
      <div className="container mx-auto px-5 md:px-10">
        <div className="relative flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <span className="w-fit py-[10px] px-[43.5px] text-xl text-purple-200 leading-[30px] font-[350px] border border-purple-200 rounded-[4px]">
              FEATURES
            </span>
            <div className="flex flex-col gap-2 max-w-[793px]">
              <h2 className="text-4xl font-bold leading-[54px] text-black">
                Your Spiritual Angels - Ready to Help
              </h2>
              <p className="text-xl font-normal text-gray-100">
                Our Angels offer you a wide range of esoteric services - from
                tarot to animal communication. Enjoy deep conversations and
                discover spiritual wisdom.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 gap-10 py-[34px] justify-items-center items-center md:grid-cols-2 max-w-[996px]">
              <div className="flex w-full order-2 md:order-1">
                <Image
                  src={feature1}
                  alt="heroBg"
                  width={598}
                  height={318}
                  className="z-10 !h-auto"
                />
              </div>
              <div className="flex flex-col gap-4 md:max-w-72 order-1 md:order-2">
                <h3 className="text-2xl font-bold">Tarot Reading</h3>
                <p className="text-base font-normal text-black">
                  Discover insights and guidance through the ancient wisdom of
                  the tarot. Unveil what the cards reveal about your life&apos;s
                  journey.
                </p>
              </div>
            </div>
            <hr className="w-full max-w-[996px] mx-auto h-[2px] bg-purple-300" />
            <div className="grid grid-cols-1 gap-10 py-[34px] justify-items-center items-center md:grid-cols-2 max-w-[996px]">
              <div className="flex flex-col gap-4 md:max-w-72">
                <h3 className="text-2xl font-bold">Astrology</h3>
                <p className="text-base font-normal text-black">
                  Explore the cosmic influences shaping your destiny. Let the
                  stars and planets illuminate your path.
                </p>
              </div>
              <div className="flex w-full">
                <Image
                  src={feature2}
                  alt="heroBg"
                  width={598}
                  height={318}
                  className="z-10"
                />
              </div>
            </div>
            <hr className="w-full max-w-[996px] mx-auto h-[2px] bg-purple-300" />
            <div className="grid grid-cols-1 gap-10 py-[34px] justify-items-center items-center md:grid-cols-2 max-w-[996px]">
              <div className="flex w-full order-2 md:order-1">
                <Image
                  src={feature3}
                  alt="heroBg"
                  width={598}
                  height={318}
                  className="z-10 !h-auto"
                />
              </div>
              <div className="flex flex-col gap-4 md:max-w-72 order-1 md:order-2">
                <h3 className="text-2xl font-bold">Pendulum Divination</h3>
                <p className="text-base font-normal text-black">
                  Seek clear answers to your pressing questions. Allow the
                  pendulum to guide you with universal wisdom.
                </p>
              </div>
            </div>
          </div>
          <Image
            src={Blob2}
            alt="heroBg"
            width={300}
            height={300}
            className="absolute right-0 top-0 z-10"
          />
          <Image
            src={Blob3}
            alt="heroBg"
            width={400}
            height={300}
            className="absolute left-0 bottom-0 z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
