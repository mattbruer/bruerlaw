import Banner from "@/app/components/banner";
import CallMe from "@/app/components/callMe";
import ContactInfo from "@/app/components/contactInfo";

const page = () => {
  return (
    <div className="page">
      <Banner
        message="Honored To Be Among The Top Of Our Profession."
        background="awards-honors-banner-image.jpeg"
      />
      <CallMe />
      <div>
        <ul>
          <li>American Association For Justice - Member</li>
          <li>
            Avvo - 10.0 Superb - Appeals, Car Accidents, Lawsuits & Disputes,
            Medical Malpractice, Personal Injury
          </li>
          <li>Douglas County Bar Association - Member</li>
          <li>Kansas Association for Justice - Member</li>
          <li>
            Kansas Bar Association - Member, Twenty-Five Years of Service Honor
          </li>
          <li>
            Kansas City Metropolitan Bar Association - Sustaining Member;
            committees - Appellate Practice, Business Litigation, Civil
            Litigation, Medical-Legal, Nursing Home
          </li>
          <li>Martindale-Hubbell - AV Preeminent</li>
          <li>
            Missouri Association of Trial Attorneys - Former Chair, Continuing
            Legal Education Committee; and Co-Chair, Emergency Response Team
          </li>
          <li>Super Lawyers - Top Rated Personal Injury - Plaintiff</li>
          <li>
            The Missouri Bar - Member; Author, Chapter 21, Use Of An Expert In
            Proving Damages, MoBarCLE Deskbook, Experts
          </li>
          <li>
            University of Missouri-Columbia - Curator&apos;s Scholarship, Bright
            Flight Scholarship, Senator Robert Byrd Scholarship, Freshman Honor
            Society, Honors College
          </li>
          <li>
            University of Missouri-Columbia School of Law - Missouri Law Review,
            Associate Managing Editor, Guy A. Thompson Award for Best
            Production, Author, Loss of a Chance as a Cause of Action in Medical
            Malpractice Cases, 59 Mo.L.Rev. 969 (1994).
          </li>
        </ul>
      </div>
      <ContactInfo />
    </div>
  );
};

export default page;
