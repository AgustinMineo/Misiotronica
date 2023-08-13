import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ProductModal } from '../ProductModal/ProductModal';
import './Products.css'

function Products({ id, productImg, name, stock, price, description, shortDescription,category }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="card rounded-3 me-4 ms-4 mt-3 card-width" >
        <div className='bg-primary w-25 rounded-bottom position-absolute top-0 end-0 mx-3 text-center'>
          <p className='my-1 fs-5 text-white'>{price}</p>
        </div>
        <div className="">
          <img src={productImg} className="card-img-top mx-0" alt={'Imagen del producto ' + name} width={'300px'} height={'300px'} />
        </div>
        <div className="card-body row mb-2 align-items-center">
          <div className='mb-4 cardDetails'>
            <h4 className="card-title text-center">{name}</h4>
            <h6 className="card-text text-break">{shortDescription}</h6>
          </div>
          <hr/>
          <p className=''><span className='fw-bold'>Categoría :</span> {category}</p>
          <p className="card-text"> <span className='fw-bold'>Stock : </span>{stock}</p>
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
