import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  font-size: 16px;
  color: #313131;
}

body {
  margin: 0;
  background-color: #fff;
  font-family: 'Open Sans', sans-serif;
}

.root {
  height: 100vh;
}


`

export default GlobalStyles
