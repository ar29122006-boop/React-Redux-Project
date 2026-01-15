import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, addToast } from '../redux/features/CollectionSlice'

const ResultCard = ({item}) => {
    const dispatch = useDispatch()
    const handlecollection = (item)=> {
        dispatch(addCollection(item))
        dispatch(addToast())
    }
  return (
    <div className='w-[18vw] h-80 relative bg-white rounded-xl overflow-hidden'> 
    <a target='_blank' href= {item.url} className='h-full'>
    {item.type == "photo"?<img className='h-full w-full object-cover object-center' src={item.src} alt="" />:""}
    {item.type == "video"?<video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video>:""}
    </a>
      <div id='bottom' className='text-white flex justify-between items-center w-full px-3 py-5 bottom-0 absolute'>
        <h2 className='font-semibold text-lg capitalize h-14 overflow-hidden'>{item.title}</h2>
        <button
        onClick={()=> {handlecollection(item)}}
        className='bg-indigo-600 active:scale-95 px-3 py-1 rounded-full text-white cursor-pointer font-medium'>Save</button>
      </div>
    </div>
  )
}

export default ResultCard
