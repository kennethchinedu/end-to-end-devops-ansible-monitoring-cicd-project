import React from "react";
import Image from "next/image";
import logo from "../../public/icons/logo.svg";
import Link from "next/link";
import facebook from "../../public/icons/facebook.svg";
import instagram from "../../public/icons/instagram.svg";
import linkedIn from "../../public/icons/linkedIn.svg";
import youtube from "../../public/icons/youtube.svg";
import twitter from "../../public/icons/twitter.svg";
import phoneicon from "../../public/icons/phoneicon.svg";
import mapicon from "../../public/icons/mapicon.svg";
import msgicon from "../../public/icons/msgicon.svg";
import paypal from "../../public/icons/paypal.svg";
import visa from "../../public/icons/visa.svg";
import mastercard from "../../public/icons/mastercard.svg";
import express from "../../public/icons/express.svg";

const Footer = () => {
  const socialMedial = [
    {
      img: facebook,
      altText: "facebookLink",
    },
    {
      img: linkedIn,
      altText: "linkedInLink",
    },
    {
      img: twitter,
      altText: "twitterLink",
    },
    {
      img: instagram,
      altText: "instagramLink",
    },
    {
      img: youtube,
      altText: "youtubeLink",
    },
  ];
  const contactData = [
    {
      icon: phoneicon,
      title: "Phone",
      text: "+352 691 966 600",
      altText: "phoneicon",
    },
    {
      icon: msgicon,
      title: "Email",
      text: "daniel.meyer@vqualis.com",
      altText: "messageicon",
    },
    {
      icon: mapicon,
      title: "Address",
      text: "VQualis Limited, Grand Industrial Building, Office 7/F, 159-165 Wo Yi Hop Road, Kwai Chung, Hongkong.",
      altText: "locationicon",
    },
  ];
  const paymentGateway = [
    {
      img: paypal,
      altText: "paypal",
    },
    {
      img: visa,
      altText: "visa",
    },
    {
      img: mastercard,
      altText: "mastercard",
    },
    {
      img: express,
      altText: "express",
    },
  ];
  return (
    <footer className="w-full bg-purple-200 pt-10 pb-10">
      <div className="container relative flex flex-col items-center gap-10 w-full mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 w-full mb-5">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Image src={logo} alt="logo" className="w-[140px] h-[57px]" />
              <p className="text-sm font-normal text-white leading-[24px]">
                Immerse yourself in the world of OnlineAngels, where you&apos;ll find
                spiritual guidance around the clock. Let experienced Angels
                advise you on dream interpretation, tarot, astrology, and much
                more.
              </p>
            </div>
            <div className="flex flex-col gap-[32px]">
              <p className="text-xl font-semibold text-white">
                Get in touch- Coming soon
              </p>
              <div className="flex gap-3">
                {socialMedial.map(({ img, altText }, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center rounded-sm border border-[#A7A7A7] bg-[#313131] size-[38px]"
                  >
                    <Image src={img} alt={altText} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-2xl font-semibold leading-8 text-white">
              Contact Info
            </h4>
            {contactData.map(({ title, text, icon, altText }, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src={icon}
                      alt={altText}
                      className="w-[13.5px] h-auto"
                    />
                    <span className="text-sm font-light text-white">
                      {title}
                    </span>
                  </div>
                  <p className="text-sm font-light text-white">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h4 className="text-2xl font-semibold leading-8 text-white">
                Secure Payment
              </h4>
              <p className="text-base font-normal text-white !leading-[24px]">
                With our secure payment options, you can choose from a variety
                of methods for your convenience. Pay easily using Visa, PayPal,
                or CoinPayments for cryptocurrency transactions. Enjoy modern,
                secure transactions with maximum flexibility and reliability.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-[14px]">
              {paymentGateway.map(({ img, altText }, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={altText}
                  className="w-[75.29px] h-auto"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:items-center w-full justify-between mt-[9px]">
          <span className="text-sm font-normal text-white">
            Onlineangel ©{new Date().getFullYear()} powered by VQualis, Inc. All rights reserved.
          </span>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="" className="text-sm font-normal text-white uppercase">
            Terms
            </Link>
            <ul className="list-disc pl-5 text-sm font-normal text-white uppercase">
              <li>
                <Link href="">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
