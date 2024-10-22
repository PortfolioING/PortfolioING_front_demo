import styled from "styled-components";
import "../reset.css";
import "../styles/MenuBar.css";
function Menu() {
  return (
    <Bar>
      <div className="wrap_menu">
        <p>🤍</p>
        <p>about PING</p>
        <p>주요기능</p>
        <p>요금</p>
        <p>기타</p>
      </div>
      <div className="wrap_menu">
        <p>My Page</p>
        <button className="login_btn">login</button>
        <button className="free_btn"> 무료로 시작하기</button>
      </div>
    </Bar>
  );
}
export default Menu;
const Bar = styled.div`
  display: flex;
  justify-content: space-around;

  display: fixed;
  top: 0px;
  height: 108px;
  background-color: #000000;

  > div {
    color: #ffffff;
  }
  > div {
    flex-shrink: 0;
    min-width: 300px;
  }

  > div p {
    white-space: nowrap;
  }

  button {
    white-space: nowrap;
  }
`;
