import React, { useRef, useState } from 'react';

export default function Register() {

    const name = useRef(null);
    const email = useRef(null);
    const username = useRef(null);
    const password = useRef(null);
    const password2 = useRef(null);

    const [wrongPassword, checkWrongPassword] = useState(false);

    const handleRegister = async (e) => {
        try {
            if (password.current.value !== password2.current.value) {
              checkWrongPassword(true);
            } else {
                const response = await fetch(`http://localhost:8000/api/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name.current.value,
                email: email.current.value,
                username: username.current.value,
                password: password.current.value
            })
        })
        const data = await response.json();
        checkWrongPassword(false);
        console.log(data);
            }
        
        } catch(error) {
            console.error(error);
        }
    };

  return (
    <div className="bg-gray-800 h-screen flex justify-center items-center">
    <div className="w-full max-w-xs">
  <form className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
      <label className="text-gray-700 text-sm font-bold mb-2">
        Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={name}  placeholder="Name" />
    </div>
    <div className="mb-4">
      <label className="text-gray-700 text-sm font-bold mb-2">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={email} placeholder="Email" />
    </div>
    <div className="mb-4">
      <label className="text-gray-700 text-sm font-bold mb-2">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={username} placeholder="Username" />
    </div>
    <div className="mb-4">
      <label className="text-gray-700 text-sm font-bold mb-2">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={password} type="password" placeholder="******************" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Confirm Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" ref={password2} type="password" placeholder="******************" / >
      {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    {wrongPassword ? (
      <div>The password does not match!</div>
    ) :
    ''
  }
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleRegister} type="button">
        Register
      </button>
      {/* <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a> */}
    </div>
  </form>
</div>
</div>
  )
}

