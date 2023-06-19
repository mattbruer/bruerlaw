import Banner from "@/app/components/banner";
import CallMe from "@/app/components/callMe";
import ContactInfo from "@/app/components/contactInfo";

const page = () => {
  return (
    <div className="page">
      <Banner background="wrongful-death-banner-image.jpeg" />
      <CallMe />
      <div className="subPage-copy">
        <p>
          The law allows compensation to family members when someone passes away
          as a result of negligence or misconduct on the part of another person,
          including drivers of cars and trucks, professionals such as doctors or
          nurses, product manufacturers, and owners of dangerous properties.
        </p>

        <p>
          This compensation can include the income that the person would have
          made and provided for their family in their work life, medical bills
          for any medical treatment for injuries leading up to the death, the
          care and work the person did in their home and for their family, and
          the emotional losses sustained by the surviving family members. In
          some states such as Kansas, and in cases against health care providers
          in many states, those emotional losses are subject to a cap, or a
          limit placed by the state legislature.
        </p>

        <p>
          In situations involving the wrongful death of a family member, it can
          be helpful if all surviving family members are in agreement with
          respect to how the legal claim will be handled.
        </p>
      </div>
      <ContactInfo />
    </div>
  );
};

export default page;
