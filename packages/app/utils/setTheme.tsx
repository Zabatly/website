import { useForceUpdate, useThemeName } from 'tamagui';
import { useState } from 'react';
export const toggleTheme = function () {
  const [current, setCurrentTheme] = useState<any>(useThemeName());
  const forceUpdate = useForceUpdate();
  const setMode = function (mode: 'dark' | 'light') {
    setCurrentTheme(mode);
    forceUpdate();
    return;
  };

  return { current, setMode };
};
