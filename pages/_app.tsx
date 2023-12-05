import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
// import { toastOptions } from "@/public/toasterOptions/toasterOptions";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />

      <Toaster />
    </SessionProvider>
  );
}
