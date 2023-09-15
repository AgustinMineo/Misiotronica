import { React, useState } from 'react';
import {validateUsuario, validatePassword } from './validations';
function Login() {
  const [userError, setUserError] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    setUserError(false);
    setPasswordError(false);
    const userValidationResult = validateUsuario(usuario);
    if (userValidationResult !== true) {
      setUserError(userValidationResult);
      return;
    } 
    const passwordValidationResult = validatePassword(password);
    if (passwordValidationResult !== true) {
      setPasswordError(passwordValidationResult);
      return;
    }
  };

  return (
    <div className='container mx-5 my-5'>
      <div className="row justify-content-md-center ">
        <div className="col">
        <form>
        <div className="mb-3">
          <label htmlFor="Username" className="form-label">Username</label>
          <input
          type="text"
          className={`form-control ${userError ? 'is-invalid' : ''}`}
          id="inputUser"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        {userError && (
          <div className="invalid-feedback">{userError}</div>
        )}
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">Password</label>
          <input
          type="password"
          className={`form-control ${passwordError ? 'is-invalid' : ''}`}
          id="inputPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{passwordError && (
          <div className="invalid-feedback">{passwordError}</div>
        )}
        </div>
          <div className="">
            <button type="submit" className="btn btn-primary" onClick={handleLogin}>
              Iniciar Sesión
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export {Login}