import 'expo-dev-client';
import React from 'react';
import { Provider } from 'app/provider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';
export default function App() {
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
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{
                headerStyle: {
                  backgroundColor: '#222222',
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerBackTitleVisible: false,
                headerShown: false,
              }}
            />
          </Stack>
        </SafeAreaView>
        <StatusBar style="auto" hidden={true} />
      </Provider>
    </I18nextProvider>
  );
}
