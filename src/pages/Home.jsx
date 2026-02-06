import React from 'react'
import Card from '../components/Card'

function Home() {
  return (
    <div className='w-3/4 mx-auto flex flex-col '>
      <div className='my-20 text-center p-6'>
        <h1 className='text-6xl text-gray-900'>Welcome to BuyVy</h1>
        <p className='text-3xl mt-10 text-gray-700'>People's trust is what BuyVy is.</p>
      </div>
      <h2 className='text-2xl font-semibold text-black/80 mb-5'>Our Products</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Home