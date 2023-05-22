import '@tamagui/core/reset.css';
import '@tamagui/font-inter/css/400.css';
import '@tamagui/font-inter/css/700.css';

import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme';
import { Provider } from 'app/provider';
import Head from 'next/head';
import React, { useEffect, useMemo } from 'react';
import type { SolitoAppProps } from 'solito';
import 'raf/polyfill';
import { trpc } from 'app/utils/trpc.web';
import { appWithTranslation } from 'next-i18next';
import { useThemeState } from 'app/utils/themeState';

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
  const { name } = useThemeState();

  useEffect(() => {
    if (name) {
      setTheme(name);
    }
  }, [name, setTheme]);
  return (
    <NextThemeProvider onChangeTheme={setTheme as any} forcedTheme={theme}>
      <Provider disableRootThemeClass defaultTheme={theme}>
        {children}
      </Provider>
    </NextThemeProvider>
  );
}

export default trpc.withTRPC(appWithTranslation(MyApp));
