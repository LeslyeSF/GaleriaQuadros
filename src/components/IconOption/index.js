import styled from "styled-components";

export default function IconOption(){
  return(
    <IconContainer>
      <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="25" height="3" rx="2.5" fill="#252525"/>
        <rect y="8" width="25" height="3" rx="2.5" fill="#252525"/>
        <rect y="16" width="25" height="3" rx="2.5" fill="#252525"/>
      </svg>
    </IconContainer>
  );
}
const IconContainer = styled.div`
  svg:hover{
    cursor:pointer;
  }
`;
