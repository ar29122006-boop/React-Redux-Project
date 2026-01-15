import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/SearchSlice'

const Search = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
  return (
    <div>
      <form
      onSubmit={(e)=> {e.preventDefault(); dispatch(setQuery(text))
        setText('')
       }}
className="p-10 flex gap-5 
bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-950 
border-t border-purple-500/30"




>



        <input 
        value={text}
        onChange={(e)=> {setText(e.target.value)}}
        className='w-full border-2 outline-none px-4 rounded text-xl py-2'
        required
         type="text" placeholder='Search anything...' />
        <button className='active:scale-95 cursor-pointer border-2 outline-none px-4 rounded text-xl py-2'>Search</button>
      </form>
    </div>
  )
}

export default Search
