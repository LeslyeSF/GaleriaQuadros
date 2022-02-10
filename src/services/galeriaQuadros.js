import axios from "axios";
import { api } from "./apiUrl";

function getProductById(id) {
    const promise = axios.get(`${api}/products/${id}`);
    return promise;
}

export {
    getProductById,
};
