import Logo from "./logo";

const ContactInfo = () => {
  return (
    <div id="contact-info">
      <Logo />
      <div id="contact-info-box">
        <div className="contact-item">
          <p>Robert S. Bruer</p>
          <p>Historic English Church Building</p>
          <p>1040 New Hampshire Street, No. 18</p>
          <p>Lawrence, KS 66044</p>
        </div>

        <div className="contact-item">
          <p>Kansas City (816) 912-0030</p>
          <p>Lawrence (785) 371-1445</p>
          <p>Facsimile (785) 390-8725</p>
          <p>rob@bruerlaw.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
