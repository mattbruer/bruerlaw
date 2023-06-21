import React from "react";
import Image from "next/image";
const Banner = ({
  background,
  message,
  size = "cover",
  height = "30vw",
}: any) => {
  return (
    <>
      {/* <div style={{ height: "250px", objectFit: "contain" }}>
        <Image
          src="/justice-window.png"
          alt="e"
          height={500}
          width={1500}
          style={{ width: "auto" }}
        />
      </div> */}
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
        {message && (
          <div id="banner-msg">
            <p>{message}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Banner;
