import {React, useState } from 'react';
import { validateEmail, validateUsuario, validatePassword } from './validations';
function Register() {
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userError, setUserError] = useState(false);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);
    setUserError(false);
    
    const emailValidationResult = validateEmail(email);
    if (emailValidationResult !== true) {
      setEmailError(emailValidationResult);
      return;
    }
    
    const userValidationResult = validateUsuario(usuario);
    if (userValidationResult !== true) {
      setUserError(userValidationResult);
      return;
    }

    
    const passwordValidationResult = validatePassword(password, repeatPassword);
    if (passwordValidationResult !== true) {
      setPasswordError(passwordValidationResult);
      return;
    }
  };
  return (
    <div className="">
      <h1 className=''>Registro</h1>
      <form class="row g-3 mt-5 container align-items-center " onSubmit={handleRegisterClick}>
      <div className="col-md-12">
        <label htmlFor="inputEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className={`form-control ${emailError ? 'is-invalid' : ''}`}
          id="inputEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && (
          <div className="invalid-feedback">{emailError}</div>
        )}
      </div>
      <div className="col-md-12">
        <label htmlFor="inputUsuario" className="form-label">
          Usuario
        </label>
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
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">
          Password
        </label>
        <input
          type="password"
          className={`form-control ${passwordError ? 'is-invalid' : ''}`}
          id="inputPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <div className="invalid-feedback">{passwordError}</div>
        )}
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">
          Repeat Password
        </label>
        <input
          type="password"
          className={`form-control ${passwordError ? 'is-invalid' : ''}`}
          id="inputPasswordRepeat"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        {passwordError && (
          <div className="invalid-feedback">{passwordError}</div>
        )}
      </div>
        <div class="mb-3 col-md-6">
          <label htmlFor="formFile" class="form-label">Imagen</label>
          <input class="form-control" type="file" id="formFile"/>
        </div>
        <div class="col-md-12">
          <label for="inputState" class="form-label">Pais</label>
          <select id="inputState" class="form-select">
            <option selected>Seleccione</option>
            <option>Argentina</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Ciudad</label>
          <input type="text" class="form-control" id="inputCity"/>
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">Estado</label>
          <select id="inputState" class="form-select">
            <option selected>Seleccione</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">Codigo Postal</label>
          <input type="text" class="form-control" id="inputZip"/>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Dirección</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 calle principal"/>
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">Detalles</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartamento, estudio, piso, etc"/>
        </div>
        <div class="col-12 d-flex aling-items-center justify-content-center mt-5">
          <button type="submit" class="btn btn-primary " onClick={handleRegisterClick}>Registrarse </button>
        </div>
      </form>
    </div>
  )
}

export {Register}
