import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} = useParams(); 
  return (
    <div className='bg-red-700 p-3 text-white text-center text-4xl'>User:{userId}</div>
  )
}

export default User