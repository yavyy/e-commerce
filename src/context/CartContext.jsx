import { createContext } from "react";

const CartContext = createContext(null)

export function CartProvider({ children }) {
  return (
    <CartContext.Provider>
      {children}
    </CartContext.Provider>
  )
}