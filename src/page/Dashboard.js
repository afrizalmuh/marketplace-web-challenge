import React, { useEffect, useRef, useState } from 'react'
import Header from '../component/Header'
import Promo from '../component/Promo'
import Browse from '../component/Browse'
import SliderSection from '../component/SliderSection'
import Slider from "react-slick";
import accountLogo from '../asset/account-logo.jpg'
import rectangleLogo from '../asset/rectangle-logo.png'
import filterLogo from '../asset/filter-logo.svg'
import { CATEGORY_LIST } from '../dummyData'
import { Transition } from "@headlessui/react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Categories from '../component/Categories'
import Search from '../component/Search'


const Dashboard = () => {

  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView({ behavior: "smooth" })
  const [text, setText] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)

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
      <div className='w-full lg:max-w-desk relative mx-auto'>

        <div className='bg-white shadow-xl '>
          <div className='absolute'>
            <img src={rectangleLogo} alt="" />
          </div>

          <header className='flex w-[1381px] h-[80px] bg-white text-blue-1'>
            <div className='flex w-full h-full justify-between items-center'>
              <div className='flex z-10'>
                <div className='flex text-[40px] font-audiowide justify-center'>
                  <div className='text-blue-1 bg-white w-[107px] rounded-lg'>
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
              <div className='flex items-center gap-8'>
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
            <div className='bg-white shadow-2xl mx-auto'>
              <SliderSection />
              <div ref={myRef} className="p-10"></div>
              <Promo />
            </div>
            <div className='py-[75px] categories '>
              <div className='text-blue-1 text-2xl font-bold grid justify-items-center'>
                Look through our <span>Categories</span>
              </div>
              {/* <div className=' pt-11 font-spacegrotesk text-blue-1'>
                <Slider {...settings}>
                  {CATEGORY_LIST.map((item, key) =>
                    <div key={key} className="relative w-full hover:scale-105 hover:duration-700 duration-700">
                      <img src={item.thumbnail} alt="" className='mx-auto' />
                      <h1 className='absolute bottom-7 left-10 text-4xl font-bold'>{item.title}</h1>
                    </div>
                  )}
                </Slider>
              </div> */}
              <Categories />
            </div>
            <div className='py-[4rem]'>
              <div className='text-yellow-1 text-2xl font-bold grid justify-items-center'>
                or Browse our full <span>Collection</span>
              </div>
              {/* <div className='flex justify-between py-12 '>
                <div className='relative'>
                  <div className=' text-blue-1 h-10'>
                    <i className="fa-solid fa-magnifying-glass absolute bottom-3 left-2"></i>
                    <input
                      className='bg-gray-100 pl-8 h-full outline-none hover:outline-blue-1 rounded-full placeholder:text-blue-500'
                      type="text"
                      placeholder='Search'
                    />
                  </div>
                </div>
                <div
                  className='cursor-pointer relative bg-gray-100 text-blue-1 rounded-sm'
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className=' h-full flex items-center px-2'>
                    <img src={filterLogo} alt="filter-logo" className='pr-3' />
                    <span className='w-20'>Filter</span>
                    <i className="fa-solid fa-chevron-up"></i>
                  </div>
                  <Transition show={dropdownOpen}
                    enter="transition ease-out duration-500"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    className="origin-top-right z-10 absolute top-ful left-[140px]"
                  >
                    <ul className='absolute right-0 w-40 divide-gray-100 rounded-md shadow-lg ring-1 bg-gray-100 ring-black ring-opacity-5 focus:outline-none'>
                      {CATEGORY_LIST.map((item, key) =>
                        <li key={key}>{item.title}</li>
                      )}
                    </ul>
                  </Transition>
                </div>
              </div> */}
              <Search />
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