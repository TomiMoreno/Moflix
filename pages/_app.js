import "../styles/globals.css";
import Head from "next/head";
import {AppContextProvider} from '../components/Context'
import { useFetchUser, UserProvider } from '../utils/user'

export default function MyApp({ Component, pageProps }) {
  const {user, loading} = useFetchUser()
  return (
    <UserProvider value={{user, loading}}>
      <Head>
        <title>Moflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </UserProvider>
  );
} 
