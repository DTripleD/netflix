import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import "../styles/globals.css";

type ComponentWithSession = React.ComponentType<AppProps & { session: any }>;

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps & { Component: ComponentWithSession }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
