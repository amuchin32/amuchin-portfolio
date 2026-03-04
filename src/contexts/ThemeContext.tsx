import React, { createContext, useContext, useState } from "react";
const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");
  return React.createElement(ThemeContext.Provider, { value: { theme, toggleTheme: () => setTheme(t => t === "light" ? "dark" : "light") } }, children);
};
export const useTheme = () => useContext(ThemeContext);
