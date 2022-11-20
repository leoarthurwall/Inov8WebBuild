import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fff;
  box-sizing: border-box;
  }
  :root {
    ${"" /* FONTS */}
    --font-all: sans-serif, Arial, Helvetica;

    ${"" /* COLORS */}
    --color-white: #ffffff;
    --color-black: #000000;
    --color-orange: #ddad42;
    --color-green: #00FF00;
    --color-green-button-text: #161615;
    --color-video-background:#ebebeb;
    --color-video-text:#707070;

    ${"" /* Break Points */}
    --desktop: 1920px;
    --laptop: 1280px;
    --tablet: 768px;
    --mobile: 428px;
  }
`;

export default GlobalStyle;
