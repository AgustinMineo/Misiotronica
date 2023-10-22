import {React, useState } from 'react';
import { validateEmail, validateUsuario, validatePassword } from './validations';
import ReCAPTCHA from "react-google-recaptcha";
function Register() {
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userError, setUserError] = useState(false);
  const [captcha, setCaptcha] = useState('');
  

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
    if (!captcha) { 
      return;
    }
    
    
  };
  const handleCaptchaChange = (value) => {
    setCaptcha(value);
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
          <label htmlFor="formImg" class="form-label">Imagen</label>
          <input class="form-control" type="text" id="formImg"/>
        </div>
        <div class="col-md-6">
          <div class="mb-3 col-md-6">
            <label htmlFor="formCUIT" class="form-label">CUIT</label>
            <input class="form-control" type="text" id="formCUIT"/>
          </div>
        </div>
        <div class="mb-3 col-md-6">
          <label htmlFor="formName" class="form-label">Nombre</label>
          <input class="form-control" type="text" id="formName"/>
        </div>
        <div class="mb-3 col-md-6">
          <label htmlFor="formLastname" class="form-label">Apellido</label>
          <input class="form-control" type="text" id="formLastname"/>
        </div>
        <div class="mb-3 col-md-6">
          <label htmlFor="formPhone" class="form-label">Telefono</label>
          <input class="form-control" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" id="formPhone" />
        </div>
        <div class="col-md-12">
          <label for="inputAdress" class="form-label">Dirección</label>
          <input type="text" class="form-control" id="inputAdress"/>
        </div>
        <div class="col-md-6">
          <label for="inputBlock" class="form-label">Altura</label>
          <input type="text" class="form-control" id="inputBlock"/>
        </div>
        <div class="col-md-2">
          <label for="inputStreet" class="form-label">Callé</label>
          <input type="text" class="form-control" id="inputStreet"/>
        </div>
        <div class="col-12">
          <label for="inputBetween" class="form-label">Entre</label>
          <input type="text" class="form-control" id="inputBetween" placeholder="1234 calle principal"/>
        </div>
        <div class="col-12">
          <label for="inputDescription" class="form-label">Detalles</label>
          <input type="text" class="form-control" id="inputDescription" placeholder="Nota"/>
        </div>
        <div className="mb-3" id='recaptcha'>
          <ReCAPTCHA
            value={captcha}
            sitekey="6LeD9CkoAAAAAGDqpUj_ZaEUHRs1LEmoC5Sw8mvf"
            onChange={handleCaptchaChange}
            /> 
        </div>
        <div class="col-12 d-flex aling-items-center justify-content-center mt-5">
          <button type="submit" class="btn btn-primary " onClick={handleRegisterClick}>Registrarse </button>
        </div>
      </form>
    </div>
  )
}

export {Register}
