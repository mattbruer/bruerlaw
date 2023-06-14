import PracticeAreaButton from "./practiceAreaButton";

const practiceAreaList = [
  "CAR ACCIDENTS",
  "DANGEROUS PROPERTY",
  "DEFECTIVE PRODUCTS",
  "PERSONAL INJURY",
  "MALPRACTICE",
  "WRONGFUL DEATH",
];
const PracticeAreas = () => {
  return (
    <div>
      <h2 style={{ fontSize: "1.2rem", textAlign: "center", color: "grey" }}>
        Learn More About Our Practice Areas
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "850px",
          margin: "auto",
        }}
      >
        {practiceAreaList.map((area) => (
          <PracticeAreaButton key={area} practiceArea={area} />
        ))}
      </div>
    </div>
  );
};

export default PracticeAreas;
