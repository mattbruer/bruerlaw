"use client";
import { useState } from "react";
import Banner from "../components/banner";
import CallMe from "../components/callMe";
import ContactInfo from "../components/contactInfo";

import ImageBoxes from "../components/imageBoxes";

const page = () => {
  return (
    <div className="page">
      <Banner
        height="23vw"
        message="Conveniently Located in Downtown Lawrence."
        background="location-banner-image.jpeg"
      />
      <CallMe />
      <hr />
      <h1 style={{ textAlign: "center" }}>
        LOCATION - BRUER LAW FIRM - LAWRENCE, KANSAS
      </h1>
      <ImageBoxes />
      <ContactInfo />
    </div>
  );
};

export default page;
