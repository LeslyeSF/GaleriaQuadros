import styled from "styled-components";

const NavBar = styled.header`
    width: 100vw;
    min-height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;

    background-color: #F8F7F3;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`;

const Logo = styled.div`
    width: 100vw;
    height: 140px;

    color: #E7E8E3;
    text-align: center;
    font-size: 40px;
    font-weight: 500;

    display: flex;
    justify-content: center;

    background-color: #252525;
    border-radius: 10% 10% 20% 81% / 0% 0% 54% 76%;

    padding-top: 10px;
`;

const LogoImage = styled.img`
    width: 240px;
    height: 100px;

    text-align: center;
`;

const ActionButtons = styled.div`
    width: 90vw;

    color: #252525;
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
    LogoImage,
    ActionButtons,
}