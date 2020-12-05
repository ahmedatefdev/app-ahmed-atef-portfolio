import App, { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components'
import React from 'react';
import { darkTheme, lightTheme } from '../styles/vars';
import 'antd/dist/antd.css';
import { appWithTranslation } from '../../i18n';
import { wrapper } from '../redux/Store';

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import IState from '../redux/types/IState';
import { useSelector } from 'react-redux';
NProgress.configure({ showSpinner: false ,})

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  const themeName = useSelector((state: IState) => state.theme.themeName)
  return (
    <ThemeProvider theme={(themeName === "dark") ? darkTheme : lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider >

  );
}
MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default wrapper.withRedux(appWithTranslation(MyApp))