import Image from "next/image";

const Welcome = () => {
  return (
    <div id="welcome-container">
      <div
        className="headshot"
        style={{
          minWidth: "250px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          style={{ border: "1px solid grey", padding: "2px" }}
          height="200"
          width="250"
          src="/headshot.jpeg"
          alt="headshot"
        />
      </div>
      <div
        style={{
          padding: "0 30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "1rem",
            fontSize: "2rem",
            textDecoration: "underline",
          }}
        >
          Welcome to the Bruer Law Firm
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          With over twenty-five years of experience as a personal injury lawyer
          in Lawrence, Kansas and the Kansas City Metropolitan area, we are
          dedicated to helping people, families, and businesses who have been
          harmed, in matters involving automobile collisions, personal injury,
          negligence, wrongful death, malpractice, dangerous property, defective
          products, insurance disputes, fraud, breach of contract, and civil
          rights violations.{" "}
        </p>
        <p>All initial consultations are free.</p>
      </div>
    </div>
  );
};

export default Welcome;
