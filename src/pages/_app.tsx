import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { MediaQueryProvider } from "../components/Provider/MediaQueryProvider";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MediaQueryProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </MediaQueryProvider>
  );
}

export default MyApp;
