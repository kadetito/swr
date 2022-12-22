import "../scss/index.scss";
import { SessionProvider } from "next-auth/react";
import { SSRProvider } from "react-bootstrap";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { lightTheme } from "../themes";
import { AuthProvider, UiProvider } from "../context";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <SSRProvider>
          <AuthProvider>
            <UiProvider>
              <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <Component {...pageProps} />
              </ThemeProvider>
            </UiProvider>
          </AuthProvider>
        </SSRProvider>
      </SWRConfig>
    </SessionProvider>
  );
}
