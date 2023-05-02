import { useThemeSetting } from '@tamagui/next-theme';
import React from 'react';
export const toggleTheme = function () {
  const { current, set } = useThemeSetting();

  const setMode = function (mode: 'dark' | 'light') {
    set(mode);
    return;
  };

  return { current, setMode };
};
