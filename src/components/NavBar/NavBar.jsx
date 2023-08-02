import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import {routes} from './NavBarData';
function NavBar() {
const [activeRoute, setActiveRoute] = useState('');
  return (
    <>
        <nav className='text-center w-100 sticky-top nav-container'>
            <ul className='list-unstyled '>
              {routes.map((route) => (
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
