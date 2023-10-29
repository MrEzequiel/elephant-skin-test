import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import GlobalStyle from '@/styles/GlobalStyles';
import { theme } from '@/styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main className={openSans.className}>
        {getLayout(<Component {...pageProps} />)}
      </main>
    </ThemeProvider>
  );
}
