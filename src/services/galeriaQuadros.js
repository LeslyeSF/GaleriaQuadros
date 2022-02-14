import axios from "axios";
import { api } from "./apiUrl";

function createConfig(token){
    const config = {
      headers:{
        "Authorization": `Bearer ${token}`
      }
    };
    return config;
}

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

function checkout(body,token){
    const config = createConfig(token);
    const promise = axios.post(`http://localhost:5000/checkout`, body, config);
    return promise;
}
function getData(){
    const promise = axios.get(`${api}/data`);

    return promise;
}
function logOutPromise(token){
    const config = createConfig(token);
    const promise = axios.post("http://localhost:5000/logout",{},config);
    return promise;
}


export {
    getProductById,
    addProductToCart,
    checkout,
    getData,
    findProductsInShoppingCart,
    removeProductFromCart,
    logOutPromise
};
