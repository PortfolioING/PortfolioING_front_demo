import { useEffect, useState } from "react";
import MenuBar from "../components/MenuBar";
import styled from "styled-components";
function Slogan() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={visible ? "slogan" : "slogan hidden"}>
      나를 담는 가장 쉬운 방법
    </div>
  );
}
function PortfolioSlide() {
  return (
    <FullLogo>
      <Slogan />
      <div className="fullName">
        <p>Portfolio-</p>
        <p>ING</p>
      </div>
    </FullLogo>
  );
}
function MainPage() {
  return (
    <div>
      <MenuBar />
      <PortfolioSlide />
    </div>
  );
}
const FullLogo = styled.div`
  width: 100%;
  height: calc(100vh - 108px);
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .slogan {
    font-family: Pretendard;
    font-size: 36px;
    font-weight: 700;
    line-height: 42.96px;
    text-align: left;
    color: #e4ff0d;
  }
  .hidden {
    line-height: 0;
    height: 0;
    opacity: 0;
  }
  > .fullName {
    font-family: Sokcho Bada Dotum;
    font-size: 135px;
    font-weight: 900;
    line-height: 148px;
    text-align: left;
    color: #e4ff0d;
    > p {
      display: inline;
    }
  }
`;

export default MainPage;
