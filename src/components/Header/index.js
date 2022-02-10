import styled from "styled-components";


export default function Header(){
  return(
      <Container>
        <p>Galeria Quadros</p>
      </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 50px;

  background-color: #252525;

  color: #F8F7F3;
  font-size: 25px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top:0;
  z-index:1;
  
`;
