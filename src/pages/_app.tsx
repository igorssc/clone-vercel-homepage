import * as React from 'react'
import Router from 'next/router'
import { AppProps } from 'next/app'
import NProgress from 'nprogress'

import '@styles/tailwind.css'
import '@styles/nprogress.css'
import '../styles/styles.css'
import GlobalStyle from '@styles/Global'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default App
