import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Roboto:300,800&display=swap");
html, body{
    height: 100%;
    background: ${({theme}) => theme.colors.background};
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    color: ${({theme}) => theme.text}
}
`