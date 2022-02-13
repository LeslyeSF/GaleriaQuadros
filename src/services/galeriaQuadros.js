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
    const config = createConfig(token);
    const promise = axios.post(`${api}/addtocart/${ idProduct }`, config);
    return promise;
}

function checkout(body,token){
    const config = createConfig(token);
    const promise = axios.post(`${api}/checkout`, body, config);
    return promise;
}
function getData(){
    const promise = axios.get(`${api}/data`);
    return promise;
}

export {
    getProductById,
    addProductToCart,
    checkout,
    getData
};
