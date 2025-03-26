import React from "react";
import Image from "next/image";
import person1 from "../../public/imgs/person1.png";
import person2 from "../../public/imgs/person2.png";
import person3 from "../../public/imgs/person3.png";
import person4 from "../../public/imgs/person4.png";
import flag1 from "../../public/icons/flag1.svg";
import flag2 from "../../public/icons/flag2.svg";
import flag3 from "../../public/icons/flag3.svg";
import flag4 from "../../public/icons/flag4.svg";
import msgIcon2 from "../../public/icons/msgIcon2.svg";
import angleRight from "../../public/icons/angle-right.svg";
import Button from "../atoms/Buttons";

const AngelsSection = () => {
  const people = [
    {
      name: "Luna Sternenschein",
      age: 40,
      status: "Online",
      flag: flag1,
      profileImage: person1,
      icon: msgIcon2,
    },
    {
      name: "Rafael Himmelsblick",
      age: 35,
      status: "Online",
      flag: flag2,
      profileImage: person2,
      icon: msgIcon2,
    },
    {
      name: "Aurora Mondschein",
      age: 48,
      status: "Online",
      flag: flag3,
      profileImage: person3,
      icon: msgIcon2,
    },
    {
      name: "Elara Sternenklang",
      age: 32,
      status: "Online",
      flag: flag4,
      profileImage: person4,
      icon: msgIcon2,
    },
  ];

  return (
    <section className="bg-purple-100 w-full py-20">
      <div className="container mx-auto px-5 md:px-10">
        <div className="flex flex-col items-center gap-16">
          <div className="flex flex-col gap-6 w-full md:items-center md:text-center max-w-[858px]">
            <span className="w-fit bg-white py-[10px] px-[43.5px] text-xl text-purple-200 leading-[30px] font-[350px] border border-purple-200 rounded-[4px]">
              ANGELS
            </span>
            <div className="flex flex-col gap-2">
              <h2 className="text-white font-semibold text-4xl">
                Find Your Angel - Choose from a Variety of Guides
              </h2>
              <p className="text-xl font-light text-gray-300">
                Select your personal Angel and experience a conversation full of
                intuition and deep understanding. Each Angel brings unique life
                experiences and spiritual knowledge
              </p>
            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            {people.map((person, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center mb-6"
              >
                <Image
                  src={person.profileImage}
                  alt={person.name}
                  width={265}
                  height={308}
                />
                <div className="absolute bottom-7 py-[10px] px-[13px] bg-white/80 rounded-[8px] w-full flex items-center gap-[2px]">
                  <div className="flex flex-col w-full">
                    <p className="text-purple-400 text-base font-medium">
                      {person.name}
                    </p>
                    <div className="flex items-center gap-2">
                      <Image
                        src={person.flag}
                        alt="nationflag"
                        width={21.33}
                        height={16}
                      />
                      <p className="text-xs font-light text-black leading-[18px]">
                        {person.age} years
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <div
                        className={`flex w-[10px] h-[10px] rounded-full ${
                          person.status === "Online"
                            ? "bg-green-400"
                            : "bg-gray-400"
                        }`}
                      ></div>
                      <p className="text-[10px] font-normal text-black leading-[18px]">
                        {person.status}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center bg-purple-400 rounded-full w-[40px] h-[34px]">
                    <Image
                      src={person.icon}
                      alt="message icon"
                      width={20}
                      height={15}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button
            text="See more angels"
            tertiaryCta
            type="submit"
            className="w-fit"
            rightIcon={angleRight}
          />
        </div>
      </div>
    </section>
  );
};

export default AngelsSection;
