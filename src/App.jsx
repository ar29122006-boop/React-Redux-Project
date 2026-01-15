import React, { useState } from 'react'
import { man, rafay } from './api/Mediaapi'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Collection from './pages/Collection'
import Navbar from './components/Navbar'
import {ToastContainer} from 'react-toastify';



const App = () => {
 
  return (
    <div className='min-h-screen w-full bg-gray-950 text-white'> 
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/collection' element={<Collection/>}></Route>
    </Routes>
     <ToastContainer />
    </div>
  )
}

export default App
{/* <button className='bg-blue-400 px-5 py-2 m-5' onClick={async()=> {
      const data = await man('dog')
      console.log(data.results);
     }
     }>Get Photo</button>
     <button className='bg-blue-400 px-5 py-2 m-5' onClick={async()=> {
      const data = await rafay('cat')
      console.log(data.videos);
     }
     }>Get Video</button> */}
