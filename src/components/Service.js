import axios from "axios";

export const allProduct = () => {
    return axios.get("http://localhost:8080/api/products");
};

export const findById = (pid) => {
    return axios.get(`http://localhost:8080/api/find_product/${pid}`)
}

export const addProduct = (product) => {
    return axios.post("http://localhost:8080/api/add_product", product);
};

export const updateProduct = (pid, product) => {
    return axios.put(`http://localhost:8080/api/update_product/${pid}`, product)
}

export const deleteProduct = (pid) => {
    return axios.delete(`http://localhost:8080/api/delete_product/${pid}`);
};