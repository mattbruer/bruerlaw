import Banner from "@/app/components/banner";
import CallMe from "@/app/components/callMe";
import ContactInfo from "@/app/components/contactInfo";

const page = () => {
  return (
    <div className="page">
      <Banner
        message="Professionals Must Do Their Job Within The Standards Set By Their Profession."
        background="malpractice-banner-image.jpeg"
      />
      <CallMe />
      <div className="subPage-copy">
        <p>
          All professionals, including doctors, lawyers, engineers, nurses,
          chiropractors, dentists, accountants, and many other licensed
          occupations, must do their job within the standards set for their
          profession, or the standard of care. They must use that degree of
          skill and learning ordinarily exercised by members of their profession
          under the same or similar circumstances.
        </p>

        <p>
          If a professional fails to do their job within the standard of care,
          they may be responsible for the injuries or financial damages caused
          by that failure. This is called a breach of the standard of care,
          malpractice, or professional negligence. Even the most skilled
          professionals can occasionally make mistakes which are negligent,
          resulting in injuries or losses.
        </p>

        <p>
          In many cases of professional negligence, the law requires that an
          expert testify in court that the person failed to do their job within
          standards. The result alone does not always prove that malpractice was
          committed.
        </p>

        <p>
          Many professionals have professional liability insurance which insures
          them in the event they commit malpractice.
        </p>

        <p>
          In addition, if a professional was working for a company at the time
          of the negligent act, that company may also be legally responsible for
          the conduct, called vicarious liability or respondent superior.
        </p>
      </div>
      <ContactInfo />
    </div>
  );
};

export default page;
