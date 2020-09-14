import "../styles/globals.css";
import Head from "next/head";
import {AppContextProvider} from '../components/Context'

export default function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Head>
        <title>Moflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </AppContextProvider>
  );
} 
