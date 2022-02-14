import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 220px;
  background: #F8F7F3;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
    background: #e7e8e3;
    border: hidden;
    box-sizing: border-box;
    border-radius: 15px;
    text-indent: 11px;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 27px;
    ::placeholder {
      color: #252525;
    }
  }
  nav {
    width: 312px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #252525;
    font-size: 32px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 33px;
  }
  Link{
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  color: #252525;
  margin-top: 40px;
}
`;

const BDiv =styled.div`
width: 303px;
display:flex;
align-items:center;
justify-content: end;`;

const Button = styled.button`
  width: 225px;
  height: 45px;
  border: hidden;
  background: #e3e4df;
  border-radius: 15px;
  font-size: 21px;
  line-height: 26px;
  color: #252525;
  margin-bottom: 25px;
`;
const Title = styled.h1`
width: 355px;
color: #252525;
font-size: 25px;
font-weight: 700;
`;

export { Container, Button, BDiv, Title };