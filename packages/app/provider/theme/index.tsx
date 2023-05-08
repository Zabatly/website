import config from '../../tamagui.config';
import React, { useState, useEffect, FC } from 'react';
import { ThemeContext, Theme } from './themeContext';
import { TamaguiProvider } from 'tamagui';
import { useColorScheme, Platform } from 'react-native';
import { useForceUpdate } from 'tamagui';
import { useThemeSetting } from '@tamagui/next-theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  ...rest
}) => {
  const nextTheme = useThemeSetting();
  const deviceScheme = useColorScheme();
  const defaultTheme: Theme = deviceScheme === 'dark' ? 'dark' : 'light';
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const forceUpdate = useForceUpdate();
  console.log(defaultTheme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    if (Platform.OS == 'web')
      nextTheme.set(theme === 'light' ? 'dark' : 'light');
    forceUpdate();
  };

  console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      <TamaguiProvider
        config={config}
        disableInjectCSS
        defaultTheme={theme}
        {...rest}
      >
        {children}
      </TamaguiProvider>
    </ThemeContext.Provider>
  );
};
