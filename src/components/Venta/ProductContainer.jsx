import React from 'react'
import { ProductsList } from './ProductsList';
import { Products } from './Products/Products';

const productArray = [];
productArray.push({
    id : '1',
    productImg : 'https://img.freepik.com/free-vector/hand-drawn-annual-calendar-template_23-2149716984.jpg?w=1060&t=st=1690210043~exp=1690210643~hmac=325d40f6c098b580512d6c5777cd0e7f741b436c0184a04f77380ce35dcd63cb',
    name: 'PRUEBA1',
    stock: '200',
    price:'3000',
    shortDescription:'lorem im',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    });
    productArray.push({
        id: '2',
        productImg : 'https://img.freepik.com/free-vector/hand-drawn-annual-calendar-template_23-2149716984.jpg?w=1060&t=st=1690210043~exp=1690210643~hmac=325d40f6c098b580512d6c5777cd0e7f741b436c0184a04f77380ce35dcd63cb',
        name: 'PRUEBA',
        stock: '200',
        price:'3000',
        shortDescription:'lorem im',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    });
    productArray.push({
      id: '3',
      productImg : 'https://img.freepik.com/free-vector/hand-drawn-annual-calendar-template_23-2149716984.jpg?w=1060&t=st=1690210043~exp=1690210643~hmac=325d40f6c098b580512d6c5777cd0e7f741b436c0184a04f77380ce35dcd63cb',
      name: 'PRUEBA',
      stock: '200',
      price:'3000',
      shortDescription:'lorem im',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
  });
  productArray.push({
    id: '4',
    productImg : 'https://img.freepik.com/free-vector/hand-drawn-annual-calendar-template_23-2149716984.jpg?w=1060&t=st=1690210043~exp=1690210643~hmac=325d40f6c098b580512d6c5777cd0e7f741b436c0184a04f77380ce35dcd63cb',
    name: 'PRUEBA',
    stock: '200',
    price:'3000',
    shortDescription:'lorem im',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
});
productArray.push({
  id: '1001',
  productImg: "https://example.com/product_images/auriculares.jpg",
  name: "Auriculares Inalámbricos",
  stock: '50',
  price: '39.99',
  shortDescription: "Auriculares Inalámbricos",
  description: "Disfruta de la libertad de movimiento con estos auriculares inalámbricos. Con una calidad de sonido excepcional y una batería de larga duración, son perfectos para escuchar música, hacer llamadas y más."
});

productArray.push({
  id: '1002',
  productImg: "https://example.com/product_images/camara_seguridad.jpg",
  name: "Cámara de Seguridad IP",
  stock: '20',
  price: '89.95',
  shortDescription: "Cámara de Seguridad IP",
  description: "Mantén tu hogar o negocio seguro con esta cámara de seguridad IP. Con visión nocturna, detección de movimiento y acceso remoto, podrás vigilar tu propiedad desde cualquier lugar."
});

productArray.push({
  id: '1003',
  productImg: "https://example.com/product_images/smart_tv.jpg",
  name: "Smart TV 55\"",
  stock: '10',
  price: '699.00',
  shortDescription: "Smart TV 55\"",
  description: "Experimenta la mejor calidad de imagen con este Smart TV de 55 pulgadas. Con resolución 4K, acceso a aplicaciones y control por voz, es perfecto para disfrutar de tus contenidos favoritos."
});

productArray.push({
  id: '1004',
  productImg: "https://example.com/product_images/power_bank.jpg",
  name: "Power Bank 10000mAh",
  stock: '30',
  price: '29.99',
  shortDescription: "Power Bank 10000mAh",
  description: "Nunca te quedes sin batería con esta Power Bank de 10000mAh. Carga tu teléfono, tablet u otros dispositivos sobre la marcha y mantente conectado en todo momento."
});

productArray.push({
  id: '1005',
  productImg: "https://example.com/product_images/teclado_gamer.jpg",
  name: "Teclado Gamer RGB",
  stock: '15',
  price: '79.95',
  shortDescription: "Teclado Gamer RGB",
  description: "Mejora tu experiencia de juego con este teclado gamer con retroiluminación RGB personalizable. Con teclas mecánicas de respuesta rápida, te proporcionará un control preciso y cómodo en tus juegos favoritos."
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
            shortDescription={prod.shortDescription}
            description={prod.description}
            />
          ))}
        </ProductsList>
      </div>
    </>
  )
}

export {ProductContainer}
