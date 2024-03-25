import React from 'react'
import './Landing.scss'
import stockImage from '../../../../public/electronics_category.jpeg'
import Category from './Category'
import ProductCard from '../ProductCard/ProductCard'
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
    const products = [
        {id: 1, title: 'Product', image: stockImage},
        {id: 1, title: 'Product', image: stockImage},
        {id: 1, title: 'Product', image: stockImage},
        {id: 1, title: 'Product', image: stockImage},
        {id: 1, title: 'Product', image: stockImage},
        {id: 1, title: 'Product', image: stockImage},
        {id: 1, title: 'Product', image: stockImage},
        {id: 1, title: 'Product', image: stockImage},
        {id: 1, title: 'Product', image: stockImage},
        {id: 1, title: 'Product', image: stockImage},
    ]
  return (
    <div className="Landing">
        <div className="Landing__categories">
            {categories.map((el, idx) => (
                <Category key={`${idx}_${el.id}`} name={el.name} image={el.image.src} />
            ))}
        </div>
        <section className="Landing__items_section">
            <h1>Category Title</h1>
            <div className="products_list">
                {products.map((el, idx) => (
                    <ProductCard title={el.title} image={el.image.src} key={`${idx}_${el.id}`} />
                ))}
            </div>
        </section>
    </div>
  )
}

export default Landing