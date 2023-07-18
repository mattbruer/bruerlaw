"use client";
import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formVals, setFormVals] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const [response, setResponse] = useState<any>();

  const handleChange = (e: any) => {
    setFormVals({ ...formVals, [e.target.name]: e.target.value });
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Fetch POST Request Example" }),
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3000/api", formVals);
      setResponse(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="contact-box ">
      <iframe
        title="contact form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSffEPjurKCbx1iDQUx19bzy4CC5tUHnTzsntLBOJ_7KYlPBoQ/viewform?embedded=true"
        width="100%"
        height="200"
        frameBorder="0"
        // marginHeight="0"
        // marginwidth="0"
      >
        Loading…
      </iframe>
      {/* <h2>CONTACT US</h2>
      <p>Use the form to contact us directly:</p>
      <p>
        <span style={{ color: "red" }}> * </span>Indicates required field
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <p>
            Name <span style={{ color: "red" }}>*</span>
          </p>
        </label>
        <input
          onChange={handleChange}
          name="name"
          value={formVals["name"]}
        ></input>
        <label htmlFor="contact">
          <p>
            Email or Telephone Number <span style={{ color: "red" }}>*</span>
          </p>
        </label>
        <input
          onChange={handleChange}
          value={formVals["contact"]}
          name="contact"
        ></input>
        <label htmlFor="message">
          <p>
            Message <span style={{ color: "red" }}>*</span>
          </p>
        </label>
        <textarea
          onChange={handleChange}
          value={formVals["message"]}
          name="message"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {JSON.stringify(response)} */}
    </div>
  );
};

export default ContactForm;
