import React, { createContext, useContext, useState, useEffect } from "react";
const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
  return React.createElement(ThemeContext.Provider, { value: { theme, toggleTheme: () => setTheme(t => t === "light" ? "dark" : "light") } }, children);
};
export const useTheme = () => useContext(ThemeContext);
