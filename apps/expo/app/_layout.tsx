import 'expo-dev-client';
import React, { useContext } from 'react';
import { Provider } from 'app/provider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';
import { useThemeNameState } from 'app/utils/themeState';
// import { ThemeContext } from 'app/provider/theme/themeContext';
// TODO: localize the headers
export default function App() {
  const theme = useThemeNameState();
  const isDarkTheme = theme === 'dark';
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  if (!loaded) {
    return <SplashScreen />;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Provider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="auto" hidden={true} />
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: isDarkTheme ? '#222222' : '#f5f5f5',
              },

              headerTintColor: isDarkTheme ? '#ffffff' : '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerBackTitleVisible: false,
              headerShown: false,
            }}
          >
            <Stack.Screen name="(tabs)" />
          </Stack>
        </SafeAreaView>
      </Provider>
    </I18nextProvider>
  );
}
