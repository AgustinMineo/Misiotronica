import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductModal.css';
import { MdAddShoppingCart } from "react-icons/md";
import Swal from 'sweetalert2';
function ProductModal({ productImg, name, stock, price, description, onClose }) {
  const handleAddToCart = () => {
    Swal.fire({
      title: 'Añadir al carrito',
      text: `¿Deseas agregar "${name}" al carrito?`,
      imageUrl: `${productImg}`,
      imageAlt:`Imagen del producto ${productImg}`,
      imageHeight:300,
      imageWidth:300,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '¡Agregado!',
          text: `"${name}" ha sido agregado al carrito correctamente.`,
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Aceptar'
        });
      }
    });
  };
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <div className="modal-header">
          <h3>{name}</h3>
          <button className="btn-close" onClick={onClose}></button>
        </div>
        <div className="modal-body">
          <div className="text-center">
            <img src={productImg} alt={'Imagen del producto ' + name} width={'300px'} height={'300px'} />
          </div>
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
          <button className="btn mb-3 details border" onClick={handleAddToCart}>
          <MdAddShoppingCart/> Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export {ProductModal}
