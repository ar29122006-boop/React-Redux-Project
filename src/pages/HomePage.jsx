import React from 'react'
import Search from '../components/Search'
import ResultGrid from '../components/ResultGrid'
import Tabs from '../components/Tabs'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const {query} = useSelector((store)=> store.search)
  return (
    <div>

  <Search />

  {query !== "" && (
    <div className="mt-6">
      <Tabs />
      <ResultGrid />
    </div>
  )}
</div>

  )
}

export default HomePage
