import styled from "styled-components";

const SearchContainer = styled.div`
  width: 100%;
  height: 60px;

  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .react-icons{
    color: #252525;
    font-size: 25px;
  }
  .react-icons:hover{
    cursor: pointer;
    color: #D2CAC0;
  }
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
  .react-icons{
    color: #D2CAC0;
    font-size: 20px;
  }
  .react-icons:hover{
    cursor: pointer;
    color: #252525;
  }
`;
export {SearchContainer, InputConatiner};