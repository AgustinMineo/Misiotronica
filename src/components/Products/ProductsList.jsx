import React from 'react'
import { Products } from './Products'
function ProductsList(prop) {
  return (
    <>
      {prop.map(prod => <Products 
      key={prod.id}
      productImg={prod.productImg}
      name={prod.name}
      stock={prod.stock}
      price={prod.price}
      description={prod.description}
      />)}
    </>
  )
}

export {ProductsList}
