import Carri from '@/components/Carri/Carri';
import React from 'react'

const Carrito = () => {
  return (
    <div className='bg-[#ffffff] lg:h-[500px]'>
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






    </div>
  )
}

export default Carrito;