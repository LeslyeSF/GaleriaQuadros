import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import OptionsWindow from "../../components/OptionsWindow";
import UserContext from "../../contexts/UserContext";

import { addProductToCart, getProductById } from "../../services/galeriaQuadros";
import ModalError from "../../shared/ModalError";
import ModalSuccess from "../../shared/ModalSuccess";
import { PageContainer } from "../../styles/ContainerStyle";
import { CartButton, ProductImage, ProductName, ProductPresentationCard, ProductPrice } from "../../styles/ProductInfoStyle";

export function ProductPage() {
    const { idProduct } = useParams();
    const navigate = useNavigate();

    const {token} = useContext(UserContext);

    const [product, setProduct] = useState(null);
    const [modalError, setModalError] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [message, setMessage] = useState(false);
    const [showWindow, setShowWindow] = useState(false);

    useEffect(() => {
        getProductById(idProduct)
            .then((res) => setProduct(res.data))
            .catch((err) => {
                if (err?.status(404)) {
                    setMessage('O produto não existe');
                    setModalError(true);
                    setTimeout(() => {
                        navigate('/');
                    }, 2000)
                }
                console.error()
                setTimeout(() => {
                    navigate('/');
                }, 2000)
            });
    }, [idProduct, navigate]);
    
    function addToCart({ idProduct, token }) {
        addProductToCart({ idProduct, token })
            .then((res) => {
                setMessage('Produto adicionado ao carrinho')
                setModalSuccess(true);
                setTimeout(() => {
                    setModalSuccess(false);
                }, 2000)
            })
            .catch((err) => {
                if (!token || err.response.status === 401) {
                    setMessage('Antes, por favor faça login');
                    setModalError(true);
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000);
                }
                if (err.response.status === 500) {
                    setMessage("Servidor fora de área, tente novamente mais tarde");
                    setModalError(true);
                    setTimeout(() => {
                        navigate('/')
                    }, 2000)
                }
            })
    }

    return (
        <PageContainer>
            <Header setShowWindow={setShowWindow} />
            {(showWindow)? <OptionsWindow setShowWindow={setShowWindow}/> : ""}
            {
                product ?
                    <>
                        <ProductPresentationCard>
                            <ProductImage src={ product.linkImg } />
                            <ProductName>{ product.title }</ProductName>
                            <ProductPrice>{ product.value }</ProductPrice>
                        </ProductPresentationCard>
                        
                        <CartButton onClick={ () => {addToCart({ idProduct, token })} }>Adicionar no carrinho</CartButton>
                        <ProductName>Artista: { product.author }</ProductName>
                    </>
                : ''
            }

            {
                modalError ?
                    <ModalError message={ message } setModal={ setModalError } />
                : ''
            }

            {
                modalSuccess ?
                    <ModalSuccess message={ message } />
                : ''
            }
            
        </PageContainer>
    );
}
