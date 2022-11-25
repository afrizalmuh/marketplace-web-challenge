import React, { useEffect, useState } from 'react'
import { Transition } from "@headlessui/react"
import { CATEGORY_LIST } from '../dummyData'
import filterLogo from '../asset/filter-logo.svg'
import { BASE_URL } from "../api"
import axios from 'axios'

const Search = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [searchTitle, setSearchTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [productSearch, setProductSearch] = useState([]);

  const barearToken = JSON.parse(localStorage.getItem('token'))
  const loadSearch = async () => {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + barearToken
      }
    }
    // const res = await axios.get(`${BASE_URL}/search?product_name=${searchTitle}`, config).then(res => setProductSearch(res))
    // setProductSearch(res.data)
    const req = await fetch(`${BASE_URL}/search?product_name=${searchTitle}`, config)
    const res = await req.json()
    setProductSearch(res.data.data)
    setLoading(false)
  }
  // useEffect(() => {

  //   loadSearch()
  // }, [searchTitle])

  return (
    <>
      <div className='flex justify-between py-12 '>
        {/* {console.log(productSearch)} */}
        <div className='relative'>
          <div className=' text-blue-1 h-10'>
            <i className="fa-solid fa-magnifying-glass absolute bottom-3 left-2" onClick={() => loadSearch()}></i>
            <input
              className='bg-gray-100 pl-8 h-full outline-none hover:outline-blue-1 rounded-full placeholder:text-blue-500'
              type="text"
              placeholder='Search'
              onChange={(e) => setSearchTitle(e.target.value)}
            />
            {loading ? (
              <h4>Loading ...</h4>
            ) : (
              <div className='flex'>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10'>
                  {productSearch.map((item, key) =>
                    <div key={key} className="cursor-pointer hover:scale-105 duration-700 hover:shadow-lg hover:duration-700 pb-2" >
                      <img src={item.img_url} alt="" className='rounded-lg w-full' />
                      <div className='flex justify-center'>
                        <div className='text-md w-4/5'>
                          <h1 className='font-bold py-4'>{item.name}</h1>
                          <h1>Rp{item.price}</h1>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
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
      </div>
    </>
  )
}

export default Search