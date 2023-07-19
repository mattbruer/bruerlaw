import React from "react";
import Banner from "../components/banner";
import CallMe from "../components/callMe";
import ContactInfo from "../components/contactInfo";

const page = () => {
  return (
    <div>
      <Banner
        background="FAQ-banner-image.jpeg"
        message="Free Consultations, Practicing Throughout The Midwest."
      />
      <CallMe />
      <hr />

      <div className="subPage-copy">
        {/* I don't know about this h1 */}
        <h1>
          ANSWERS TO YOUR QUESTIONS - INJURY LAWYER IN KANSAS AND MISSOURI
        </h1>
        <ul className="answers">
          <li>All initial consultations are free.</li>
          <li>
            Most of our fee arrangements are contingent, meaning that our work
            is paid only out of the recovery.{" "}
          </li>
          <li>
            We are based in the university town of Lawrence, Kansas, and handle
            matters throughout the metropolitan Kansas City area, as well as
            across the states of Kansas and Missouri. If you&apos;re not nearby,
            we&apos;ll come to you.
          </li>
          <li>
            We strive to resolve disputes in the most efficient way possible.
            Sometimes that can mean out of court, but if necessary, we will be
            prepared to exercise the important constitutional right to a trial
            before a jury.
          </li>
          <li>
            We will keep you informed, and you can feel comfortable to call us,
            email us, text us, or meet with us any time.
          </li>
        </ul>
      </div>
      <hr />
      <ContactInfo />
    </div>
  );
};

export default page;
