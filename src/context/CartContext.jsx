import { createContext, useContext, useState } from "react";
import { getSingleProductData } from "../configs/api";

const CartContext = createContext(null)

export function CartProvider({ children }) {

  const [cart, setCart] = useState([])

  async function addToCart(id) {
    try {
      const response =  await getSingleProductData(id)
      if(!response) {
        throw new Error("Failed to add product")
      }
      const existingProduct = cart.find((product) => product.id === id)
      if(existingProduct) {
        setCart(prev => (
          prev.map((item) => item.id === existingProduct.id ? {...existingProduct, quantity: item.quantity + 1} : item)
        ))
      } else {
        setCart(prev => [...prev, {...response.data, quantity: 1}])
      }
    } catch (error) {
      console.error("Add to cart failed", error)
      return
    }
  }

  return (
    <CartContext.Provider value={{cart, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  return context
}