import React, { useState } from 'react'
import { BASE_URL } from "../api"

const ModalLogin = ({ setModalLogin }) => {

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const createUser = (e) => {
    e.preventDefault()
    fetchSignUp(newUser)
  }

  const fetchSignUp = async () => {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newUser.name,
        email: newUser.email,
        password: newUser.password
      })
    })
    setModalLogin(false)
  }

  const handleNewUser = (e) => {
    const newAccountUser = { ...newUser }
    newAccountUser[e.target.name] = e.target.value
    setNewUser(newAccountUser)
  }

  const handleClose = () => {
    setModalLogin(false)
  }
  return (
    <>
      <div className='fixed w-full h-full top-0 left-0 flex items-center justify-center z-50'>
        <div className='absolute w-full h-full bg-white opacity-90' onClick={handleClose} />
        <div className='w-full md:w-[35%] 2xl:w-[25%] flex flex-col gap-3 bg-white border rounded-2xl p-12 z-50 text-blue-1'>
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-3xl'>Sign Up</h1>
            <span>It's quick and easy</span>
            <div className="w-full border-b border-gray-300"></div>
          </div>
          <form action="" className='flex flex-col gap-3' onSubmit={createUser}>
            <div>
              <input type="text" className='outline-none bg-gray-100 w-full py-3 px-3 rounded-md '
                placeholder='Full name'
                name="name"
                label="name"
                onChange={handleNewUser}
              />
            </div>
            <div>
              <input type="email" className='outline-none bg-gray-100 w-full py-3 px-3 rounded-md '
                placeholder='Email'
                name="email"
                label="email"
                onChange={handleNewUser}
              />
            </div>
            <div>
              <input type="password" className='outline-none bg-gray-100 w-full py-3 px-3 rounded-md '
                placeholder='Password'
                name="password"
                label="password"
                onChange={handleNewUser}
              />
            </div>
          </form>
          <div className='text-white font-bold pt-3'>
            <button className='bg-green-500 p-2 rounded-md' onClick={createUser}>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalLogin