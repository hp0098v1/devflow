"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("");

  const handleChangeTheme = () => {
    if (mode === "dark") {
      setMode("light");

      document.documentElement.classList.add("light");
    } else {
      setMode("dark");

      document.documentElement.classList.add("dark");
    }
  };

  // useEffect(() => {
  //   handleChangeTheme();
  // }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
