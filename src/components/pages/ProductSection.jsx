import React from 'react'
import ProductCard from "./ProductCard"

const ProductSection = ({title,items=[]}) => {
  return (
    <div className='mb-12'>
        <h2 className='text-2xl font-semibold mb-4'>{title}</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {items.map((items,i)=>{
                return(
                <ProductCard 
                key={i}
                name={items.name}
                price={items.price} />
            )})}
        </div>
    </div>
  )
}

export default ProductSection