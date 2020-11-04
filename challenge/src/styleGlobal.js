import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
body {
  background: #fff;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  width: 100%;
  font-family: sans-serif;
}`;
