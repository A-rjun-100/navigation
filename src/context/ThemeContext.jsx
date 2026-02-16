import { createContext, useContext } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {

  const darkMode = true; // always dark

  return (
    <ThemeContext.Provider value={{ darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return ctx;
}

export { ThemeContext };
