import React from 'react'

function Products({productImg,name,stock,price,description}) {
  return (
    <div className="row">
      <div class="card col-2" style={{width: '18rem;'}}>
        <img src={productImg} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href={name} className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card col-2" style={{width: '18rem;'}}>
        <img src={productImg} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href={name} className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card col-2" style={{width: '18rem;'}}>
        <img src={productImg} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href={name} className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card col-2" style={{width: '18rem;'}}>
        <img src={productImg} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href={name} className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card col-2" style={{width: '18rem;'}}>
        <img src={productImg} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href={name} className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card col-2" style={{width: '18rem;'}}>
        <img src={productImg} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href={name} className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card col-2" style={{width: '18rem;'}}>
        <img src={productImg} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href={name} className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card col-2" style={{width: '18rem;'}}>
        <img src={productImg} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href={name} className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}

export {Products}
