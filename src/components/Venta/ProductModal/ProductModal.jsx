import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductModal.css';
import { MdAddShoppingCart } from "react-icons/md";
function ProductModal({ productImg, name, stock, price, description, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{name}</h3>
          <button className="btn-close" onClick={onClose}></button>
        </div>
        <div className="modal-body">
          <img src={productImg} alt={'Imagen del producto ' + name} />
          <p className='mx-5'>{description}</p>
          <div className='row'>
            <div className="col-lg-6 align-self-center">
              <p className='d-flex align-items-center justify-content-center border my-2'><span className='fw-bold mx-2'>Stock: </span> {stock}</p>
            </div>
            <div className="col-lg-6 my-3">
              <p className='d-flex align-items-center justify-content-center border my-2'><span className='fw-bold mx-2'> Precio </span> $ {price}</p>
            </div>
          </div>
        </div>
        <div className="modal-footer d-flex justify-content-center align-items-center">
          <button className="btn mb-3 details border" onClick={() => alert('Añadir al carrito')}>
          <MdAddShoppingCart/> Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export {ProductModal}
