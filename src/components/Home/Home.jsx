import React from 'react';
import { NavLink } from 'react-router-dom';
function Home() {
  return (
    <div class="container-fluid p-5">
	  <h1 class="display-4">Misiotrónica</h1>
	  <p class="lead">Bienvenido a Misiotrónica, tu tienda de electronica de preferencia!</p>
	  <hr class="my-4"/>
	  <p>Puedes encontrar todo tipo de elementos de electrónica, como cables,placas,baterías,luces, sensores entre otros! </p>
	  <NavLink class="btn btn-primary btn-lg" to="/products" role="button">Visualizar los productos</NavLink>
	</div>
  )
}

export {Home}
