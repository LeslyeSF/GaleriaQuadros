import styled from "styled-components";

const ProductsCardInfo = styled.div`
    width: 90vw;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: #F8F7F3;
    border-radius: 15px;

    margin: 0 auto;
    /* padding: 10px; */
`;

const ProductCard = styled.div`
    width: 90vw;

    font-size: 25px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    padding: 10px;
`;

const ProductImage = styled.img`
    width: 10vw;
    height: 10vw;
    
    border-radius: 10px;
`;

export {
    ProductsCardInfo,
    ProductCard,
    ProductImage,
};
