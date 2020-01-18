import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  font-size: 16px;
  color: #313131;
}

body {
    margin: 0;
    background-color: #fff;
    font-family: 'Open Sans',sans-serif;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
}


#root {
    width: 100vh;
    height: 100vh;
}


`

export default GlobalStyles
