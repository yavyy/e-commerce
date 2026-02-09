import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleProductData } from "../configs/api"

function ViewDetails() {
  const [productData, setProductData] = useState({})

  const {id} = useParams()

  useEffect(() => {
    try {
      getSingleProductData(id)
      .then((data) => console.log(data.data))
    } catch (error) {
      console.error(error.message)
    }
  }, [])
  return (
    <div>ViewDetails {id}</div>
  )
}

export default ViewDetails