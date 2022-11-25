import React, { useState, useEffect } from 'react'
import { useInfiniteQuery, useQuery, useQueryClient } from "react-query"
import { BROWSE_LIST } from '../dummyData'
import { BASE_URL } from "../api"
import starLogo from '../asset/star-logo.svg'
import SetModal from './SetModal'
const Browse = () => {

  const [modalOn, setModal] = useState(false)
  const [browseList, setBrowseList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [dataProduct, setDataProduct] = useState([])

  const saveData = (data) => {
    //console.log(data)
    setModal(true)
    setBrowseList([
      ...browseList,
      data
    ])
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

  const barearToken = JSON.parse(localStorage.getItem('token'))

  const fetchProduct = async (barearToken) => {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + barearToken
      }
    }
    const req = await fetch(`${BASE_URL}/products?page=2`, config)
    const data = await req.json()
    //console.log(data)
    // setCurrentPage(pageParam || 1)
    return data
  }

  const queryClient = useQueryClient()

  const { data, isLoading, isError, isFetching, isSuccess } = useQuery("product", () => fetchProduct(barearToken))



  // const {
  //   isLoading,
  //   isError,
  //   error,
  //   data,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetching,
  //   isFetchingNextPage
  // } = useInfiniteQuery(['colors'], fetchProduct, {
  //   getNextPageParam: (lastPage, allPages) => {
  //     if (allPages.length < 20) {
  //       return lastPage.length + 1
  //     } else {
  //       return undefined
  //     }
  //   }
  // })

  // if (isLoading) {
  //   return <h2>Loading...</h2>
  // }

  // if (isError) {
  //   return <h2>{error.message}</h2>
  // }

  // useEffect(() => {
  //   const barearToken = JSON.parse(localStorage.getItem('token'))
  //   fetchProduct(barearToken)

  // }, [])

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

    <div className='flex'>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10'>
        {data?.data?.data.map((item, key) =>
          <div key={key} className="cursor-pointer hover:scale-105 duration-700 hover:shadow-lg hover:duration-700" onClick={() => saveData(item)} >
            <img src={item.img_url} alt="" className='rounded-lg w-full' />
            <div className='flex justify-center'>
              <div className='text-md w-4/5'>
                <h1 className='font-bold py-4'>{item.name}</h1>
                <h1>Rp{item.price}</h1>
              </div>
            </div>
          </div>
        )}
        {/* <div className='flex justify-center'>
          <button onClick={() => { fetchNextPage() }} className='bg-red-100 p-2 rounded-full'>
            Load more..
          </button>
        </div> */}
      </div>
      {modalOn && <SetModal setModal={setModal} dataModal={browseList} />}
    </div>
  )
}

export default Browse