import { useCallback, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import OptionsWindow from "../../components/OptionsWindow";
import { ProductInfo } from "../../components/ProductInfo/ProductInfo";
import UserContext from "../../contexts/UserContext";

import { findProductsInShoppingCart, removeProductFromCart } from "../../services/galeriaQuadros";
import ModalError from "../../shared/ModalError";
import { tokenVerify  } from "../../services/tokenService";

import { PageContainer } from "../../styles/ContainerStyle";
import { CartButton, ProductName } from "../../styles/ProductInfoStyle";
import { ProductsCardInfo } from "../../styles/ShopcartStyle";

export function ShopcartPage() {
    const navigate = useNavigate();
    const { user, token } = useContext(UserContext);
    const {setProductSelected} = useContext(UserContext);

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
    }, [token]);

    useEffect(() => {
        tokenVerify(navigate, token);
        findProductsInShoppingCart({ token })
            .then((res) => setProducts([...res.data]))
            .catch((err) => {
                console.error()
                if (!user || err.response.status === 401) {
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
    }, [navigate, token, user])

    function handleCheckout(){
        setProductSelected(products);
        navigate('/checkout');
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
                                    <ProductInfo key={index} id={prod._id} imageUrl={prod.linkImg} name={prod.title} price={prod.value} removeProduct={removeProduct} />
                                )
                            }
                            
                        </ProductsCardInfo>

                        <CartButton onClick={ () => handleCheckout() }>Finalizar pedido</CartButton>

                    </>
                :   <ProductName> Não há produtos no carrinho </ProductName>
            }
            <CartButton onClick={ () => navigate('/') }>Continuar comprando</CartButton>

            {
                modalError ?
                    <ModalError message={ messageError } setModal={ setModalError } />
                : ''
            }
            
        </PageContainer>
    );
}
