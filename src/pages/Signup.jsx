import { useState } from "react";
import { Box, Paper, Typography, TextField, Button, Stack } from "@mui/material";
import { useTheme } from "../context/ThemeContext";

export default function Signup() {
  const { darkMode } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Check if all fields are filled
  const isFilled = name.trim() && email.trim() && password.trim();

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 70px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        background: darkMode
          ? "linear-gradient(135deg,#050712,#0b1026)"
          : "linear-gradient(135deg,#f8fafc,#eef2ff)",
        color: darkMode ? "#e5e7eb" : "#0f172a",
        transition: "background 0.3s, color 0.3s"
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 4,
          borderRadius: 3,
          background: darkMode ? "rgba(255,255,255,0.05)" : "#ffffff",
          color: darkMode ? "#e5e7eb" : "#0f172a",
          transition: "background 0.3s, color 0.3s"
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h5" fontWeight={600} textAlign="center">
            Create Account
          </Typography>

          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputLabelProps={{
              style: { color: darkMode ? "#e5e7eb" : "#0f172a" }
            }}
            InputProps={{
              style: {
                color: darkMode ? "#e5e7eb" : "#0f172a",
                background: darkMode ? "rgba(255,255,255,0.05)" : "#ffffff"
              }
            }}
          />

          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{
              style: { color: darkMode ? "#e5e7eb" : "#0f172a" }
            }}
            InputProps={{
              style: {
                color: darkMode ? "#e5e7eb" : "#0f172a",
                background: darkMode ? "rgba(255,255,255,0.05)" : "#ffffff"
              }
            }}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{
              style: { color: darkMode ? "#e5e7eb" : "#0f172a" }
            }}
            InputProps={{
              style: {
                color: darkMode ? "#e5e7eb" : "#0f172a",
                background: darkMode ? "rgba(255,255,255,0.05)" : "#ffffff"
              }
            }}
          />

          <Button
            variant="contained"
            size="large"
            fullWidth
            disabled={!isFilled}
            sx={{
              backgroundColor: isFilled
                ? darkMode
                  ? "#3b82f6"
                  : "#2563eb"
                : darkMode
                ? "#1f2937"
                : "#94a3b8", // visible gray in light mode
              color: "#fff",
              "&:hover": {
                backgroundColor: isFilled
                  ? darkMode
                    ? "#60a5fa"
                    : "#3b82f6"
                  : undefined
              },
              "&.Mui-disabled": {
                backgroundColor: darkMode ? "#1f2937" : "#94a3b8",
                color: "#fff",
                opacity: 1 // override MUI default opacity
              },
              transition: "background-color 0.3s"
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
