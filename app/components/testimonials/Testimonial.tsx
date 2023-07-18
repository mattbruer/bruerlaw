import React from "react";
import "./style.css";

const Testimonial = ({ message, from }: any) => {
  return (
    <div className="testimonial">
      <p className="message">{message}</p>
      <p className="from"> - {from}</p>
    </div>
  );
};

export default Testimonial;
