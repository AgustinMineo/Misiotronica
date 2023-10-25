import React from 'react';
import logo from './src/logo.svg';
import { NavLink } from 'react-router-dom';
import { FaRegUser, FaClipboardUser} from "react-icons/fa6";
import { connect, useSelector,useDispatch  } from 'react-redux';
import { clearToken } from '../../store/actions.js';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import './Header.css';
function Header() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearToken());
    navigate('/')
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'El usuario ha sido deslogeado correctamente!',
      showConfirmButton: false,
      timer: 1500
    })
  };

  
  return (
    <div className='w-100 row mt-5 '>
      <div className='col-lg-3 mx-5 col-md-2 align-styles-icon'>
        <NavLink to='/'>
          <img className='mx-5' src={logo} alt="Misiotrónica Logo" width={'100px'} height={'100px'} />
        </NavLink>
      </div>
      <div className="col-lg-6 col-xl-6 align-items-center d-flex col-md-6 align-styles">
        <div className="text-center">
          <h1>
            Misiotrónica electrónica
          </h1>
        </div>
      </div>
      <div className="col-xl-2 col-lg-12 col-md-12 d-flex align-items-center justify-content-center link-dark">
        {token === null ? (
          <>
            <NavLink to='/Login' className="text-decoration-none link-dark">
              <h6 className='mx-1 '><FaRegUser/> Login </h6>
            </NavLink>
            <NavLink to='/Register' className="text-decoration-none link-dark">
              <h6 className='mx-1'><FaClipboardUser/> Registro</h6>
            </NavLink>
          </>
        ) : 
        <button type='button' className='btn btn-danger' onClick={handleLogout}>Logout</button>
        }
      </div>
      <hr/>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    role: state.auth.role,
  };
};
export default connect(mapStateToProps)(Header);
