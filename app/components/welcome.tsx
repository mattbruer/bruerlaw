import Image from "next/image";

const Welcome = ({ message, heading, showHeadshot }: any) => {
  return (
    <div id="welcome-container">
      {showHeadshot && (
        <div
          className="headshot"
          style={{
            minWidth: "250px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            priority
            style={{ border: "1px solid grey", padding: "2px" }}
            height="200"
            width="250"
            src="/headshot.jpeg"
            alt="headshot"
          />
        </div>
      )}
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
          {heading}
        </h2>
        <p id="welcome-msg" style={{ marginBottom: "1rem" }}>
          {message}
        </p>
        <p>All initial consultations are free.</p>
      </div>
    </div>
  );
};

export default Welcome;
