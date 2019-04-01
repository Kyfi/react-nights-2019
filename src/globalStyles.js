import 'sanitize.css'
import { createGlobalStyle } from 'styled-components'

import theme from './common/theme'

const GlobalStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::after,
    &::before {
      box-sizing: border-box;
    }
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'circular', sans-serif;
    font-weight: 100;
    background-color: ${theme.color.softGray};
  }

  #root {
    width: 100%;
    height: 100%;
  }
`

export default GlobalStyles
