import React from 'react';
import logo from './src/logo.svg';
import { NavLink } from 'react-router-dom';
import './Header.css'
function Header() {
  return (
    <div className='w-100 row mt-5 '>
      <div className='col-lg-3 mx-5 col-md-2 align-styles-icon'> 
          <NavLink to='/'>
            <img className='mx-5' src={logo} alt="Misiotrónica Logo" width={'100px'} height={'100px'} srcset="" />
          </NavLink>
        </div>
        <div className="col-lg-7 col-xl-7 align-items-center d-flex col-md-7 align-styles">
            <div className="text-center">
              <h1 className=''> Misiotrónica electronica</h1>
            </div>
        </div>
        <hr/>
    </div>
  )
}

export {Header}
