import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BASE_URL } from "../api"
import { CATEGORY_LIST } from '../dummyData'


const SliderSection = () => {

  const imgPath = `${process.env.PUBLIC_URL}/asset`

  const settings = {
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
  };
  const setting = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const [slider, dataSlider] = useState([])

  const fetchCategories = async (barearToken) => {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + barearToken
      }
    }
    const req = await fetch(`${BASE_URL}/slider`, config)
    const res = await req.json()
    dataSlider(res.data)
  }

  useEffect(() => {
    const barearToken = localStorage.getItem('token')
    fetchCategories(barearToken)

  }, [])

  return (
    <>
      {/* <div className='relative'>
        <Slider {...settings} className="font-spacegrotesk ">
          <div className='relative'>
            <div className='absolute text-[48px] text-[#EBCC24] pt-[96px] pl-[71px]'>
              <div className='flex flex-col'>This week in a <span className='text-[96px] text-blue-1 font-bold'>Nutshell</span></div>
              <div className='text-blue-1 text-xl'>For frequent updates</div>
              <button className='w-[271px] h-[62px] rounded-lg text-white bg-blue-1 text-2xl'>Follow us</button>
            </div>
            <img src={imgPath + '/thumbnail/thumbnail-1.png'} alt="" className='mx-auto' />
          </div>
          <div className='relative'>
            <div className='absolute text-[#EBCC24]  pt-[82px] pl-[71px]'>
              <div className='flex flex-col text-blue-1 text-[58px] font-bold'>Monthly <span>Promos</span></div>
              <div className='text-3xl flex flex-col'>Now easier to access <span>on our dashboard</span></div>
            </div>
            <img src={imgPath + '/thumbnail/thumbnail-2.png'} alt="" className='mx-auto' />
          </div>
          <div className='relative'>
            <div className='absolute text-blue-1 pt-[82px] pl-[71px]'>
              <div className='text-[64px] flex flex-col'>New
                <h1 className='text-[#EBCC24] font-bold font-audiowide flex flex-col'> Children’s <span>Books</span> </h1>
                <span className='font-semibold'>Arrivals!</span>
              </div>
            </div>
            <img src={imgPath + '/thumbnail/thumbnail-3.png'} alt="" className='mx-auto' />
          </div>
          <div className='relative'>
            <div className='absolute text-2xl text-blue-1  pt-[121px] pl-[71px] font-semibold'>
              <div className='flex flex-col'>All fashion wear <span>now with a</span></div>
              <div className='flex flex-col text-[#EBCC24] text-5xl font-audiowide'>Refund period <span className='font-spacegrotesk text-blue-1 text-2xl'>of 3 days</span></div>
              <div className='pt-10'>
                <button className='w-[271px] h-[62px] rounded-lg text-white bg-blue-1 text-2xl font-normal'>Read more</button>
              </div>
            </div>
            <img src={imgPath + '/thumbnail/thumbnail-4.png'} alt="" className='mx-auto' />
          </div>
          <div className='relative'>
            <div className='absolute text-[#EBCC24] pt-[105px] pl-[71px]'>
              <div className='text-[64px] flex flex-col font-bold'>Coming soon
                <span className='text-3xl pt-12 text-blue-1'>Fresh products!</span>
              </div>
            </div>
            <img src={imgPath + '/thumbnail/thumbnail-5.png'} alt="" className='mx-auto' />
          </div>
        </Slider>
      </div> */}

      <Slider {...settings} className="font-spacegrotesk ">
        {slider.map((item, key) =>
          <div className='relative' key={key}>
            <div className='h-[500px]'>
              <img src={item.img_url} alt="" className='mx-auto w-screen h-full' />
            </div>
          </div>
        )}
      </Slider>
    </>
  )
}

export default SliderSection
        // <div className=' pt-11 font-spacegrotesk text-blue-1'>
        //   <Slider {...setting}>
        //     {CATEGORY_LIST.map((item, key) =>
        //       <div key={key} className="relative w-full hover:scale-105 hover:duration-700 duration-700">
        //         {/* <LazyLoadImage className='h-[14rem]' alt={item.title} src={item.thumbnail} /> */}
        //         <img src={item.thumbnail} alt="" className='mx-auto' />
        //         <h1 className='absolute bottom-7 left-10 text-4xl font-bold'>{item.title}</h1>
        //       </div>
        //     )}
        //   </Slider>
        // </div>