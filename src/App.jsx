import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Chatbot from "./pages/Chatbot";
import Results from "./pages/Results";
import Courses from "./pages/Courses";
import Jobs from "./pages/Jobs";

export default function App() {
  return (
    <ThemeProvider>
      <NavbarWrapper />
    </ThemeProvider>
  );
}

function NavbarWrapper() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/results" element={<Results />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </>
  );
}
