import Banner from "./components/banner";
import CallMe from "./components/callMe";
import Welcome from "./components/welcome";
import SubPageSection from "./components/subPageSection";
import ContactInfo from "./components/contactInfo";
import ContactForm from "./components/contactForm";
import Testimonials from "./components/testimonials/Testimonials";
import Testimonial from "./components/testimonials/Testimonial";

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
        <hr />
        <div className="contact-map-container">
          <ContactForm />
          {/* <ContactForm /> */}
        </div>
        <Testimonials>
          <Testimonial
            message='"Thank you for everything!"'
            from="Dave 11/1/19"
          />
          <Testimonial
            message='"Thank you so much again."'
            from="Becca 10/24/16"
          />
          <Testimonial
            message='"I appreciate your hard work."'
            from="Gwen 10/17/17"
          />

          <Testimonial
            message='"Thanks Rob.  I so appreciate you taking this on."'
            from="Lynn 8/13/15"
          />

          <Testimonial
            message='"Thank you.  I don&apos;t know what I would have done had I not called you."'
            from="Greg 5/20/21"
          />
          <Testimonial
            message='"They work so hard for you when you need them and they are always very kind people."'
            from="Brandon 7/2/22"
          />
          <Testimonial
            message='"I just wanted to thank you for taking the time to speak to me candidly. It speaks to your integrity and character."'
            from="Cherri 12/21/18"
          />
        </Testimonials>
        <ContactInfo />
      </div>
    </main>
  );
}
