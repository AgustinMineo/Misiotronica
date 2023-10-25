import {React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { validateEmail, validateUsuario, validatePassword,registerUser,obtenerFechaActual,
validateBlock,validateCaptcha ,validateCuit,validateLastname,validateFirstname,validateAdress} from './validations';
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router-dom';
function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [cuit, setCuit] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [adress, setAdress] = useState('');
  const [block, setBlock] = useState('');
  const [street, setStreet] = useState('');
  const [between, setBetween] = useState('');
  const [note, setNote] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [cuitError, setCuitError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userError, setUserError] = useState(false);
  const [blockError, setBlockError] = useState(false);
  const [adressError, setAdressError] = useState(false);
  const [firstnameError, setFirstNameError] = useState(false);
  const [lastnameError, setLastNameError] = useState(false);

  const [captcha, setCaptcha] = useState('');
  

  const  handleRegisterClick = async (e) => {
    e.preventDefault();
    setCuitError(false)
    setEmailError(false);
    setPasswordError(false);
    setUserError(false);
    setAdressError(false);
    setBlockError(false);
    setFirstNameError(false);
    setLastNameError(false);
    
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

    const cuitValidationResult = validateCuit(cuit);
    if(cuitValidationResult !== true){
      setCuitError(cuitValidationResult)
      return;
    }
    
    const validateFirstnameResult = validateFirstname(name);
    if (validateFirstnameResult !== true) {
      setFirstNameError(validateFirstnameResult);
      return;
    }
    const validateLastnameResult = validateLastname(lastname);
    if (validateLastnameResult !== true) {
      setLastNameError(validateLastnameResult);
      return;
    }

    const validateAdressResult = validateAdress(adress);
    if (validateAdressResult !== true) {
      setAdressError(validateAdressResult);
      return;
    }
    
    const userBlockValidationResult = validateBlock(block);
    if(userBlockValidationResult !== true){
      setBlockError(userBlockValidationResult)
      return;
    }
    const captchaValidationResult = validateCaptcha(captcha);

    
    const passwordValidationResult = validatePassword(password, repeatPassword);
    if (passwordValidationResult !== true) {
      setPasswordError(passwordValidationResult);
      return;
    }
    
    
    if(passwordValidationResult && captchaValidationResult 
      && userValidationResult && emailValidationResult 
      && userBlockValidationResult && cuitValidationResult
      && validateLastnameResult && validateFirstnameResult
      && validateAdressResult
      ){
      const newUser = {
        username:usuario,
        user_password:password,
        Correo:email,
        Imagen:image,
        CUIT:cuit,
        Nombre:name,
        FechaCreacion: obtenerFechaActual(),
        Apellido:lastname,
        Descripcion:note,
        Telefono:phone,
        Direccion:adress,
        Altura:block,
        Calle:street,
        Entre:between,
      }
      const status = registerUser(newUser,dispatch);
      if(status.success){
        navigate('/')
      }
    }
    
  };
  const handleCaptchaChange = (value) => {
    setCaptcha(value);
  };

  return (
    <div className="">
      <h1 className=''>Registro</h1>
      <form className="row g-3 mt-5 container align-items-center " onSubmit={handleRegisterClick}>
      <div className="col-md-12">
        <label htmlFor="inputEmail" className="form-label">
          Email *
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
          Usuario *
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
          Password *
        </label>
        <input
          type="password"
          className={`form-control ${passwordError ? 'is-invalid' : ''}`}
          id="inputPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value ) }
           />
        {passwordError && (
          <div className="invalid-feedback">{passwordError}</div>
        )}
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">
          Repeat Password *
        </label>
        <input
          type="password"
          className={`form-control ${passwordError ? 'is-invalid' : ''}`}
          id="inputPasswordRepeat"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value) }
           />
        {passwordError && (
          <div className="invalid-feedback">{passwordError}</div>
        )}
      </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="formImg" className="form-label">Imagen</label>
          <input className="form-control" type="text" id="formImg" value={image} onChange={(e)=> setImage(e.target.value)} />
        </div>
        <div className="col-md-6">
          <div className="mb-3 col-md-6">
            <label htmlFor="formCUIT" className="form-label">CUIT *</label>
            <input className={`form-control ${cuitError ? 'is-invalid' : ''}`} 
            type="text" id="formCUIT" value={cuit} onChange={(e)=> setCuit(e.target.value)} />
          {cuitError && (
          <div className="invalid-feedback">{cuitError}</div>
        )}
          </div>
        </div>
        <div className="mb-3 col-md-6">
          <label  htmlFor="formName" className="form-label">Nombre *</label>
          <input  className={`form-control ${firstnameError ? 'is-invalid' : ''}`} 
          type="text" id="formName" 
          value={name} onChange={(e)=> setName(e.target.value)} />
          {firstnameError && (
            <div className="invalid-feedback">{firstnameError}</div>
          )}
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="formLastname" className="form-label">Apellido *</label>
          <input className={`form-control ${lastnameError ? 'is-invalid' : ''}`} 
          type="text" id="formLastname" 
          value={lastname} onChange={(e)=> setLastname(e.target.value)} />
          {lastnameError && (
            <div className="invalid-feedback">{lastnameError}</div>
          )}
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="formPhone" className="form-label">Telefono</label>
          <input className="form-control" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" id="formPhone" value={phone} onChange={(e)=> setPhone(e.target.value)}  />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputAdress" className="form-label">Dirección *</label>
          <input type="text" className={`form-control ${adressError ? 'is-invalid' : ''}`} 
          id="inputAdress" value={adress} onChange={(e)=> setAdress(e.target.value)}  />
          {adressError && (
            <div className="invalid-feedback">{adressError}</div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputBlock"  className="form-label">Altura *</label>
          <input type="number" min={"0"} className={`form-control ${blockError ? 'is-invalid' : ''}`}
           id="inputBlock" value={block} onChange={(e) => setBlock(e.target.value)}  />
           {blockError && (
          <div className="invalid-feedback">{blockError}</div>
        )}
        </div>

        <div className="col-md-2">
          <label htmlFor="inputStreet" className="form-label">Callé</label>
          <input type="text" className="form-control" id="inputStreet" value={street} onChange={(e) => setStreet(e.target.value)}  />
        </div>
        <div className="col-12">
          <label htmlFor="inputBetween" className="form-label">Entre</label>
          <input type="text" className="form-control" id="inputBetween" placeholder="1234 calle principal" value={between} onChange={(e) => setBetween(e.target.value)}/>
        </div>
        <div className="col-12">
          <label htmlFor="inputDescription" className="form-label">Detalles</label>
          <input type="text" className="form-control" id="inputDescription" placeholder="Nota" value={note} onChange={(e)=> setNote(e.target.value)}/>
        </div>
        <div className="mb-3" id='recaptcha'>
          <ReCAPTCHA
            value={captcha}
            sitekey="6LeD9CkoAAAAAGDqpUj_ZaEUHRs1LEmoC5Sw8mvf"
            onChange={handleCaptchaChange}
            /> 
        </div>
        <div className="col-12 d-flex aling-items-center justify-content-center mt-5">
          <button type="submit" className="btn btn-primary " onClick={handleRegisterClick}>Registrarse </button>
        </div>
      </form>
    </div>
  )
}

export {Register}
