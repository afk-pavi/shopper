import React from 'react'
import './ProductCard.scss'
type Props = {
    title:string
    image: string
}

const ProductCard = (props: Props) => {
  return (
    <div className='ProductCard'>
        <img src={props.image} />
        <h3>{props.title}</h3>
    </div>
  )
}

export default ProductCard