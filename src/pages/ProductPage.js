import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { getProductById } from "../services/galeriaQuadros";
import ModalError from "../shared/ModalError";
import { PageContainer } from "../styles/ContainerStyle";
import { ProductImage, ProductName, ProductPresentationCard, ProductPrice } from "../styles/ProductInfoStyle";

export function ProductPage() {
    const { idProduct } = useParams();

    const [product, setProduct] = useState(null)
    const [modalError, setModalError] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        getProductById(idProduct)
            .then((res) => setProduct(res.data))
            .catch((err) => {
                if (err.status(404)) {
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
    console.log(product);
    return (
        <PageContainer>
            <Header />
            {
                product ?
                    <ProductPresentationCard>
                        <ProductImage src='https://images.unsplash.com/photo-1644433441297-66f97625a279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80' />
                        <ProductName>{ product.name }</ProductName>
                        <ProductPrice>{ product.price }</ProductPrice>
                    </ProductPresentationCard>
                : ''
            }

            {
                modalError ?
                    <ModalError message={ messageError } setModal={ setModalError } />
                : ''
            }
        </PageContainer>
    );
}
