import styled from "styled-components";

const CheckoutScreen = styled.div`
width: 100%;
min-height: 100vh;

background-color: #F8F7F3;
padding: 220px 10px 50px 10px;

display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
`;

const OptionContainer = styled.div`
width: 355px;
display: flex;
flex-direction: column;
gap: 5px;
`;
const Option = styled.div`
width: 100%;

color: #252525;

display: flex;
justify-content: space-between;

border-bottom: 1px solid #252525;
img{
  height: 60px;
}
div{
  span{
    font-weight: 600;
  }
  text-align: center;
}
`;
const Value = styled.span`
  color: #FF0000;
`;
const Title = styled.h1`
width: 355px;
color: #252525;
font-size: 25px;
font-weight: 700;
`;

const Amount = styled.div`
width: 355px;
display: flex;
justify-content: space-between;
color: #252525;
font-weight: 500;
`;

const ButtonCheckout = styled.div`
width: 200px;
height: 50px;
display: flex;
justify-content: center;
align-items:center;

background-color: #252525;

color:#D2CAC0;

text-align: center;
font-weight: 600;

border-radius: 50px;

&:hover{
  cursor:pointer;
  background-color: #D2CAC0;
  color:#252525;
}
`;
export {CheckoutScreen, Value, OptionContainer, Option, Title, Amount, ButtonCheckout};