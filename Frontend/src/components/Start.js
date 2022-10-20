import axios from 'axios';
import React, { useEffect, useState } from "react";

function Start () {
    const [username, setUserName] = useState("")
    const [userword, setUserWord] = useState("")

    

    function startGame(e) {
        e.preventDefault();
        axios.put(`http://localhost:5000/insider/start/${username},${userword}`)
      }

  return (
    <div>
<div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">ADD USER</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your username"
        />
        <input
          value={userword}
          onChange={(e) => setUserWord(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your guess"
        />

        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={startGame}
        >
          START GAME
        </button>
      </form>
    </div>

    </div>
  );
}

export default Start


// route.put("/start/:userAndWord", (req, res) => {