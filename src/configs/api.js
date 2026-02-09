import axios from "axios";

export async function getData() {
  const response = await axios.get('https://dummyjson.com/products')
  return response;
}

export async function getSingleProductData(id) {
  const response = await axios.get(`https://dummyjson.com/products/${id}`)
  return response;
}