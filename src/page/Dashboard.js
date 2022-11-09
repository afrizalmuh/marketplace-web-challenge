import React from 'react'
import Header from '../component/Header'
import Promo from '../component/Promo'
import SliderSection from '../component/SliderSection'


const Dashboard = () => {
  return (
    <>
      <div className='bg-white shadow-xl w-full mx-auto p-5'>
        <Header />
      </div>
      <div className='p-5'>
        <div className='bg-white rounded-2xl shadow-2xl w-[1600px] mx-auto p-5'>
          <SliderSection />
          <Promo />
        </div>
        <div className='pt-[74px]'>
          <div className='text-blue-1 text-2xl font-semibold flex justify-center'>
            <h1 className='flex flex-col'>Look through our span</h1>

          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard