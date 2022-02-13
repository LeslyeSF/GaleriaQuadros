import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import OptionsWindow from "../../components/OptionsWindow";
import { ProductInfo } from "../../components/ProductInfo/ProductInfo";

import { findProductsInShoppingCart, removeProductFromCart } from "../../services/galeriaQuadros";
import ModalError from "../../shared/ModalError";

import { PageContainer } from "../../styles/ContainerStyle";
import { CartButton, ProductName } from "../../styles/ProductInfoStyle";
import { ProductsCardInfo } from "../../styles/ShopcartStyle";

export function ShopcartPage() {
    const navigate = useNavigate();
    const token = 1//useContext(UserContext);

    const [modalError, setModalError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const [showWindow, setShowWindow] = useState(false);

    const [products, setProducts] = useState([{
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1644433441297-66f97625a279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80',
        name:'Arte Tal',
        price: 3000,
        artistName: 'Fran',
    }, {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1644433441297-66f97625a279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80',
        name:'Arte Tal',
        price: 3000,
        artistName: 'Fran',
    }, {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1644433441297-66f97625a279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80',
        name:'Arte Tal',
        price: 3000,
        artistName: 'Fran',
    }, {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1644433441297-66f97625a279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80',
        name:'Arte Tal',
        price: 3000,
        artistName: 'Fran',
    }]);

    useEffect(() => {
        findProductsInShoppingCart({ token })
            .then((res) => setProducts(res.data))
            .catch((err) => console.error());
    }, [products])

    function removeProduct({ id }) {
        removeProductFromCart({ idProduct: id, token})
            .then((res) => setProducts(res.data))
            .catch((err) => {
                setMessageError('Erro, tente novamente mais tarde')
                setModalError(true)
            });
    }

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
                                    <ProductInfo key={index} id={prod.id} imageUrl={prod.imageUrl} name={prod.name} price={prod.price} removeProduct={removeProduct} />
                                )
                            }
                            
                        </ProductsCardInfo>
                        <CartButton onClick={ () => {navigate('/checkout')} }>Finalizar pedido</CartButton>
                    </>
                :   <ProductName> Não há produtos no carrinho </ProductName>
            }
            <CartButton onClick={ () => {navigate('/')} }>Continuar comprando</CartButton>

            {
                modalError ?
                    <ModalError message={ messageError } setModal={ setModalError } />
                : ''
            }
            
        </PageContainer>
    );
}
