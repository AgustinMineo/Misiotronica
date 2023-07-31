import React from 'react';

function TeamCard({ fullName, img,description,email }) {

  return (
    <>
    <div class="card mb-3" >
      <div class="row">
        <div className="col-lg-2">
          <img src={img} className="img-fluid rounded-start" alt={fullName} style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="col-lg-6">
        <div class="card-body">
          <h5 class="card-title">{fullName}</h5>
          
          <p class="">{description}</p>
          <p class="card-text">
            <strong>Contacto : {email}</strong>
          </p>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}

export { TeamCard };