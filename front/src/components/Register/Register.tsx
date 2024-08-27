'use client'

import React, { useState } from 'react';
import { IRegister } from "@/interfaces/Interfaces";
import { validateRegister } from '@/helpers/validateRegister';
import { IRegisterErrors } from '@/interfaces/Interfaces';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { register } from '@/helpers/auth.helper';
import Swal from 'sweetalert2';

const RegisterForm = () => {
  const router = useRouter();
  const initialState = {
    name: '',
    email: '',
    password: '',
    address: '',
    phone: ''
  }

  const [dataUser, setDataUser] = useState<IRegister>(initialState)
  const [errors, setErrors] = useState<IRegisterErrors>(initialState)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setDataUser({...dataUser, [name]: value})
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await register(dataUser)
      Swal.fire("Te registraste correctamente") 
      router.push("/login")
    } 

    catch (error: any) {
      throw new Error(error)
      
    }
    };

    useEffect(() => {
      const errors = validateRegister(dataUser)
      setErrors(errors)
     }, [dataUser])

    

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-gray-900 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={dataUser.name}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
          required
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={dataUser.email}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
          required
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={dataUser.password}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
          required
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="address" className="block mb-2">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={dataUser.address}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
          required
        />
        {errors.address && <p className="text-red-500">{errors.address}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={dataUser.phone}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
          required
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </div>

      <button type="submit" disabled={errors.email ? true : false} className="w-full p-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors">
        Register
      </button>
    </form>
  );

};
export default RegisterForm;
