import React from 'react'

const OrdersId = ({params}: {params: {ordersId: string[]}}) => {
  return (
    <div>
        <h1>esta son cada orden por id: {params.ordersId}</h1>
    </div>
  )
}

export default OrdersId;