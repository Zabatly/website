import { Paragraph, YStack, StackProps } from '@my/ui';
import React from 'react';
import { useThemeNameState } from 'app/utils/themeState';

export function AppShell({
  children,
  props,
}: {
  children: React.ReactNode;
  props?: StackProps;
}) {
  const theme = useThemeNameState();
  const isDark = theme == 'dark';
  return (
    <YStack f={1} theme={theme} backgroundColor={'$backgroundStrong'}>
      {children}
    </YStack>
  );
}
