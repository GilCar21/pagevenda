import { createGlobalStyle } from 'styled-components'



const Variantes = {
    red900: "#740001",
    red500: "#ae0001",
    
    yellow700: "#d3a625",
    yellow500: "#eeba30",

    black1: "#000",
}

export const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input, a{
    font-family: "Oswald", Helvetica Neue;
    font-size: 1rem;
  }
  body{
    color: #fff;
    background: #000;
  }
`