import styled from "styled-components";

const ProductPresentationCard = styled.div`
    width: 90vw;
    height: 90vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #BAAF98;
    border-radius: 15px;

    margin: 0 auto;
    padding: 10px;
`;

const ProductImage = styled.img`
    width: 80vw;
    height: 60vw;
    
    border-radius: 10px;

    margin: 0 auto;
`;

const ProductName = styled.h2`
    color: #272A14;
    font-size: 24px;

    margin-top: 5px;
`;

const ProductPrice = styled.h2`
    color: #6E7644;
    font-size: 24px;
`;

const CartButton = styled.button`
    color: #272A14;
    font-size: 20px;
`;

export {
    ProductPresentationCard,
    ProductImage,
    ProductName,
    ProductPrice,
};
