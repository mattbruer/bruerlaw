import Banner from "@/app/components/banner";
import CallMe from "@/app/components/callMe";
import ContactInfo from "@/app/components/contactInfo";

const page = () => {
  return (
    <div className="page">
      <Banner
        background="defective-products-banner-image.jpeg"
        message="The Products We Use Should Be Safe."
      />
      <CallMe />
      <ContactInfo />
    </div>
  );
};

export default page;
