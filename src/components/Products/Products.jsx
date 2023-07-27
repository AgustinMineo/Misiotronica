import React from 'react'

function Products({id,productImg,name,stock,price,description}) {
  return (
    <>
      <div class="card col-2 mx-3" style={{width: '18rem;'}}>
        <img src={productImg} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title {id}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Stock : {stock}</p>
          <a href={name} className="btn btn-primary">{price}</a>
        </div>
      </div>
      </>
  )
}

export {Products}
