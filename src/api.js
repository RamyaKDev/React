import axios from "axios";

export const getProducts = ()=> axios.get("http://localhost:8080/api/products");

export const cartProducts=()=>axios.get("http://localhost:8080/api/cart");