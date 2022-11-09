import React from 'react'
import accountLogo from '../asset/account-logo.jpg'

import sideDashboard from '../asset/side-dashboard.jpg'

const Header = () => {
  return (
    <header className='w-full h-[70px] bg-white text-blue-1 '>
      <div className='flex justify-between item'>
        <div className='bg-blue-1 flex items-center'>
          <div className='flex text-[40px] font-audiowide justify-center'>
            <div className='text-blue-1 bg-white w-[107px] rounded-lg'>
              <img src="" alt="" />
              <span className='justify-end flex'>S.</span>
            </div>
            <div className='text-white'>mart</div>
          </div>
        </div>
        <div className='flex space-x-10 items-center text-lg'>
          <div>news</div>
          <div>promos</div>
          <div>category</div>
          <div>browse</div>
        </div>
        <div className='flex justify-end items-center gap-8'>
          <h3>Welcome back, <span className='font-medium'>Jane Doe</span></h3>
          <div className='bg-zinc-50 w-9'>
            <img src={accountLogo} alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header