import React from 'react'
import { ProductList } from './ProductsList';

const productArray = [];
productArray.push({
    id : 1,
    productImg : 'https://img.freepik.com/free-vector/hand-drawn-annual-calendar-template_23-2149716984.jpg?w=1060&t=st=1690210043~exp=1690210643~hmac=325d40f6c098b580512d6c5777cd0e7f741b436c0184a04f77380ce35dcd63cb',
    name: 'PRUEBA1',
    stock: '200',
    price:'3000',
    description:'UNA PRUEBA CON ARRAY'
    });
    productArray.push({
        id:2,
        productImg : 'https://img.freepik.com/free-vector/hand-drawn-annual-calendar-template_23-2149716984.jpg?w=1060&t=st=1690210043~exp=1690210643~hmac=325d40f6c098b580512d6c5777cd0e7f741b436c0184a04f77380ce35dcd63cb',
        name: 'PRUEBA',
        stock: '200',
        price:'3000',
        description:'UNA PRUEBA CON ARRAY'
    });


function ProductContainer() {
  return (
    <div className='row'>
      <div className="col-lg-12">
        {console.log('desde product array' + productArray)}
        <h1>HOLA desde productContainer.jsx</h1>
      
      </div>
    </div>
  )
}

export {ProductContainer}
