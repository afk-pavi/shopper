import React from 'react'
import './Landing.scss'
import stockImage from '../../../../public/electronics_category.jpeg'
import Category from './Category'
type Props = {}

const Landing = (props: Props) => {

    const categories = [
        {id: 1, name: 'Electronics', image: stockImage},
        {id: 1, name: 'Electronics', image: stockImage},
        {id: 1, name: 'Electronics', image: stockImage},
        {id: 1, name: 'Electronics', image: stockImage},
        {id: 1, name: 'Electronics', image: stockImage},
        {id: 1, name: 'Electronics', image: stockImage},
    ]
  return (
    <div className="Landing">
        <div className="Landing__categories">
            {categories.map((el, idx) => (
                <Category key={`${idx}_${el.id}`} name={el.name} image={el.image.src} />
            ))}
        </div>
    </div>
  )
}

export default Landing