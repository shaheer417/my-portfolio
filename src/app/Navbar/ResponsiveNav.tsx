"use client";

import React, { useState } from "react";
import MobileNav from "./MobileNav";
import Navbar from "./NavBar";
const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div>
      <Navbar openNav={showNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsiveNav;
