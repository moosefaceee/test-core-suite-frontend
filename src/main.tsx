// https://github.com/WICG/focus-visible
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { css, Global } from '@emotion/react'
import 'focus-visible/dist/focus-visible'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AppProvider, AuthProvider } from './context'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AppProvider>
          <CSSReset />
          <Global
            styles={css`
              * {
                font-family: ${theme.fonts.body};
              }
            `}
          />
          <CSSReset />
          <AuthProvider>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </AuthProvider>
        </AppProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
