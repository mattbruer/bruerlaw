"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const NavLinks = () => {
  const path = usePathname().slice(1);
  const [curr, setCurr] = useState(0);
  const [fixNav, setFixNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      currentPosition > 100 ? setFixNav(true) : setFixNav(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div className={fixNav ? "navLinks fixedNav" : "navLinks"}>
      {links.map((link) => (
        <Link key={link} href={`/${link === "home" ? "" : link}`}>
          <p
            style={{
              color:
                path === link || (path === "" && link === "home")
                  ? "black"
                  : "grey",
            }}
          >
            {link.toUpperCase()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
