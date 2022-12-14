import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

function Get() {
  const [users, setUsers] = useState([]);
  const[lobby,setLobby] = useState([])
  const { username } = useParams();
  const navigate = useNavigate();


  function loadUsers() {
    console.log("FROM LOAD-USERS")
    axios.get("http://localhost:5000/insider/allusers").then((res) => {
      setUsers(res.data.reverse());
      console.log(res.data);
    });
  }

  function loadLobby() {
    console.log("FROM LOAD-LOBBY")
    axios.get("http://localhost:5000/insider/lobbylist").then((res) => {
      setLobby(res.data);
      console.log(res.data);
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      loadLobby();
    },1000);
    
    return () => clearInterval(interval);
  },[]);

  function startGame(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/insider/start`)
      .then(navigate("/vote"));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      loadUsers();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function deleteUser(username) {
    axios
      .delete(`http://localhost:5000/insider/delete/username/${username}`)
      .then(loadUsers());
  }

  function deleteLobbyUser(username) {
    axios
      .delete(`http://localhost:5000/insider/delete/lobbyuser/${username}`)
      .then(loadUsers());
  }


  return (
    <>
      <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
        <h1 className="text-3xl font-bold">DATA TABLE</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="border-black border-b-2">
                    {users.map((data, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b-2 border-black"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black ">
                          {index + 1}
                        </td>
                        <td className="text-xl text-black font-semibold px-6 py-4 whitespace-nowrap">
                          {data.username}
                        </td>

                        <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                          <Link
                            to={`/Getbyid/${data.username}`}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                          >
                            View
                          </Link>

                          <Link
                            onClick={() => deleteUser(data.username)}
                            to={"#"}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg"
                          >
                            Delete
                          </Link>

                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
        <h1 className="text-3xl font-bold">GAME LOBBY</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="border-black border-b-2">
                   
                    {lobby.map((item, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b-2 border-black"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black ">
                          {index + 1}
                        </td>
                        <td className="text-xl text-black font-semibold px-6 py-4 whitespace-nowrap">
                          {item.username}
                        </td>

                        <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                  

                          <Link
                            onClick={() => deleteLobbyUser(item.username)}
                            to={"#"}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg"
                          >
                            Kick 
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          onClick={startGame}
        >
          Start Game
        </button>
      </div>
    </>
  );
}

export default Get;
