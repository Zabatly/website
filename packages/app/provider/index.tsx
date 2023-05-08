import { TamaguiProviderProps, TamaguiProvider } from '@my/ui';
import { AuthProvider } from './auth';
import { TRPCProvider } from './trpc'; //mobile only
import { SafeProvider } from './safeArea';
import { GestureProvider } from './gestureHandler';
import { Theme } from 'tamagui';
import { Platform } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from './theme/themeContext';
import { SuspenseBoundary } from './suspense';
import { config } from '@my/ui/src';
import { useThemeNameState } from 'app/utils/themeState';
const ConditionalWrap = ({ condition, wrap, children }) =>
  condition ? wrap(children) : children;

const ThemeComp = ({ children }) => {
  // const { theme } = useContext(ThemeContext);
  return (
    <ConditionalWrap
      condition={Platform.OS !== 'web'}
      wrap={(wrappedChildren) => ({ wrappedChildren })}
    >
      {children}
    </ConditionalWrap>
  );
};

export function Provider({
  children,
  ...rest
}: Omit<TamaguiProviderProps, 'config'>) {
  const theme = useThemeNameState(rest.defaultTheme as any);
  return (
    <AuthProvider>
      <TamaguiProvider
        config={config}
        disableInjectCSS
        defaultTheme={theme}
        themeClassNameOnRoot
        {...rest}
      >
        <TRPCProvider>
          <SafeProvider>
            <GestureProvider>{children}</GestureProvider>
          </SafeProvider>
        </TRPCProvider>
      </TamaguiProvider>
    </AuthProvider>
  );
}
