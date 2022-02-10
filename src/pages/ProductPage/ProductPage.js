import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { addProductToCart, getProductById } from "../../services/galeriaQuadros";
import ModalError from "../../shared/ModalError";
import ModalSuccess from "../../shared/ModalSuccess";
import { PageContainer } from "../../styles/ContainerStyle";
import { CartButton, ProductImage, ProductName, ProductPresentationCard, ProductPrice } from "../../styles/ProductInfoStyle";

export function ProductPage() {
    const { idProduct } = useParams();
    const navigate = useNavigate();
    const token = 1//useContext(UserContext);


    const [product, setProduct] = useState(null);
    const [modalError, setModalError] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [messageError, setMessageError] = useState(false);

    useEffect(() => {
        getProductById(idProduct)
            .then((res) => setProduct(res.data))
            .catch((err) => {
                if (err?.status(404)) {
                    setMessageError('O produto não existe');
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
    }, [idProduct, navigate])
    
    function addToCart({ idProduct, token }) {
        addProductToCart({ idProduct, token })
            .then((res) => {
                setModalSuccess(true);
                setTimeout(() => {
                    navigate('/')
                }, [])
            })
            .catch((err) => {
                if (!token) {
                    setMessageError('Antes, por favor faça login');
                    setModalError(true);
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000);
                }
                console.error();
                setMessageError(err);
                setModalError(true);
            })
    }

    return (
        <PageContainer>
            <Header />
            {
                product ?
                    <>
                        <ProductPresentationCard>
                            <ProductImage src='https://images.unsplash.com/photo-1644433441297-66f97625a279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80' />
                            <ProductName>{ product.name }</ProductName>
                            <ProductPrice>{ product.price }</ProductPrice>
                        </ProductPresentationCard>
                        
                        <CartButton onClick={ () => {addToCart({ idProduct, token })} }>Adicionar no carrinho</CartButton>
                        <ProductName>Artista: { product.artistName }</ProductName>
                    </>
                : ''
            }

            {
                modalError ?
                    <ModalError message={ messageError } setModal={ setModalError } />
                : ''
            }

            {
                modalSuccess ?
                    <ModalSuccess message={ 'Produto adicionado' } />
                : ''
            }
            
        </PageContainer>
    );
}
