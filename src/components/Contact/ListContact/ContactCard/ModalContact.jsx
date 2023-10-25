import React, { useState } from 'react';
import './ModalContact.css'
import Swal from 'sweetalert2';
function ModalContact({ onClose, question }) {
  const [responseText, setResponseText] = useState('');

  const handleSendResponse = () => {
    //Agregar logica de respuesta, tiene que llamar a un endpoint que agregue la respuesta a una tabla 
    //y cambie el status de false a true
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `La respuesta a ${question.nombre} ${question.apellido} fue enviada correctamente!!`,
      showConfirmButton: false,
      timer: 1500
    })
    onClose();
  };

  return (
    <div className="modal-overlay" >
      <div className="modal-content text-center">
        <div className="modal-header">
          <h3>Responder Pregunta</h3>
          <button className="btn-close" onClick={onClose}></button>
        </div>
        <div className="modal-body">
          <div className="text-container">
            <p><strong>Correo Electrónico:</strong> {question.correo}</p>
            <p><strong>Nombre y apellido:</strong> {question.nombre} {question.apellido}</p>
            <p><strong>Consulta:</strong> {question.nota}</p>
            <textarea
              placeholder="Escribe tu respuesta aquí" rows={"10"} cols={"70"}
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="modal-footer d-flex justify-content-center align-items-center">
          <button className="btn btn-outline-success btn-lg" onClick={handleSendResponse}>
            Enviar Respuesta
          </button>
          <button className="btn btn-outline-danger btn-lg" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export { ModalContact };
