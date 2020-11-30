import App, { AppProps } from 'next/app';
import { useSelector } from "react-redux";
import { ThemeProvider } from 'styled-components'
import React from 'react';
import { darkTheme, lightTheme } from '../styles/vars';
import 'antd/dist/antd.css';
import NextI18NextInstance, { appWithTranslation } from '../../i18n';

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