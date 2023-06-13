import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        id="logo"
        width={350}
        height={75}
        src="/logo.png"
        alt="Bruer Law Logo"
      />
    </div>
  );
};

export default Logo;
