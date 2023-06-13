import React from "react";
import Link from "next/link";

const NavLinks = () => {
  return (
    <div className="navLinks">
      <Link href="/about">ABOUT</Link>
      <Link href="/expertise">EXPERTISE</Link>
      <Link href="/answers">ANSWERS</Link>
      <Link href="/location">LOCATION</Link>
      <Link href="/read">READ</Link>
      <Link href="/share">SHARE</Link>
    </div>
  );
};

export default NavLinks;
