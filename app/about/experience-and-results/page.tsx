import Banner from "@/app/components/banner";
import CallMe from "@/app/components/callMe";
import ContactInfo from "@/app/components/contactInfo";

const page = () => {
  return (
    <div className="page">
      <Banner
        message="Over Twenty-Five Years of Experience and Results for Clients."
        background="experience-results-banner-image.jpeg"
      />
      <CallMe />
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <ul>
            <li>Failure to treat deep vein thrombosis (DVT)</li>
            <li>Nursing home negligence resulting in death</li>
            <li>Failure to diagnose cancer during EGD</li>
            <li>Fall at nursing home</li>
            <li>Dental malpractice</li>
            <li>Injury at major league baseball game</li>
            <li>
              Uninsured motorist coverage against insurance company for auto
              collision
            </li>
            <li>Birth injury resulting in developmental delay</li>
            <li>
              Failure to diagnose appendix and gastrointestinal adenocarcinoma /
              cancer
            </li>
            <li>
              Failure to diagnose myocardial infarction / heart attack in
              emergency room
            </li>
            <li>Rear end collision and pileup on interstate</li>
            <li>Burn injury to genitals</li>
            <li>Intoxicated / drunk driver collision</li>
            <li>Failure to diagnose exudative pleural infection / empyema</li>
            <li>Enlisted military personnel negligence in auto collision</li>
            <li>
              Failure to diagnose ulnar + median nerve injury in forearm and
              hand
            </li>
            <li>
              Rear-end collision and Chrysler / Johnson Controls seatback
              failure
            </li>
            <li>Motorcycle and farm tractor collision</li>
            <li>
              Labor and delivery, emergency c-section, and birth injury causing
              hypoxia, anoxia, brain injury, and cerebral palsy
            </li>
            <li>Unsinured motorist coverage in drag race on highway</li>
            <li>Collision at intersection due to intoxicated driver</li>
            <li>Failure to treat pneumonia resulting in death</li>
            <li>Dental malpractice resulting in trigeminal neuralgia</li>
            <li>Improper prescription of methamphetamine medications</li>
            <li>
              Chiropractic manipulation causing cauda equina syndrome and
              paralysis
            </li>
            <li>Negligent maintenance of diving board and pool</li>
            <li>Negligent legal representation in bankruptcy sale</li>
            <li>Failure to maintain safe premises in homes tour</li>
            <li>
              Wrongful death from texting while driving and driving on the wrong
              side of the road
            </li>
            <li>
              Biopsy of gastric varices during esophagogastroduedenoscopy (EGD)
            </li>
            <li>
              Rear end collision from following too closely resulting in
              concussion and traumatic brain injury
            </li>
            <li>Natural gas explosion at restaurant</li>
            <li>
              Workers&apos; compensation and workplace injuries to head, face,
              and shoulder
            </li>
            <li>
              Failure to maintain safe premises at grocery store resulting in
              rotator cuff injury in shoulder
            </li>
          </ul>
        </div>
        <div style={{ paddingRight: "40px", width: "50%" }}>
          <ul>
            <li>Farm truck collision on rural highway</li>
            <li>Negligent legal representation in business sale</li>
            <li>
              Rear end collision resulting in brain injury requiring botox
              injections
            </li>
            <li>Dispute over effect of employment non-compete agreement</li>
            <li>Infection following knee replacement</li>
            <li>
              Burn at restaurant from coffee cup with hot water and loose lid
            </li>
            <li>Death from chest tube placement</li>
            <li>Urethral injuries during urinary catheterization</li>
            <li>
              Failure to maintain safe floor at self-serve restaurant buffet
            </li>
            <li>
              Failure to yield right of way at highway ramp intersection
              resulting in concussion and disk herniation
            </li>
            <li>
              Failure to yield at stop sign resulting in fractures and collapsed
              lung
            </li>
            <li>Concussion from drunk driver</li>
            <li>Burn injuries at workplace due to steam leak</li>
            <li>Disk herniation due to rear-end collision</li>
            <li>Head injury due to failure to yield</li>
            <li>Broken jaw due to drunk driver</li>
            <li>Failure to diagnose cancer</li>
            <li>Fall on wet floor at fast food restaurant</li>
            <li>Dog bite to bicyclist</li>
            <li>Failure to treat cancer</li>
            <li>Fraud in real estate sale</li>
            <li>Rear end collision resulting in disk (disc) hernation</li>
            <li>Head on collision resulting in disk (disc) herniation</li>
            <li>
              Inadequately marked stairs at bar and grill resulting in vertebral
              fracture
            </li>
            <li>
              Knee injuries to pedestrian due to failure to keep a lookout
            </li>
            <li>Failure to stop at highway ramp resulting in shoulder tear</li>
            <li>Failure to stop at red light causing neck herniation</li>
            <li>
              Failure to maintain automobile brakes resulting in concussion
            </li>
            <li>Pelvic injuries to pedestrian at loading dock</li>
            <li>
              Jaw and leg injuries after driver runs out of gas on highway
            </li>
            <li>Exacerbation of migraines following collision</li>
            <li>Facial injuries to child from dog bite</li>
          </ul>
        </div>
      </div>
      <ContactInfo />
    </div>
  );
};

export default page;
