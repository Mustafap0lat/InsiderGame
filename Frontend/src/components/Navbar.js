import React from "react";
import { Link } from "react-router-dom"



function Navbar() {
  return (
    <>
        <div className="w-ful h-16 flex items-center px-12 bg-black">
            <Link to={"/"} className="text-3xl text-white font-semibold font-Montesarrat">INSIDER</Link>
          
           <div className='w-full flex items-center p-12 '>
            <Link to={"/Add"} className="hover:bg-black
            hover:border-2 hover:border-white hover:text-green-400 hover:shadow-md rounded-lg font-bold text-white py-2 px-2">Add User</Link>
            <Link to={"/Lobby"} className="hover:bg-black
            hover:border-2 hover:border-white hover:text-yellow-400 hover:shadow-md rounded-lg font-bold text-white py-2 px-2">Lobby</Link>


          </div>
        </div>
    </>
  )
}
  

export default Navbar