import React, { useState, useEffect, Fragment, useRef } from 'react'
import { useInfiniteQuery, useQuery, useQueryClient } from "react-query"
import { BROWSE_LIST } from '../dummyData'
import { BASE_URL } from "../api"
import starLogo from '../asset/star-logo.svg'
import ModalProduct from './ModalProduct'

import { Transition } from "@headlessui/react"
import { CATEGORY_LIST } from '../dummyData'
import { SHORT_BY } from '../dummyData'
import filterLogo from '../asset/filter-logo.svg'
import axios from 'axios'
import { formatPrice } from '../utils/formatPrice'
import Loader from './Loader'

const Browse = () => {

  const [modalOn, setModal] = useState(false)
  const [browseList, setBrowseList] = useState([])
  const [dataProduct, setDataProduct] = useState([])
  const refElement = useRef(null);
  const [currentPage, setCurrentPage] = useState(1)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const saveData = (data) => {
    setModal(true)
    setBrowseList([
      ...browseList,
      data
    ])
  }
  const barearToken = localStorage.getItem('token')

  let config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + barearToken
    }
  }

  const scrolltobottom = () => {
    refElement.current.scrollIntoView({ behavior: "smooth" })
  }

  // const fetchProduct = async (barearToken) => {
  //   let config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + barearToken
  //     }
  //   }
  //   const req = await fetch(`${BASE_URL}/products?page=1`, config)
  //   const data = await req.json()
  //   setDataProduct(data.data)
  //   console.log(dataProduct)
  // }

  // useEffect(() => {
  //   const barearToken = JSON.parse(localStorage.getItem('token'))
  //   fetchProduct(barearToken)

  // }, [])

  const fetchProduct = async ({ barearToken, pageParam = 1 }) => {
    const req = await fetch(`${BASE_URL}/products?page=${pageParam}`, config)
    const data = await req.json()
    // setDataProduct(data)
    return data
  }


  const fetchPro = async ({ barearToken, pageParam }) => {
    // await axios.get(`${BASE_URL}/products?page=${pageParam}`, config,).then((data) => { return data })
    const req = await fetch(`${BASE_URL}/products?page=${pageParam || 1}`, config)
    const data = await req.json()
    setDataProduct(data)
    setCurrentPage(pageParam || 1)
    return data
  }

  const queryClient = useQueryClient()

  // const { data, isLoading, isError, isFetching, isSuccess } = useQuery(["product", currentPage], () => fetchProduct(barearToken, currentPage))
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    error
  } = useInfiniteQuery('product', fetchPro, {
    getNextPageParam: (lastPage, pages) => {
      const currentPage = lastPage.data.current_page
      const allPage = lastPage.data.last_page
      if (currentPage < allPage) {
        // console.log(lastPage.data.current_page + 1)
        // return lastPage.data.current_page + 1;
        // console.log(lastPage)
        return parseInt(currentPage + 1);
      }
      else
        return undefined
    }
  })

  useEffect(() => {
    if (hasNextPage) {
      const nextPage = currentPage
      queryClient.prefetchInfiniteQuery(["product", nextPage], () =>
        fetchPro({ pageParam: nextPage })
      )
      console.log(currentPage, hasNextPage, nextPage)
    }
  }, [data])

  useEffect(() => {
    if (modalOn === false) setBrowseList([])
  }, [modalOn])

  const search = async (target) => {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + barearToken
      }
    }
    const req = await fetch(`${BASE_URL}/search?product_name=${target}`, config)
    const res = await req.json()
    setDataProduct(res)
  }

  const filterCategory = (categoryId) => {
    axios.get(`${BASE_URL}/filter?categoryId=${categoryId}`, config)
      .then((responseData) => {
        setDataProduct(responseData.data)
      })
  }

  const filterShortBy = (sale) => {
    if (sale === "newest") {
      axios.get(`${BASE_URL}/filter?sortBy=${sale}`, config)
        .then((responseData) => {
          setDataProduct(responseData.data)
        })
    } else if (sale === "oldest") {
      axios.get(`${BASE_URL}/filter?sortBy=${sale}`, config)
        .then((responseData) => {
          setDataProduct(responseData.data)
        })
    } else if (sale === "mostSales") {
      axios.get(`${BASE_URL}/filter?sortBy=${sale}`, config)
        .then((responseData) => {
          setDataProduct(responseData.data)
        })
    }
  }

  if (isLoading) return <Loader />;
  if (error) return <p>Something went wrong ...</p>;
  return (
    // <div className='flex'>
    //   <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10'>
    //     {BROWSE_LIST.map((item, key) =>
    //       <div key={key} className="cursor-pointer hover:scale-105 duration-700 hover:shadow-lg hover:duration-700" onClick={() => saveData(item)} >
    //         <img src={item.path} alt="" className='rounded-lg w-full' />
    //         <div className='flex justify-center'>
    //           <div className='text-md w-4/5'>
    //             <h1 className='font-bold py-4'>{item.title}</h1>
    //             <h1>{item.price}</h1>
    //             <div className='flex justify-between py-4'>
    //               <div className='flex text-yellow-1 space-x-2'>
    //                 <img src={starLogo} alt="" />
    //                 <h1>{item.rating}</h1>
    //               </div>
    //               <div className='text-[#757575]'>{`${item.sold} sold`}</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    //   {modalOn && <SetModal setModal={setModal} dataModal={browseList} />}
    // </div>
    <div>
      {/* {console.log(data)} */}
      {/* {console.log(dataProduct)} */}
      <div className='flex justify-between py-12 '>
        <div className='relative'>
          <div className=' text-blue-1 h-10'>
            <i className="fa-solid fa-magnifying-glass absolute bottom-3 left-2"></i>
            <input
              className='bg-gray-100 pl-8 h-full outline-none hover:outline-blue-1 rounded-full placeholder:text-blue-500'
              type="text"
              placeholder='Search'
              onChange={(e) => search(e.target.value)}
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
            className="origin-top-right z-10 top-ful left-[140px]"
          >
            <div className='absolute right-0 w-96 divide-gray-100 rounded-l-md rounded-br-md shadow-lg ring-1 bg-gray-200 focus:outline-none'>
              <div className='flex flex-col gap-3 p-3'>
                <h1>Category</h1>
                <div className='flex flex-wrap gap-2'>
                  {CATEGORY_LIST.map((item, key) =>
                    <div key={key}>
                      <div className="py-1 px-3 border-1 border-blue-1 rounded-md hover:bg-blue-1 hover:text-white" onClick={() => filterCategory(item.categoryId)}>{item.title}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className='flex flex-col gap-3 p-3'>
                <h1>Short by</h1>
                <div className='flex flex-wrap gap-2'>
                  {SHORT_BY.map((item, key) =>
                    <div key={key}>
                      <div className="py-1 px-3 border-1 border-blue-1 rounded-md hover:bg-blue-1 hover:text-white" onClick={() => filterShortBy(item.sale)}>{item.title}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-10'>
        {data?.pages.map((page, i) =>
          <Fragment key={i}>
            {page?.data?.data.map((item, key) =>
              <div key={key} className="cursor-pointer hover:scale-105 duration-700 hover:shadow-lg hover:duration-700" onClick={() => saveData(item)} >
                <img src={item.img_url} alt="" className='rounded-lg w-full' />
                <div className='flex justify-center'>
                  <div className='text-md w-4/5 pb-2'>
                    <h1 className='font-bold py-4'>{item.name}</h1>
                    <h1>{formatPrice(item.price)}</h1>
                  </div>
                </div>
              </div>
            )}

          </Fragment>
        )}
      </div>
      {hasNextPage &&
        <div className='flex justify-center' ref={refElement}>
          <button
            onClick={() => {
              fetchNextPage()
              scrolltobottom()
            }}
            className="bg-yellow-1 w-28 py-2 mt-4 rounded-md text-white text-bold hover:opacity-80"
          >
            Load More...
          </button>
        </div>
      }

      {modalOn && <ModalProduct setModal={setModal} dataModal={browseList} />}
    </div >
  )
}

export default Browse