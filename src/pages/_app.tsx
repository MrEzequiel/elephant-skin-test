import GlobalStyle from '@/styles/GlobalStyles';
import { theme } from '@/styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main className={openSans.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
