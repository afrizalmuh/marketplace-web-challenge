import React, { useState } from 'react'
import { BROWSE_LIST } from '../dummyData'
import starLogo from '../asset/star-logo.svg'
import SetModal from './SetModal'
const Browse = () => {

  const [modalOn, setModal] = useState(false)
  const [browseList, setBrowseList] = useState([])
  const saveData = (data) => {
    //console.log(data)
    setModal(true)
    setBrowseList([
      ...browseList,
      data
    ])
  }
  return (
    <div className='flex flex-row'>
      <div className='grid grid-cols-4 gap-10'>
        {BROWSE_LIST.map((item, key) =>
          <div key={key} className="cursor-pointer hover:scale-105 duration-700 hover:shadow-lg hover:duration-700" onClick={() => saveData(item)} >
            <img src={item.path} alt="" className='w-[300px] rounded-lg' />
            <div className='flex justify-center'>
              <div className='text-md w-4/5'>
                <h1 className='font-bold py-4'>{item.title}</h1>
                <h1>{item.price}</h1>
                <div className='flex justify-between py-4'>
                  <div className='flex text-yellow-1 space-x-2'>
                    <img src={starLogo} alt="" />
                    <h1>{item.rating}</h1>
                  </div>
                  <div className='text-[#757575]'>{`${item.sold} sold`}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {modalOn && <SetModal setModal={setModal} dataModal={browseList} />}
    </div>
  )
}

export default Browse