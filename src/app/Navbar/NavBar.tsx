"use client";

import React, { useEffect, useState } from "react";
// import Image from "next/image"; // Corrected import
import Link from "next/link";
import { navLink } from "../../../constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";
// import { HiBars3BottomRight } from "react-icons/hi2";

// Define Props Type
type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#2C5364]" : "fixed"
      } h-[12vh] z-[10] w-full transition-all duration-200`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        {/* <Image
          src="/images/logo.png"
          alt="LOGO"
          width={170}
          height={170}
          className="ml-[-1.5rem] sm:ml-0"
        /> */}
        {/* Navigation Links */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLink.map((navlink) => (
              <Link key={navlink.id} href={navlink.url}>
                <p className="nav_link">{navlink.label}</p>
              </Link>
            ))}
          </div>
          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
              Hire Me
            </button>
            {/* Burger */}
            {/* <HiBars3BottomRight className="" /> */}
            {/* <HiBars3BottomRight
              style={{ width: "2rem", height: "2rem" }}
              className="cursor-pointer text-white lg:hidden"
            /> */}
            <span className="w-20 h-20 mt-10 pr-5 cursor-pointer text-white lg:hidden ">
              <HiBars3BottomRight size={32} onClick={openNav} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
