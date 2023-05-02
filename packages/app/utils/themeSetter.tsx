import React from 'react';
import { Button } from 'tamagui';

interface ThemeSetterProps {
  onToggleTheme: () => void;
}

const ThemeSetter: React.FC<ThemeSetterProps> = ({ onToggleTheme }) => {
  return <Button onPress={onToggleTheme}>Toggle Theme</Button>;
};

export default ThemeSetter;
