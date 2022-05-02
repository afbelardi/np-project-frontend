import React, { useRef } from 'react';

export default function Register() {

    const name = useRef(null);
    const email = useRef(null);
    const username = useRef(null);
    const password = useRef(null);
    const password2 = useRef(null);

    const handleRegister = async (e) => {
        try {
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
        console.log(data);
        } catch(error) {
            console.error(error);
        }
    };

  return (
    <div className="bg-gray-800 h-screen flex justify-center items-center">
    <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div class="mb-4">
      <label class="text-gray-700 text-sm font-bold mb-2">
        Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={name}  placeholder="Name" />
    </div>
    <div class="mb-4">
      <label class="text-gray-700 text-sm font-bold mb-2">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={email} placeholder="Email" />
    </div>
    <div class="mb-4">
      <label class="text-gray-700 text-sm font-bold mb-2">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={username} placeholder="Username" />
    </div>
    <div class="mb-4">
      <label class="text-gray-700 text-sm font-bold mb-2">
        Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={password} type="password" placeholder="******************" />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Confirm Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" ref={password2} type="password" placeholder="******************" / >
      {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleRegister} type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
</div>
</div>
  )
}

