import SubPageLinkButton from "./subPageLinkButton";

const SubPageSection = ({ list, heading }: any) => {
  return (
    <div id="subPage-section">
      <h2>{heading}</h2>
      <div className="subPage-section-button-container">
        {list.map((subPage: string) => (
          <SubPageLinkButton key={subPage} subPage={subPage} />
        ))}
      </div>
    </div>
  );
};

export default SubPageSection;
