import { createContext, useContext, useState } from 'react';
import { themes } from './themes';
import { ThemeName } from './types';
import { Colors } from './colors';

type ThemeContextType = {
  themeName: ThemeName;
  colors: Colors;
  setTheme: (theme: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [themeName, setThemeName] =
    useState<ThemeName>('lightPurple');

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        colors: themes[themeName],
        setTheme: setThemeName,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}