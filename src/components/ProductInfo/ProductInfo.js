import { useEffect } from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import { ProductName, ProductPrice } from "../../styles/ProductInfoStyle";
import { ProductCard, ProductImage } from "../../styles/ShopcartStyle";

export function ProductInfo({
    id,
    imageUrl,
    name,
    price,
    removeProduct,
}) {
    useEffect(() => {}, [id]);
    
    return (
            <ProductCard>
                <ProductImage src={ imageUrl } />
                <ProductName>{ name }</ProductName>
                <ProductPrice>{ price }</ProductPrice>
                <IoTrashBinSharp onClick={() => removeProduct({ id })} />
            </ProductCard>
    );
}
