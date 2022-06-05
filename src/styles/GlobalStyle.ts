import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { PALETTE } from './palette';
import "../fonts/font.css";
import BackgroundPattern from "../assets/images/background/pattern.png";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    outline: none;
    box-sizing: border-box;
  }
  body {
    font-family: 'SBAggroM', sans-serif;
    height: 100vh;
    background-image: url(${BackgroundPattern});
    background-repeat: repeat-y;
    background-size: cover;
    background-color: ${PALETTE.GREEN};
  }
  #root{
    height: 100%;
  }
  button {
    font-family: 'SBAggroB', sans-serif;
    background: none;
    border: none;
    cursor: pointer;
    padding:0;
  }
  a{
    text-decoration: none;
    color:${PALETTE.BLACK_010}
  }
  h1{
    margin: 0;
  }
  b{
    font-weight: bold;
  }
`;

export default GlobalStyle;