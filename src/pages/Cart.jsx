import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"


function Cart() {
  const { cart, updateQuantity, removeItemFromCart } = useCart()
  return (
    <div className='w-full my-5 grid grid-cols-1 gap-y-3 cursor-default place-items-center'>
      {
        cart.map((item) => (
          <div key={item.id} className='w-1/2 border rounded shadow-md border-gray-400 flex'>
            <div className="md:w-1/3 w-full">
              <img className="w-full" src={item.thumbnail} alt={item.title} />
            </div>
            <div className="w-full p-4 flex justify-between">
              <div className="w-2/3 flex flex-col gap-1 justify-center items-start">
                <h4 className="font-bold hover:underline text-xl">
                  <Link to={`/product/${item.id}`}>{item.title}</Link>
                </h4>
                <p className="bg-white/50 shadow-md px-3 rounded-full">{item.brand}</p>
                <p className="line-clamp-1">{item.description}</p>
                <p className="text-lg font-bold">${item.price}</p>
                <button className="bg-blue-300/70 px-3 py-1 rounded-sm cursor-pointer shadow-md active:scale-95 transition duration-75">Checkout</button>
              </div>
              <div className="flex flex-col gap-2 justify-around">
                <p className="text-center">Quantity</p>
                <div className="flex gap-2">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-gray-200 px-3 rounded-xs cursor-pointer active:scale-95 transition duration-75">-</button>
                  <span className="font-semibold">{item?.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-gray-200 px-3 rounded-xs cursor-pointer active:scale-95 transition duration-75"> +</button>
                </div>
                <button onClick={() => removeItemFromCart(item.id)} className="bg-gray-300 px-3 py-1 rounded-sm cursor-pointer active:scale-95 transition duration-75">Remove</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Cart