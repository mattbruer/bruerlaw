import Testimonial from "./Testimonial";
import "./style.css";
import Image from "next/image";

const Testimonials = ({ children }: any) => {
  return <div className="testimonials-container">{children}</div>;
};

export default Testimonials;
