import React from "react";
import Link from "next/link";
import Banner from "../components/banner";
import CallMe from "../components/callMe";

const page = () => {
  return (
    <div className="page read">
      <Banner
        background="read-banner-image2.png"
        message="Bruer Law Firm Publications"
      />
      <CallMe />
      <hr />
      <h1>INFORMATION ON IMPORTANT INJURY LAW TOPICS</h1>
      <h2>I. Civil Procedure</h2>
      <ul>
        <li>
          <Link href={"/"}>
            Plaintiff&apos;s Personal Injury From Start to Finish - Basics of
            Civil Procedure
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            Kansas Comparative Fault, Settlements, and &quot;Empty Chairs&quot;
          </Link>
        </li>
      </ul>
      <h2>II. Trial Practice</h2>
      <ul>
        <li>
          <Link href={"/"}>
            Applying the Rules of Evidence - Expert Reports and Scientific
            Evidence
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            Lay Witness Testimony As Estimate of To Speed In Car Accidents
          </Link>
        </li>
        <li>
          <Link href={"/"}>Closing Argument</Link>
        </li>
        <li>
          <Link href={"/"}>
            Recovering Punitive Damages in Kansas for Injuries Caused by Driving
            Under the Influence of Alcohol - Intoxication - Drunk Driver
          </Link>
        </li>
      </ul>
      <h2>III. Substantive Law</h2>
      <ul>
        <li>
          <Link href={"/"}>
            Kansas &quot;Coming and Going&quot; Rule - Respondeat Superior and
            Vicarious Liability
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            Kansas Landowner Liability - &quot;Known or Obvious&quot;
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            Overview of Missouri Premises Liability Law - Section 1
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            Using Codes and Standards in Missouri Premises Liability Cases
          </Link>
        </li>
      </ul>
      <h2>IV. Other</h2>
      <ul>
        <li>
          <Link href={"/"}>
            Insurance Fundamentals for Personal Injury Practice
          </Link>
        </li>
        <li>
          <Link href={"/"}>The Kansas Tort Claims Act</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
