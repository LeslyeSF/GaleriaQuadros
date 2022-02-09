import styled from "styled-components";
import IconCart from "../IconCart";
import IconOption from "../IconOption";

export default function Header(){
  return(
    <>
      <Container>
        <p>Galeria Quadros</p>
      </Container>
      <SearchContainer>
        <IconOption/>
          <InputConatiner>
            <input placeholder={"Pesquisar"}/>
            <div>P</div>
          </InputConatiner>
        <IconCart/>
      </SearchContainer>
    </>
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
  
`;
const SearchContainer = styled.div`
  width: 100%;
  height: 60px;

  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InputConatiner = styled.div`
  width: 290px;
  height: 40px;

  border: 2px solid #D2CAC0;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1px 5px 1px 5px;

  input{
    width: 249px;
    height: 35px;

    border: 0px solid #D2CAC0;
    border-radius: 50px;

    padding: 15px;

    color: #252525;
    font-weight: 400;
    font-size: 15px;

    background-color:#F8F7F3;

  }
  input::placeholder{
    color: #D2CAC0;
    font-weight: 400;
    font-size: 15px;
  }
  input:focus{
    box-shadow: 0 0 0 0;
    border: none;
    outline: 0;
  }
  div{
    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    color: #F8F7F3;
    background-color: #252525;
  }
  div:hover{
    color: #252525;
    background-color: #D2CAC0;
    cursor: pointer;
  }
`;