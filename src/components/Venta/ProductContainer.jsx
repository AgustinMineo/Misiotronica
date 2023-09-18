import React, { useState, useEffect } from 'react';
import { ProductsList } from './ProductsList';
import { Products } from './Products/Products';

function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [collaps, setCollaps] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [filterError, setFilterError] = useState('');
  const [orderBy, setOrderBy] = useState('desc');
  const [totalProducts, setTotalProducts] = useState(0);

  const collapseToggle = () =>{
    setCollaps(!collaps);
  }

  
    const fetchData = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al buscar productos', error);
        setError('Error al buscar productos');
        setLoading(false);
      }
    };
    useEffect(() => {
      fetchData();
    }, []);
  
  //Filtros
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSearchTerm('');
    setTotalProducts(products.length);
  };
  
  const filteredProducts = products.filter((product) => {

    return (
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === '' || product.category === selectedCategory)
    );
  });
  
  useEffect(( )=>{
    setTotalProducts(products.length);
  },[products]);
  
  const handlePriceFilter = () => {
    const filteredProducts = products.filter((product) => {
      return product.price >= minPrice && product.price <= maxPrice;
    });

    if(filteredProducts.length !== 0){
      setProducts(filteredProducts);
      setFilterError('');
    }else if (minPrice>maxPrice){
      setFilterError('El minimo no puede ser mayor al maximo.');
        return;
    }else if(minPrice <= 0 || maxPrice <= 0){
      setFilterError('Debe ingresar algun valor para filtrar.');
      return;
    }else if (minPrice<0 || maxPrice<0){
      setFilterError('Los valores ingresados son invalidos.');
      return;
    }
    else{
      setFilterError('No se encontraron productos entre ese rango de valores');
      return;
    }
  };
  const resetProductList = () => {
    fetchData();
    setFilterError('');
  };

  const handleOrderBy = () =>{
    const productFilter = [...products];
    if(orderBy === 'desc'){
      productFilter.sort((a,b) => b.price - a.price);
    }else{
      productFilter.sort((a,b) => a.price - b.price);
    }
    setOrderBy(orderBy === 'asc' ? 'desc' : 'asc')
    setProducts(productFilter);
  }

//Categorias

  const categories = [...new Set(products.map((product) => product.category))];
//Errores posibles
  if (loading) {
    return <p>Cargando productos...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className='w-100 d-flex align-items-center justify-content-center flex-wrap'>
        <input
          type="text"
          placeholder="Buscar productos... "
          value={searchTerm}
          onChange={handleSearchChange}
          className='w-50 my-5 rounded border border-3 border-secondary form-control'
        />
        <div className='mx-5 d-flex aling-items-center justify-content-center'>
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
      <div className='mx-4 d-flex flex-wrap w-50 aling-items-center justify-content-center'>
        <div className='w-100'>
        <div className='fw-bold fs-5 mb-2'>El total de productos es : {totalProducts}</div>
          <button className="btn btn-primary mb-2" onClick={collapseToggle}>
            {collaps ? 'Ocultar Filtros' : 'Mostrar Filtros'}
          </button>
          <div className="row">
            <div className="col-12">
              <div className={`collapse ${collaps ? 'show' : ''}`}>
                <div className="card card-body">
                    <div className='text-center d-flex flex-wrap aling-items-center justify-content-center'>
                      <p className='text-center fw-bold w-100'>Precio</p>
                      <input
                        type="number"
                        className='w-50 form-control'
                        placeholder="Precio mínimo"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                      <input
                        type="number"
                        className='w-50 form-control'
                        placeholder="Precio máximo"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                      />
                      <button className='btn btn-primary w-25 mx-5 mt-2' onClick={handlePriceFilter}>Filtrar</button>
                      <button className='btn btn-danger w-25 mx-5 mt-2' onClick={resetProductList} >Restaurar</button>
                      {filterError && <p className='text-danger'> {filterError}</p>}
                    </div>
                </div>
                <div className='mt-2'>
                  <button className='btn btn-primary w-100' onClick={handleOrderBy}>{ orderBy ==='desc' ? 'Ordenar de Mayor precio' : 'Ordenar de Menor precio'}</button>
                </div>
              </div>
            </div>
          </div>
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
              extraImages={prod.extraImages}
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

export { ProductContainer };