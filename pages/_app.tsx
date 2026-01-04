import type { AppProps } from "next/app";
import "../styles/globals.css";
import FloatingEmail from "../components/FloatingEmail";

export default function App({ Component, pageProps }: AppProps) {
 return (
    <>
      <Component {...pageProps} />
      <FloatingEmail />
    </>
  );
}