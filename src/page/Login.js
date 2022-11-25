import React, { useState } from 'react'
import loginLogo from '../asset/login-page.jpg'
import ReCAPTCHA from "react-google-recaptcha";
import googleLogo from '../asset/google-logo.jpg'
import facebookLogo from '../asset/facebook-logo.jpg'
import appleLogo from '../asset/apple-logo.jpg'
import { useNavigate } from 'react-router-dom';
import videoLogin from '../asset/video.mp4'
import { BASE_URL } from "../api"

const Login = () => {

  const navigateLogin = useNavigate();

  const [login, setLogin] = useState({
    email: '',
    password: '',
    device_name: 'samsung A5'
  })

  const handleLogin = (e) => {
    e.preventDefault()
    fetchLogin(login)
  }
  const handleChangeInput = (e) => {
    const newLogin = { ...login }
    newLogin[e.target.name] = e.target.value
    setLogin(newLogin)
    // console.log(login)
  }

  const fetchLogin = async (loginNow) => {
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: loginNow.email,
        password: loginNow.password,
        device_name: loginNow.device_name
      })
    })
    const data = await res.json()
    handleApiLogin(data)
    console.log(data)
  }

  const handleApiLogin = (data) => {
    localStorage.setItem("token", JSON.stringify(data.token))
    if (data.success === true) { navigateLogin('/dashboard') }
  }

  return (
    <div className='grid grid-cols-2 font-spacegrotesk text-blue-1'>
      <div className='relative w-full h-screen'>
        <video className='w-full h-full object-cover' autoPlay={true} muted loop={true} >
          <source src={videoLogin} type="video/mp4" />
        </video>
        <div className='absolute bottom-[100px] left-[64px] font-audiowide text-[96px] text-white'>Welcome Back</div>
      </div>
      <div className='w-full'>
        <div className='flex pt-[50px] text-[40px] font-audiowide justify-center'>
          <div className='text-white bg-blue-1 w-[107px] rounded-lg'>
            <span className='justify-end flex'>S.</span>
          </div>
          <div className='text-blue-1'>mart</div>
        </div>
        <div className='pt-[52px] text-blue-1 font-bold text-center'>Login to an existing account</div>
        <div className='flex flex-col items-center'>
          <div className='pt-[41px]'>
            <form action="" onSubmit={handleLogin}>
              <div className='relative w-[472px]'>
                <i className="fa-solid fa-user absolute left-6 top-4 text-lg text-blue-500"></i>
                <input type="email" className='outline-none bg-blue-100 w-full py-3 px-14 rounded-full placeholder:text-blue-500'
                  placeholder='E-Mail'
                  name="email"
                  label="email"
                  value={login.email}
                  onChange={handleChangeInput}
                />
              </div>
              <div className='relative w-[472px] top-8'>
                <i className="fa-solid fa-unlock-keyhole absolute left-6 top-4 text-lg text-blue-500"></i>
                <input type="password" className='outline-none bg-blue-100 w-full py-3 px-14 rounded-full placeholder:text-blue-500'
                  placeholder='Password'
                  name="password"
                  label="password"
                  value={login.password}
                  onChange={handleChangeInput}
                />
              </div>
              <div className='pt-10 w-[450px]'>
                <div className='flex justify-between text-sm pl-8'>
                  <div className='flex'>
                    <input type="checkbox" />
                    <span className='pl-2'>Remember me</span>
                  </div>
                  <a className='truncate hover:underline' href="/">Forgot password?</a>
                </div>
              </div>
              {/* <div className='pt-10 justify-center flex'>
                <ReCAPTCHA
                  sitekey="6Ld1X-ciAAAAAMWCFHZYvuK8BlITzysbd7Vb9GgO"
                />
              </div> */}
              <div className='pt-10'>
                <button
                  className='w-[472px] h-[58px] bg-blue-1 text-white text-lg font-bold rounded-lg'
                  onClick={handleLogin}
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
          <div className='pt-9'>
            <div className="relative py-4 w-[600px]">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-b border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm font-bold">or sign in</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex pt-11 justify-center space-x-12'>
          <img src={googleLogo} alt="" className='w-12' />
          <img src={facebookLogo} alt="" className='w-12' />
          <img src={appleLogo} alt="" className='w-12' />
        </div>
      </div>

    </div>
  )
}

export default Login


// h2 {
//   width: 100 %;
//   text - align: center;
//   border - bottom: 1px solid #000;
//   line - height: 0.1em;
//   margin: 10px 0 20px;
// }

// h2 span {
//   background: #fff;
//   padding: 0 10px;
// }