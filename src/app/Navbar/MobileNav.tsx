import React from "react";
import { navLink } from "../../../constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
        onClick={closeNav} // Close when clicking outside
      ></div>

      {/* Nav Links */}
      <div
        className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[10000]`}
      >
        {/* Close Button - Position it absolutely relative to this container */}
        <span className="absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 text-white text-lg sm:text-2xl z-50 cursor-pointer">
          <CgClose onClick={closeNav} />
        </span>

        {navLink.map((navlink) => (
          <Link key={navlink.id} href={navlink.url}>
            <p className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">
              {navlink.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
