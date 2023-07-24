import React, { useEffect, useRef, useState } from 'react';
import './teamCard.css';

function TeamCard({ fullName, title, img }) {
  const [isCardVisible, setCardVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCardVisible(true);
          observer.unobserve(cardElement);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(cardElement);

    return () => {
      if (observer) {
        observer.unobserve(cardElement);
      }
    };
  }, []);

  return (
    <>
      <div className='w-25 mx-5 my-3'>
        <div ref={cardRef} className={`card team-card-image ${isCardVisible ? 'show' : ''}`} style={{ width: '18rem' }}>
          <img src={img} className="card-img-top" alt={fullName} />
          <div className="card-body">
            <p className="card-text fs-3 fw-lighter">{fullName}</p>
            <hr />
            <p className='fw-bold'>{title}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export { TeamCard };