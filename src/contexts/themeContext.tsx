import { createContext, useState, useEffect } from "react";

type ChildrenProps = {
  children: JSX.Element | JSX.Element[];
};

interface ITheme {
  theme: string | null;
  handleChangeTheme: () => void;
}

// create context
export const ThemeContext = createContext<ITheme | null>(null);

// create provider
export const ThemeProvider = ({ children }: ChildrenProps) => {
  const [theme, setTheme] = useState<string | null>(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  console.log("theme: ", theme);

  useEffect(() => {
    localStorage.setItem("theme", theme as string);
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return <ThemeContext.Provider value={{ theme, handleChangeTheme }}>{children}</ThemeContext.Provider>;
};
