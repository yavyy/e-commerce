import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useAuth } from "../context/AuthContext"

function Card({ product }) {

  const { cart, addToCart } = useCart()

  const { currentUser, setMode } = useAuth()

  function handleAddToCartAuth() {
    if (currentUser) {
      addToCart(product.id)
    } else {
      setMode("login")
      navigate('/auth')
      return alert("Please login to add item in cart.")
    }
  }

  const cartItem = cart.find(item => item.id === product.id)
  const quantity = cartItem ? cartItem.quantity : 0

  const navigate = useNavigate()

  return (
    <div className='border border-gray-200 rounded-md flex flex-col shadow-xl hover:-translate-y-1 cursor-pointer transition bg-white/50 backdrop-blur-2xl'>
      <div className='w-3/4 pt-4 flex justify-center items-center mx-auto'>
        <img className='' src={product.thumbnail} alt={product.title} />
      </div>
      <section className='mt-2 p-3'>
        <h3 className='text-sm md:text-xl font-semibold line-clamp-1'>{product.title}</h3>
        <p className='tracking-tighter md:tracking-normal my-2 text-sm line-clamp-2'>{product.description}</p>
        <div className='flex flex-col lg:flex-row justify-between items-center md:gap-4'>
          <div className='flex items-center'>
            <p className='font-bold text-gray-600 text-lg'>${product.price}</p>
          </div>
          <div className='flex items-center flex-col xl:flex-row gap-2'>
            <button onClick={() => navigate(`/product/${product.id}`)} className='bg-gray-700 text-white text-xs sm:text-sm rounded px-4 py-2 cursor-pointer tracking-tighter hover:bg-gray-800 active:scale-95 transition'>View Details</button>
            <button onClick={handleAddToCartAuth} className='bg-blue-700 text-white text-xs sm:text-sm rounded px-4 py-2 cursor-pointer tracking-tighter hover:bg-blue-800 active:scale-95 transition'>Add to cart {currentUser && quantity > 0 && `(${quantity})`}</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Card