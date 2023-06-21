import Image from "next/image";

type BannerProps = {
  background: string;
  message: string;
};

const Banner = ({ background, message }: BannerProps) => {
  return (
    <div className="banner2">
      <Image
        style={{
          objectFit: "cover",
        }}
        src={`/${background}`}
        alt="test"
        fill={true}
      />
      <div id="banner-msg2">{message}</div>
    </div>
  );
};

export default Banner;
