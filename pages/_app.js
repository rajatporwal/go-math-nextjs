import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme/theme";
import createEmotionCache from "../src/createEmotionCache";
import Header from "../src/components/Header";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Search from '/src/components/commons/Search'
import { getSearchData } from "../src/utils";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const searchData = getSearchData();
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header searchData={searchData} />
        <Container maxWidth={false} sx={{maxWidth: '1600px', backgroundColor: 'white'}}>
          <Box sx={{ mt: 7, pt: 3, display: { xs: 'flex', md: 'none' }}} justifyContent="center">
            <Search searchData={searchData} />
          </Box>
          <Box sx={{px: {xs: 1, md: 5}, mt: 7 }}>
            <Component {...pageProps} />
          </Box>
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
