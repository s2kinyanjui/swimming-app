import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/carousel/styles.css";

import { ModalsProvider } from "@mantine/modals";

import { createTheme, MantineProvider } from "@mantine/core";
import { useEffect } from "react";
import Head from "next/head";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => console.log("Service Worker registered"))
        .catch((err) =>
          console.error("Service Worker registration failed", err)
        );
    }
  }, []);

  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>Trident</title>
          <meta
            name="description"
            content="Swim workouts | Merchendise | Latest news"
          />
          <link rel="shortcut icon" href="/icons/192.png" />
          <link rel="mask-icon" href="/icons/96.png" color="#FFFFFF" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="apple-touch-icon" href="/icons/96.png" />
          <link rel="apple-touch-icon" sizes="192x192" href="/icons/192.png" />
          <link rel="apple-touch-icon" sizes="512x512" href="/icons/512.png" />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/icons/touch-icon-ipad-retina.png"
          />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <Component {...pageProps} />
      </ModalsProvider>
    </MantineProvider>
  );
}
