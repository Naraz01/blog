import React from "react";
import {Header} from '../components/Header';
import {MuiThemeProvider, CssBaseline} from "@material-ui/core";
import theme from '../theme';
import Head from "next/head";
import '../styles/globals.css'

function MyApp({ Component, pageProps }:any) {
  return (
      <>
        <Head>
          <title>RJournal</title>
        </Head>
          <MuiThemeProvider theme={theme}>
             <CssBaseline />
             <Header />
             <Component { ...pageProps } />
          </MuiThemeProvider>
      </>
  );
}

export default MyApp
