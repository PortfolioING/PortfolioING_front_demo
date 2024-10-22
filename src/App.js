import "./App.css";

import MainPage from "./page/MainPage";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 0px; /* 스크롤바의 너비 */
    height: 0px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <MainPage />
    </>
  );
}
export default App;
