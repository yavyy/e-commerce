import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getSingleProductData } from "../configs/api"
import { useCart } from "../context/CartContext"
import { useAuth } from "../context/AuthContext"
import ViewDetailSkeleton from "../components/ViewDetailSkeleton"

function ViewDetails() {
  const [productData, setProductData] = useState({})
  const [loading, setLoading] = useState(true)

  const { cart, addToCart } = useCart()

  const { currentUser, setMode } = useAuth()

  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getSingleProductData(id)
        if (!response) throw new Error("Error fetching product data")
        setProductData(response.data)
      } catch (error) {
        console.error(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  const cartItem = cart.find(item => item.id === productData.id)
  const quantity = cartItem ? cartItem.quantity : 0

  function handleAddToCartAuth() {
    if (currentUser) {
      addToCart(productData.id)
    } else {
      setMode("login")
      navigate('/auth')
      return alert("Please login to add item in cart.")
    }
  }

  if (loading) {
    return (
      <div className="w-full flex flex-col items-center gap-3">
        {/* <p className="text-blue-500 text-3xl font-extrabold">Loading...</p> */}
        <ViewDetailSkeleton />
      </div>
    )
  }
  return (
    !loading && (
      <div className="w-3/4  flex justify-center items-center mx-auto relative">
        <h1 className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-extrabold text-4xl md:text-9xl -skew-12 px-10 pb-10 w-full text-center bg-blue-600/50 text-white backdrop-blur-3xl">BuyVy</h1>
        <section className="bg-white/40 backdrop-blur-2xl p-4 rounded md:max-w-2/3 mx-auto flex overflow-hidden not-xl:flex-col gap-4 w-full md:my-10 my-3 shadow-lg">
          <div className="w-full flex justify-center">
            <img
              src={productData.thumbnail}
              alt={productData.title}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <h2 className="sm:text-2xl text-gray-600 font-bold text-lg">{productData.title}</h2>
            <p className="text-sm text-gray-700 not-sm:text-xs">Rating: {productData.rating} ({productData.reviews?.length} reviews)</p>
            <p className="border-b border-gray-400 pb-2 not-lg:tracking-tighter text-gray-600 not-sm:text-sm">{productData.description}</p>
            <div className=" flex flex-col gap-1">
              <p className="not-sm:text-sm">Tags:</p>
              {
                productData.tags?.length &&
                <div className="flex gap-2 flex-wrap">
                  {
                    productData.tags?.map((tag) => (
                      <span key={tag} className="border border-gray-500 text-xs px-2 rounded-lg shadow-md">{tag}</span>
                    ))
                  }
                </div>
              }
            </div>
            <p className="text-2xl font-bold text-blue-600">${productData.price}</p>
            <div className="flex flex-col gap-2">
              <button
                onClick={handleAddToCartAuth}
                className="px-3 py-2 rounded-full bg-blue-500 text-white font-bold cursor-pointer transition duration-75 hover:-translate-y-0.5 active:scale-95">Add to cart {currentUser && quantity > 0 && `(${quantity})`}</button>
              <button className="px-3 py-2 rounded-full border border-gray-200 shadow-sm font-bold cursor-pointer transition duration-75 hover:-translate-y-0.5 text-gray-700 active:scale-95">Buy Now</button>
            </div>
          </div>
        </section>

      </div>
    )
  )
}

export default ViewDetails