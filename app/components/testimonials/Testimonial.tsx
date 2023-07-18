import React from "react";
import "./style.css";

const Testimonial = ({ message, from }: any) => {
  return (
    <div className="testimonial">
      <p>{message}</p>
      <p> - {from}</p>
    </div>
  );
};

export default Testimonial;
