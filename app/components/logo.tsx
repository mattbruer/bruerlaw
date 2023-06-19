import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        id="logo"
        width={350}
        height={75}
        src="/logo.png"
        alt="Bruer Law Logo"
        style={{ width: "350px", height: "auto" }}
      />
    </Link>
  );
};

export default Logo;
