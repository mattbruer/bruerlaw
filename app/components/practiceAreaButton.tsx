import React from "react";
import Link from "next/link";
const PracticeAreaButton = ({ practiceArea }: any) => {
  return (
    <Link href={`/${practiceArea.toLowerCase().split(" ").join("-")}`}>
      <div className="practice-area-button">
        <p>{practiceArea}</p>
      </div>
    </Link>
  );
};

export default PracticeAreaButton;
