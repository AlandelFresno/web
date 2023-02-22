import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import lightTheme from '../themes/light-theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={lightTheme}>
      <main>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}

