import axios from "axios";
import { api } from "./apiUrl";

function getProductById(id) {
    const promise = axios.get(`${api}/products/${id}`);
    return promise;
}

function addProductToCart({ idProduct, token}) {
    console.log('i')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.post(`${api}/add/${ idProduct }`, config);
    return promise;
}

export {
    getProductById,
    addProductToCart,
};
