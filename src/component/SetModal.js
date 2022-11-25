import React from 'react'
import starLogo from '../asset/star-logo.svg'

const SetModal = ({ setModal, dataModal }) => {

  const handleClose = () => {
    setModal(false)
  }

  return (
    <>
      {/* <div className='fixed w-full h-full top-0 left-0 flex items-center justify-center z-50'>
        {console.log(dataModal[0])}
        <div className='absolute w-full h-full bg-white opacity-90' onClick={handleClose} />
        <div className='w-full md:w-[70%] 2xl:w-[73%] flex flex-col items-center bg-[#171717EB] text-white border border-stone-800 rounded-2xl p-8 z-50'>
          <img src={dataModal[0].path} alt="" />
          <span className='text-center w-3/4'>Quickly find episodes, articles, and pages across the website.</span>
          <div className='relative w-full my-6'>
            <i className="fa-solid fa-magnifying-glass absolute top-5 left-6"></i>
          </div>
          <button className='w-full py-4 bg-stone-800 border border-stone-700 rounded-full hover:bg-stone-700 ease-in-out duration-300'>Search</button>
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
      </div> */}
      {/* <div className='fixed w-full h-full top-0 left-0 flex items-center justify-center z-50'>
        <div className='absolute w-full h-full bg-white opacity-90' onClick={handleClose} />
        <div className='w-full md:w-[70%] 2xl:w-[73%] flex items-center bg-white border rounded-2xl p-12 z-50'>
          <img src={dataModal[0].path} alt="" className='w-full' />
          <div className='pl-10 flex flex-col bg-cover'>
            <span className='font-audiowide text-3xl'>{dataModal[0].title}</span>
            <div className='flex justify-between text-xl font-semibold py-5'>
              <span className='text-blue-1'>{dataModal[0].price}</span>
              <div className='flex space-x-2 text-yellow-1'>
                <img src={starLogo} alt="" />
                <span>{dataModal[0].rating}</span>
              </div>
            </div>
            <div className='text-lg font-spacegrotesk'>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam dolores fugit est temporibus. Porro impedit reiciendis recusandae. Voluptatum harum reiciendis asperiores voluptatem laboriosam tempora quo vitae debitis adipisci. Consequatur?</span>
            </div>
            <div className='flex justify-end pt-10'>
              <button className='bg-blue-1 focus:bg-[#B1B1B1] p-4 text-white rounded-lg font-spacegrotesk text-xl font-semibold'>Added to cart <i className="fa-solid fa-cart-shopping pl-4"></i></button>
            </div>
          </div>
        </div>
      </div> */}
      <div className='fixed w-full h-full top-0 left-0 flex items-center justify-center z-50'>
        <div className='absolute w-full h-full bg-white opacity-90' onClick={handleClose} />
        <div className='w-full md:w-[70%] 2xl:w-[73%] flex items-center bg-white border rounded-2xl p-12 z-50'>
          <img src={dataModal[0].img_url} alt="" className='w-ful' />
          <div className='pl-10 flex flex-col bg-cover'>
            <span className='font-audiowide text-3xl'>{dataModal[0].name}</span>
            <div className='flex justify-between text-xl font-semibold py-5'>
              <span className='text-blue-1'>Rp{dataModal[0].price}</span>
            </div>
            <div className='text-lg font-spacegrotesk'>
              <span>{dataModal[0].description}</span>
            </div>
            <div className='flex justify-end pt-10'>
              <button className='bg-blue-1 focus:bg-[#B1B1B1] p-4 text-white rounded-lg font-spacegrotesk text-xl font-semibold'>Added to cart <i className="fa-solid fa-cart-shopping pl-4"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SetModal