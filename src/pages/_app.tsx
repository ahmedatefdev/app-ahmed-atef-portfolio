import App, { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components'
import React from 'react';
import { darkTheme } from '../styles/vars';
import 'antd/dist/antd.css';
import { appWithTranslation } from '../../i18n';

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; 
NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  // const theme = useSelector((state: IState) => state.game.theme)
  const theme: string = "dark";
  return (
    <ThemeProvider theme={(!theme || theme === 'light') ? darkTheme : darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider >

  );
}
MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)