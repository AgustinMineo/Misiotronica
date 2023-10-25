import React from 'react';
import './ModalClient.css'
function ModalClient({ client, onClose }) {
  const {
    infoXusuarios,
    direccionXusuarios,
    rol,
    user_password,
    username,
  } = client;
  const infoUsuario = infoXusuarios[0];

  return (
    <div className="modal-overlay zIndex" onClick={onClose}>
      <div className="modal-content text-center">
        <div className="modal-header">
          <h3>{infoUsuario.Nombre} {infoUsuario.Apellido}</h3>
          <button className="btn-close" onClick={onClose}></button>
        </div>
        <div className="modal-body">
          <div className="text-center">
            <div className="product-modal__main-image">
              <img src={infoUsuario.Imagen} alt={'Imagen del cliente ' + infoUsuario.Nombre} width={'300px'} height={'200px'} />
            </div>
          </div>
          <div className="my-2">
            <p><strong>Datos personales : </strong></p>
            <p className='mx-5'>
              Correo: {infoUsuario.Correo}<br />
              CUIT: {infoUsuario.CUIT}<br />
              Descripción: {infoUsuario.Descripcion}<br />
              Fecha de Creación: {infoUsuario.FechaCreacion}<br />
              Teléfono: {infoUsuario.Telefono}
            </p>
          </div>
          <div className="my-2">
            <p className='mx-5'>
              <strong>Rol del Cliente:</strong> {rol && rol.nombre ? rol.nombre : "Sin rol"}
            </p>
          </div>
          <div className="my-2">
            <p className='mx-5'>
              <strong>Dirección del Usuario:</strong><br />
              Dirección: {direccionXusuarios[0].Direccion}<br />
              Calle: {direccionXusuarios[0].Calle}<br />
              Entre: {direccionXusuarios[0].Entre}
            </p>
          </div>
          <div className="my-2">
            <p className='mx-5'>
              <strong>Credenciales de Acceso:</strong><br />
              Usuario: {username}<br />
              <strong>Contraseña:</strong> {user_password}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ModalClient };