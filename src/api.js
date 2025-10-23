import axios from "axios";

export function getProductList() {
  return axios.get("https://dummyjson.com/products");
}

export function getProduct(id) {
  if (typeof id === "undefined" || id === null) {
    return Promise.reject(new Error("Missing product id"));
  }
  return axios.get(`https://dummyjson.com/products/${id}`);
}

