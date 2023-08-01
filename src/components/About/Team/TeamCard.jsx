import React from 'react';

function TeamCard({ fullName, img,description,email }) {

  return (
    <>
    <div class="card mb-3" >
      <div class="row g-0">
        <div className="col-lg-4 col-md-5 col-sm-12 ">
          <img src={img} className="img-fluid rounded-start w-100 h-100" alt={fullName} style={{ objectFit:'cover' }} />
        </div>
        <div className="col-lg-8 col-md-7 col-sm-12">
        <div class="card-body">
          <h5 class="card-title">{fullName}</h5>
          <hr/>
          <p class="">{description}</p>
          <hr/>
          <p class="card-text">
            <strong>Correo :</strong> <p>{email}</p>
          </p>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}

export { TeamCard };