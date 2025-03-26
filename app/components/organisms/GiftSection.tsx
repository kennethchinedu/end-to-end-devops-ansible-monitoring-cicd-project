import React from "react";
import Image from "next/image";
import gift1 from "../../public/imgs/gift1.png";
import gift2 from "../../public/imgs/gift2.png";
import gift3 from "../../public/imgs/gift3.png";
import Button from "../atoms/Buttons";

const GiftSection = () => {
  return (
    <section className="relative w-full">
      <div className="container flex flex-col md:items-center gap-10 w-full mx-auto py-20 px-5 md:px-10">
        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-6 md:items-center md:text-center">
            <span className="w-fit py-[10px] px-[43.5px] text-xl text-purple-200 leading-[30px] font-[350px] border border-purple-200 rounded-[4px]">
              VIRTUAL GIFTS
            </span>
            <div className="flex flex-col gap-2 max-w-[920px]">
              <h2 className="text-4xl font-bold leading-[54px] text-black">
                Show Your Appreciation - Virtual Gifts for Your Angels
              </h2>
              <p className="text-xl font-normal text-gray-100">
                Express your gratitude with a gift. From roses to healing
                crystals to cosmic star fragments - your appreciation will bring
                a smile to your Angel.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-start lg:justify-center gap-4 w-full overflow-x-scroll py-4">
          {gifts.map((gift) => (
            <div
              key={gift.id}
              className="flex flex-col gap-4 p-4 rounded-2xl shadow-md"
            >
              <Image
                src={gift.image}
                alt={`${gift.name} Image`}
                width={355}
                height={211}
                className="w-full !h-auto"
              />
              <div className="flex gap-10 items-center justify-between">
                <p className="text-xl font-normal leading-[30px]">
                  {gift.name}
                </p>
                <Button
                  text="Send gift"
                  primaryCta
                  type="submit"
                  className="w-fit py-2 px-[38.5px] text-nowrap"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftSection;

const gifts = [
  {
    id: 1,
    name: "Rose",
    image: gift1, // Replace `gift1` with the imported image reference
  },
  {
    id: 2,
    name: "Tulip",
    image: gift2, // Add more images as needed
  },
  {
    id: 3,
    name: "Orchid",
    image: gift3,
  },
];
