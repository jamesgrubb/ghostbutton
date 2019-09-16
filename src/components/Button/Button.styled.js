import styled from "styled-components"
import { callbackify } from "util"

export const StyledButton = styled.button`
overflow-x: hidden;
position: relative;
background: transparent;
color: ${({theme})=> theme.colors.button};
border: calc(${({theme}) => theme.borderWidth} * 1px) solid ${({theme}) => theme.colors.button};
box-shadow: calc(${({theme}) => theme.boxShadowDepth} * 1px) calc(${({theme}) => theme.boxShadowDepth} * 1px) 0 #888;
cursor: pointer;
font-size: calc(${({theme}) => theme.fontSizes.text} * 1rem);
font-weight: 800;
outline: transparent;
padding: calc(${({theme})=> theme.px}  * 1em) calc(${({theme}) => theme.py} * 1em);
transition: all 0.15s ease;

&:hover{
    transform: translate(calc(${({theme})=> theme.boxShadowDepth} / 2 * 1px), calc(${({theme})=> theme.boxShadowDepth} / 2 * 1px) );
    box-shadow: calc(${({theme})=> theme.boxShadowDepth} / 2 * 1px) calc(${({theme})=> theme.boxShadowDepth} / 2 * 1px) 0 #888;
};
&:active{
    box-shadow: 0 0 0 #888;
}
&:after{
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    background: red;
    width: 100%;
    height: 100%;
    transform: translateX(-50%);
    transition: translate 0.15s ease;
    mix-blend-mode: overlay;
}
&:hover:after{
    transform: translateX(0%);
}
`