import * as React from 'react'
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'

class Document extends NextDocument {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(context)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;800&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="min-h-screen">
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  let storageKey = 'darkMode';
                  let classNameDark = 'dark-mode';
                  let classNameLight = 'light-mode';

                  function setClassOnDocumentBody(darkMode) {
                    document.body.classList.add(darkMode ? classNameDark : classNameLight);
                    document.body.classList.remove(darkMode ? classNameLight : classNameDark);
                  }

                  let preferDarkQuery = '(prefers-color-scheme: dark)';
                  let mql = window.matchMedia(preferDarkQuery);
                  let supportsColorSchemeQuery = mql.media === preferDarkQuery;
                  let localStorageTheme = null;

                  try {
                    localStorageTheme = localStorage.getItem(storageKey);
                  } catch (err) {}

                  var localStorageExists = localStorageTheme !== null;
                  if (localStorageExists) {
                    localStorageTheme = JSON.parse(localStorageTheme);
                  }

                  if (localStorageExists) {
                    setClassOnDocumentBody(localStorageTheme);
                  } else if (supportsColorSchemeQuery) {
                    setClassOnDocumentBody(mql.matches);
                    localStorage.setItem(storageKey, mql.matches);
                  } else {
                    var isDarkMode = document.body.classList.contains(classNameDark);
                    localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
                  }
                })();
              `
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
