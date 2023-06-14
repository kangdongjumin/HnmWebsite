import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item, nowLogin}) => {
    const navigate=useNavigate()
    const goToProductDetail=()=> {
        console.log("클릭")
        if(nowLogin==true) {
            navigate(`/products/${item.id}`)
        } else {
            navigate('/login')
        }
    }

  return (
    <div onClick={()=>goToProductDetail()} className="item-box">
        <img src={item?.img} />
      <div>{item?.choice?"Conscious Choice":""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new?"신제품":""}</div>

    </div>
  )
}

export default ProductCard
