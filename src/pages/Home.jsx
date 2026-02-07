import { useEffect, useState } from "react"
import { getData } from "../configs/api"
import Card from '../components/Card'

function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    try {
      getData()
        .then((response) => setData(response.data))
    } catch (error) {
      console.error('Something went wrong while fetching data', error.message)
    }
  }, [])

  return (
    <div className='w-3/4 mx-auto flex flex-col '>
      <div className='my-20 text-center p-6'>
        <h1 className='text-6xl text-gray-900'>Welcome to BuyVy</h1>
        <p className='text-3xl mt-10 text-gray-700'>People's trust is what BuyVy is.</p>
      </div>
      <h2 className='text-2xl font-semibold text-black/80 mb-5'>Our Products</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full items-center mb-4'>
        {
          !data.length
            ? (
              <div className="text-xl">Loading...</div>
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