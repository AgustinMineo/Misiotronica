import {React,useState,useEffect} from 'react'
import { ProductsList } from './ProductsList';
import { Products } from './Products/Products';
import './ProductContainer.css'
function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); 

  useEffect(() => {
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al buscar productos', error));
  }, []); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSearchTerm(''); 
  };

  const filteredProducts = products.filter((product) => {
    return (
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === '' || product.category === selectedCategory) 
    );
  });

  
  const categories = [...new Set(products.map((product) => product.category))];


  return (
    <>
      <div className='w-100 d-flex align-items-center justify-content-center search-bar'>
        <input
          type="text"
          placeholder="Buscar productos... "
          value={searchTerm}
          onChange={handleSearchChange}
          className='w-50 my-5 rounded border border-3 border-secondary form-control'
          />
      <div className='mx-5'>
        <select className='btn btn-primary' value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Todas las categorías</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      </div>
      {filteredProducts.length === 0 ? (
        <h1>No existen productos con ese nombre.</h1>
      ) : (
      <ProductsList>
        {filteredProducts.map((prod) => (
          <Products
            key={prod.id}
            id={prod.id}
            productImg={prod.productImg}
            name={prod.name}
            stock={prod.stock}
            price={prod.price}
            shortDescription={prod.shortDescription}
            description={prod.description}
            category={prod.category}
          />
        ))}
      </ProductsList>
      )}
    </>
  );
}

export {ProductContainer}
