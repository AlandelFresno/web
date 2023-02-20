import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Roboto } from '@next/font/google';
import lightTheme from '../themes/light-theme';

const roboto = Roboto({ weight: ['400'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={lightTheme}>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}

