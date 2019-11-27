import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #fff;
  font-family: sans-serif;
}

.App {
  padding: 0 20px;
}

`

export default GlobalStyles
