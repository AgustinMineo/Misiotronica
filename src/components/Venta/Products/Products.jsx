import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ProductModal } from '../ProductModal/ProductModal';
import './Products.css'

function Products({ id, productImg, name, stock, price, description, shortDescription }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div class="card col-3 mx-3 rounded-3 mt-3" style={{ width: '90rem;' }}>
        <div className='bg-primary w-25 rounded-bottom position-absolute top-0 end-0 mx-3 text-center'>
          <p className='my-1'>{price}</p>
        </div>
        <div className="">
        <img src={productImg} className="card-img-top mx-0" alt={'Imagen del producto ' + name} />
        </div>
        <div className="card-body row mb-2 align-items-center">
          <div className='col-lg-6 border-end border-dark'>
            <h6 className="card-title text-center">{name}</h6>
            <hr />
            <p className="card-text">{shortDescription}</p>
          </div>
          <div className='col-lg-6'>
            <p className=''>Categoria : Electro</p>
            <p className="card-text">Stock : {stock}</p>
          </div>
        </div>
        <button className="btn mb-3 details border" onClick={handleOpenModal}>
          Ver Detalles
        </button>
      </div>

      {openModal &&
        createPortal(
          <ProductModal productImg={productImg} name={name} stock={stock} price={price} description={description} onClose={handleCloseModal} />,
          document.getElementById('modal-root')
        )}
    </>
  );
}


export {Products}
