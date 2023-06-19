import Banner from "@/app/components/banner";
import CallMe from "@/app/components/callMe";
import ContactInfo from "@/app/components/contactInfo";

const page = () => {
  return (
    <div className="page">
      <Banner
        message="Owners Must Keep Their Property Safe For The Public."
        background="dangerous-property-banner-image.jpeg"
      />
      <CallMe />
      <div className="ml-10 mr-10 subPage-copy" style={{ textIndent: "40px" }}>
        {/* I don't know about this h1 */}
        <h1 className="text-2xl mb-4" style={{ textAlign: "center" }}>
          PREMISES LIABILITY AND PROPERTY INJURY LAWYER IN KANSAS AND MISSOURI
        </h1>
        <p>
          All property owners have a duty to keep their premises safe for
          visitors. This can include business properties, buildings, shops,
          parking lots, restaurants, farms, homes, and yards.
        </p>
        <p>
          A property owner must make reasonable efforts to notice dangerous
          conditions on their property, and either remove those conditions, or
          adequately warn people of those conditions. In addition, a property
          owner must not create dangerous conditions on their property. In any
          situation in which a person is injured as a result of a dangerous
          condition, the law will also consider whether the injured person had a
          reasonable ability to notice the dangerous condition and avoid it.
        </p>
        <p>
          If a property owner fails to keep their premises safe, a person
          injured as a result of the dangerous condition on the property may be
          entitled to compensation from the owner or the business.
        </p>
        <p>
          Often, businesses purchase commercial general liability insurance for
          situations involving injuries to their visitors. Homeowners usually
          purchase homeowner&apos;s insurance for injuries to their guests.
        </p>
      </div>
      <ContactInfo />
    </div>
  );
};

export default page;
