import { useTheme } from "../context/ThemeContext";

export default function Profile() {
  const { darkMode } = useTheme();

  const bg = darkMode
    ? "linear-gradient(135deg,#050712,#0b1026)"
    : "linear-gradient(135deg,#f8fafc,#eef2ff)";

  const color = darkMode ? "#e5e7eb" : "#0f172a";

  return (
    <div style={{ minHeight: "100vh", paddingTop: 110, background: bg, color }}>
      <div style={{ padding: 40 }}>
        <h2>Profile</h2>
        <p>Your personal career profile and saved preferences.</p>
      </div>
    </div>
  );
}
