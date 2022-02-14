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
    const [messageError, setMessageError] = useState(false);
    const [showWindow, setShowWindow] = useState(false);

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
            <Header setShowWindow={setShowWindow} />
            {(showWindow)? <OptionsWindow setShowWindow={setShowWindow}/> : ""}
            {
                product ?
                    <>
                        <ProductPresentationCard>
                            <ProductImage src={product.linkImg} />
                            <ProductName>{ product.title }</ProductName>
                            <ProductPrice>{ product.value }</ProductPrice>
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
