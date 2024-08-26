'use client'

import { validateLogin } from '@/helpers/validateLogin'
import { ILogin, ILoginError } from '@/interfaces/Interfaces'
import { log } from 'console'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Login = () => {
   const initialState = {email: '', password: ''}

const [dataUser, setDataUser] = useState<ILogin>(initialState);
const [errors, setErrors] = useState<ILoginError>(initialState)

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   const {name, value} = event.target;
   setDataUser({...dataUser, [name]: value})
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault()
    alert("Enviado con exito");
    
//peticion asincrona
}

useEffect(() => {
 const errors = validateLogin(dataUser)
 setErrors(errors)
}, [dataUser])

  return (
    <div>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-gray-900 text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6" >Sign in to Komodo store</h2>
            <div className='mb-4'>
            <label className='block mb-2' htmlFor="email">Nombre de usuario:</label>
            <input className='w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500' id='email-adress' type="email" value={dataUser.email} name="email" placeholder="Ingresa tu email✅" onChange={handleChange} />{errors.email && <p>{errors.email}</p>}
            </div>

            <div className='mb-4'>
            <label className='block mb-2' htmlFor="password">Contraseña:</label>
            <input className='w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500' type="password" value={dataUser.password} name="password" placeholder="Ingresa tu contraseña😎" onChange={handleChange} />
             {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>

            <div className=''>
            <button type="submit" disabled={errors.email ? true : false} className='w-full p-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors'>Ingresar</button>
            </div>
        </form>
    </div>
  )
}

export default Login