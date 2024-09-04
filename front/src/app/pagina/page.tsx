'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const renderizado = () => {
   const router = useRouter()
   const [userSession, setUserSession] = useState()

useEffect(() => {
    const userData = localStorage.getItem("userSession")
    setUserSession(JSON.parse(userData!))
 
    if(!userSession) {
        router.push('/login')
    }
})

    return(
        <div>
            <h1>Hola</h1>
        </div>
    )
}

export default renderizado;