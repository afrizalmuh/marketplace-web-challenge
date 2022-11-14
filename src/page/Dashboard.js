import React, { useRef } from 'react'
import Header from '../component/Header'
import Promo from '../component/Promo'
import Browse from '../component/Browse'
import SliderSection from '../component/SliderSection'
import Slider from "react-slick";
import accountLogo from '../asset/account-logo.jpg'
import rectangleLogo from '../asset/rectangle-logo.png'
import { CATEGORY_LIST } from '../dummyData'
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Dashboard = () => {

  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView({ behavior: "smooth" })

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const scroll = (props) => {
    if (props === 'promo') {
      window.scrollTo({
        top: props.refMostPicked.current.offsetTop - 30,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <div className='max-w-desk '>
        <div className='bg-white shadow-xl justify-items-center flex'>
          <div className='absolute'>
            <img src={rectangleLogo} alt="" />
          </div>
          <header className='w-[1318px] mx-auto h-[80px] bg-white text-blue-1'>
            <div className='flex h-full justify-between items-center'>
              <div className='flex z-10'>
                <div className='flex text-[40px] font-audiowide justify-center'>
                  <div className='text-blue-1 bg-white w-[107px] rounded-lg'>
                    <img src="" alt="" />
                    <span className='justify-end flex'>S.</span>
                  </div>
                  <div className='text-white'>mart</div>
                </div>
              </div>
              <div className='flex space-x-10 text-lg'>
                <div>news</div>
                <button onClick={executeScroll}>promos</button>
                <div>category</div>
                <div>browse</div>
              </div>
              <div className='flex justify-end gap-8'>
                <h3>Welcome back, <span className='font-medium'>Jane Doe</span></h3>
                <div className='bg-zinc-50 w-9'>
                  <img src={accountLogo} alt="" />
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className='p-4'>
          <div className='w-[1312px] mx-auto'>
            <div className='bg-white shadow-2xl  mx-auto'>
              <SliderSection />
              <div ref={myRef} className="p-10"></div>
              <Promo />
            </div>
            <div className='py-[75px] categories '>
              <div className='text-blue-1 text-2xl font-bold grid justify-items-center'>
                Look through our <span>Categories</span>
              </div>
              <div className=' pt-11 font-spacegrotesk text-blue-1'>
                <Slider {...settings}>
                  {CATEGORY_LIST.map((item, key) =>
                    <div key={key} className="relative w-full hover:scale-105 hover:duration-700 duration-700">
                      {/* <LazyLoadImage className='h-[14rem]' alt={item.title} src={item.thumbnail} /> */}
                      <img src={item.thumbnail} alt="" className='mx-auto' />
                      <h1 className='absolute bottom-7 left-10 text-4xl font-bold'>{item.title}</h1>
                    </div>
                  )}
                </Slider>
              </div>
            </div>
            <div className='py-[4rem]'>
              <div className='text-yellow-1 text-2xl font-bold grid justify-items-center'>
                or Browse our full <span>Collection</span>
              </div>
              <div className='flex justify-between py-12'>
                <div>search</div>
                <div>filter</div>
              </div>
              <div>
                <Browse />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard