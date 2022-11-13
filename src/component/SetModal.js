import React from 'react'

const SetModal = ({ setModal }) => {

  const handleClose = () => {
    setModal(false)
  }

  return (
    <>
      <div className='fixed w-full h-full top-0 left-0 flex items-center justify-center z-50'>
        <div className='absolute w-full h-full bg-white opacity-90' onClick={handleClose} />
        <div className='w-full md:w-[30%] 2xl:w-[23%] flex flex-col items-center bg-[#171717EB] text-white border border-stone-800 rounded-2xl p-8 z-50'>
          <span className='text-center w-3/4'>Quickly find episodes, articles, and pages across the website.</span>
          <div className='relative w-full my-6'>
            <i className="fa-solid fa-magnifying-glass absolute top-5 left-6"></i>

          </div>
          <button className='w-full py-4 bg-stone-800 border border-stone-700 rounded-full hover:bg-stone-700 ease-in-out duration-300'>Search</button>
          <div className='border border-stone-800 w-[120%] -mx-8 my-6' />
          <div className='grid grid-cols-3 gap-x-12 text-sm text-stone-200 justify-center'>
            <div className='flex flex-col items-center space-y-4 hover:text-orange ease-in-out duration-300 cursor-pointer'>
              <i className='fa-solid fa-fire-flame-curved bg-stone-800 border border-stone-700 text-white rounded-full w-14 h-14 flex justify-center items-center text-2xl'></i>
              <p>Popular</p>
            </div>
            <div className=' flex flex-col items-center space-y-4 hover:text-orange ease-in-out duration-300 cursor-pointer'>
              <i className='fa-solid fa-clock bg-stone-800 border border-stone-700 text-white rounded-full w-14 h-14 flex justify-center items-center text-2xl'></i>
              <p>Recent</p>
            </div>
            <div className='flex flex-col items-center space-y-4 hover:text-orange ease-in-out duration-300 cursor-pointer' >
              <i className='fa-solid fa-box-archive bg-stone-800 border border-stone-700 text-white rounded-full w-14 h-14 flex justify-center items-center text-2xl'></i>
              <p>Browse All</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SetModal