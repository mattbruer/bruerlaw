"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SubPageLinkButton = ({ subPage }: any) => {
  let path = usePathname().slice(1);

  //this is necessary because the links on the home page go to the "Expertise" subsecitons.
  if (path === "") {
    path = "expertise";
  }

  return (
    <Link href={`${path}/${subPage.toLowerCase().split(" ").join("-")}`}>
      <button className="subPage-section-button">
        <p>{subPage}</p>
      </button>
    </Link>
  );
};

export default SubPageLinkButton;
