"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Link from "next/link";

const NavLinks = () => {
  const path = usePathname().slice(1);
  const links = [
    "home",
    "about",
    "expertise",
    "answers",
    "location",
    "read",
    "share",
  ];

  return (
    <div className="navLinks">
      {links.map((link) => (
        <Link key={link} href={`/${link === "home" ? "" : link}`}>
          <p style={{ color: path === link ? "black" : "grey" }}>
            {link.toUpperCase()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
