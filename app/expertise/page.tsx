import React from "react";
import Banner from "../components/banner";
import SubPageSection from "../components/subPageSection";
import ContactInfo from "../components/contactInfo";
import Welcome from "../components/welcome";

const practiceAreaList = [
  "CAR ACCIDENTS",
  "DANGEROUS PROPERTY",
  "DEFECTIVE PRODUCTS",
  "PERSONAL INJURY",
  "MALPRACTICE",
  "WRONGFUL DEATH",
];
const page = () => {
  return (
    <div className="page">
      <Banner
        background={"expertise-banner-image.jpeg"}
        message="Advocating for Victims of Wrongful Conduct."
      />
      <SubPageSection
        heading="Learn More About Our Practice Areas"
        list={practiceAreaList}
      />
      <Welcome
        showHeadshot={false}
        message="We help those affected by wrongful conduct, 
        serving clients in Missouri and Kansas, including Lawrence,
         Kansas City, and surrounding areas. Licensed for all county,
          district, and federal courts in both states."
      />
      <ContactInfo />
    </div>
  );
};

export default page;
