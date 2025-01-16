import { AppProps } from "next/app";
import "@/styles/globals.css";
import {Layout}  from "../Layouts/layout";

function MyApp({ Component, pageProps }: any) {
  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
