import styled from 'styled-components';

const Modal = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: rgba(212, 207, 188, 0.6);

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 10;
`;

const Message = styled.div`
    min-width: 50vw;
    max-width: 90vw;
    min-height: 50vw;
    max-height: 40vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: #E7E8E3;
    border: 2px solid #7B7363;
    border-radius: 10px;

    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.15);

    transition: all 0.4s ease 0, 3s;

    padding: 20px;

    h1 {
        color: #272A14;
        font-size: 26px;
        text-align: center;

        padding: 20px 0;
    }
`;

const ButtonModal = styled.button`

    width: 20vw;

    color: #ffffff;
    font-size: 36px;
    line-height: 42px;
    font-weight: bold;

    background-color:  #BAAF98;
    border-radius: 5px;

    cursor: pointer;

    margin: 10px auto;
`;

export { 
    Modal,
    Message,
    ButtonModal,
};