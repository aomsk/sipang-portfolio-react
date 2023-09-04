import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

// create custom hook
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme Error!!!");
  }

  return context;
};
