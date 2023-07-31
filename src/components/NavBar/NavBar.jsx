import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoPerson,IoHomeSharp } from "react-icons/io5";
import { MdGroup } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa'
import './NavBar.css'
function NavBar() {
    const [activeRoute, setActiveRoute] = useState('');
  return (
    <>
        <nav className='text-center w-100 sticky-top nav-container'>
          <ul className='list-unstyled '>
            {routes.map((route) => (
              <li>
                  <NavLink
                      to={route.to}
                      end
                      className="nav-link link-dark my-5"
                      aria-current="page"
                      onClick={() => setActiveRoute(route.to)}
                      >
                      <div key={route.to} className={activeRoute === route.to ? 'text-primary fw-bold' : ''}>{route.icon} {route.text}</div>
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
    icon: <IoHomeSharp/>,
});
routes.push({
    to:'/contact',
    text:'Contacto',
    icon:<IoPerson/>
});
routes.push({
    to:'/about',
    text:'Sobre Nosotros',
    icon:<MdGroup/>
});
routes.push({
    to:'/products',
    text:'Ventas',
    icon:<FaShoppingCart/>
});
export {NavBar}
