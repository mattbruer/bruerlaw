import Link from "next/link";

const PracticeAreaButton = ({ practiceArea }: any) => {
  return (
    <Link href={`/${practiceArea.toLowerCase().split(" ").join("-")}`}>
      <button className="practice-area-button">
        <p>{practiceArea}</p>
      </button>
    </Link>
  );
};

export default PracticeAreaButton;
