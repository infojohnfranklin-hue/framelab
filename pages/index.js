import { useState } from "react";

export default function Home() {
  const [artist, setArtist] = useState("John Franklin");
  const [track, setTrack] = useState("Not on Me");
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState("Retro Deep House");
  const [bpm, setBpm] = useState("124");
  const [mood, setMood] = useState("seductive");
  const [style, setStyle] = useState("Golden Hour VHS");
  const [result, setResult] = useState(null);

 function generateReel() {
  setLoading(true);
  setResult(null);

  setTimeout(() => {

    setResult({
      concept: `A cinematic ${style} reel for "${track}" by ${artist}. The scene feels ${mood}, stylish and music-driven, with natural movement synced to ${bpm} BPM ${genre}.`,

      prompt: `Use a cinematic ${style} look. Create a music reel for "${track}" by ${artist}. Genre: ${genre}. Mood: ${mood}. Tempo: ${bpm} BPM. Natural groove, realistic body movement, cool seductive effortless confidence, shallow depth of field, warm cinematic lighting, 35mm film look, no slow motion, no jitter, no distortion.`,

      caption: `${track} by ${artist} — a ${mood} ${genre} groove made for late-night motion.`,

      hook: `Your next reel needs this ${bpm} BPM groove.`,

      hashtags: `#${genre.replaceAll(" ", "")} #MusicReel #AIMusicVideo #FrameLab #NewMusic #DeepHouse #Reels`
    });

    setLoading(false);

  }, 5000);
}

return (
    <main style={mainStyle}>
      <section style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={eyebrow}>AI Reel Generator for Musicians</p>

        Create cinematic AI music reels in seconds.

        <p style={subtitle}>
          FrameLab generates reel concepts, AI video prompts, captions, hooks and hashtags for musicians, DJs and modern artists.
        </p>

        <div style={grid}>
          <input
  style={input}
  value={artist}
  onChange={(e) => setArtist(e.target.value)}
  placeholder="Artist Name"
/>

<input
  style={input}
  value={track}
  onChange={(e) => setTrack(e.target.value)}
  placeholder="Track Name"
/>

<input
  style={input}
  value={bpm}
  onChange={(e) => setBpm(e.target.value)}
  placeholder="BPM"
/>
          <select style={input} value={genre} onChange={(e) => setGenre(e.target.value)}>
  <option>Retro Deep House</option>
  <option>Melodic House</option>
  <option>Afro House</option>
  <option>Tech House</option>
  <option>Deep House</option>
</select>

<select style={input} value={mood} onChange={(e) => setMood(e.target.value)}>
  <option>seductive</option>
  <option>nostalgic</option>
  <option>dreamy</option>
  <option>dark</option>
  <option>euphoric</option>
  <option>underground</option>
</select>

<select style={input} value={style} onChange={(e) => setStyle(e.target.value)}>
  <option>Golden Hour VHS</option>
  <option>Night Drive</option>
  <option>Cassette Aesthetic</option>
  <option>Cinematic Club</option>
  <option>Urban Sunset</option>
</select>
        </div>

        <button
  style={button}
  onClick={generateReel}
  disabled={loading}
>
  {loading ? "Generating..." : "Generate Reel"}
</button>
{loading && (
  <p style={{ color: "#c78cff", marginTop: "12px" }}>
    Generating reel...
  </p>
)}

        {result && (
          <div style={outputBox}>
            <h2 style={{ fontSize: "34px" }}>{artist} — {track}</h2>
            <p style={{ color: "#c7c7c7" }}>{genre} · {bpm} BPM · {style}</p>
          <button
  style={copyButton}
  onClick={() => {
    navigator.clipboard.writeText(
`Reel Concept:
${result.concept}

AI Video Prompt:
${result.prompt}

Caption:
${result.caption}

Hook:
${result.hook}

Hashtags:
${result.hashtags}`
    );
  }}
>
  Copy All
</button>

            <Card title="Reel Concept" text={result.concept} />
            <Card title="AI Video Prompt" text={result.prompt} />
            <Card title="Caption" text={result.caption} />
            <Card title="Hook" text={result.hook} />
            <Card title="Hashtags" text={result.hashtags} />
          </div>
        )}
      </section>
    </main>
  );
}

function Card({ title, text }) {
    const [copied, setCopied] = useState(false);
  return (
    <div style={card}>
      <h3>{title}</h3>
      <p>{text}</p>
      <button
  style={copyButton}
  onClick={() => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
   }
>
{copied ? "Copied!" : "Copy"} 


      </button>
    </div>
  );
}

const mainStyle = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top left, #3b1d5c 0%, #0b0b0f 35%, #050506 100%)",
  color: "white",
  fontFamily: "Arial, sans-serif",
  padding: "40px",
};

const eyebrow = {
  color: "#b985ff",
  fontSize: "14px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  fontWeight: "bold",
};

const title = {
  fontSize: "64px",
  lineHeight: "1",
  maxWidth: "850px",
  margin: "20px 0",
};

const subtitle = {
  fontSize: "22px",
  lineHeight: "1.5",
  maxWidth: "720px",
  color: "#c7c7c7",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "14px",
  marginTop: "34px",
  marginBottom: "24px",
};

const input = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "14px",
  padding: "16px",
  color: "white",
  fontSize: "16px",
};

const button = {
  background: "linear-gradient(90deg, #ffffff, #d8b4ff)",
  color: "#08080a",
  padding: "22px 42px",
  borderRadius: "18px",
  border: "none",
  fontSize: "22px",
  cursor: "pointer",
  fontWeight: "bold",
  boxShadow: "0 0 30px rgba(185, 133, 255, 0.35)",
};

const outputBox = {
  marginTop: "44px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "24px",
  padding: "30px",
};

const card = {
  background: "rgba(0,0,0,0.35)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "18px",
  padding: "22px",
  marginTop: "18px",
};

const copyButton = {
  marginTop: "12px",
  padding: "10px 16px",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  background: "white",
  color: "black"
};
