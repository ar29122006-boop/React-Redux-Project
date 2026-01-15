import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection } from '../redux/features/CollectionSlice'

const Collection = () => {
  const collection = useSelector(state => state.collection.items)
  const dispatch = useDispatch()
  const clear = () => {
    dispatch(clearCollection())

  }
  return (
    <div className='overflow-auto px-5 py-6'>
     {collection.length>0 ?  <div className='flex justify-between mb-6'>
        <h2 className='text-3xl font-bold'>Your Collection</h2>
        <button
        onClick={() => {
          clear()

        } }
        className='bg-red-600 active:scale-95 text-base transition font-medium cursor-pointer px-5 py-2 rounded'>Clear Collection</button>

      </div> : <h2 className='text-5xl font-bold
       py-10 text-center text-gray-300 '>No Collection</h2> }
      <div className='flex w-full flex-wrap gap-5'>
      {collection.map((item, idx)=> {
        return <div key={idx}>
          <CollectionCard item={item}/>
        </div>
      })}
     
    </div>
    </div>
  )
}

export default Collection
