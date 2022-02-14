import { useCallback, useEffect, useState } from "react";
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
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiI2MjA3ZDNjMTdhNDI4NTRjZTFmY2FjOTgiLCJpYXQiOjE2NDQ4MzU5MDEsImV4cCI6MTY0NTAwODcwMX0.hzIlAL9nkYiCqLB7VVzhB_0Wfi67OkiNA44O_Ph79is' //useContext(UserContext);

    const [modalError, setModalError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const [showWindow, setShowWindow] = useState(false);

    const [products, setProducts] = useState([]);
    
    const removeProduct = useCallback(({ id }) => {
        removeProductFromCart({ idProduct: id, token})
            .then((res) => setProducts(oldProducts => {
                oldProducts.filter((prod) => prod._id === id);
                window.location.reload()
            }))
            .catch((err) => {
                setMessageError('Erro, tente novamente mais tarde')
                setModalError(true)
            });
    }, []);

    useEffect(() => {
        findProductsInShoppingCart({ token })
            .then((res) => setProducts([...res.data]))
            .catch((err) => {
                console.error()
                if (!token || err.response.status === 401) {
                    setMessageError('Antes, por favor faça login');
                    setModalError(true);
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000);
                }
                if (err.response.status === 500) {
                    setMessageError("Servidor fora de área, tente novamente mais tarde");
                    setModalError(true);
                    setTimeout(() => {
                        navigate('/')
                    }, 2000)
                }
        });
    }, [navigate])
    console.log(products[0]?._id);

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
                                    <ProductInfo key={index} id={prod._id} imageUrl={prod.linkImg} name={prod.title} price={prod.value} removeProduct={removeProduct} />
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
