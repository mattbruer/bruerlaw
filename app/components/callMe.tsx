import React from "react";

const CallMe = () => {
  return (
    <div id="call-me">
      <div className="outer-border">
        <a href="tel:8163828775">
          <div className="phone-box">
            <p className="phone-number">816-382-8775</p>
            <p>Kansas City, MO</p>
          </div>
        </a>
      </div>
      <div className="outer-border">
        <a href="tel:8163828775">
          <div className="phone-box">
            <p className="phone-number">816-382-8775</p>
            <p>Lawrence, KS</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CallMe;
