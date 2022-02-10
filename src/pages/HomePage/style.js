import styled from "styled-components";

const HomeScreen = styled.div`
width: 375px;
min-height: 100vh;

background-color: #F8F7F3;
padding-bottom: 50px;

display: flex;
flex-direction: column;
align-items: center;
gap: 5px;
`;
const Carrosel = styled.div`
width: 355px;
height: 300px;

background-color: #D2CAC0;
`;
const OptionContainer = styled.div`
width: 355px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 15px;
`;
const Option = styled.div`
width: 170px;

color: #252525;

display: flex;
flex-direction: column;
align-items: center;
text-align: center;

div{
  margin: 0px;
  width: 150px;
  height: 100px;
  overflow: hidden;
  img{
    width: 100%;
  }
}
&:hover{
  cursor:pointer;
  border: 1px solid #252525;
}
p{
  font-size: 15px;
}
span{
  font-weight: 700;
}
`;
const Title = styled.h1`
color: #252525;
font-size: 20px;
font-weight: 600;
`;

export {HomeScreen, Carrosel, OptionContainer, Option, Title};