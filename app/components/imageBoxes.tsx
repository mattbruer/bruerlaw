import ImageBox from "./imageBox";

const ImageBoxes = () => {
  return (
    <div className="imageBoxes">
      <ImageBox
        src={"/church.jpeg"}
        alt="The Historic English Church Building"
        text="The Historic English Church Building"
      />
      <ImageBox
        src={"/welcome-inside-bruerlaw.jpeg"}
        alt="Welcome Inside The Bruer Law Firm"
        text="Welcome Inside The Bruer Law Firm"
      />
      <ImageBox
        src={"/inside.jpeg"}
        alt="Inside the Bruer Law Firm"
        text="Inside the Bruer Law Firm"
      />
      <ImageBox
        src={"/bruer-lawfirm-conference-room.jpeg"}
        alt="The Bruer Law Firm Conference Room"
        text="The Bruer Law Firm Conference Room"
      />
    </div>
  );
};

export default ImageBoxes;
