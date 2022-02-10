import styled from "styled-components";

const NavBar = styled.header`
    width: 100vw;
    min-height: 170px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
`;

const Logo = styled.div`
    width: 100vw;
    height: 140px;

    color: #D4CFBC;
    text-align: center;
    font-size: 40px;
    font-weight: 500;

    background-color: #7B7363;
    border-radius: 10% 10% 20% 81% / 0% 0% 54% 76%;

    padding-top: 10px;
`;

const ActionButtons = styled.div`
    width: 90vw;

    color: #272A14;
    text-align: center;
    font-size: 35px;
    font-weight: 500;

    display: flex;
    justify-content: space-between;

    padding-top: 10px;
`;

export {
    NavBar,
    Logo,
    ActionButtons,
}