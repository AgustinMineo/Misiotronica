import React from 'react';

function TeamCard({ fullName, img,description,email }) {

  return (
    <>
    <div className="card mb-3" >
      <div className="row g-0">
        <div className="col-lg-4 col-md-5 col-sm-12 ">
          <img src={img} className="img-fluid rounded-start w-100 h-100" alt={fullName} style={{ objectFit:'cover' }} />
        </div>
        <div className="col-lg-8 col-md-7 col-sm-12">
          <div className="card-body">
            <h5 className="card-title">{fullName}</h5>
            <hr/>
            <p className="">{description}</p>
            <hr/>
            <p className="card-text">
              <strong>Correo :</strong> {email}
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export { TeamCard };