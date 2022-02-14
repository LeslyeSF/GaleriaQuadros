import axios from "axios";
import { api } from "./apiUrl";

function getProductById(id) {
    const promise = axios.get(`${api}/products/${id}`);
    return promise;
}

function addProductToCart({ idProduct, token}) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.post(`${api}/shopcart/${ idProduct }`, {}, config);
    return promise;
}

function findProductsInShoppingCart({ token}) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.get(`${api}/shopcart`, config);
    return promise;
}

function removeProductFromCart({ idProduct, token}) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.delete(`${api}/shopcart/${ idProduct }`, config);
    return promise;
}

export {
    getProductById,
    addProductToCart,
    findProductsInShoppingCart,
    removeProductFromCart,
};
