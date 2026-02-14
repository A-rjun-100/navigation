import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

function MUIWrapper({ children }) {
  const { darkMode } = useContext(ThemeContext);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light"
    }
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <MUIWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MUIWrapper>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
