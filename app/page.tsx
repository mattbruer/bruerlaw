import Banner from "./components/banner";
import CallMe from "./components/callMe";
import Welcome from "./components/welcome";
import SubPageSection from "./components/subPageSection";
import ContactInfo from "./components/contactInfo";

const practiceAreaList = [
  "CAR ACCIDENTS",
  "DANGEROUS PROPERTY",
  "DEFECTIVE PRODUCTS",
  "PERSONAL INJURY",
  "MALPRACTICE",
  "WRONGFUL DEATH",
];

export default function Home() {
  return (
    <main>
      <div className="page">
        <Banner
          background={"justice-window.webp"}
          message={"We're Here To Help."}
        />

        <CallMe />
        <Welcome
          showHeadshot={true}
          heading="Welcome to the Bruer Law Firm"
          message="With over twenty-five years of experience as a personal injury lawyer
          in Lawrence, Kansas and the Kansas City Metropolitan area, we are
          dedicated to helping people, families, and businesses who have been
          harmed, in matters involving automobile collisions, personal injury,
          negligence, wrongful death, malpractice, dangerous property, defective
          products, insurance disputes, fraud, breach of contract, and civil
          rights violations."
        />
        <hr />
        <SubPageSection
          heading="Learn More About Our Practice Areas"
          list={practiceAreaList}
        />
        <ContactInfo />
      </div>
    </main>
  );
}
