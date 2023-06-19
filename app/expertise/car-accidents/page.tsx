import Banner from "@/app/components/banner";
import ContactInfo from "@/app/components/contactInfo";
import CallMe from "@/app/components/callMe";
import Welcome from "@/app/components/welcome";
const page = () => {
  return (
    <div className="page">
      <Banner
        message="Automobile Drivers Must Use The Highest Degree Of Care."
        size="cover"
        background="car-accidents-banner-image.jpeg"
      />
      <CallMe />
      <hr />
      <div className="subPage-copy" style={{ textIndent: "40px" }}>
        {/* I don't know about this h1 */}
        <h1 className="text-2xl mb-4" style={{ textAlign: "center" }}>
          CAR ACCIDENT LAWYER IN KANSAS AND MISSOURI
        </h1>
        <p>
          Unfortunately, automobile collisions are an all-too-common occurrence,
          and our firm is often asked to handle matters involving cars,
          motorcycles, semi trucks or tractor-trailers on the highway, or even
          farm tractors. Even worse, some wrecks involve drunk divers. All of
          these crashes can cause injuries which are frightening,
          life-threatening, and occasionally, permanent.
        </p>
        <p>
          The law requires that drivers use the appropriate degree of care to
          avoid collisions, and the law holds those responsible when others are
          injured.
        </p>
        <p>
          Our work in these types of cases usually involves obtaining the police
          report to determine what may have happened in the crash. It is also
          important to learn of any witnesses to the wreck. We often see
          situations in which the other driver was negligent by speeding,
          running a red light or stop sign, changing lanes or crossing the
          centerline, or pulling into oncoming traffic. Sometimes, the other
          driver may have been texting or looking at their phone, or they fled
          the scene in a hit-and-run, or even worse, the driver was intoxicated
          due to alcohol or drugs, also called driving under the influence, or
          drunk driving.
        </p>
        <p>
          In Missouri and Kansas and most states, drivers are required to have
          minimum liability insurance in the event of a collision. Once we learn
          what happened in the crash, we make every attempt to work with
          insurance to obtain fair compensation as soon as possible. If the
          other driver cannot be identified, or has no insurance, or not enough
          insurance, we can also consider making a claim for uninsured motorist
          coverage (also called UM) or underinsured motorist coverage (UIM).
        </p>
        <p>
          If the claim cannot be resolved out of court, you have the legal right
          to file a lawsuit and ask a jury to decide the case. Most cases can be
          resolved out of court, but if the other side is not offering fair
          compensation, we will ask a jury to do so.
        </p>
        <p>
          Our job is to resolve your claim or, if necessary, bring your case to
          court to obtain compensation for you as promptly as possible.
        </p>
      </div>
      <hr />
      <ContactInfo />
      <hr />
    </div>
  );
};

export default page;
