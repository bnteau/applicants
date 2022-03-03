import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import StoreProvider from '../components/Content/store/provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </StoreProvider>
  );
}

export default MyApp;
