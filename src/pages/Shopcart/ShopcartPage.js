import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import OptionsWindow from "../../components/OptionsWindow";
import { ProductInfo } from "../../components/ProductInfo/ProductInfo";

import { findProductsInShoppingCart } from "../../services/galeriaQuadros";

import { PageContainer } from "../../styles/ContainerStyle";
import { CartButton, ProductName } from "../../styles/ProductInfoStyle";
import { ProductsCardInfo } from "../../styles/ShopcartStyle";

export function ShopcartPage() {
    const navigate = useNavigate();
    const token = 1//useContext(UserContext);

    const [products, setProducts] = useState([{
        imageUrl: 'https://images.unsplash.com/photo-1644433441297-66f97625a279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80',
        name:'Arte Tal',
        price: 3000,
        artistName: 'Fran',
    }, {
        imageUrl: 'https://images.unsplash.com/photo-1644433441297-66f97625a279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80',
        name:'Arte Tal',
        price: 3000,
        artistName: 'Fran',
    }, {
        imageUrl: 'https://images.unsplash.com/photo-1644433441297-66f97625a279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80',
        name:'Arte Tal',
        price: 3000,
        artistName: 'Fran',
    }, {
        imageUrl: 'https://images.unsplash.com/photo-1644433441297-66f97625a279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80',
        name:'Arte Tal',
        price: 3000,
        artistName: 'Fran',
    }, {
        imageUrl: 'https://images.unsplash.com/photo-1644433441297-66f97625a279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80',
        name:'Arte Tal',
        price: 3000,
        artistName: 'Fran',
    }, {
        imageUrl: 'https://images.unsplash.com/photo-1644433441297-66f97625a279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80',
        name:'Arte Tal',
        price: 3000,
        artistName: 'Fran',
    }, {
        imageUrl: 'https://images.unsplash.com/photo-1644433441297-66f97625a279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80',
        name:'Arte Tal',
        price: 3000,
        artistName: 'Fran',
    }, {
        imageUrl: 'https://images.unsplash.com/photo-1644433441297-66f97625a279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80',
        name:'Arte Tal',
        price: 3000,
        artistName: 'Fran',
    }]);
    
    const [showWindow, setShowWindow] = useState(false);

    useEffect(() => {
        findProductsInShoppingCart({ token })
            .then((res) => setProducts(res.data))
            .catch((err) => console.error());
    }, [])

    return (
        <PageContainer>
            <Header setShowWindow={setShowWindow} />
            {(showWindow)? <OptionsWindow setShowWindow={setShowWindow}/> : ""}
            
            {
                products.length ?
                    <>
                        <ProductsCardInfo>
                            {
                                products.map((prod, index) => 
                                    <ProductInfo key={index} imageUrl={prod.imageUrl} name={prod.name} price={prod.price} />
                                )
                            }
                            
                        </ProductsCardInfo>
                        <CartButton onClick={ () => {navigate('/checkout')} }>Finalizar pedido</CartButton>
                    </>
                :   <ProductName> Não há produtos no carrinho </ProductName>
            }
            <CartButton onClick={ () => {navigate('/')} }>Continuar comprando</CartButton>
            
        </PageContainer>
    );
}
