import React from "react";
import {Header} from '../components/Header';
import {MuiThemeProvider, CssBaseline} from "@material-ui/core";
import theme from '../theme';
import Head from "next/head";
import '../styles/globals.css'
import { Provider } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps }:any) {
  return (
      <>
        <Head>
          <title>RJournal</title>
        </Head>
          <MuiThemeProvider theme={theme}>
             <CssBaseline />
             <Provider store={store}>
                <Header />
                <Component { ...pageProps } />
             </Provider>
          </MuiThemeProvider>
      </>
  );
}

export default MyApp