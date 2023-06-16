import PracticeAreaButton from "./practiceAreaButton";

const PracticeAreas = ({ list, heading }: any) => {
  return (
    <div id="practice-area">
      <h2>{heading}</h2>
      <div className="practice-area-button-container">
        {list.map((area: string) => (
          <PracticeAreaButton key={area} practiceArea={area} />
        ))}
      </div>
    </div>
  );
};

export default PracticeAreas;
