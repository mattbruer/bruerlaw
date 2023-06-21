"use client";
import { Button, buttonBaseClasses } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="mobile-nav">
      {!navOpen && (
        <button className="toggle-button" onClick={() => setNavOpen(true)}>
          <span className="toggle-button-bar"></span>
          <span className="toggle-button-bar"></span>
          <span className="toggle-button-bar"></span>
        </button>
      )}
      {navOpen && (
        <div onClick={() => setNavOpen(false)} className="modal-overlay"></div>
      )}
      <div className={navOpen ? "sidebar open" : "sidebar"}>
        {navOpen && (
          <div className="mobile-nav-links">
            <Link onClick={() => setNavOpen(false)} href="/">
              HOME
            </Link>
            <Link onClick={() => setNavOpen(false)} href="/about">
              ABOUT
            </Link>
            <Link onClick={() => setNavOpen(false)} href="/expertise">
              EXPERTISE
            </Link>
            <Link onClick={() => setNavOpen(false)} href="/answers">
              ANSWERS
            </Link>
            <Link onClick={() => setNavOpen(false)} href="/location">
              LOCATION
            </Link>
            <Link onClick={() => setNavOpen(false)} href="/read">
              READ
            </Link>
            <Link onClick={() => setNavOpen(false)} href="/share">
              SHARE
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
