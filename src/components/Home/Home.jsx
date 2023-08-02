import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
function Home() {
	return (
		<div className="home">
			<div className="content">
				<h1 className="description">Bienvenido a Misiotrónica, tu tienda de electrónica de preferencia.</h1>
				<p className="text-muted">En Misiotrónica, estamos comprometidos a ofrecerte la mejor selección de productos 
				electrónicos de alta calidad para satisfacer tus necesidades.</p>
				<p className="text-muted">Nuestro equipo de expertos en tecnología está aquí para ayudarte a encontrar 
				los productos perfectos para tus proyectos y necesidades diarias.</p>
			</div>
			<div className='text-center my-5'>
				<hr/>
				<h1>Porque elegirnos</h1>
			</div>
		  	<div className="sections">
				<div className="section">
					<h3 className="section-title">Envío Rápido</h3>
					<p className="section-description">Entregamos tus productos en tiempo récord para que 
					puedas comenzar tus proyectos sin demoras.</p>
				</div>
				<hr/>
				<div className=" text-start sections">
					<div className=''>
						<h3 className="section-title">Calidad y Garantizada</h3>
					</div>
					<div className=''>
						<p className="section-description">Todos nuestros productos están fabricados con los más 
						altos estándares de calidad para brindarte el mejor rendimiento.<strong> <br/>¡Ahora con mas variedad de productos!</strong></p>
						<NavLink className="btn btn-primary" to="/products">Visualizar los productos</NavLink>
					</div>
				</div>
				<hr/>
				<div className="sections">
					<h3 className="section-title">Atención al cliente</h3>
					<p className="section-description">Nuestro equipo de atención al cliente está disponible para ayudarte con cualquier consulta o problema que puedas tener.</p>
					<NavLink className="btn btn-primary" to="/about">Nuestro Equipo</NavLink>
				</div>
		  	</div>
		</div>
	);
}

export {Home}
