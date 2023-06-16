import React from "react";

const Banner = ({
  background,
  message,
  size = "cover",
  height = "30vw",
}: any) => {
  return (
    <div
      className="banner"
      style={{
        background: `url(/${background})`,
        backgroundSize: size,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height,
      }}
    >
      <div id="banner-msg">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Banner;
