import axios from "axios";

export async function getData() {
  const response = await axios.get('https://dummyjson.com/products')
  return response;
}