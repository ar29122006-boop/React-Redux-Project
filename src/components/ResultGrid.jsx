import React, { useEffect } from 'react'
import { rafay, man} from '../api/Mediaapi'
import { setQuery, setLoading, setResults, setError } from '../redux/features/SearchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'

const ResultGrid = () => {
    const dispatch = useDispatch()
    const {query, activeTab, results, loading, error} = useSelector((store)=> store.search)
    useEffect(() => {
        if (!query) return 
        const getdata = async ()=> {
       try {
        dispatch(setLoading())
         let data = []
        if(activeTab == 'photos'){
             let response = await man(query)
             data = response.results.map((item)=> ({
                id:item.id,
                type:"photo" ,
                title:item.alt_description,
                thumbnail:item.urls.small,
                src:item.urls.full,
                url:item.links.html
             }))
        }
       if (activeTab == 'videos') {
  let response = await rafay(query)

  data = response.videos.map((item) => {
    const mp4Video = item.video_files.find(
      (v) => v.file_type === "video/mp4"
    )

    return {
      id: item.id,
      type: "video",
      title: item.user?.name || "video",
      thumbnail: item.image,
      src: mp4Video?.link,
      url:item.url
    }
  })
}

        dispatch(setResults(data))
       } 
       catch (err) {
        dispatch(setError(err.message))
        
       }
        
    }
    getdata()
      
    }, [query, activeTab])
    if(error) return <h1>Error</h1>
    // if(loading) return <h1>Loading...</h1>
    
  return (
    <div className='flex w-full flex-wrap gap-5 overflow-auto px-5'>
     {results.map((item, idx) => {
        return <div key={idx}>
            <ResultCard item={item}/>
        </div>
     })}
    </div>
  )
}

export default ResultGrid
