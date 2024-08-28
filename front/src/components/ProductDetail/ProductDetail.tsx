"use client"
import { IProducts } from '@/interfaces/Interfaces'
import React from 'react'
import MercadoLibreButton from '../Carri/Button'
import { IUserSession } from '@/interfaces/Interfaces'
import { useEffect } from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const ProductDetail: React.FC<IProducts> = ({name, image, description, price, stock, id}) => {
    const router = useRouter();
    const [userSession, setUsserSession] = useState<IUserSession>()

    useEffect(() => {
      if(typeof window !== "undefined" && window.localStorage) { 
        const userData = localStorage.getItem("userSession")
        setUsserSession(JSON.parse(userData!))
      }
    }, [])


  const handleClick = () => {
    if (userSession && userSession.token) { //si el usuario esta logueado o no
      const cart = JSON.parse(localStorage.getItem("cart") || "[]") //o que si esta vacio igual me lo guarde, leo el carrito
      const productexiste = cart.some((product: IProducts) => {
        if(product.id === id) return true //si existe un producto con este id
        return false
      })
      if(productexiste) {
        Swal.fire("Ya agregaste este producto al carrito")
      router.push("/carrito")
    } else { //si no existe lo traigo
      cart.push({
        name,
        description,
        image,
        price,
        stock,
        id
      })
      localStorage.setItem('cart', JSON.stringify(cart)) //lo guardamos
      Swal.fire("Producto agregado al carrito✅") 
      router.push("/carrito")
    }} else {
      Swal.fire("No puedes agregar productos al carrito si no estas logueado") 
    } }
  
    return (
    <main className='h-[1000px] lg:h-[750px] p-10 flex flex-col lg:flex-row'>

      <div className='mb-11 lg:w-[45%] '>
        <Link href={'/'} className='mt-9 mb-4 ml-6'>⬅️ Volver a la tienda</Link>
      
      <img className='w-[90%] lg:h-[480px] mt-6 mx-auto' src={image} alt={name} />
      </div>

      <div className='ml-10 lg:w-[45%] mt-12'>
        <h1 className='text-center lg:font-bold lg:text-[40px]'>{name.toUpperCase()}</h1>
        <h3 className='lg:mt-10'>{description}</h3>
        <h3 className='lg:mt-10 font-bold lg:text-[30px]'>US${price}</h3>
        <div>
          <h3 className='mt-3 lg:text-[15px]'>3 cuotas sin interés</h3>
          <img src="/assets/tarjetascelu.svg" className='lg:w-[150px] lg:ml-[-10px]' alt="tarjetas" />
          <h3 className='font-bold -ml-1'>VER MEDIOS DE PAGO</h3>
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