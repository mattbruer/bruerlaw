import React from "react";
import Banner from "../components/banner";
import CallMe from "../components/callMe";
import Welcome from "../components/welcome";
import ContactInfo from "../components/contactInfo";
import PracticeAreas from "../components/practiceAreas";

const aboutList = [
  "AWARDS AND HONORS",
  "EXPERIENCE AND RESULTS",
  "PRESENTATIONS AND MATERIALS",
];
const About = () => {
  return (
    <div className="page">
      <Banner
        message={"Helping Clients Get Justice And Fair Compensation."}
        background={"about-page-banner-image.png"}
      />
      <CallMe />
      <Welcome
        showHeadshot
        heading="About Bruer Law Firm"
        message="The Bruer Law Firm, founded by Rob Bruer,
       aims to help clients seek justice and fair compensation. 
       With over two decades of experience, Rob has represented 
       clients in various courts at both the state and federal 
       levels. He is a member of several prestigious legal 
       associations and has received recognition for his expertise. 
       Rob resides in Lawrence with his wife and children and enjoys 
       outdoor activities and participating in endurance events."
      />
      <PracticeAreas heading="Learn More" list={aboutList} />
      <ContactInfo />
    </div>
  );
};

export default About;
