import React from 'react'

function ProductsList({childrenProducts}) {
  return (
    <div className='row '>
      <div className="col-lg-12">
      {childrenProducts}
      </div>
    </div>
  )
}

export {ProductsList}
