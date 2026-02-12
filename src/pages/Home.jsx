import { useEffect, useState } from "react"
import { getData } from "../configs/api"
import Card from '../components/Card'
import ProductsSkeleton from "../components/ProductsSkeleton"

function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    try {
      getData()
        .then((response) => setData(response.data.products))
    } catch (error) {
      console.error('Something went wrong while fetching data', error.message)
    }
  }, [])

  return (
    <div className='w-3/4 mx-auto flex flex-col select-none'>
      <div className='mt-10 text-center p-6'>
        <h1 className='text-2xl sm:text-4xl tracking-wide font-extrabold bg-blue-500 px-3 pb-4 -skew-6 text-white inline-block drop-shadow-md hover:drop-shadow-xl cursor-default transition hover:-translate-y-0.5 md:text-6xl'>Welcome to BuyVy</h1>
        <p className='text-3xl mt-10 text-gray-700'>People's trust is what BuyVy is.</p>
      </div>
      <h2 className='text-2xl font-semibold text-black/80 mb-5'>Our Products</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full items-center mb-4'>
        {
          !data.length
            ? (
              Array.from({length: 12}, (_, i) => (
                <ProductsSkeleton key={i} />
              ))
            )
            : (
              data.map((product) => (
                <Card key={product.id} product={product} />
              ))
            )
        }
      </div>
      
    </div>
  )
}

export default Home