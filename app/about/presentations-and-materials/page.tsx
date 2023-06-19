import Banner from "@/app/components/banner";
import CallMe from "@/app/components/callMe";
import ContactInfo from "@/app/components/contactInfo";

const page = () => {
  return (
    <div className="page">
      <Banner
        message="Always Learning, Educating, and Improving."
        background="presentation-and-materials-banner-image.jpeg"
      />
      <CallMe />
      <ContactInfo />
    </div>
  );
};

export default page;
