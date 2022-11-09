import React from 'react'

const Promo = () => {
  const imgPath = `${process.env.PUBLIC_URL}/asset`

  return (
    <div className='text-yellow-1 py-10'>
      <div className='justify-center flex font-spacegrotesk'>
        <div className='text-[41px] justify-center flex flex-col font-semibold'>Check out<span > our newest</span></div>
      </div>
      <div className='text-[96px] font-bold flex justify-center'>
        <h1>PROMOS</h1>
      </div>
      <div className='pt-[5rem]'>
        <div className='flex space-x-10 justify-center'>
          <div>
            <img src={imgPath + '/promo/promo-1.png'} alt="" />
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