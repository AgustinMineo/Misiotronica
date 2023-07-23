import React from 'react';
import logo from './logo.svg';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <div className='w-100 row my-5'>
      <div className='col-lg-5'> 
          <NavLink to='/'>
            <img className='mx-5' src={logo} alt="Misiotrónica Logo" width={'100px'} height={'100px'} srcset="" />
          </NavLink>
        </div>
        <div className="col-lg-7 align-items-center d-flex">
            <div className="text-center">
              <h1 className=''> Misiotrónica electronica</h1>
            </div>
        </div>
    </div>
  )
}

export {Header}
