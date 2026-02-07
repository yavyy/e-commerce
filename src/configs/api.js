import axios from "axios";

export async function getData() {
  const response = await axios.get('https://fakestoreapi.com/products')
  return response;
}