import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import {routes} from './NavBarData';
import { useSelector } from 'react-redux';
function NavBar() {
const [activeRoute, setActiveRoute] = useState('');
const userRole = useSelector((state) => state.auth.role);

/*Filter  */
const filteredRoutesByRol = routes.filter((route) => {
  if (!route.rol) {
    return true;
  } else {
    return route.rol === userRole;
  }
});

  return (
    <>
        <nav className='text-center w-100 sticky-top nav-container'>
            <ul className='list-unstyled '>
              {filteredRoutesByRol.map((route) => (
                <li key={route.text}>
                    <NavLink
                        to={route.to}
                        end
                        className="nav-link link-dark navStyle"
                        aria-current="page"
                        onClick={() => setActiveRoute(route.to)}
                        >
                        <div key={route.to} className={activeRoute === route.to ? 'text-primary fw-bold' : ''}>
                          {route.icon} {route.text}
                        </div>
                    </NavLink>
                </li>
              ))}
            </ul>
        </nav>
    </>
  )
}
export {NavBar}
