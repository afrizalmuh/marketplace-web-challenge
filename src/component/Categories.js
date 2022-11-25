import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { BASE_URL } from "../api"
import axios from "axios"
import { data } from 'autoprefixer';

const Categories = () => {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const [category, dataCategory] = useState([])

  const fetchCategories = async (barearToken) => {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + barearToken
      }
    }
    const req = await fetch(`${BASE_URL}/category`, config)
    const res = await req.json()
    dataCategory(res.data)
    // axios.get(`${BASE_URL}/category`, config).then(res => console.log(res)).catch(e => console.log(e))
  }

  useEffect(() => {
    const barearToken = JSON.parse(localStorage.getItem('token'))
    fetchCategories(barearToken)

  }, [])
  return (
    <>
      <div className=' pt-11 font-spacegrotesk text-blue-1'>
        <Slider {...settings}>
          {category.map((item, key) =>
            <div key={key} className="relative w-[416px] h-[218px] hover:scale-105 hover:duration-700 duration-700">
              <h1 className='absolute bottom-7 left-10 text-4xl font-bold'>{item.name}</h1>
            </div>
          )}
        </Slider>
      </div>
    </>
  )
}

export default Categories