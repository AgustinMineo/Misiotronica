import { React, useState } from 'react';
import {validateUsuario, validatePassword, loginUsuario } from './validations';
import ReCAPTCHA from "react-google-recaptcha";
function Login() {
  const [userError, setUserError] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [captcha, setCaptcha] = useState('');
  const [captchaError, setCaptchaError] = useState(false);

    
  const handleLogin = (e) => {
    e.preventDefault();
    setUserError(false);
    setPasswordError(false);
    setCaptchaError(false);
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

    if (!captcha) {
      setCaptchaError(true);
      console.log(captchaError);
      return;
    }else{
      setCaptchaError(false);
    }
    if(captcha && passwordValidationResult &&userValidationResult ){
      
    loginUsuario(usuario, password);
    }
  }
  const handleCaptchaChange = (value) => {
    setCaptcha(value);
  }
  
  return (
    <div className='container mx-5 my-5'>
      <div className="row justify-content-md-center ">
        <div className="col">
        <form onSubmit={handleLogin}>
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
        <div className="mb-3" id='recaptcha'>
          <ReCAPTCHA
            value={captcha}
            sitekey="6LeD9CkoAAAAAGDqpUj_ZaEUHRs1LEmoC5Sw8mvf"
            onChange={handleCaptchaChange}
            /> 
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