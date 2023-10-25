import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductModal.css';
import { MdAddShoppingCart } from "react-icons/md";

/*Agregar que cuando el rol sea distinto a null se pueda agregar un producto al carrito, 
sino que el boton de añadir al carrito no aparezca.
Si tiene rol y no tiene stock tiene que aparecer deshabilitado.
Tambien agregar un validador de stock cuando se agrega al carrito. 
Que desde el front tome el stock actual y reste 1 por cada clic. Si el valor es 0, se desactiva el boton.
*/
import Swal from 'sweetalert2';
function ProductModal({ productImg,extraImages, name, stock, price, description, onClose }) {
  const [currentImage, setCurrentImage] = React.useState(productImg);
  const handleAddToCart = () => {
    Swal.fire({
      title: 'Añadir al carrito',
      text: `¿Deseas agregar "${name}" al carrito?`,
      imageUrl: `${currentImage}`,
      imageAlt:`Imagen del producto ${currentImage}`,
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

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };
  
  let extraImagesAr = []
  if(extraImages.length >1){
    for(let i=0; i<extraImages.length ; i++){
      extraImagesAr[i]=extraImages[i].image
    }
  }else{
     extraImagesAr = [productImg, ...extraImages];
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content text-center">
        <div className="modal-header">
          <h3>{name}</h3>
          <button className="btn-close" onClick={onClose}></button>
        </div>
        <div className="modal-body">
          <div className="text-center">
            <div className="product-modal__main-image">
              <img src={currentImage} alt={'Imagen del producto ' + name} width={'200px'} height={'200px'} object-fit="cover"/>
            </div>
          </div>
         { <div className="product-modal__images ">
            {
            extraImagesAr.map((image) => (
              <div className="product-modal__image border border-1" key={image} >
                <img
                  src={image}
                  alt={'Imagen del producto ' + name}
                  width={'100px'}
                  height={'50px'}
                  className=''
                  onClick={(e) => { e.stopPropagation(); handleImageChange(image) }}
                />
              </div>
            ))}
            </div>}
          <div className="text-container">
            <p className='mx-5'>{description}</p>
          </div>
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
          <button className="btn mb-3 details border" onClick={handleAddToCart} disabled={stock === 0} >
          <MdAddShoppingCart/> Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export {ProductModal}
