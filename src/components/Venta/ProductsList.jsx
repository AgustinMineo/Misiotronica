import React from 'react'
function ProductsList({ children }) {
  return (
    <>
      <div className='row'>
        {children}
      </div>
    </>
  )
}

export {ProductsList}
