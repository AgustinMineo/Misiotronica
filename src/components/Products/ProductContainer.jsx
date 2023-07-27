import React from 'react'
import { ProductsList } from './ProductsList';
import { Products } from './Products';

const productArray = [];
productArray.push({
    id : '1',
    productImg : 'https://img.freepik.com/free-vector/hand-drawn-annual-calendar-template_23-2149716984.jpg?w=1060&t=st=1690210043~exp=1690210643~hmac=325d40f6c098b580512d6c5777cd0e7f741b436c0184a04f77380ce35dcd63cb',
    name: 'PRUEBA1',
    stock: '200',
    price:'3000',
    description:'UNA PRUEBA CON ARRAY 1'
    });
    productArray.push({
        id: '2',
        productImg : 'https://img.freepik.com/free-vector/hand-drawn-annual-calendar-template_23-2149716984.jpg?w=1060&t=st=1690210043~exp=1690210643~hmac=325d40f6c098b580512d6c5777cd0e7f741b436c0184a04f77380ce35dcd63cb',
        name: 'PRUEBA',
        stock: '200',
        price:'3000',
        description:'UNA PRUEBA CON ARRAY2'
    });


function ProductContainer() {
  return (
    <>
      <div className='row mt-5'>
        <ProductsList>
          {productArray.map(prod => (
            <Products 
            id={prod.id}
            productImg = {prod.productImg}
            name = {prod.name}
            stock= {prod.stock}
            price = {prod.price}
            description={prod.description}
            />
          ))}
        </ProductsList>
      </div>
    </>
  )
}

export {ProductContainer}
