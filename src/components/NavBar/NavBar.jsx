import { React, useState } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
function NavBar() {
    const [activeRoute, setActiveRoute] = useState('');
  return (
    <>
        <nav className='text-center w-100'>
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
                      <div key={route.to} className={activeRoute === route.to ? 'text-primary' : ''}>{route.text}</div>
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
