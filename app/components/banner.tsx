import React from "react";

const Banner = ({ background, message }: any) => {
  return (
    <div
      id="banner"
      style={{
        background: `url(/${background})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div id="banner-msg">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Banner;
