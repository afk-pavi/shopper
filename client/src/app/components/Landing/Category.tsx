import React from 'react'

type Props = {
    image: string,
    name: string
}

const Category = (props: Props) => {
    const {name, image} = props
  return (
    <div className="Category">
        <img src={image} />
        <h2>{name}</h2>
    </div>
  )
}

export default Category