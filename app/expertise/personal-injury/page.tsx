import Banner from "@/app/components/banner";
import CallMe from "@/app/components/callMe";
import ContactInfo from "@/app/components/contactInfo";

const page = () => {
  return (
    <div className="page">
      <Banner
        message="The Law Requires Compensation For Injuries Caused By Mistakes."
        background="personal-injury-banner-image.jpeg"
      />
      <CallMe />
      <div className="ml-10 mr-10 subPage-copy" style={{ textIndent: "40px" }}>
        {/* I don't know about this h1 */}
        <h1 className="text-2xl mb-4" style={{ textAlign: "center" }}>
          PERSONAL INJURY LAWYER IN KANSAS AND MISSOURI
        </h1>
        <p>
          When you or a loved one are injured by the negligent conduct of
          another, our legal system provides the right to seek compensation for
          those injuries. In situations involving car, motorcycle, or trucking
          accidents, commercial businesses and dangerous property , product
          manufacturers and defective or dangerous products, and hospitals,
          doctors, and clinics, or other professional services, the wrongdoer
          may have insurance in the form of automobile liability insurance,
          commercial general liability insurance, or professional liability
          insurance.
        </p>
        <p>
          The process starts with a claim against the wrongdoer or their
          insurance company for compensation for the losses caused by the
          injuries, including medical insurance payments, medical bills,
          prescriptions, hospitalizations, lost time from work, lost wages, and
          other financial losses. In addition, the law allows compensation for
          pain, suffering, mental anguish, emotional distress, loss of enjoyment
          of life, loss of consortium or spousal support, and permanent scars
          and disfigurement. Often, these losses are much more significant than
          any financial loss.
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
      <ContactInfo />
    </div>
  );
};

export default page;
