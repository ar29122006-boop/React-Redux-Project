import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCollection, removeToast } from '../redux/features/CollectionSlice';

const CollectionCard = ({item}) => {
    const dispatch = useDispatch()
    const remove = (item) => {
        dispatch(removeCollection(item.id))
        dispatch(removeToast())

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
        onClick={()=> {
            remove(item)
            
        }}
        className='bg-indigo-600 active:scale-95 px-3 py-1 rounded-full text-white cursor-pointer font-medium'>Remove</button>
      </div>
    </div>
  )
}

export default CollectionCard
