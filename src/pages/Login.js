import React, { useRef } from 'react'

export default function Login() {

    const username = useRef(null);
    const password = useRef(null);


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username.current.value,
                    password: password.current.value,
                })
            })
            const data = await response.data();
            console.log(data)
        } catch(error) {
            console.error(error)
        }
    }



  return (
      <div className="bg-gray-800 h-screen flex justify-center items-center">
    <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="text-gray-700 text-sm font-bold mb-2" >
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={username} placeholder="Username" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" ref={password} type="password" placeholder="******************" / >
      {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleLogin} type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
</div>
</div>
  )
}

