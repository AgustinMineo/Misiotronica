import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <>
        <nav style={{height: '75vh', width:'200px'} } className='text-center'>
            <ul className='list-unstyled'>
                {routes.map(route =>(
                    <li>
                        <NavLink to={route.to} end className="nav-link link-dark" aria-current="page">
                            {route.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </>
  )
}
const routes = [];
routes.push({
    to:'/',
    text:'Home',
});
routes.push({
    to:'/contact',
    text:'Contact',
});
routes.push({
    to:'/about',
    text:'About',
});
routes.push({
    to:'/products',
    text:'Products',
});
export {NavBar}
