import {React, useState} from 'react';
import {ModalContact} from './ModalContact'
function ContactCard({questions}) {
  const [openModal, setOpenModal] = useState(false);
  const [responseText, setResponseText] = useState('');
  const quest = {
    id: questions.id,
    correo: questions.correo,
    nombre: questions.nombre,
    apellido: questions.apellido,
    direccion: questions.direccion,
    altura: questions.altura,
    fecha: questions.fecha_consulta,
    nota: questions.nota,
    estado: questions.status,
  }
  const handleOpenText = () => {
    setOpenModal(!openModal);
  };
 
  const handleCloseText = () => {
    setOpenModal(false);
    setResponseText('');
  };

  const formatDate = (date) => {
    const fecha = new Date(date)
    const format = {day:'numeric',month:'long',year:'numeric'}
    return fecha.toLocaleDateString('es-ES',format)
  }
  return (
   <div className='d-flex flex-wrap'>
      <div className='w-100 my-3 text-center'>
        <p><strong>Correo Electrónico:</strong></p>
        <h6>{quest.correo}</h6>
      </div>
      <div className="w-100 mx-3 my-2">
      <hr/>
        <div className='my-1'>
          <strong>Nombre:</strong> {quest.nombre}
        </div>
        <div className='my-1'>
          <strong>Apellido:</strong> {quest.apellido}
        </div>
        <div>
          <strong>Dirección:</strong> {quest.direccion}
        </div>
        <div>
          <strong>Altura:</strong> {quest.altura}
        </div>
        <hr />
      </div>
      <div className="w-100">
        <div>
          <strong>Fecha :</strong> {formatDate(quest.fecha)}
        </div>
        <div>
          <strong>Comentario:</strong> {quest.nota}
        </div>
        <div>
          <strong>Estado:</strong> {quest.estado ? 'Respondido' : 'Pendiente de respuesta'}
        </div>
        <hr />
      </div>
      <div className="w-100 text-center mb-3">
      {quest.estado ? 'Respondido' :
      <button type="button" className="btn btn-info" onClick={handleOpenText}>Responder</button> }
      {openModal && (
          <ModalContact onClose={handleCloseText} question={quest} />
        )}
      </div>
    </div>
  );
}

export {ContactCard}
