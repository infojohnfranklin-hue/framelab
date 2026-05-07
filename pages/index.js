export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #3b1d5c 0%, #0b0b0f 35%, #050506 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <section style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "70px", paddingTop: "50px" }}>
          <p
            style={{
              color: "#b985ff",
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "18px",
              fontWeight: "bold",
            }}
          >
            AI Reel Generator for Musicians
          </p>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: "1",
              maxWidth: "850px",
              margin: "0 0 24px 0",
            }}
          >
            Create cinematic music reels in seconds.
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.5",
              maxWidth: "680px",
              color: "#c7c7c7",
              marginBottom: "34px",
            }}
          >
            FrameLab generates viral-ready reel concepts, AI video prompts,
            captions, hooks and hashtags for musicians, DJs and modern artists.
          </p>

          <button
            style={{
              background: "linear-gradient(90deg, #ffffff, #d8b4ff)",
              color: "#08080a",
              padding: "17px 30px",
              borderRadius: "14px",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 0 30px rgba(185, 133, 255, 0.35)",
            }}
          >
            Generate Reel
          </button>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "24px",
            padding: "30px",
            boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
          }}
        >
          <p style={{ color: "#b985ff", fontWeight: "bold" }}>
            Example Output
          </p>

          <h2 style={{ fontSize: "34px", marginBottom: "12px" }}>
            John Franklin — Mahogany Streets
          </h2>

          <p style={{ color: "#c7c7c7", fontSize: "18px" }}>
            Retro Deep House · 124 BPM · Golden Hour VHS
          </p>

          <div
            style={{
              marginTop: "28px",
              display: "grid",
              gap: "18px",
            }}
          >
            <div style={cardStyle}>
              <h3>Reel Concept</h3>
              <p>
                A stylish retro city street at golden hour. Two confident music
                creators walk past vintage cars while people slowly join the
                groove around them.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>AI Video Prompt</h3>
              <p>
                Cinematic 1970s-inspired urban street scene, golden hour light,
                warm haze, shallow depth of field, natural groove at 124 BPM,
                cool seductive effortless confidence, static camera, realistic
                movement, 35mm film look, no slow motion.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Caption</h3>
              <p>
                Late sunlight, warm streets and a groove that keeps moving.
                Mahogany Streets is out now.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Hook</h3>
              <p>Your next sunset drive needs this groove.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const cardStyle = {
  background: "rgba(0,0,0,0.35)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "18px",
  padding: "22px",
};
