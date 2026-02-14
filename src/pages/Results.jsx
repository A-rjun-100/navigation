import { useTheme } from "../context/ThemeContext";

export default function Results() {
  const { darkMode } = useTheme();

  const bg = darkMode
    ? "linear-gradient(135deg,#050712,#0b1026)"
    : "linear-gradient(135deg,#f8fafc,#eef2ff)";

  const color = darkMode ? "#e5e7eb" : "#0f172a";

  return (
    <div style={{ minHeight: "100vh", paddingTop: 110, background: bg, color }}>
      <div style={{ padding: 40 }}>
        <h2>Your career analysis</h2>

        <div style={card(darkMode)}>
          <b>Top match</b>
          <p>Software Engineer – 92%</p>
        </div>

        <div style={card(darkMode)}>
          <b>Secondary match</b>
          <p>Product Engineer – 86%</p>
        </div>
      </div>
    </div>
  );
}

function card(darkMode) {
  return {
    marginTop: 16,
    padding: 18,
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.12)",
    background: darkMode ? "rgba(255,255,255,0.05)" : "#ffffff"
  };
}
