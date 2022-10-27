import React from 'react'
import { Link } from "react-router-dom"
import "./insider.css"

function Insider() {
  return (
    <div className='w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8'>
      <div className="hero-img" />
 
  

        <Link to={"/Add"}>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4"
        >
          Join Game
        </button>
        </Link>
        
    </div>
  )
}

export default Insider;