import '@tamagui/core/reset.css';
import '@tamagui/font-inter/css/400.css';
import '@tamagui/font-inter/css/700.css';

import {
  NextThemeProvider,
  useRootTheme,
  useThemeSetting,
} from '@tamagui/next-theme';
import { Provider } from 'app/provider';
import Head from 'next/head';
import React, { useEffect, useMemo } from 'react';
import type { SolitoAppProps } from 'solito';
import 'raf/polyfill';
import { trpc } from 'app/utils/trpc.web';
import { appWithTranslation } from 'next-i18next';
import { useThemeState } from 'app/utils/themeState';
import { useForceUpdate } from '@my/ui';

function MyApp({ Component, pageProps }: SolitoAppProps) {
  const contents = useMemo(() => {
    return <Component {...pageProps} />;
  }, [pageProps, Component]);
  return (
    <>
      <Head>
        <title>Zabatly</title>
        <meta name="description" content="Online venue listing platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>{contents}</ThemeProvider>
    </>
  );
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useRootTheme();
  const forceUpdate = useForceUpdate();
  const { set } = useThemeSetting();
  const { name } = useThemeState();
  useEffect(() => {
    if (name) {
      setTheme(name);
      console.log(name);
      set(name);
      forceUpdate();
    }
  }, [name, setTheme]);
  return (
    <NextThemeProvider onChangeTheme={setTheme as any}>
      <Provider disableRootThemeClass defaultTheme={theme}>
        {children}
      </Provider>
    </NextThemeProvider>
  );
}

export default trpc.withTRPC(appWithTranslation(MyApp));
