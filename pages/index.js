export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#0b0b0f",
        color: "white",
        minHeight: "100vh",
        padding: "60px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          marginBottom: "20px",
        }}
      >
        FrameLab
      </h1>

      <p
        style={{
          fontSize: "24px",
          maxWidth: "700px",
          color: "#b3b3b3",
          marginBottom: "40px",
        }}
      >
        Create cinematic AI reel concepts for musicians, DJs and modern artists.
      </p>

      <button
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "16px 28px",
          borderRadius: "12px",
          border: "none",
          fontSize: "18px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Generate Reel
      </button>
    </div>
  );
}
