import { IoTrashBinSharp } from "react-icons/io5";
import { ProductName, ProductPrice } from "../../styles/ProductInfoStyle";
import { ProductCard, ProductImage } from "../../styles/ShopcartStyle";

export function ProductInfo({
        imageUrl,
        name,
        price,
    }) {
    
    return (
            <ProductCard>
                <ProductImage src={ imageUrl } />
                <ProductName>{ name }</ProductName>
                <ProductPrice>{ price }</ProductPrice>
                <IoTrashBinSharp />
            </ProductCard>
    );
}
