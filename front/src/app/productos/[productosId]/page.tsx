import React from 'react'

const page = ({params}: {params: {productosId: string[]}}) => {
  return (
    <div>
      <h1>productos con id: {params.productosId}</h1>
    </div>
  )
}

export default page