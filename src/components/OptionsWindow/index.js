import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";

export default function OptionsWindow({setShowWindow}){
  return(
    <>
      <Container onClick={()=> setShowWindow(false)}></Container>
      <Window>
        <div>
          <FaUserAlt/>
          <p>Faça seu login</p>
        </div>
      </Window>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color:#000000;
  opacity: 0.5;

  position: absolute;
  top: 0px;
  left: 0;
  z-index:2;
`;
const Window = styled.div`
  width: 250px;
  height: 100%;

  position: absolute;
  top:0;
  left:0;
  z-index: 3;

  background-color: #E7E8E3;

  div:nth-child(1){
    width:100%;
    height: 70px;
    color: #F8F7F3;
    background-color: #252525;

    padding: 10px;

    font-size: 20px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
  }

`;