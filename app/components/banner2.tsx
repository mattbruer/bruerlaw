import Image from "next/image";

const Banner2 = () => {
  return (
    <div style={style}>
      <Image
        style={{
          objectFit: "contain",
        }}
        src="/about-page-banner-image.jpeg"
        alt="test"
        fill={true}
      />
    </div>
  );
};

export default Banner2;

const style = {
  height: "30vw",
  width: "100vw",
  border: "1px solid red",
};
