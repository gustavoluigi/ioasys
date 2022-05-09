import type { AppProps } from "next/app";
import { AuthProvider } from "../context/authContext";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
