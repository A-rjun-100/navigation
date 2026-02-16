import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode } = useTheme();
  const location = useLocation();

  const bg = darkMode
    ? "rgba(5,7,18,0.75)"
    : "rgba(255,255,255,0.85)";

  const text = darkMode ? "#e5e7eb" : "#0f172a";

  const linkStyle = (path) => ({
    padding: "6px 14px",
    borderRadius: "12px",
    textDecoration: "none",
    color: text,
    border:
      location.pathname === path
        ? "1px solid #6f7cff"
        : "1px solid rgba(255,255,255,0.15)",
    background:
      location.pathname === path
        ? "rgba(111,124,255,0.15)"
        : "transparent",
    whiteSpace: "nowrap"
  });

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        minHeight: 64,
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 10,
        padding: "10px 28px",
        background: bg,
        color: text,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        zIndex: 1000,
        boxSizing: "border-box"
      }}
    >
      <b style={{ marginRight: 50 }}>Path Pilot</b>

      <Link to="/" style={linkStyle("/")}>Home</Link>
      <Link to="/profile" style={linkStyle("/profile")}>Profile</Link>
      <Link to="/chatbot" style={linkStyle("/chatbot")}>Bot</Link>
      <Link to="/results" style={linkStyle("/results")}>Results</Link>
      <Link to="/courses" style={linkStyle("/courses")}>Courses</Link>
      <Link to="/jobs" style={linkStyle("/jobs")}>Jobs</Link>

      <div style={{ flex: 1 }} />

      <Link to="/login" style={linkStyle("/login")}>Login</Link>
      <Link to="/signup" style={linkStyle("/signup")}>Sign Up</Link>
    </div>
  );
}
