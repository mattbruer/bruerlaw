import Banner from "./components/banner";
import CallMe from "./components/callMe";
import Welcome from "./components/welcome";
import PracticeAreas from "./components/practiceAreas";
import ContactInfo from "./components/contactInfo";

export default function Home() {
  return (
    <main>
      <div className="page">
        <Banner
          background={"justice-window.png"}
          message={"We're Here To Help."}
        />
        <CallMe />
        <Welcome />
        <hr />
        <PracticeAreas />
        <ContactInfo />
      </div>
    </main>
  );
}
