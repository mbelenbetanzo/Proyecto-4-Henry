"use client"
import { IProducts } from '@/interfaces/Interfaces'
import React from 'react'
import MercadoLibreButton from '../Carri/Button'
import { IUserSession } from '@/interfaces/Interfaces'
import { useEffect } from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'

const ProductDetail: React.FC<IProducts> = ({name, image, description, price, stock}) => {
  
    const [userSession, setUsserSession] = useState<IUserSession>()

    useEffect(() => {
      if(typeof window !== "undefined" && window.localStorage) {
        const userData = localStorage.getItem("userSession")
        setUsserSession(JSON.parse(userData!))
      }
    }, [])


  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (userSession && userSession.token) {
        Swal.fire("Producto agregado al carrito✅") //hardcodeado
    } else {
        Swal.fire("Para agregar productos al carrito debes estar registrado") 

    }
  }
  
    return (
    <main className='h-[1000px] lg:h-[750px] flex flex-col lg:flex-row'>

      <div className='mb-7 lg:w-[45%] '>
      <h2 className='mt-4 mb-4 ml-6'>Products/{name}</h2>
      <img className='w-[90%] lg:h-[480px] mx-auto' src={image} alt={name} />
      </div>

      <div className='ml-10 lg:w-[45%] mt-12'>
        <h1 className='text-center lg:font-bold lg:text-[40px]'>{name.toUpperCase()}</h1>
        <h3 className='lg:mt-10'>{description}</h3>
        <h3 className='lg:mt-10 font-bold lg:text-[30px]'>US${price}</h3>
        <div>
          <h3 className='mt-3 lg:text-[20px]'>3 cuotas sin interes</h3>
          <img src="/assets/tarjetascelu.svg" className='lg:w-[250px] lg:ml-[-10px]' alt="tarjetas" />
          <h3 className='font-bold'>VER MEDIOS DE PAGO</h3>
        </div>
        <div className='flex justify-between mt-5'>
        <span className='lg:text-[20px]'>CANTIDAD</span>
        <MercadoLibreButton/>
        </div>
        <h3 className='text-xs mt-2'>Ultimos {stock} en stock🔥</h3>
        <button onClick={handleClick} className="cursor-pointer lg:h-[50px] w-[80%] mt-8 mb-7 ml-7 h-[40px] mx-auto text-center bg-[#e0c134] border-transparent outline-none rounded-let-400md rounded-lg text-white font-semibold transition lg:w-[600px] duration-100 ease-in-out hover:bg-[#0c0c0c] hover:ring-2 hover:ring-orange hover:shadow-xl hover:shadow-orange-200 focus:ring-orange-300 focus:shadow-orange-400 px-3 py-2">Agregar al carrito🛒</button>
      </div>



    </main>
  )
}

export default ProductDetail