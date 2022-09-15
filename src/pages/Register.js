import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {

    const name = useRef(null);
    const email = useRef(null);
    const username = useRef(null);
    const password = useRef(null);
    const password2 = useRef(null);

    const [wrongPassword, checkWrongPassword] = useState(false);
    const [usernameTaken, checkUsernameTaken] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [responseStatus, setResponseStatus] = useState(Number);

    const handleRegister = async (e) => {
        try {
            if (password.current.value !== password2.current.value) {
              checkWrongPassword(true);
              toast.error("Passwords do not match")
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
        setResponseMessage(data.message)
        setResponseStatus(data.status);
        console.log(responseStatus)
           }
         
        } catch(error) {
            console.error(error);
        }
    };

    const notify = () => {
      if (responseStatus === 200) {
        toast.success(`${responseMessage}`)
      } else {
        toast.error(`${responseMessage}`)
      }
      
    }
  

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
    <div className="w-full max-w-xs">
  <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-2xl">
  <div className="mb-4">
      <label className="mb-2 text-sm font-bold text-gray-700">
        Name
      </label>
      <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" ref={name}  placeholder="Name" />
    </div>
    <div className="mb-4">
      <label className="mb-2 text-sm font-bold text-gray-700">
        Email
      </label>
      <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" ref={email} placeholder="Email" />
    </div>
    <div className="mb-4">
      <label className="mb-2 text-sm font-bold text-gray-700">
        Username
      </label>
      <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" ref={username} placeholder="Username" />
    </div>
    <div className="mb-4">
      <label className="mb-2 text-sm font-bold text-gray-700">
        Password
      </label>
      <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" ref={password} type="password" placeholder="******************" />
    </div>
    <div className="mb-6">
      <label className="block mb-2 text-sm font-bold text-gray-700">
        Confirm Password
      </label>
      <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" ref={password2} type="password" placeholder="******************" / >
      {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
  
  
    <div className="flex items-center justify-between">
      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" onClick={() => {handleRegister(); notify();}} type="button">
        Register
      </button>
      {/* <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a> */}
    </div>
  </form>
</div>
{
    responseMessage ? (
      <ToastContainer
      position='top-right'
      autoClose={5000}
      closeOnClick
     / >

    ) :
    ''
   }
</div>
  )
}

