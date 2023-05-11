import { TamaguiProviderProps, TamaguiProvider } from '@my/ui';
import { AuthProvider } from './auth';
import { TRPCProvider } from './trpc'; //mobile only
import { SafeProvider } from './safeArea';
import { GestureProvider } from './gestureHandler';
import { Platform } from 'react-native';
import { config } from '@my/ui/src';
import { useThemeNameState } from 'app/utils/themeState';
import {
  ToastProvider,
  ToastViewport,
  Toast,
  useToastController,
  useToastState,
} from '@tamagui/toast';
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
        <ToastProvider>
          <ToastViewport top={2} left={0} right={0} />
          <TRPCProvider>
            <SafeProvider>
              <GestureProvider>{children}</GestureProvider>
            </SafeProvider>
          </TRPCProvider>
        </ToastProvider>
      </TamaguiProvider>
    </AuthProvider>
  );
}
