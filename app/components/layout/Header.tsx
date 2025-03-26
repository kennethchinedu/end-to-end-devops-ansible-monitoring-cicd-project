"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import Button from "../atoms/Buttons";
import logo from "../../public/icons/logo.svg";
import { AnimatePresence, motion } from "framer-motion";
import { BiMenu, BiX } from "react-icons/bi";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed bg-purple-100/90 mx-auto top-0 inset-x-0 py-5 flex items-center justify-between gap-10 px-5 md:px-10 z-50">
      <div className="relative container mx-auto flex items-center justify-between gap-10 md:gap-64 w-full rounded-full">
        <Image src={logo} alt="logo" className="w-auto h-10" />
        <nav className="hidden md:flex w-full">
          <ul className="flex item-center gap-3 md:gap-4">
            {navLinks.map(({ id, href, name }) => (
              <li
                key={id}
                className="pb-[2px] border-b-2 border-transparent hover:border-white transition duration-300"
              >
                <Link
                  href={href}
                  className="text-white"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* <Button text="Sign up" secondaryCta /> */}

        <BiMenu
          className="text-white md:hidden !w-7 !h-7 cursor-pointer"
          onClick={toggleMobileMenu}
        />

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed bg-white top-0 right-0 z-20 w-64 h-full bg-white-10 shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Close icon */}
              <div className="flex justify-end p-4 mr-5">
                <BiX
                  className="w-10 h-10 cursor-pointer rounded-md text-black-100 hover:text-white hover:bg-gray-50 p-1"
                  onClick={toggleMobileMenu}
                />
              </div>
              {/* NavLinks */}
              <ul className="flex flex-col w-full">
                {navLinks.map(({ id, name, href }) => (
                  <li key={id} className="w-full">
                    <a
                      href={href}
                      className="text-black hover:text-white px-4 hover:bg-purple-100 p-4 w-full inline-block"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
              {/* <Button
                text="Sign up"
                className="bg-orange-500 hover:bg-orange-500/80 mt-10 mx-4 hover:shadow-md text-white-10 border-none text-xl font-normal py-[9px] px-8"
              /> */}
            </motion.div>
          )}
        </AnimatePresence>
        {/* Background overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black-100 opacity-50 z-10"
            style={{ transition: "opacity 0.3s ease-in-out" }}
            onClick={toggleMobileMenu}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;

const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About us",
    href: "",
  },
];
