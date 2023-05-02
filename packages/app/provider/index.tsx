import { TamaguiProviderProps } from '@my/ui';
import { AuthProvider } from './auth';
import { TRPCProvider } from './trpc'; //mobile only
import { SafeProvider } from './safeArea';
import { GestureProvider } from './gestureHandler';
import { ThemeProvider } from './theme';
import { Theme } from 'tamagui';
import { Platform } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from './theme/themeContext';
import { SuspenseBoundary } from './suspense';
const ConditionalWrap = ({ condition, wrap, children }) =>
  condition ? wrap(children) : children;

const ThemeComp = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ConditionalWrap
      condition={Platform.OS !== 'web'}
      wrap={(wrappedChildren) => <Theme name={theme}>{wrappedChildren}</Theme>}
    >
      {children}
    </ConditionalWrap>
  );
};

export function Provider({
  children,
  ...rest
}: Omit<TamaguiProviderProps, 'config'>) {
  return (
    <AuthProvider>
      <ThemeProvider {...rest}>
        <ThemeComp>
          <TRPCProvider>
            <SafeProvider>
              <GestureProvider>{children}</GestureProvider>
            </SafeProvider>
          </TRPCProvider>
        </ThemeComp>
      </ThemeProvider>
    </AuthProvider>
  );
}
