import React from 'react'

const Promo = () => {
  const imgPath = `${process.env.PUBLIC_URL}/asset`

  return (
    <div className='text-yellow-1 py-10'>
      <div className='justify-center font-spacegrotesk'>
        <div className='text-[41px] justify-center grid justify-items-center font-semibold'>Check out<span > our newest</span></div>
      </div>
      <div className='text-[96px] font-bold flex justify-center'>
        <h1>PROMOS</h1>
      </div>
      <div className='pt-[5rem]'>
        <div className='flex space-x-10 justify-center'>
          <div className='relative group'>
            <img src={imgPath + '/promo/promo-1.png'} alt="" />
            <div
              className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <div className="flex-row text-center ">
                <h1 className="text-gray-50 font-bold text-lg">Be careful on the way.</h1>
              </div>
            </div>
          </div>
          <div>
            <img src={imgPath + '/promo/promo-3.png'} alt="" />
          </div>
        </div>
        <div className='flex justify-center pt-10'>
          <img src={imgPath + '/promo/promo-2.png'} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Promo