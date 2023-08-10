import { createContext, useContext, useState } from "react";

type ActiveSectionNavbarProps = {
  children: JSX.Element | JSX.Element[];
};

type ActiveSectionNavbarType = {
  activeTitle: string;
  setActiveSectionTitle: (title: string) => void;
};

// Create Context
export const ActiveNavbarContext = createContext<ActiveSectionNavbarType | null>(null);

// Create Provider
export const ActiveNavbarProvider = ({ children }: ActiveSectionNavbarProps) => {
  const [activeTitle, setActiveTitle] = useState<string>("Home");

  const setActiveSectionTitle = (title: string) => {
    setActiveTitle(title);
  };
  return (
    <ActiveNavbarContext.Provider
      value={{
        activeTitle,
        setActiveSectionTitle,
      }}
    >
      {children}
    </ActiveNavbarContext.Provider>
  );
};

// Custon Hook
// eslint-disable-next-line react-refresh/only-export-components
export function useActiveSectionTitle() {
  const context = useContext(ActiveNavbarContext);

  if (context === null) {
    throw new Error("useActiveSectionTitle Error!!!");
  }

  return context;
}
