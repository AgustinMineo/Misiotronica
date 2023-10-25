import {React, useState} from 'react';
import {ModalClient} from './ModalClient/ModalClient'

function ClientCard({ client }) {
    const {
        infoXusuarios,
        direccionXusuarios,
        rol,
        user_password,
        username,
    } = client;
    const [showPassword, setShowPassword] = useState(false);
    
    const infoUsuario = infoXusuarios[0];
  
    const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
 
  const handleCloseModal = () => {
    setShowModal(false);
  };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
  
      return (
        <div className="m-3 h-50">
          <div className="w-100">
            <div className="col-md-12 col-lg-12">
              <img src={infoUsuario.Imagen ? infoUsuario.Imagen : 'https://cdn-icons-png.flaticon.com/512/21/21104.png'} className="card-img fluid" alt="Imagen de usuario" height={'200px'} width={'200px'} />
            </div>
            
            <div className="col-md-12">
              <div className="card-body">
                <h5 className="card-title">{infoUsuario.Nombre ? infoUsuario.Nombre : '*' } {infoUsuario.Apellido}</h5>
                <section>
                <hr/>
                  <h6><strong>Datos Personales</strong></h6>
                  <p>
                    Correo: {infoUsuario.Correo}<br />
                    CUIT: {infoUsuario.CUIT}<br />
                    Descripción: {infoUsuario.Descripcion}<br />
                    Fecha de Creación: {infoUsuario.FechaCreacion}<br />
                    Teléfono: {infoUsuario.Telefono}
                  </p>
                </section>
                <hr/>
                <section>
                  <h6><strong>Rol del Cliente</strong></h6>
                  <p>{rol && rol.nombre ? rol.nombre : "Sin rol"}</p>
                </section>
                <section>
                  <h6><strong>Dirección del Usuario</strong></h6>
                  <p>
                    Dirección: {direccionXusuarios[0].Direccion}<br />
                    Calle: {direccionXusuarios[0].Calle}<br />
                    Entre: {direccionXusuarios[0].Entre}
                  </p>
                </section>
                <hr/>
                <section>
                  <h6><strong>Credenciales de Acceso</strong></h6>
                  <p>
                    <strong>ID</strong> : {client.id}
                    <br/>
                    <strong>Usuario:</strong> {username}<br />
                    <div className="password-info ">
                        <strong>Contraseña</strong>
                        <div className='mb-2 '>{showPassword ? client.user_password : '********'}</div>
                    </div>
                  </p>
                </section>
                <section className='d-flex flex-wrap align-items-center justify-content-center'>
                  <button type='button' className='btn btn-danger ' onClick={togglePasswordVisibility}>
                      {showPassword ? 'Ocultar' : 'Mostrar'}
                    </button>
                    <button type="button" className="btn btn-primary" onClick={handleShowModal}>
                    Mostrar Modal
                  </button>
                  {showModal && (
                    <ModalClient
                    client={client}
                    onClose={handleCloseModal}
                    />
                    )}
                </section>
              </div>
            </div>
          </div>
        </div>
      );
    }

export {ClientCard};