import React from 'react'
function ProductsList({ children }) {
  return (
    <>
      <div className="d-flex flex-wrap ">
        {children}
      </div>
    </>
  )
}

export {ProductsList}
