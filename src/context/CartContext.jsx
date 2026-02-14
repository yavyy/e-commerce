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
      setCart(prev => {
        const existingProduct = prev.find(item => item.id === id)
        if(existingProduct) {
          return prev.map((item) => item.id === id ? {...existingProduct, quantity: item.quantity + 1} : item)
        } else {
          return [...prev, {...response.data, quantity: 1}]
        }
      })
    } catch (error) {
      console.error("Add to cart failed", error)
    }
  }

  function removeItemFromCart(id) {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  function updateQuantity(id, value) {
    if(value < 1) removeItemFromCart(id)
    setCart(prev => {
      return prev.map((item) => item.id === id ? {...item, quantity: value} : item)
    })
  }

  return (
    <CartContext.Provider value={{cart, addToCart, removeItemFromCart, updateQuantity}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  return context
}