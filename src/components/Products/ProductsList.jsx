import React from 'react'

function ProductsList({childrenProducts}) {
  return (
    <div className='row '>
      <div className="col 12">
      {childrenProducts}
      </div>
    </div>
  )
}

export {ProductsList}
