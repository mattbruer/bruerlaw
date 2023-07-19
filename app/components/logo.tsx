import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        id="logo"
        width="350"
        height="75"
        src="/logo.png"
        alt="Bruer Law Logo"
        style={{ height: "auto" }}
      />
    </Link>
  );
};

export default Logo;
