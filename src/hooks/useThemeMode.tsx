import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface ThemeMode {
  isDay: boolean | undefined;
}

interface ThemeModeContextType {
  mode: ThemeMode;
  // eslint-disable-next-line no-unused-vars
  setMode: (data: ThemeMode) => void;
}

const ThemeModeContext = createContext<ThemeModeContextType | undefined>(undefined);

export const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>({
    isDay: undefined,
  });

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    setMode({ isDay: hours >= 8 && hours < 19 });
  }, []);

  return (
    <ThemeModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);
  if (context === undefined) {
    throw new Error('useThemeMode must be used within a ThemeModeProvider');
  }
  return context;
};