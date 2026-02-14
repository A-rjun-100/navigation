import { useTheme } from "../context/ThemeContext";

export default function Chatbot() {
  const { darkMode } = useTheme();

  const bg = darkMode
    ? "linear-gradient(135deg,#050712,#0b1026)"
    : "linear-gradient(135deg,#f8fafc,#eef2ff)";

  const color = darkMode ? "#e5e7eb" : "#0f172a";

  return (
    <div style={{ minHeight: "100vh", paddingTop: 110, background: bg, color }}>
      <div style={{ padding: 40 }}>
        <h2>Career Bot</h2>
        <p>Ask anything about your career path.</p>

        <div
          style={{
            marginTop: 20,
            padding: 16,
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.12)",
            background: darkMode ? "rgba(255,255,255,0.05)" : "#ffffff"
          }}
        >
          Bot UI will come here.
        </div>
      </div>
    </div>
  );
}
