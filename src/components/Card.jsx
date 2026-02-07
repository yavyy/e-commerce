

function Card({product}) {
  
  return (
    <div className='border border-gray-200 rounded-md flex flex-col shadow-xl hover:-translate-y-1 cursor-pointer transition'>
      <div className='w-full pt-4 flex justify-center items-center'>
        <img className='max-w-1/2' src={product.thumbnail} alt={product.title} />
      </div>
      <section className='mt-2 p-3'>
        <h3 className='text-xl font-semibold sm:whitespace-nowrap'>{product.title}</h3>
        <p className='tracking-tighter md:tracking-normal my-1 text-sm'>{product.description}</p>
        <div className='flex flex-col md:flex-row justify-between items-center md:gap-4'>
          <div className='flex items-center'>
            <p className='font-bold text-gray-600 text-lg'>${product.price}</p>
          </div>
          <div className='flex items-center flex-col xl:flex-row gap-2'>
            <button className='bg-gray-700 text-white text-sm rounded px-4 py-2 cursor-pointer tracking-tighter hover:bg-gray-800 active:scale-95 transition'>View Details</button>
            <button className='bg-blue-700 text-white text-sm rounded px-4 py-2 cursor-pointer tracking-tighter hover:bg-blue-800 active:scale-95 transition'>Add to cart</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Card