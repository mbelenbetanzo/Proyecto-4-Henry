"use client"
import { IProducts, IUserSession } from '@/interfaces/Interfaces'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const CartPage = () => {
  const [cart, setCart] = useState<IProducts[]>([])
  const [totalCart, setTotalCart] = useState<number>(0)
    const router = useRouter()

    const [userSession, setUsserSession] = useState<IUserSession>()
  
    useEffect(() => {
      if(typeof window !== "undefined" && window.localStorage) {
        const userData = localStorage.getItem("userSession")
        setUsserSession(JSON.parse(userData!))
      }
    }, [])
  //useeffect es el mejor aliado para el lado del cliente,y el ciclo de vida del componente
    useEffect(() => {
      if(typeof window !== "undefined" && window.localStorage) {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
      if(storedCart) {
        let totalCarrito = 0;
        storedCart.map((item: IProducts) => {
          totalCarrito = totalCarrito + item.price
        })
        setTotalCart(totalCarrito)
        setCart(storedCart)
      }
    }}, [])



   useEffect(() => {
    if(userSession?.user.name) {
      userSession?.user.name === undefined && router.push("/login")
    }
   }, [userSession?.user])


  return (
    <div>

      {
        cart && cart.length > 0 ? (
          cart?.map((cart) => {
            return (
           <div key={cart.id} className="min-h-screen p-4 md:p-8 bg-gray-100 flex flex-col justify-center ">
    <header className="flex items-center space-x-2 text-[#C4AC23] mb-6">
      <span className="text-sm md:text-base underline">SEGUIR COMPRANDO</span>  
    </header>

    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">MI CUENTA</h1>

    <div className="bg-white p-4 md:p-6 rounded-lg lg:h-[140px] shadow-lg mb-6 w-[80%] mx-auto ">
      
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="mb-4 md:mb-0 md:w-1/4">
          <img
            src={cart.image}
            alt={cart.name}
            className="w-[100px] rounded h-auto"
          />
        </div>
        
        <div className="md:w-3/4">
          <h2 className="text-lg font-bold">{cart.name}</h2>
          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-500">Eliminar producto</span>
            
            <span className="text-[#C4AC23] font-bold">US${cart.price}</span>

            <div className="flex items-center space-x-2 h-[30px] bg-[#C4AC23] p-2 rounded-[25px]">
              <button className="px-2   rounded">-</button>
              <span>1</span>
              <button className="px-2  rounded">+</button>
            </div>

            <span className="font-bold text-gray-800">US${cart.price}</span>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg mb-6 w-[80%] mx-auto ">
      <h2 className="text-lg font-bold mb-4 h-[30px]">ENTREGA</h2>
      
      <p className="text-sm md:text-base mb-4">Entregar 1 ítem en <a href="#" className="text-blue-500 underline">7630</a></p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span>En hasta 5 días hábiles</span>
        </div>
        <span className="font-bold text-gray-800">Gratis</span>
      </div>
    </div>

    
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-[80%] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Subtotal</h2>
        <span className="text-lg font-bold">US${totalCart}</span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Envío</h2>
        <span className="text-lg font-bold">Gratis</span>
      </div>
      <div className="flex justify-between items-center text-xl font-bold mb-4">
        <h2>Total</h2>
        <span>US${totalCart}</span>
      </div>
      <button className="w-full py-3 text-white bg-[#C4AC23] rounded-lg text-center">
        FINALIZAR COMPRA
      </button>
    </div>
  </div>

            )
          })
        ) : (
          <div>You don't have any products in your cart</div>
        )
      }
    
   
    










  </div>
  )
}

export default CartPage

/*<div className='bg-[#ffffff] lg:h-[500px]'>
        <main className='flex flex-col lg:flex-row justify-around mt-7 lg:mt-[50px]' > 
            
            <section className='mb-7 flex flex-col  lg:w-[45%] lg:mt-[20px]'>
            <h1 className='text-center mb-7 font-bold'>Mi carrito</h1>
                <Carri/>
            </section>

            <section className='flex flex-col mt-[20px] w-[90%] lg:w-[45%] mx-auto'>
                <h2 className='text-center mb-7 lg:mb-10 font-extrabold'>Resumen de compra</h2>

                <div className='flex flex-row justify-between lg:mb-7'>
                <h3>Productos:(7){}</h3>
                <h3>${18700}</h3>
                </div>

                <div className='flex flex-row justify-between lg:mb-7'>
                <h4>Envio:</h4>
                <h4 className='text-green-950'>Gratis</h4>
                </div>

                <div className='flex flex-row justify-between lg:mb-7'>
                <h2>Total:</h2>
                <h2>${}47000</h2>
                </div>

                <button className="cursor-pointer mt-7 mb-7  bg-[#e0c134] border-transparent outline-none rounded-let-400md rounded-lg text-white font-semibold transition lg:w-[600px] duration-100 ease-in-out hover:bg-[#0c0c0c] hover:ring-2 hover:ring-orange hover:shadow-xl hover:shadow-orange-200 focus:ring-orange-300 focus:shadow-orange-400 px-3 py-2">Comprar</button>

            </section>



        </main>
</div> */